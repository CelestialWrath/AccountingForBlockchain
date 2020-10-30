var abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "accountIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "inventoryIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newAccountType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "newAccountName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "newCode",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "newDescription",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "newAccountValueType",
        "type": "uint256"
      }
    ],
    "name": "registerAccount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getAccountType",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getAccountDescription",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getAccountValue",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      },
      {
        "internalType": "int256",
        "name": "amount",
        "type": "int256"
      },
      {
        "internalType": "uint256",
        "name": "drcr",
        "type": "uint256"
      }
    ],
    "name": "changeAccountValue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getAccountName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAccounts",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newInventoryName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "newQuantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newInventoryNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newSalesPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newPurchasePrice",
        "type": "uint256"
      }
    ],
    "name": "registerInventory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newQuantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newSalesPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newPurchasePrice",
        "type": "uint256"
      }
    ],
    "name": "updateInventory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getPurchasePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getSalesPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getInventoryNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getInventoryQuantity",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "code",
        "type": "uint256"
      }
    ],
    "name": "getInventoryName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getInventories",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newMessage",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];