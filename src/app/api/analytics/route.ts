import {query} from '@/lib/db';
import { NextResponse } from 'next/server';

/**
 * ! Manipulando GET para obter dados de analytics.
 * 
 */
export async function GET(){
    try{
        //! buscando total na tabela 
        const pageViewsResult: any = await query('SELECT COUNT(*) as total_views FROM page_views');
        const totalViews = pageViewsResult[0].total_views;

        //! buscando o número 
        const uniqueVisitorsResult: any = await query('SELECT COUNT(DISTINCT path) as unique_paths FROM page_views');
        const uniqueVisitors = uniqueVisitorsResult[0].unique_paths;

        //! Rotornando o JSON
        return NextResponse.json({
            totalViews,
            uniqueVisitors,
            lastUpdate: new Date().toISOString(),
        });
    }catch(error){
        console.error("Erro ao buscar dados de analytics:", error);
        return NextResponse.json({error: "Erro ao buscar dados de analytics"}, {status: 500});
    }
}


/**
 * ? Manipulando requisição POST.
 */
export async function POST(req: Request) {
    try{
        const {path} = await req.json();
        if(!path){
            return NextResponse.json({error: "Caminho da página é obrigatório."}, {status: 400});
        }
        
        await query('INSERT INT page_views (path) VALUES (?)', [path]);
        return NextResponse.json({message: "Visualização resgistrada com sucesso!"}, {status: 200});
    } catch(error){
        console.error("Erro ao registrar visualização:", error);
        return NextResponse.json({error: 'Erro ao registrar visualização'}, {status: 500});
    }
}