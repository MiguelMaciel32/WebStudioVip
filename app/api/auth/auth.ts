import mysql from 'mysql2/promise';

export const createConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '723616Ll#',
    database: 'studiovip'
  });
  return connection;
};


type QueryResult<T extends object = any> = [T[], mysql.FieldPacket[]] | [mysql.ResultSetHeader, mysql.FieldPacket[]];

export const query = async <T extends object = any>(sql: string, values: any[] = []): Promise<T[]> => {
  const connection = await createConnection();
  try {
    console.log('Executando consulta SQL:', sql, 'Com valores:', values);
    const [results, fields] = await connection.execute(sql, values) as QueryResult<T>;
    console.log('Resultado da consulta:', results);
    

    if ('affectedRows' in results) {

      return [] as T[];
    }
    
    return results;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao executar a consulta:', error.message);
      throw new Error(`Erro ao executar a consulta: ${error.message}`);
    } else {
      console.error('Erro desconhecido ao executar a consulta.');
      throw new Error('Erro desconhecido ao executar a consulta.');
    }
  } finally {
    await connection.end();
  }
};
