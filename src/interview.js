// const { hasUndefinedProp } = require("../src/utils/commandValidations.js");
const fetchP2PData = require("./utils/fetchP2PData.js");
// const QUESTIONS = require("./constants/questions.js");
const log = console.log;

const interview = async (input = null) => {
  let totalPrices = [];
  
  // const isInterview = hasUndefinedProp(input);

  // if (isInterview) {
  //   log(`I have a few questions`);
  // }

  const answers = input;

  // if (isInterview) {
  //   log(" ");
  // }

  // log(`Collecting data for you`);

  // log(`🔍  Fetching page 1`);

  const usdtBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    answers.ticker,
    answers.payTypes ? [answers.payTypes] : [],
    collection = "usdtBuy",
    transAmount = "150"
  );
  if (usdtBuy && usdtBuy.success) {
    log("Dados Compra USDT Atualizados")
  }

  const usdtSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    answers.ticker,
    answers.payTypes ? [answers.payTypes] : [],
    collection = "usdtSell",
    transAmount = "150"
  );
  if (usdtSell && usdtSell.success) {
    log("Dados Venda USDT Atualizados")
  }

  const btcBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "BTC",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "btcBuy"
  );
  if (btcBuy && btcBuy.success) {
    log("Dados Compra btc Atualizados")
  }

  const btcSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "BTC",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "btcSell"
  );
  if (btcSell && btcSell.success) {
    log("Dados Venda btc Atualizados")
  }

  // const busdBuy = await fetchP2PData(
  //   1,
  //   answers.fiat,
  //   tradeType = "BUY",
  //   "BUSD",
  //   answers.payTypes ? [answers.payTypes] : [],
  //   collection = "busdBuy"
  // );
  // if (busdBuy && busdBuy.success) {
  //   log("Dados Compra busd Atualizados")
  // }

  // const busdSell = await fetchP2PData(
  //   1,
  //   answers.fiat,
  //   "SELL",
  //   "BUSD",
  //   answers.payTypes ? [answers.payTypes] : [],
  //   collection = "busdSell"
  // );
  // if (busdSell && busdSell.success) {
  //   log("Dados Venda busd Atualizados")
  // }
  
  const usdcBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "USDC",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "usdcBuy"
  );
  if (usdcBuy && usdcBuy.success) {
    log("Dados Compra USDC Atualizados")
  }

  const usdcSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "USDC",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "usdcSell"
  );
  if (usdcSell && usdcSell.success) {
    log("Dados Venda USDC Atualizados")
  }

  const bnbBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "BNB",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "bnbBuy"
  );
  if (bnbBuy && bnbBuy.success) {
    log("Dados Compra bnb Atualizados")
  }

  const bnbSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "BNB",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "bnbSell"
  );
  if (bnbSell && bnbSell.success) {
    log("Dados Venda bnb Atualizados")
  }

  const ethBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "ETH",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "ethBuy"
  );
  if (ethBuy && ethBuy.success) {
    log("Dados Compra eth Atualizados")
  }

  const ethSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "ETH",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "ethSell"
  );
  if (ethSell && ethSell.success) {
    log("Dados Venda eth Atualizados")
  }
  
  const daiBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "DAI",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "daiBuy"
  );
  if (daiBuy && daiBuy.success) {
    log("Dados Compra dai Atualizados")
  }

  const daiSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "DAI",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "daiSell"
  );
  if (daiSell && daiSell.success) {
    log("Dados Venda dai Atualizados")
  }
  
  const brlBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "BRL",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "brlBuy"
  );
  if (brlBuy && brlBuy.success) {
    log("Dados Compra brl Atualizados")
  }

  const brlSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "BRL",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "brlSell"
  );
  if (brlSell && brlSell.success) {
    log("Dados Venda brl Atualizados")
  }
  
  const dogeBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "DOGE",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "dogeBuy"
  );
  if (dogeBuy && dogeBuy.success) {
    log("Dados Compra doge Atualizados")
  }

  const dogeSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "DOGE",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "dogeSell"
  );
  if (dogeSell && dogeSell.success) {
    log("Dados Venda doge Atualizados")
  }
  
  const fdusdBuy = await fetchP2PData(
    1,
    answers.fiat,
    tradeType = "BUY",
    "FDUSD",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "fdusdBuy"
  );
  if (fdusdBuy && fdusdBuy.success) {
    log("Dados Compra fdusd Atualizados")
  }

  const fdusdSell = await fetchP2PData(
    1,
    answers.fiat,
    "SELL",
    "FDUSD",
    answers.payTypes ? [answers.payTypes] : [],
    collection = "fdusdSell"
  );
  if (fdusdSell && fdusdSell.success) {
    log("Dados Venda fdusd Atualizados")
  }

  // const minimun = answers.operation === "SELL" ? totalPrices.length - 1 : 0;
  // const maximun = answers.operation === "SELL" ? 0 : totalPrices.length - 1;
  
  // log(
  //   `🔗  Transaction type ${answers.ticker} @ ${answers.fiat}`
  // );

  // log(
  //   `💰  ${totalPrices.length} "People offering" \n`
  // );

  log(
    `(⌥) Here I have the results`
  );

  // log(
  //   `📉  Minimum price 💵  
  //     ${totalPrices[minimun].toLocaleString()}
  //   `
  // );
};

module.exports = interview;
