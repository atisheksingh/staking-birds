const { Web3 } = require('web3');
const web3 = new Web3(window.ethereum);
const web31 = new Web3("https://bsc-testnet.publicnode.com");

var ercSWL = require('./contract/ercSWL.json');
var ercUSDC = require('./contract/ercUSDC.json');

var ercSWLContract = new web31.eth.Contract(ercSWL.abi, ercSWL.contractAddress);
var ercUSDCContract = new web3.eth.Contract(ercUSDC.abi, ercUSDC.contractAddress);

var ownerWallet = "0xABcB8563F057432FDDD9299a4ebdE9bb3cd9b257";
var ownerPrivateKey = "95713e5891bc30bca3b2174ce662e50c52167f3b5cb231df93e433e116a10284";
const decimals = 18;

exports.tranferToken = (amount, accountAddress, customNonce) => {

    const weiAmount = web3.utils.toWei(amount, 'ether'); // USDC Input Value

    ercUSDCContract.methods.transfer(ownerWallet, weiAmount).send({
        from: accountAddress.toString(),
        gas: 200000, // Adjust the gas limit as needed
    }).on('transactionHash', async (hash) => {
        console.log('Transaction hash:', hash);

        // const senderBalance = await ercSWLContract.methods.balanceOf(ownerWallet).call();
        const amountToSend = BigInt(amount) * (BigInt(10) ** BigInt(decimals));
        // const amountToSend = bigInt(amount).multiply(bigInt(10).pow(decimals)).toString();
        // if (BigInt(senderBalance) < amountToSend) {
        //     console.log("Insufficent Balance");
        //     return;
        // }

        console.log("amountToSend: ", amountToSend, weiAmount);
        const data = ercSWLContract.methods.transfer(accountAddress.toString(), BigInt(weiAmount).toString()).encodeABI();
        const gas = await web3.eth.estimateGas({ to: ownerWallet, data: data, from: accountAddress });
        const maxFeePerGas = "20000000000000"
        const maxPriorityFeePerGas = "10000000000000";
        const nonce = await web3.eth.getTransactionCount(accountAddress);

        // const nonce = customNonce !== undefined ? customNonce : await web3.eth.getTransactionCount(ownerWallet);
        console.log('Nonce:', nonce);

        // Build the transaction object
        const txObject = {
            to: ercSWL.contractAddress,
            maxFeePerGas: maxFeePerGas,
            maxPriorityFeePerGas: maxPriorityFeePerGas,
            nonce: nonce,
            gas: gas,
            data: data,
        };

        // Sign the transaction with the private key
        const signedTx = await web3.eth.accounts.signTransaction(txObject, ownerPrivateKey);

        // Send the signed transaction
        const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log('Transaction Receipt:', txReceipt);
        console.log('Transaction Hash:', txReceipt.transactionHash);
    });
}