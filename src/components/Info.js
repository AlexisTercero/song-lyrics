import React from 'react';

const Info = ({info}) => {

    if(Object.keys(info).length === 0 ) return null;

    const { strArtist, strArtistThumb, strGenre, strBiographyEN } = info;
    
    return ( 
        <div className="card ">
            <div className="card-header font-weight-bold">
                {strArtist}
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Genre: {strGenre}</p>
                <h2 id="bio" className="card-text">Biography:</h2>
                <p className="card-text">{strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Info;