# PoisonToadsDapp
Minting dapp for the Poison Toads NFT collection!

## instructions
This is based on the hashlips masterclass NFT collection youtube video, and the hashlips-labs nft collection v2 repo.  The Smart contract will be deployed using remix, and is copied in here only to make the dapp work.

### local dev
- install truffle globally
- run yarn inside of /smart-contract; then yarn run compile to compile the smart contract
- run yarn inside of /minting-dapp; then yarn dev-server to develop locally

### build and deploy
- switch setPublicPath setting in the webpack.config.js file
- yarn run build to build a production version inside of /minting-dapp/public
- copy everything from /minting-dapp/public to /docs (this is where gh-pages point to in the repo settings)
- manually add the /PoisonToadsDapp prefix to all img and asset links in the /docs file.  index.html and main.js
- push to main branch on github
