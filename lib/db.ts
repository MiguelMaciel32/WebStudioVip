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


type QueryResult<T = any> = [T[], mysql.FieldPacket[]];


export const query = async <T = any>(sql: string, values: any[] = []): Promise<QueryResult<T>> => {
  const connection = await createConnection();
  try {

    const [results, fields] = await connection.execute(sql, values) as [T[], mysql.FieldPacket[]];
    return [results as T[], fields];
  } catch (error) {

    if (error instanceof Error) {
      throw new Error(`Erro ao executar a consulta: ${error.message}`);
    } else {
      throw new Error('Erro desconhecido ao executar a consulta.');
    }
  } finally {
    await connection.end();
  }
};
