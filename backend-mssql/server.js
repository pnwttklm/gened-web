const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const config = {
    user: 'sa',
    password: 's4nhxnu1',
    server: 'server.s4nhxnu1.com',
    database: 'your_database',
  };