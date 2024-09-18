# ERC721A SuperIronBatman NFT from Sepolia to Amoy
SuperIronBatman is an NFT collection deployed on the Sepolia testnet and transferred to the Amoy testnet using FXPortal. This collection features a unique fusion of superheroes, combining elements of Superman, Batman, and Iron Man, with images generated using AI software - image creator and hosted on Pinata Cloud via IPFS.

## Prompt
The visual prompt for the collection is:

`Superman with a Batman mask fighting with Ironman.`

## Base URL
The metadata for each token is hosted on IPFS, using Pinata Cloud. The base URL for the images is:

`https://gateway.pinata.cloud/ipfs/QmXHX7P1XvvzGXcCfJsA4z73Nem2rAe5H3iS79MfR3pVuP`

## Contract Information
- Contract Name: SuperIronBatman
- Token Symbol: SBI
- Deployed On: Sepolia Testnet
- Transferred To: Amoy Testnet using FXPortal
- Minting Limit: Maximum of 5 NFTs can be minted
- ERC Standard: ERC721A

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network sepolia to deploy ERC721A contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network sepolia to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network sepolia to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network amoy to see the new polygon balance


## Authors 

Name -Yashwanth BU
Email - yashwanthbuu@gmail.com

## License

This project is licensed under the [MIT] License .
