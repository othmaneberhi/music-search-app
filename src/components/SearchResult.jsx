import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import TrackCard from "./TrackCard";
const SearchResult = (props) => {
  return (
   <>
    <div>
      <h4 className="text-start">Results</h4>
      <p>
        <span className="fw-bold">Showing results for:</span>{" "}
        {props.searchQuery}
      </p>
    </div>
    <div>

      <div className="row my-4 card border-0">
        <div className="d-flex align-items-center">
          <i class="fa-solid fa-music"></i>
          <h5 className="text-start card-header bg-white border-0">Tracks</h5>
        </div>
        <div className="row card-body">
          {props.results.tracks.items ? (
            props.results.tracks.items.map((item) => (
              <div className="col-2 mb-4">
                <TrackCard track={item} />
              </div>
            ))
          ) : (
            <div>No Song found</div>
          )}
        </div>
      </div>
      <div className="row my-4 card border-0">
        <div className="d-flex align-items-center">
          <i class="fa-solid fa-compact-disc"></i>
          <h5 className="text-start card-header bg-white border-0">Albums</h5>
        </div>
        <div className="row card-body">
          {props.results.albums.items ? (
            props.results.albums.items.map((item) => (
              <div className="col-2 mb-4">
                <AlbumCard album={item} />
              </div>
            ))
          ) : (
            <div>No Album found</div>
          )}
        </div>
      </div>
      <div className="row my-4 card border-0">
        <div className="d-flex align-items-center">
          <i class="fa-solid fa-microphone-lines"></i>
          <h5 className="text-start card-header bg-white border-0">Artists</h5>
        </div>

        <div className="row card-body">
          {props.results.artists.items ? (
            props.results.artists.items.map((item) => (
              <div className="col-2 mb-4">
                <ArtistCard artist={item} />
              </div>
            ))
          ) : (
            <div>No Artist found</div>
          )}
        </div>
      </div>
    </div>
   </>
  );
};

export default SearchResult;
