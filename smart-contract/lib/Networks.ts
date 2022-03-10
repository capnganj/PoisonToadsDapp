import NetworkConfigInterface from './NetworkConfigInterface';

export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 4,
  blockExplorer:{
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://rinkeby.etherscan.io/address/${contractAddress}`,
  },
}

export const ethereumMainnet: NetworkConfigInterface = {
  chainId: 1,
  blockExplorer: {
    name: 'Etherscan',
    generateContractUrl: (contractAddress: string) => `https://etherscan.io/address/${contractAddress}`,
  },
}

export const maticTestnet: NetworkConfigInterface = {
  chainId: 80001,
  blockExplorer: {
    name: 'Polygonscan',
    generateContractUrl: (contractAddress: string) => `https://mumbai.polygonscan.com/address/${contractAddress}`,
  }
}

export const maticMainnet: NetworkConfigInterface = {
  chainId: 137,
  blockExplorer: {
    name: 'Polygonscan',
    generateContractUrl: (contractAddress: string) => `https://mumbai.polygonscan.com/address/${contractAddress}`,
  }
}
