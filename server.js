const express = require('express')
const app = express()
const cors = require ('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'shrinkflation-list-api',
    collection = 

MongoClient.connect(dbConnectionString)
.then(client => {
    console.log(`Connected to ${dbName} database`)
    db = client.db(dbName)
    collection = db.collection('items-list')
})