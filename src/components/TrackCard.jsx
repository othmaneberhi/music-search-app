import React from 'react'

const TrackCard = ({track}) => {
  const formatDuration = (totalMilliseconds) => {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <>
    <a href={track.data.uri} className="text-decoration-none">
    <div className="card card-hover border-0">
      <img src={track.data.albumOfTrack.coverArt.sources[0].url} className="card-img-top" alt={track.data.albumOfTrack.name} />
      <div className="card-body">
        <h5 className="card-title">{track.data.name}</h5>
        <p className="card-text mb-1">{track.data.artists.items.map(artist => artist.profile.name).join(', ')}</p>
        <p className="card-text mb-1">{formatDuration(track.data.duration.totalMilliseconds)}<i class="fa-regular fa-clock ms-2"></i></p>
      </div>
    </div>
    </a>
    </>
    
  )
}

export default TrackCard
