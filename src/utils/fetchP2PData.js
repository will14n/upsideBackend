const https = require("https");
const { MongoClient } = require('mongodb');

function fetchP2PData(
  page = 1,
  fiat = "BRL",
  tradeType = "SELL",
  asset = "USDT",
  payTypes = [],
  collection = "usdtBuy",
  transAmount = 0
) {
  return new Promise((resolve, reject) => {
    const baseObj = {
      page,
      rows: 20,
      publisherType: "merchant",
      asset,
      tradeType,
      fiat,
      payTypes,
      collection,
      transAmount
    };
    // console.log(baseObj)
    const uri = "mongodb+srv://willianf4m:Silveira1@db.ywxxtc9.mongodb.net/?retryWrites=true&w=majority";
    const stringData = JSON.stringify(baseObj);
    const options = {
      hostname: "p2p.binance.com",
      port: 443,
      path: "/bapi/c2c/v2/friendly/c2c/adv/search",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": stringData.length,
        "Access-Control-Allow-Origin": "*"
      },
    };

    const req = https.request(options, (res) => {
      let output = "";
      let accName = "UpsideCripto";
      res.on("data", (d) => {
        output += d.toString().replaceAll('.000', '.0');
        // console.log("aqui",JSON.parse(output))
      });

      res.on("end", () => {
        try {
          let jsonOuput = "";
          if (output) {
            jsonOuput = JSON.parse(output);
          }
          // console.log(jsonOuput.data)
          // console.log(collection)
          async function con() {
            let idx = false;
            for( var i = 0, len = jsonOuput.data.length; i < len; i++ ) {
              // console.log(jsonOuput.data[i].advertiser.nickName)
              // if(jsonOuput.data[i].advertiser.nickName === 'UpsideCript') {
              if(jsonOuput.data[i].advertiser.nickName == accName) {
                idx = i-1;
                break;
              }
            }
            const client = new MongoClient(uri);
            const connection = await client.connect(uri);
            
            // console.log(jsonOuput.data[idx], "==>>")
            // if(idx > 0) {
              // let query = await connection.db("binance").collection(collection).find({}, {sort: {}, skip: parseInt(idx), limit: 1}).toArray();
              // console.log(query[0].advertiser.nickName, idx, query[0].adv.asset)
              // if(query[0].advertiser.nickName != accName) {
                await connection.db("binance").collection(collection).deleteMany();
                await connection.db("binance").collection(collection).insertMany(jsonOuput.data);  
              // }
            // }
            // query.each(function(err, item) {
            //   console.log(item)
            // });
            // console.log(result, "==>>")
            // await connection.db("binance").collection(collection).deleteMany();
            // await connection.db("binance").collection(collection).insertMany(jsonOuput.data);
            // await connection.db("binance").collection(collection).aggregate(
            //   [ {$project:{minSingleTransAmount: { $convert: {input: "$minSingleTransAmount",to: "int"} }}} 
            // ]);
            await connection.close();
          }
          con();

          resolve(jsonOuput);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(stringData);
    req.end();
  });

}

module.exports = fetchP2PData;
