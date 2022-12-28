const mediaType ={
    movie:"movie",
    tv:"tv"
}

const mediaCategory ={
    popular:"popular",
    top_reted:"top_rated"
}

const backdropPath = (imgEndpoint) =>`https://iamge.tmdb.org/t/p/original${imgEndpoint}`

const posterPath = (imgEndpoint) => `https://iamge.tmdb.org/t/p/original${imgEndpoint}`

const youtubePath = (videoId) => `https://ww.youtube.com/embed/${videoId}?controls=0`

const  tmdbConfigs = {
    mediaType,
    mediaCategory,
    backdropPath,
    posterPath,
    youtubePath
}

export default tmdbConfigs