import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const FilmCard = () => {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "Film 1",
      description: "Ceci est la description du film 1",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Film 2",
      description: "Ceci est la description du film 2",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Film 3",
      description: "Ceci est la description du film 3",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Film 4",
      description: "Ceci est la description du film 4",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Film 5",
      description: "Ceci est la description du film 5",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Film 6",
      description: "Ceci est la description du film 6",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 7,
      title: "Film 7",
      description: "Ceci est la description du film 7",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "Film 8",
      description: "Ceci est la description du film 8",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ]);

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="container">
      <h1>NOS FILMS</h1>
      <div className="row">
        {films.map((film) => (
          <div key={film.id} className="col-md-3">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title">{film.title}</h5>
              </div>
              <div className="card-body">
                <div className="video-wrapper">
                  <ReactPlayer
                    url={film.videoUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                    className="react-player"
                  />
                  <p>{film.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmCard;
