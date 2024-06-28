const { ethers } = require('ethers');
const fs = require('fs');

// Number of wallets to generate
const NUM_WALLETS = 2;

const createWallets = () => {
    let wallets = [];
    for (let i = 0; i < NUM_WALLETS; i++) {
        // Create a random wallet
        const wallet = ethers.Wallet.createRandom();
        
        wallets.push({
            address: wallet.address,
            mnemonic: wallet.mnemonic.phrase
        });
    }
    return wallets;
};

// Generate wallets
const wallets = createWallets();

// Save wallets to a JSON file
fs.writeFileSync('wallets.json', JSON.stringify(wallets, null, 4));

console.log(`Generated ${NUM_WALLETS} wallets and saved to wallets.json`);
