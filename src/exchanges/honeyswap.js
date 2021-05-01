module.exports = {
  name: 'Honeyswap',
  contracts: [
    {
      name: 'factory',
      abi: [{"type":"constructor","stateMutability":"nonpayable","payable":false,"inputs":[{"type":"address","name":"_feeToSetter","internalType":"address"}]},{"type":"event","name":"PairCreated","inputs":[{"type":"address","name":"token0","internalType":"address","indexed":true},{"type":"address","name":"token1","internalType":"address","indexed":true},{"type":"address","name":"pair","internalType":"address","indexed":false},{"type":"uint256","name":"","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"allPairs","inputs":[{"type":"uint256","name":"","internalType":"uint256"}],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allPairsLength","inputs":[],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[{"type":"address","name":"pair","internalType":"address"}],"name":"createPair","inputs":[{"type":"address","name":"tokenA","internalType":"address"},{"type":"address","name":"tokenB","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeTo","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"feeToSetter","inputs":[],"constant":true},{"type":"function","stateMutability":"view","payable":false,"outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getPair","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}],"constant":true},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setFeeTo","inputs":[{"type":"address","name":"_feeTo","internalType":"address"}],"constant":false},{"type":"function","stateMutability":"nonpayable","payable":false,"outputs":[],"name":"setFeeToSetter","inputs":[{"type":"address","name":"_feeToSetter","internalType":"address"}],"constant":false}],
      address: '0xa818b4f111ccac7aa31d0bcc0806d64f2e0737d7'
    },
    {
      name: 'routerV2',
      abi: [
        {
          "inputs": [],
          "name": "WETH",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountADesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenDesired",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "addLiquidityETH",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "factory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
            }
          ],
          "name": "getAmountIn",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveOut",
              "type": "uint256"
            }
          ],
          "name": "getAmountOut",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            }
          ],
          "name": "getAmountsIn",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            }
          ],
          "name": "getAmountsOut",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveB",
              "type": "uint256"
            }
          ],
          "name": "quote",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidityETH",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityETHWithPermit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountToken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountTokenMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountETHMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountETH",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "liquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountAMin",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountBMin",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "approveMax",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "removeLiquidityWithPermit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountB",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapETHForExactTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactETHForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForETH",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOutMin",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountInMax",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapTokensForExactETH",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountInMax",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            }
          ],
          "name": "swapTokensForExactTokens",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      address: '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77'
    }
  ]
}