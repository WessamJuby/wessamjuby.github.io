//global variable shared among functions
const contractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
const myWalletAddress = "0x2623a6D3036E1f02a7c710C00cA3fE45CbacCf5E";

//etherscan api key
const etherscanApiKey = "R7GP4CB5HTMBQ1R6F9X53D3TPY2J7DJQQ8";

//mainnet infura web3
const infuraApiKey = "71180ef082ea48e28abc43c83f3a1256";
const providerUrl = "https://mainnet.infura.io/v3/";

async function getLatestBlockViaEtherscanAPI() {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&etherscanApiKey=${etherscanApiKey}`
    );
    const result = response.data.result;

    const latestBlock = parseInt(result, 16);

    return latestBlock;
  } catch (error) {
    console.error("Error getting latest block:", error);
  }
}

async function getUsdtBalanceEtherscanAPI(address) {
  try {
    const response = await axios.get(
      `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&apikey=${etherscanApiKey}`
    );

    return response.data.result;
  } catch (error) {
    console.error("Error fetching USDT balance:", error);
  }
}

async function getLatestBlockNumberViaWeb3JS() {
  try {
    const provider = new Web3.providers.HttpProvider(`${providerUrl}${infuraApiKey}`);
    const web3 = new Web3(provider);

    const latestBlock = await web3.eth.getBlockNumber();
    return latestBlock;
  } catch (error) {
    console.error("Error fetching latest block number:", error);
  }
}

async function getUsdtBalanceViaWeb3JS(address) {
  try {
    const provider = new Web3.providers.HttpProvider(`${providerUrl}${infuraApiKey}`);
    const web3 = new Web3(provider);

    const abi = [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "_upgradedAddress", type: "address" }],
        name: "deprecate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "_spender", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "deprecated",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "_evilUser", type: "address" }],
        name: "addBlackList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "_from", type: "address" },
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "upgradedAddress",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "balances",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "maximumFee",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "_totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "_maker", type: "address" }],
        name: "getBlackListStatus",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { name: "", type: "address" },
          { name: "", type: "address" },
        ],
        name: "allowed",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "who", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "getOwner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "_to", type: "address" },
          { name: "_value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          { name: "newBasisPoints", type: "uint256" },
          { name: "newMaxFee", type: "uint256" },
        ],
        name: "setParams",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "amount", type: "uint256" }],
        name: "issue",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "amount", type: "uint256" }],
        name: "redeem",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          { name: "_owner", type: "address" },
          { name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "basisPointsRate",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "isBlackListed",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "_clearedUser", type: "address" }],
        name: "removeBlackList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "MAX_UINT",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: false,
        inputs: [{ name: "_blackListedUser", type: "address" }],
        name: "destroyBlackFunds",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { name: "_initialSupply", type: "uint256" },
          { name: "_name", type: "string" },
          { name: "_symbol", type: "string" },
          { name: "_decimals", type: "uint256" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: "amount", type: "uint256" }],
        name: "Issue",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: "amount", type: "uint256" }],
        name: "Redeem",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: "newAddress", type: "address" }],
        name: "Deprecate",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "feeBasisPoints", type: "uint256" },
          { indexed: false, name: "maxFee", type: "uint256" },
        ],
        name: "Params",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: false, name: "_blackListedUser", type: "address" },
          { indexed: false, name: "_balance", type: "uint256" },
        ],
        name: "DestroyedBlackFunds",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: "_user", type: "address" }],
        name: "AddedBlackList",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: "_user", type: "address" }],
        name: "RemovedBlackList",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "owner", type: "address" },
          { indexed: true, name: "spender", type: "address" },
          { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: "from", type: "address" },
          { indexed: true, name: "to", type: "address" },
          { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
      },
      { anonymous: false, inputs: [], name: "Pause", type: "event" },
      { anonymous: false, inputs: [], name: "Unpause", type: "event" },
    ];
    const contract = new web3.eth.Contract(abi, contractAddress);

    const balance = await contract.methods.balanceOf(address).call();
    return String(balance);
  } catch (error) {
    console.error("Error fetching USDT balance:", error);
  }
}

async function main() {
  let latestBlock1 = await getLatestBlockViaEtherscanAPI();
  let latestBlock2 = await getLatestBlockNumberViaWeb3JS();
  let usdtBalance1 = await getUsdtBalanceEtherscanAPI(myWalletAddress);
  let usdtBalance2 = await getUsdtBalanceViaWeb3JS(myWalletAddress);

  const dataElement1 = document.getElementById("line1");
  const dataElement2 = document.getElementById("line2");
  const dataElement3 = document.getElementById("line3");
  const dataElement4 = document.getElementById("line4");

  dataElement1.textContent =
    "Latest Mainnet block via ethereumscan api is :" + String(latestBlock1);
  dataElement2.textContent =
    "Latest Mainnet block via mainnet.infura and web3.js is :" + latestBlock2;
  dataElement3.textContent =
    "USDT Balance for my wallet address via ethereumscan api is :" + usdtBalance1;
  dataElement4.textContent =
    "USDT Balance for my wallet address via mainnet.infura and web3.js is :" + usdtBalance2;
}

main();

const dataElement5 = document.getElementById("line5");
const dataElement6 = document.getElementById("line6");
const button = document.getElementById("submitButton");
const txtBox = document.getElementById("address");
button.addEventListener("click", async () => {
  let address = txtBox.value;
  console.log(address);
  let usdtBalance1 = await getUsdtBalanceEtherscanAPI(address);
  let usdtBalance2 = await getUsdtBalanceViaWeb3JS(address);
  dataElement5.textContent =
    "USDT Balance for my wallet address via ethereumscan api is :" + usdtBalance1;
  dataElement6.textContent =
    "USDT Balance for my wallet address via mainnet.infura and web3.js is :" + usdtBalance2;
});
