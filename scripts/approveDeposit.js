const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/SuperIronBatman.sol/SuperIronBatman.json");
require("dotenv").config();

async function main() {
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = wallet.connect(provider);
  const superironbatman_NFT = await ethers.getContractFactory("SuperIronBatman", signer);
  const nft = superironbatman_NFT.attach("0xfFF16e281092d3550b890157E433005e98F844C3");
  const fxRootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
  const fxRoot = new ethers.Contract(fxRootAddress, FXRootContractAbi, signer);

  const Tokenids = [0, 1, 2, 3, 4];
  const approveTx = await nft.setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approved all the nfts");

  for (const tokenId of Tokenids) {
    const depositTx = await fxRoot.deposit(nft.address, wallet.address, tokenId, "0x6566");
    await depositTx.wait();
  }

  console.log("Transferred successfully");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
