const { Web3 } = require('web3');
const web3 = new Web3(window.ethereum);

var contract;
var myContract;

exports.stakeToken = (amount, accountAddress, days) => {
    console.log(amount, accountAddress, days);
    if (days == 21) {
        contract = require('./contract/stakeContract21Days.json');
        myContract = new web3.eth.Contract(contract.abi, contract.contractAddress);
    } else if (days == 60) {
        contract = require('./contract/stakeContract60Days.json');
        myContract = new web3.eth.Contract(contract.abi, contract.contractAddress);
    } else if (days == 90) {
        contract = require('./contract/stakeContract90Days.json');
        myContract = new web3.eth.Contract(contract.abi, contract.contractAddress);
    } else if (days == 180) {
        contract = require('./contract/stakeContract180Days.json');
        myContract = new web3.eth.Contract(contract.abi, contract.contractAddress);
    }

    const weiAmount = web3.utils.toWei(amount, 'ether');
    myContract.methods.lockStakingTokenToParticipate(weiAmount).send({
        from: accountAddress.toString(),
        gas: 200000, // Adjust the gas limit as needed
    }).on('transactionHash', (hash) => {
        console.log('Transaction hash:', hash);
        window.alert("Successful transaction hash:", hash);
    }).on('confirmation', (confirmationNumber, receipt) => {
        console.log('Confirmation number:', confirmationNumber);
        console.log('Receipt:', receipt);
    }).on('error', (error) => {
        console.error('Error:', error);
    });

}