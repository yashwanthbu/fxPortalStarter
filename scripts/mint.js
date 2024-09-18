const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);
  const contractAddress = "0xfFF16e281092d3550b890157E433005e98F844C3";

  const SuperIronBatman = await ethers.getContractFactory("SuperIronBatman", signer);
  const SuperIronBatman_contract = await SuperIronBatman.attach(contractAddress);
  await SuperIronBatman_contract.mint(5);
  console.log("Minted 5 superIronBatman!");
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
