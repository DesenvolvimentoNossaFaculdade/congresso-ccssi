import mysql from 'mysql2/promise';

//! Utilizando variáveis de ambiente par maior segurança das credenciais.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

/**
 * ! Parametros para a query (SQL Injection).
 */
export async function query(sql: string, params: any[] = []): Promise<any>{
    try {
        const [rows] = await pool.execute(sql, params);
        return rows;
    } catch (error: any){
        console.error('Erro na query SQL:', error);
        throw new Error("Erro ao executar a operação no banco de dados.");
    }
}

/**
 * ? Criando tabelas.
 */
export async function createTables(): Promise<void> {
    try{
        await query(`
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL,
                    role VARCHAR(50) DEFAULT 'admin',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);
            console.log('Tabela "users" verificada/criada com sucesso.');

            //* Controle e registro de acessos à pagina.
            await query(`
                    CREATE TABLE IF NOT EXISTS page_views (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        path VARCHAR(255) NOT NULL,
                        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                `);
            console.log('Tabela "page_views" verificada/criada com sucesso.');
            
            //* Palestrantes.
            await query(`
                    CREATE TABLE IF NOT EXISTS speakers (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        role VARCHAR(255),
                        company VARCHAR(255),
                        image_url VARCHAR(255),
                        description TEXT,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                `);
            console.log('Tabela "speakers" verificada/criada com sucesso.');

            //* Ingressos.
            await query(`
                    CREATE TABLE IF NOT EXISTS ingressos (
                        id VARCHAR(255) PRIMARY KEY,
                        title VARCHAR(255) NOT NULL,
                        price DECIMAL(10, 2) NOT NULL,
                        installments VARCHAR(255),
                        benefits JSON,
                        logo_src VARCHAR(255),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                `);
            console.log('Tabela "ingressos" verificada/criada com sucesso.');
    } catch(error: any){
        console.error('Erro ao criar tabelas:', error);
        throw new Error('Falha ao inicializar o banco de dados.');
    }
}