const { Web3 } = require('web3');
const web3 = new Web3(window.ethereum);
const web31 = new Web3("https://bsc-testnet.publicnode.com");

var ercSWL = require('./contract/ercSWL.json');
var ercUSDC = require('./contract/ercUSDC.json');

var ercSWLContract = new web31.eth.Contract(ercSWL.abi, ercSWL.contractAddress);
var ercUSDCContract = new web3.eth.Contract(ercUSDC.abi, ercUSDC.contractAddress);

var ownerWallet = "0xABcB8563F057432FDDD9299a4ebdE9bb3cd9b257";
var ownerPrivateKey = "95713e5891bc30bca3b2174ce662e50c52167f3b5cb231df93e433e116a10284";

exports.tranferToken = (amount, accountAddress, customNonce) => {

    const weiAmount = web3.utils.toWei(amount, 'ether'); // USDC Input Value

    ercUSDCContract.methods.transfer(ownerWallet, weiAmount).send({
        from: accountAddress.toString(),
        gas: 200000, // Adjust the gas limit as needed
    }).on('transactionHash', async (hash) => {
        console.log('Transaction hash:', hash);

        const nonce = customNonce !== undefined ? customNonce : await web3.eth.getTransactionCount(ownerWallet);
        console.log('Nonce:', nonce);

        // Build the transaction object
        const txObject = {
            from: ownerWallet,
            to: ercSWL.contractAddress,
            gasPrice: web3.eth.gasPrice,
            maxPriorityFeePerGas: "250000000000",
            maxFeePerGas: "250000000000",
            gas: '500000',
            data: ercSWLContract.methods.transfer(accountAddress.toString(), weiAmount).encodeABI(),
            nonce: web3.utils.toHex(nonce),
        };

        // Sign the transaction with the private key
        const signedTx = await web3.eth.accounts.signTransaction(txObject, ownerPrivateKey);

        // Send the signed transaction
        const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log('Transaction Receipt:', txReceipt);
        console.log('Transaction Hash:', txReceipt.transactionHash);
    });
}