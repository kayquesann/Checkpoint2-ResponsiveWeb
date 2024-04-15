import React, { useEffect, useState } from "react";

interface Foto {
    albumID: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const TelaFotos: React.FC = () => {
    const [fotos, setFotos] = useState<Foto[]>([]);

    useEffect(() => {
        const fetchFotos = async () => {
            const url = "https://jsonplaceholder.typicode.com/photos"
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error ('HTTP error! status: ${response.status}')
                }
                const data = await response.json();
                setFotos(data);
            }catch (error) {
                console.error("Error fetching photos:", error);
            }
        };
        fetchFotos();
    },[]);
    
    return(
        <div>
            <h1 className='font-bold text-center'>FOTOS</h1>
            <br></br>
            <div className='grid grid-cols-3 gap-4'>
                {fotos.map(foto => (
                    <div key={foto.id} className="border border-gray-300 p-4">
                        <img src={foto.thumbnailUrl} alt={foto.title} className="max-w-full h-auto mb-2" />
                        <h2 className='font-bold'>{foto.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TelaFotos;