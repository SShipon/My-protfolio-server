const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId, } = require('mongodb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


// const corsConfig = {
//   origin: '',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE']
// }
// app.use(cors(corsConfig))
// app.options("", cors(corsConfig))

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// uri link 
const uri = `mongodb+srv://${process.env.DATABASE}:${process.env.DB_PASSWORD}@cluster0.u675lb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting)
    await client.connect();
    //sporting  all collection all api section
    const portfolioCollection = client.db('portfolio').collection('projects');
    const blogsCollection = client.db('portfolio').collection('blogs');
   
    // Sporting get data client site
    app.get('/project', async (req, res) => {
      const query =  {};
      const cursor = portfolioCollection.find(query)
      const result = await cursor.toArray() 
      res.send(result);
    });

    app.post('/project', async (req, res) => {
      try {
        const sport = req.body;
        sport.isFeatured = true;  // Ensure isFeatured is always true
        const result = await portfolioCollection.insertOne(sport);
        res.send(result);
      } catch (err) {
        res.status(500).send(err);
      }
    });
   
 
      app.get('/project/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await portfolioCollection.findOne(query);
        res.send(result);
      });


      app.post('/blog', async (req, res) => {
        try {
          const blog = req.body;
          const result = await blogsCollection.insertOne(blog);
          res.send(result);
        } catch (err) {
          res.status(500).send(err);
        }
      });
  
      app.get('/blog', async (req, res) => {
        const query =  {};
        const cursor = blogsCollection.find(query)
        const result = await cursor.toArray() 
        res.send(result);
      });


      app.get('/blog/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await blogsCollection.findOne(query);
        res.send(result);
      });

      // app.delete('/blog/:id' , async(req,res)=>{
      //    const id  = req.params.id;
      // const result = await blogsCollection.deleteOne({_id: new ObjectId(id)})
      //   res.send(result)
      //  })


      // data put and updated data api create
    //   app.put('/blog/:id', async(req, res)=>{
    //     const id= req.params.id;
    //     const sport = req.body;
    //     const filter = {_id: new ObjectId(id)};
    //     const updateDoc={
    //         $set:{
    //             status:sport.status,
    //             name: sport.name,
    //             description:sport.description,
    //             dateTime:sport.dateTime,
    //             priority: sport.priority,
    //         }
    //     }
    //     const result = await todoDatabaseCollection.updateOne(filter, updateDoc);
    //     res.json(result)
    // })


 
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send(
    '<h1 style="font-size:30; margin:20% auto; text-align:center;">Portfolio server running </h1>'
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// hello world