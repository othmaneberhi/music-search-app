import React from "react";

const ArtistCard = ({ artist }) => {
  return (
    <>
      <a href={artist.data.uri} className="text-decoration-none">
        <div className="card card-hover border-0 border-0 text-center">
          <img
            src={
              artist.data.visuals.avatarImage
                ? artist.data.visuals.avatarImage.sources[0].url
                : "https://i.pinimg.com/736x/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6--app-logo-avatar.jpg"
            }
            className="card-img-top rounded-circle mx-auto d-block"
            alt={artist.data.profile.name}
           style={{width: "180px", height: "180px"}}
          />
          <div className="card-body">
            <h5 className="card-title">{artist.data.profile.name}</h5>
          </div>
        </div>
      </a>
    </>
  );
};

export default ArtistCard;
