export const CONTRACT_ADDRESSES = {
  unit: "0xd979550379833ab83148903BDDa582C972271fFD",
  rig: "0x368E56f41DcbD8CfFcE5618F8DE74e8CB135d721",
  multicall: "0x5417d71D359445355fb98D8a58eeA4FEA1Dc872e",
  weth: "0x4200000000000000000000000000000000000006",
  faction: "0x0000000000000000000000000000000000000000",
} as const;

export const MULTICALL_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "faction",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epochId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "mine",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRig",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ups",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unitPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unitBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ethBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "wethBalance",
            type: "uint256",
          },
        ],
        internalType: "struct Multicall.RigState",
        name: "state",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSlot",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "epochId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ups",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplierTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mined",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rig",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct Multicall.SlotState",
        name: "state",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "getSlots",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "epochId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ups",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "multiplierTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mined",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "rig",
            type: "address",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct Multicall.SlotState[]",
        name: "states",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntropyFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAuction",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "epochId",
            type: "uint16",
          },
          {
            internalType: "uint192",
            name: "initPrice",
            type: "uint192",
          },
          {
            internalType: "uint40",
            name: "startTime",
            type: "uint40",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymentTokenPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "wethAccumulated",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "wethBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "paymentTokenBalance",
            type: "uint256",
          },
        ],
        internalType: "struct Multicall.AuctionState",
        name: "state",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPaymentTokenAmount",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
