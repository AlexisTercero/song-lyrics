import React, { useState } from 'react'

const Formulario = ({guardarBusquedaLetra}) => {
    const [busqueda, guardarBusqueda] = useState({
        artista:"",
        cancion:"",
    })
    const [ error, guardarError ] = useState(false);

    const { artista, cancion } = busqueda;

    // funcion para leer el contenido de cada input
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    //Consultar APIS
    const buscarinformacion = e => {
        e.preventDefault();

        if(artista.trim() === "" || cancion.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false);
        //Si esta todo ok, pasar al comp pricipal
        guardarBusquedaLetra(busqueda);
    }


    return (
        <div className="b">
            { error ? <p className= "alert alert-danger text-center p-2">All fields are required</p> : null} 
            <div className="container">
                <div className="row">                   
                    <form 
                        onSubmit={buscarinformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">mmmLyRICS ♪</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ARTIST</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>SONG</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="divbut col text-center">
                            <button 
                                type="submit" 
                                className="btn "
                            >Sing!</button>
                            </div>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
