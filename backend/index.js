const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const http = require("http")
 require("dotenv").config()

app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors({
       origin:["https://deploy-mern-1whq.vercel.app"],
        methods: ["GET","POST"],
        credentials:true
}))
app.use(express.json())
app.get("/",(req,res)=>{
  res.json('hello')
})
const server = http.createServer(app)

const { Server } = require("socket.io")

const io =  new Server(server,{
    cors:{
       

    }
})



io.on("connection",(socket)=>{
    console.log('working',socket.id)
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI
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
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const quizRoutes = require("./registrationRoutes/quizRoutes")
app.use("/quiz",quizRoutes)


const PORT = process.env.PORT
server.listen(PORT,()=>{
    console.log(`connected to PORT ${PORT}`)
})           