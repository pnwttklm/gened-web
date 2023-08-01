const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const port = 5000;

const corsOptions = {
    origin: ['http://gened.pnwttklm.com','https://gened-web.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200,
  };

app.use(cors(corsOptions));
app.use(express.json());

const config = {
    user: 'sa',
    password: 's4nhxnu1',
    server: 'server.s4nhxnu1.com',
    database: 'MUGenED',
    options: {
        trustServerCertificate: true
    }
  };

app.get('/api/data/course', async (req, res) => {
try {
    // Receive parameter
    const KEY = req.query.key;
    const LIT = req.query.lit;
    //const SEM = req.query.sem;
    const PROG = req.query.prog;
    //const LOC = req.query.loc;
    const STAT = req.query.stat;

    // Pagination
    const SKIP = Number(req.query.pageNum) * 10;

    // Connect to the MSSQL database
    const pool = await sql.connect(config);

    // Setup Query String
    var query = `SELECT * FROM TrCourse `;
    if(KEY != "" || LIT != "" || PROG != "" || STAT != "") query += `WHERE '1'='1' `;
    if(KEY != "") query += `AND (ID LIKE '%${KEY}%' OR CodeEN LIKE '%${KEY}%' OR TitleEN LIKE '%${KEY}%' OR CodeTH LIKE N'%${KEY}%' OR TitleTH LIKE N'%${KEY}%') `;
    if(LIT != "") query += `AND LiteracyCode = '${LIT}' `;
    if(PROG != "") query += `AND Program = '${PROG}' `;
    if(STAT != "") query += `AND Status = '${STAT}' `;
    query += `ORDER BY ID OFFSET ${SKIP} ROWS FETCH NEXT 10 ROWS ONLY;`;

    console.log(query);

    // Query the data from the database
    const result = await pool.request().query(query);

    // Close the database connection
    sql.close();

    res.json(result.recordset);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
}
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});