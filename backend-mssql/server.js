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
    database: 'MUGenED',
    options: {
        trustServerCertificate: true
    }
  };

app.get('/api/data/course', async (req, res) => {
try {
    // Receive parameter
    const ID = req.query.id;
    const SKIP = Number(req.query.pageNum) * 10;

    // Connect to the MSSQL database
    const pool = await sql.connect(config);

    // Setup Query String
    var query = `SELECT * FROM TrCourse`;
    if(ID != "") query += ` WHERE ID LIKE '%${ID}%'`;
    query += ` ORDER BY ID OFFSET ${SKIP} ROWS FETCH NEXT 10 ROWS ONLY;`;

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