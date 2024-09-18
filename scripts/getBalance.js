const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/SuperIronBatman.sol/SuperIronBatman.json");

const tokenAddress = "0xFD188a23489aB073C1E9C410bc3429CDc3a68d40";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xf80B938BEbCBf75ca937C3A2f45bA2194c360e01"; 
async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("My SuperBatIron Token Balance: " + await token.balanceOf(walletAddress) );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
