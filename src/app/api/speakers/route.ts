import {query} from '@/lib/db';
import {NextResponse} from 'next/server';

/**
 * ? GET Palestrantes
 */
export async function GET(){
    try{
        const speakers = await query('SELECT * FROM speakers ORDER BY NAME ASC');
        return NextResponse.json(speakers);
    }catch(error){
        console.error("Erro ao buscar palestrantes:", error);
        return NextResponse.json({error: "Erro ao buscar palestrantes"}, {status: 500});
    }
}

/**
 *  ! POST Palestrantes.
 */ 
export async function POST(req: Request){
    try{
        const {name, role, company, image_url, description} = await req.json();

        if(!name) {
            return NextResponse.json({error: "O nome do palestrante é obrigatório."}, {status: 400});
        }

        //! Insert
        const result: any = await query(
            `INSERT INTO speakers (name, role, company, image_url, description) VALUES (?,?,?,?,?)`,
            [name, role, company, image_url, description]
        );

        return NextResponse.json({message: "Palestrante adicionado com sucesso!", id: result.insertId}, {status: 201});
    }catch(error){
        console.error("Erro ao adicionar palestrante:", error);
        return NextResponse.json({error: "Erro ao adicionar palestrante."}, {status: 500});
    }
}


/**
 * ! PUT --> Atualização
 */
export async function PUT(req: Request){
    try{
        const {id, name, role, company, image_url, description} = await req.json();

        if(!id){
            return NextResponse.json({error: "O Id do palestrante é obrigatório para atualização."}, {status: 400});
        }


        const updates: string[] = [];
        const params: any[] = [];

        if (name !== undefined) { updates.push('name = ?'); params.push(name); }
        if (role !== undefined) { updates.push('role = ?'); params.push(role); }
        if (company !== undefined) { updates.push('company = ?'); params.push(company); }
        if (image_url !== undefined) { updates.push('image_url = ?'); params.push(image_url); }
        if (description !== undefined) { updates.push('description = ?'); params.push(description); }

        if(updates.length === 0){
            return NextResponse.json({message: "Nenhum campo fornecido para atualização."}, {status: 400});
        }

        params.push(id);

        const result: any = await query(
            `UPDATE speakers SET ${updates.join(', ')} WHERE id = ?`,
            params
        );

        if (result.affectedRows === 0) {
            return NextResponse.json({error: "Palestrante não encontrado ou nenhum dado alterado."}, {status: 404});
        }

        return NextResponse.json({message: "Palestrante atualizado com sucesso!"}, {status: 200});
    } catch (error){
        console.error("Erro ao atualizar palestrante:", error);
        return NextResponse.json({error: "Erro ao atualizar palestrante."}, {status: 500});
    }
}


/**
 * !DELETE
 */
export async function DELETE(req: Request){
    try{
        const {id} = await req.json();

        if(!id){
            return NextResponse.json({error: "O Id do palestrante é obrigatório para exclusão."}, {status: 400});
        }

        const result: any = await query(`DELETE FROM speakers WHERE id = ?`, [id]);

        if(result.affectedRows === 0) {
            return NextResponse.json({error: "Palestrante não encontrado."}, {status: 404});
        }

        return NextResponse.json({error: "Palestrante não encontrado."}, {status: 404});
    }catch(error) {
        console.error("Erro ao remover palestrante:", error);
        return NextResponse.json({error: "Erro ao remover palestrante."}, {status: 500});
    }
}