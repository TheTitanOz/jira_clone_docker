import { createConnection } from 'typeorm';

import * as entities from 'entities';

const createDatabaseConnection = () => createConnection({
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: Object.values(entities),
  synchronize: true,
  logging: false,
  charset: 'utf8mb4_unicode_ci',
});

export default createDatabaseConnection;
