const hre = require("hardhat");

async function main() {
  const contract_addr = await hre.ethers.deployContract("SuperIronBatman");
  console.log("Contract SuperIronBatman:", contract_addr.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
