const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'test'
  });

  await client.connect();
  return client;
}


module.exports = getConnection;
