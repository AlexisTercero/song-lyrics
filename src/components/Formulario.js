import React from 'react'

const Formulario = () => {
    return (
        <div className="b">
            <div className="container">
                <div className="row">                    
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">mmmLyRICS!</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>ARTIST</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
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
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="divbut col text-center">
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
