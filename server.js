
const { MongoClient, ServerApiVersion } = require('mongodb');
const env = require("dotenv").config()
const uri = `mongodb+srv://CamiloMonsalve:${process.env.PASSWORD}@cluster0.35bdrwy.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("ListaDeTareas").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
}
}
async function crear(){
    await client.connect (err => {
        if (err){
            console.log("Ocurrio un error")
        }
        console.log("Conección exitosa")
    })
    const tarea = {
        descrition: "sacar al perro",
        realizada: false,
    }
    const db = await client.db("ListaDeTareas");
    const collection = await db.collection("Tareas");
    collection.insertOne(tarea, (err, res) =>{
        if (err){
            console.log(err)
            return
        } else {
            console.log("el documento se insertó correctamente")
        }
    })

    
} 

crear()




// run().catch(console.dir);
// run()