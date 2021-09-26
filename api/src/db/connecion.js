const knex = require('knex');


function makeConnection(){
  try {

    //@ts-ignore
    const db = knex({
      client: 'mysql2',
     connection:{
        host:'mysqldb',
        port: process.env.MYSQL_PORT,
        user:process.env.MYSQLDB_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database:process.env.MYSQL_DATABASE,
     }
    });
      return db;
  } catch(e){
    throw new Error('Could not connect to db')
  }
}


module.exports = {
  makeConnection
}