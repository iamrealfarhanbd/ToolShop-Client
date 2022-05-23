const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
// middleware
app.use(cors());
app.use(express.json());


function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Forbidden access' });
        }
        console.log('decoded', decoded);
        req.decoded = decoded;
        next();
    })
}


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@toolshop.khfz3.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const productCollection = client.db('ebazzar').collection('product');
        const orderCollection = client.db('ebazzar').collection('order');

        // JWT 
        app.post('/login', async (req, res) => {
            const user = req.body;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1d'
            });
            res.send({ accessToken });
        })

        // products API
        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });

        app.get('/product/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: ObjectId(id) };
            const product = await productCollection.findOne(query);
            res.send(product);
        });

        // POST product
        app.post('/product', async (req, res) => {
            const newproduct = req.body;
            const result = await productCollection.insertOne(newproduct);
            res.send(result);
        });
          // update product
          app.put('/product/:id', async(req, res) =>{
            const id = req.params.id;
            const updatedProduct = req.body;
            const filter = {_id: ObjectId(id)};
            const options = { upsert: true };
            const updatedDoc = {
                $set:updatedProduct,
                
            };
            const result = await productCollection.updateOne(filter, updatedDoc, options);
            res.send(result);

        })
        app.put('/updateProduct/:id', async (req, res) => {
            const updatedProduct = req.body;
            const { updatedQuantity } = updatedProduct;
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const options = { upsert: true };

            const updateProduct = {
                $set: {
                    quantity: updatedQuantity
                },
            };

            const result = await productCollection.updateOne(query, updateProduct, options);
            console.log(result);

            res.send(result);

        })
        // DELETE product
        app.delete('/product/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await productCollection.deleteOne(query);
            res.send(result);
        });
        
        // My Product Collection API 
        app.get('/myproduct', verifyJWT, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const email = req.query.email;
            if (email === decodedEmail) {
                const query = { email: email };
                const cursor = productCollection.find(query);
                const myproduct = await cursor.toArray();
                res.send(myproduct)
            }
            else{
                res.status(403).send({message: 'forbidden access'})
            }
        })

    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Genius Server');
});

app.get('/hero', (req, res) =>{
    res.send('Hero meets hero ku')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})