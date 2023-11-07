const sql = require('mssql');
require('dotenv').config();
//const config = require('../configs.js');


const dbSettings = {
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  server: process.env.DBSERVER,
  database: process.env.DBDATABASE,
  /* options: {
    encrypt: false,
    trustServerCertificate: false,
  }, */
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log('Connected!!');
    return pool;
  } catch (error) {
    console.log('Error en el pool de conexiones!!');
    console.log(error);
  }
};

module.exports = {
  getConnection,
  dbSettings,
  sql,
};