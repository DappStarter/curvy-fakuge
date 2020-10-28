require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture stool cost punch provide gown light army gentle'; 
let testAccounts = [
"0x3a8492396c92adbf20323ae0355c9a48ed78b5099b8dc2420010200572bc0662",
"0x05a1d809d5406f2d49f2b4d588f0e78689991c1c28654245c87d6462844f71db",
"0x3459791a01e1608a7bbd31384320a20ad24d4a8b95011624fc60676c6dc11f32",
"0x2d32564d0e1072c69a708ef073d8cfffad80b61b851ac89b99b9101355856279",
"0x121ec0d3cffe7328a5647188694cf4df2636079c66c3925520f097ef7e36b192",
"0xe62ae7fec21507ded229b0f1128e5f1055b053ffa949f71fbfe48ae39f707ab1",
"0x72496961dbb3a4808cc42ccf8c0611f25a06fcdcbf0fc454f10fa971d5eb3064",
"0x48b5625bc0e0f480c1e7eb9b3928b7cf169db9e30c40aa1e9053ed10e9df8dd8",
"0x73c13291a05135ae4b8c929a9762478708e40dc1bdc8a0750143622bfacbdf73",
"0x77f4e9c6573c6a4b98531d1095fc864b48ace280314d6143cce6471956c336f0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
