const MongoClient = require('mongodb').MongoClient
async function run() {
  const url = 'mongodb+srv://willianf4m:Silveira1@db.ywxxtc9.mongodb.net/?retryWrites=true&w=majority'
  const dbName = 'binance'
  let db

  const client = new MongoClient(url);
  await client.connect();

  return client.db(dbName);
}

function selectCollection(database, collectionName) {

  return database.collection(collectionName);
}

async function insert(database, query) {
  try {
    const insertOneResult = database.insertOne(query);
    console.log(`${insertOneResult.insertedCount} documents successfully inserted.\n`);
    close();
    return insertOneResult;
  } catch (err) {
    return console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }
}

async function close() {
  await client.close();
}

const db = new Promise((resolve, reject) => {
  resolve("run");
});
// db = run();
console.log(db)
const coll = new Promise((resolve, reject) => {

  selectCollection(db, "usdt");
}
insert(coll, {fiat: "brl", crypto: "usdt"});