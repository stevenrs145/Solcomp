/* const sql = require('mssql'); */
const express  = require('express');
const path = require('path');
require('dotenv').config();
/*En esta línea, se importa y se llama al método dbConnection()
desde el archivo ./database/config.js. Esta línea se encarga de 
establecer la conexión con la base de datos. El archivo config.js 
contiene la configuración necesaria para conectarse a la base de datos. */
//require('./database/config').dbConnection();
/*Aquí se crea una instancia de la aplicación Express y se asigna a la 
constante app. Esta instancia se utilizará para configurar y manejar las 
rutas y middleware de la aplicación. */
const app = express();
//lectura y parseo del body (peticion http)
/*Esta línea configura el middleware en la aplicación para que pueda 
analizar y parsear el cuerpo de las solicitudes HTTP en formato JSON. 
Permite que la aplicación pueda recibir y procesar datos en formato 
JSON enviados en las solicitudes. */
app.use(express.json());
/*Aquí se crea un servidor HTTP utilizando el módulo incorporado http
 de Node.js. Se pasa la instancia de la aplicación app creada 
 anteriormente como argumento al método createServer() para asociarla 
 con el servidor. */
 const server = require('http').createServer(app);
//path publico
/*Estas líneas definen y configuran una ruta de acceso público para los 
archivos estáticos de la aplicación. publicPath se establece como la 
ruta absoluta del directorio public en el directorio actual. */
const publicPath = path.resolve(__dirname,'public');
/*el middleware express.static() se utiliza para servir los archivos 
estáticos ubicados en el directorio public a través de la ruta definida
en otras palabras, es decirle a mi app que tengo un publicPath */
app.use(express.static(publicPath));

//Mis rutas
/*En esta línea, se configura una ruta /api/miapi y se le asigna el manejo
 de la ruta al archivo auth.js ubicado en el directorio routes. Esto 
 significa que todas las solicitudes que coincidan con la url
 serán manejadas por el archivo auth.js */
 app.use('/api/clientes', require('./routes/data'));


 /*  const config = {
    server: 'solcomp-tests.database.windows.net',
    database: 'srodriguez-test',
    user: 'srodriguez',
    password: 'mYR7*6ybGVfc',
  };
  
  // Create a connection object
  sql.connect(config, err => {
        if(err){
            console.error('Error connecting to SQL server',err);
        }else{
            console.log('Connecting established succefully');

            const request = new sql.Request();

            request.query('SELECT * FROM dbo.clientes', (err,result)=>{
                if(err){
                    console.error('Error get all register table clientes',err);
                }else{
                    console.log(result.recordset);
                }
            });

        }
  }); */
  


  /* const request = new sql.Request();

        request.query('SELECT * FROM dbo.clientes', (err,result)=>{
            if(err){
                console.error('Error get all register table clientes',err);
            }else{
                console.log(result.recordset);
            }
        }); */

  

  

 


  


server.listen(
    process.env.PORT,
    (err)=>{
        if(err) throw new Error(err);

        console.log('Servidor corriendo en puerto!!!',process.env.PORT);
    }
);
