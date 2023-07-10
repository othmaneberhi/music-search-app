import React from 'react'

const AlbumCard = ({album}) => {
  return (

    <>
     <a href={album.data.uri} className="text-decoration-none">
    <div className="card card-hover border-0">
      <img src={album.data.coverArt.sources[0].url} className="card-img-top" alt={album.data.name}/>
      <div className="card-body">
        <h5 className="card-title">{album.data.name}</h5>
        <div className='d-flex justify-content-start'>
        <p className="card-text me-1">{album.data.date.year}</p>
        <span>•</span>
        <p className="card-text ms-1">{album.data.artists.items[0].profile.name}</p>
        </div>
        
      </div>
    </div>
    </a>
    </>
    
  )
}

export default AlbumCard
