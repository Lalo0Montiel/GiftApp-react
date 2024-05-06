
export const getGifs =  async(categoria) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=33uUFi9GFGAD8Uw1mptwuqiSHVfz9o49&q=${categoria}&limit=10`
    const resp = await fetch( url )
    const {data } = await resp.json()
    //console.log(data)

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    //console.log(gifs)
    return gifs
}