const sql = require('mssql');

const config = {
    server: 'solcomp-tests.database.windows.net',
    database: 'srodriguez-test',
    user: 'srodriguez',
    password: 'mYR7*6ybGVfc',
};

// Create a connection object
const dbConnection = async()=>{
    try {
        console.log('init db config');
        await sql.connect(config, err => {
            if(err){
                console.error('Error connecting to SQL server',err);
            }else{
                console.log('Connecting established succefully');
                return sql;
            }
        });

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos, hable con el Admin');
    }
}

module.exports = {
    dbConnection
}