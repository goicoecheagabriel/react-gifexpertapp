export const getGifs = async ( category ) => {
    // const api_key = 'QrSdM69MEDHnauk5os2EpW0lHA9zPcDu';
    // const gif_url = 'api.giphy.com/v1/gifs/search';
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=50&api_key=QrSdM69MEDHnauk5os2EpW0lHA9zPcDu`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}