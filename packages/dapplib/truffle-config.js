require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain hospital hunt hen flock sunset'; 
let testAccounts = [
"0xc9f5c4654f683a4390adaea1df9830d53293d088b9ce3f7ec655f228b3271052",
"0x3a0a34c2d0d703020e09928907dfd673c79bd0c4abc25bd7251dfcdf8c6286be",
"0xc5663afd97d4d28556f9b88b9dc179726550e251d00f607f444212f096c76ce8",
"0x94688a448e8db788206ae070ab20f1ad8c088af11f585f83bbd5d0aac3d9d895",
"0x8d539210ac209ddeedd91652ab97170a50638c85229ad91a757f8c179ee9514f",
"0x64b9fa310dc2b5d8370d268aead7413fa593bf20df94ea772012ed4af5782483",
"0x4f9cb0fc65d5bcd76dbbfc2e6a46af42ffa584942027a8c74ee8feda8943aa33",
"0xc5d9c84ef1fe9e05bdd961f0b30a1e0650e641f89424a730708b2ec163fcf772",
"0x8399b94a28a0019562c24e8901e28967688d042bfa25f6d4378c11e03a937edf",
"0xfa0a2fe2c1fb02f16f6106c0b0a6a80b7007eed2db033b3f8333e5703a61848c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

