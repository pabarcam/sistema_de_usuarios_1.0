const { Pool } = require('pg')

const config = {
  user: 'paulo',
  password: 'password',
  host: 'localhost',
  database: 'softlife',
  port: 5432
}

const pool = new Pool(config)

async function createUser(paramsArray){
  const qryObject = {
    text: 'INSERT INTO users (email, password) VALUES ($1, $2)',
    values: paramsArray
  }
  const result = await pool.query(qryObject)
  return result
}
async function getUsers(){
  const result = await pool.query('SELECT * FROM users')
  return result
}
async function login(paramsArray){
  const qryObject = {
    text: 'SELECT FROM users WHERE EMAIL = $1 AND password = $2',
    values: paramsArray
  }
  const result = await pool.query(qryObject)
  return result
}


module.exports = {
  createUser,
  getUsers,
  login
}