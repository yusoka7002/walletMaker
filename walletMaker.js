const Web3 = require('web3');
const fs = require('fs');

const web3 = new Web3('https://mainnet.infura.io/v3/5ec87777b5284787be325f17b6ef39fc');

const NUM_ACCOUNTS = 5;

const createAccounts = async (numAccounts) => {
    let accounts = [];
    for (let i = 0; i < numAccounts; i++) {
        const account = web3.eth.accounts.create();
        accounts.push({
            address: account.address,
            privateKey: account.privateKey
        });
    }
    return accounts;
};

createAccounts(NUM_ACCOUNTS).then(accounts => {
    fs.writeFileSync('accounts.json', JSON.stringify(accounts, null, 4));
    console.log(`Generated ${NUM_ACCOUNTS} accounts and saved to accounts.json`);
});
