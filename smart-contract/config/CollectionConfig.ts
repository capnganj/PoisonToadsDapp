import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet, maticTestnet, maticMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: maticTestnet,
  mainnet: maticMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PoisonToads',
  tokenName: 'Poison Toads',
  tokenSymbol: 'PSNTDS',
  hiddenMetadataUri: 'ipfs://QmRp9XNPkwDqA5iCggF3E81cvWpwofeEUyupkBecs51P62/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0xe6bda205de2f968271166C4b2650DefB38895De1",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
