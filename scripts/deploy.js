/**
 * ------------------------------
 * Arquivo de deploy de contratos
 * ------------------------------
 * @author codethebasics
 */
const { ethers } = require('hardhat');
const hardhat = require('hardhat');

async function main() {
    // Obtendo carteiras de teste
    const [owner] = await ethers.getSigners();

    console.log();
    console.log('--------');
    console.log('CRDToken');
    console.log('--------');

    // Parametros do construtor da token CRD
    const tokenName = 'CRDToken';
    const tokenSymbol = 'CRD';
    const tokenDecimals = 18;
    const tokenInitialSupply = '1000000000000';
    const tokenOwnerAddress = owner.address;

    console.log('Name ..............:', tokenName);
    console.log('Symbol ............:', tokenSymbol);
    console.log('Decimals...........:', tokenDecimals);
    console.log('Supply ............:', tokenInitialSupply);
    console.log('Owner .............:', tokenOwnerAddress);
    console.log();

    // Realizando o deploy da token
    const CRDToken = await hardhat.ethers.getContractFactory('CRDToken');
    const crdToken = await CRDToken.deploy(
        tokenName,
        tokenSymbol,
        tokenDecimals,
        tokenInitialSupply,
        tokenOwnerAddress
    );

    // Aguardando o deploy ser efetuado
    await crdToken.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
