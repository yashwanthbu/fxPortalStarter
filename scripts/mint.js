// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

const tokenAddress = "0x7161CD364D9CA0E088b5e8fA9DC782d54af9d289";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x7B8B1d23a5BE13aE858e62c2ef5f9263665b89aD";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    const tx = await token.mint(walletAddress, 1000);
    await tx.wait();

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });