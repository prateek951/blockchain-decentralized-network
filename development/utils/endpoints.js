module.exports = {
  END_POINTS: {
    viewBlockchain: "/blockchain",
    pertainingToTransaction: "/transaction",
    mine: "/mine",
    registerAndBroadcast: "/register-and-broadcast-node",
    registerNode: "/register-node",
    registerNodeBulk: "/register-nodes-bulk",
    receiveNewBlock: "/receive-new-block",
    checkConsensus: "/consensus",
    getBlockByHash: "/block/:blockHash",
    getTransactionById : "/transaction/:transactionId",
    getTransactionInfoByAddress : "/address/:address"
  }
};
