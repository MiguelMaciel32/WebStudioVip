import mysql from 'mysql2/promise';
export const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    port: Number(process.env.MYSQL_ADDON_PORT),
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
  });
  return connection;
};


type SelectQueryResult<T = any> = T[];


export const query = async <T = any>(sql: string, values: any[] = []): Promise<SelectQueryResult<T>> => {
  const connection = await createConnection();
  try {
    console.log('Executando consulta SQL:', sql, 'Com valores:', values);
    const [results] = await connection.execute(sql, values);
    console.log('Resultado da consulta:', results);
    return results as SelectQueryResult<T>;
  } catch (error) {
    console.error('Erro ao executar a consulta:', (error as Error).message);
    throw new Error(`Erro ao executar a consulta: ${(error as Error).message}`);
  } finally {
    await connection.end();
  }
};
