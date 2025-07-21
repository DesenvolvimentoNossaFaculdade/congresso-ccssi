import {query} from "@/lib/db";
import { NextResponse } from "next/server";

/**
 * * GET
 */
export async function GET(){
    try{
        const ingressos = await query('SELECT * FROM ingressos ORDER BY title ASC');

        //! Conversão JSON
        const parsedIngressos = ingressos.map((ingresso:any) => ({
            ...ingresso,
            benefits: JSON.parse(ingresso.benefits || '[]')
        }));
        return NextResponse.json(parsedIngressos);
    }catch(error){
        console.error("Erro ao buscar ingressos:", error);
        return NextResponse.json({error: "Erro ao buscar ingressos"}, {status: 500});
    }
}

/**
 * ? POST
 */
export async function POST(req: Request){
    try{
        const{id, title, price, installments, benefits, logo_src} = await req.json();

        if(!id || !title || price === undefined || price === null){
            return NextResponse.json({error: "Id, titulo e preço do ingresso são obrigatórios."}, {status: 400});
        }

        //! Convertendo Array para JSON
        const benefitsJSON = JSON.stringify(benefits || []);

        //! Insert
        const result: any = await query(
            `INSERT INTO ingressos (id, title, price, installments, benefits, logo_src) VALUES (?,?,?,?,?,?)`,
            [id, title, price, installments, benefitsJSON, logo_src]
        );

        return NextResponse.json({message: "Ingresso adicionado com sucesso!"}, {status: 201});
    }catch(error){
        console.error("Erro ao adicionar ingresso:", error);
        return NextResponse.json({error: "Erro ao adicionar ingresso."}, {status: 500});
    }
}

/**
 * ? PUT
 */
export async function PUT(req: Request){
    try{
        const {id, title, price, installments, benefits, logo_src} = await req.json();

        if(!id){
            return NextResponse.json({error: "O Id do ingresso é obrigatório para atualização."}, {status: 400});
        }

        const updates: string[] = [];
        const params: any[] = [];

        if (title !== undefined) { updates.push('title = ?'); params.push(title); }
        if (price !== undefined) { updates.push('price = ?'); params.push(price); }
        if (installments !== undefined) { updates.push('installments = ?'); params.push(installments); }
        if (benefits !== undefined) { 
        updates.push('benefits = ?'); 
        params.push(JSON.stringify(benefits));
        }
        if (logo_src !== undefined) { updates.push('logo_src = ?'); params.push(logo_src); }

        if(updates.length === 0){
            return NextResponse.json({message: "Nenhum campo fornecido para atualização."}, {status: 400});
        }

        params.push(id);

        const result: any = await query(
            `UPDATE ingressos SET ${updates.join(', ')} WHERE id = ?`,
            params
        );

        if(result.affectRows === 0){
            return NextResponse.json({error: "Ingresso não encontrado ou nenhum dado alterado."}, {status: 404});
        }

        return NextResponse.json({message: "Ingresso atualizazdo com sucesso!"}, {status: 200});
    }catch(error){
        console.error("Erro ao atulizar ingresso:", error);
        return NextResponse.json({error: "Erro ao atualizar ingresso."}, {status: 500});
    }
}

/**
 *  ! DELETE
 */
export async function DELETE(req: Request){
    try{
        const {id} = await req.json();

        if(!id){
            return NextResponse.json({error: "O Id do ingresso é obrigatório para exclusão."}, {status: 400});
        }

        const result: any = await query(`DELETE FROM ingressos WHERE id = ?`, [id]);

        if(result.affectRows === 0){
            return NextResponse.json({ error: "Ingresso não encontrado."}, {status: 404});
        }

        return NextResponse.json({message: "Ingresso removido com sucesso."}, {status: 200});
    } catch(error){
        console.error("Erro ao remover ingresso:", error);
        return NextResponse.json({error: "Erro ao remover ingresso."}, {status: 500});
    }
}