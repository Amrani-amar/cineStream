import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const FilmCard = () => {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "Fellag",
      description: "fellag video humour",
      videoUrl: "https://youtu.be/n-BVrwDvr4Q"
    },
    {
      id: 2,
      title: "Fellag 2",
      description: "ALGERIAN LOVE STORY",
      videoUrl: "https://youtu.be/NTNUF9CPgM4"
    },
    {
      id: 3,
      title: "LE DERNIER CHAMEAU",
      description: "LE DERNIER CHAMEAU.",
      videoUrl: "https://youtu.be/JkIZlGeRoR0"
    },
    {
      id: 4,
      title: "JACKIE CHAN ",
      description: "Dans le bronx",
      videoUrl: "https://youtu.be/DaC8VWudOPo"
    },
    {
      id: 5,
      title: "L'INSPECTEUR TAHAR",
      description: "LES VACANCES ",
      videoUrl: "https://youtu.be/rBWVUbFpepE"
    },
    {
      id: 6,
      title: "HASSAN TERRO",
      description: "USE HACESSAN TERRO",
      videoUrl: "https://youtu.be/CslW5g-znMA"
    },
    {
      id: 7,
      title: "JACKIE CHAN 2",
      description: "LE COMBAT DES MAITRES",
      videoUrl: "https://youtu.be/UQfzMuOy1ls"
    },
    {
      id: 8,
      title: "BALLE PERDUE",
      description: "BALLE PERDUE 1",
      videoUrl: "https://youtu.be/isu-Lrn9byA"
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
              <h5 className="card-title" style={{color: "#000"}}>{film.title}</h5>

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
                  <p className="card-text film-description" style={{color:"#000"}}> {film.description} </p>
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
