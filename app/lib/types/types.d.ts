import BigNumber from "bignumber.js";

export type RawMetadata = {
  id: number;
  image: string;
  name: string;
};

export type RaffleSponsor = {
  sponsor: `0x${string}`;
  tokenId: BigNumber;
};

export type MintEntry = {
  user: `0x${string}`;
  weight: BigNumber;
};
export type Mint = {
  burned: string;
  mints: BigNumber;
  rewards: strings;
  settledAt: BigNumber;
  startedAt: BigNumber;
  tokenId: BigNumber;
  winner: `0x${string}`;
};

export type Raffle = {
  startedAt: BigNumber;
  settledAt: BigNumber;
  winner: `0x${string}`;
  sponsor: RaffleSponsor;
};

export type CheckIn = {
  lastCheckin: BigNumber;
  streak: number;
  count: number;
};
