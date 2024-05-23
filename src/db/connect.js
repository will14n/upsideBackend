const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://willianf4m:Silveira1@db.ywxxtc9.mongodb.net/?retryWrites=true&w=majority&directConnection=true";
    
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri, {
        connectTimeoutMS: 60000,
        serverSelectionTimeoutMS: 60000
    });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await create(client,{"fiat": "brl"})
    }
    catch(err) {
        console.log(err)
    } finally {
        // Close the connection to the MongoDB cluster
       await client.close();
    }
}

main().catch(console.error);
