export const CONTRACT_ADDRESSES = {
  FIVE_FACTION: "0xC51601dde25775bA2740EE14D633FA54e12Ef6C7" as const,
  MOCK_USDC: "0x787c8616d9b8Ccdca3B2b930183813828291dA9c" as const,
  MOCK_DEFI: "0x5644F393a2480BE5E63731C30fCa81F9e80277a7" as const,
} as const;

export const NETWORK_CONFIG = {
  chainId: 421614,
  chainName: "Arbitrum Sepolia",
  rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
  blockExplorer: "https://sepolia.arbiscan.io",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
} as const;

export const FIVE_FACTION_ADDRESS = CONTRACT_ADDRESSES.FIVE_FACTION;
export const MOCK_USDC_ADDRESS = CONTRACT_ADDRESSES.MOCK_USDC;
export const MOCK_DEFI_ADDRESS = CONTRACT_ADDRESSES.MOCK_DEFI;
