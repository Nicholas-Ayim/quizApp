const mongoose = require("mongoose")
const express = require("express")
const UserRegistration = require("../backend/quizRegistration/quizRegister")

const cors = require("cors")
const http = require("http")
 require("dotenv").config()

app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors({
       origin:["https://quiz-app-cfyz.vercel.app"],
        methods: ["GET","POST"],
        credentials:true
}))
app.use(express.json())

// app.get("/", async (req, res) => {
//      res.json("a new registration in process")
//     try {
//         const { name, educationLevel } = req.body;
//         const newRegistration = await UserRegistration.create({
//             name,
//             educationLevel,
//         });
//         res.json('successfully registered', newRegistration);
//         console.log('registered successfully');
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal Server Error' }); // Add an error response
//     }
//   })

app.get("/",(req,res)=>{
  res.json('hello')
})

console.log('deployed!!!')
const server = http.createServer(app)

const { Server } = require("socket.io")

const io =  new Server(server,{
    cors:{
        origin:["https://quiz-app-cfyz.vercel.app"],
        methods: ["GET","POST"],
        credentials:true

    }
})



io.on("connection",(socket)=>{
    console.log('working',socket.id)
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nayy:Newtonfaculty2000@cluster0.drescgl.mongodb.net/Quiz?retryWrites=true&w=majority"
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


// const quizRoutes = require("./registrationRoutes/quizRoutes")
// app.use("/",quizRoutes)


const PORT = process.env.PORT
server.listen(PORT,()=>{
    console.log(`connected to PORT ${PORT}`)
})          