const { response } = require("express");
//const sql = require('mssql');
const { getConnection, sql } = require('../database/connection');
const { queries } = require('../database/query.js');

const getClientes = async (req,res = response) =>{
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllClientes);
        res.json(result.recordset);
      } catch (error) {
        console.log(error);
      }
     
}
//--------
//--------
//--------
//--------
//--------

module.exports = {
    getClientes,
}