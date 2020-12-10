import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );

    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages )
    // }, [category])
    
    
    // consulta a la api desde un helper
    /*const awaitGifs = async category => setImages(await getGifs( category ))
    awaitGifs(category)*/
    
  

        return (
            <>
            {/* { loading ? 'Cargando...' : 'Data cargada' } */}

            { loading && <p className="animate__animated animate__flash">Loading...</p> }
    
            
    
                <h3 className="animate__animated animate__fadeIn"> { category } </h3>
                <div className="card-grid">
                    {
                        images.map( img  => (
                            <GifGridItem
                                key={img.id}
                                { ...img }
                            />
                        ))
                    }
                </div>
            </>
        )

    
}

