var mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
const authSystem = require('./auth')
const { v4: uuidv4 } = require('uuid')

const client = new MongoClient("mongodb://localhost:27017");
let userSchema = null
async function dbConnection(){
    try {
        await client.connect();
        const db = client.db("VideoStreamDB");
        const collection = db.collection("users");
        userSchema = collection
        console.log("Has database connection")
    } catch (error) {
        throw error
    }
}

function addUser(userName, displayName, password){
    userSchema.insertOne({
        UserName: userName, 
        DisplayName: displayName,
        Password: authSystem.hashPassword(password),
        uuid: uuidv4()
    })
}

async function getUser(uuid){
    return await userSchema.findOne({ uuid: uuid }).then(user => user)
}

module.exports = {
    dbConnection: dbConnection,
    getUserSchema: () => userSchema,
    addUser: addUser,
    getUser: getUser,
}

