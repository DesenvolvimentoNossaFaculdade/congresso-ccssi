import mysql from 'mysql2/promise';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306', 10),
};

const pool = mysql.createPool(dbConfig);

export async function query(sql: string, params: any[] = []){
    try{
        const [rows] = await pool.execute(sql, params);
        return rows;
    } catch(error) {
        console.log('Erro na query SQL:', error);
        throw error;
    }
}

export async function createTables(){
    try{
        await query(`
            CREATE TABLE IF NOT EXISTS events (
                id INT AUTO_INCREMENT PRIMARY KEY,
                event_name VARCHAR(255) NOT NULL,
                site_title VARCHAR(255) NOT NULL,
                event_date DATE NOT NULL,
                location VARCHAR(255),
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);


        await query(`
            CREATE TABLE IF NOT EXISTS sections (
                id INT AUTO_INCREMENT PRIMARY KEY,
                event_id INT NOT NULL,
                section_name VARCHAR(100) NOT NULL,
                title VARCHAR(255),
                subtitle VARCHAR(255),
                description TEXT,
                background_image_url VARCHAR(255),
                call_to_action_text VARCHAR(100),
                call_to_action_link VARCHAR(255),
                display_order INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
            )
        `);

        await query(`
            CREATE TABLE IF NOT EXISTS tickets (
                id INT AUTO_INCREMENT PRIMARY KEY,
                event_id INT NOT NULL,
                ticket_type VARCHAR(100) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                currency VARCHAR(10) DEFAULT 'BRL',
                available_quantity INT,
                description TEXT,
                starts_selling_at DATETIME,
                ends_selling_at DATETIME,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
            )
        `);
        console.log('Tabelas criadas com sucesso.');
    } catch(error){
        console.error('Erro ao criar tabelas:', error);
    }
}