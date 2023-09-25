const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'sua_base_de_dados',
  password: 'sua_senha',
  port:3000, // Porta padrão do PostgreSQL
});
