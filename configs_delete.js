require('dotenv').config();
// config();

module.exports = {
  /* port: process.env.PORT || 3000, */
  dbUser: process.env.DBUSER || 'srodriguez',
  dbPassword: process.env.DBPASSWORD || 'mYR7*6ybGVfc',
  dbServer: process.env.DBSERVER || 'solcomp-tests.database.windows.net',
  dbDatabase: process.env.DBDATABASE || 'srodriguez-test',
};