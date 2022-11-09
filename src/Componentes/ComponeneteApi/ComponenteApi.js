import React, {useState} from "react";
import axios from 'axios'

const ComponenteApiWalker = () => {

    const [id, setId] = useState("");
    const [caracteristica, setCaracteristica] = useState("");
    const [data, setData] = useState([])
    const [valor, setValor] = useState("")
    const [mundo, setMundo] = useState([])
    const [error, setError] = useState("")

    const evitar =  (e) => {
        e.preventDefault();
            setValor(caracteristica)
            axios.get("https://swapi.dev/api/"+caracteristica+"/"+id+"/")
            .then(response => response.data)
            .then(result => {
                setData(result)
                if(caracteristica === "people"){
                    axios.get(result.homeworld)
                    .then(response => setMundo(response.data))
                }
            })
            .catch(err => setError("1"))
        setCaracteristica("");
        setId("");
        setData([])
        setError("")
    }

    return(
        <div>
            <div>
                <h2>Luke APIwalker</h2>
                <form onSubmit={evitar}>
                    <div class="mb-3">
                        <label for="" class="form-label">Search for: </label>
                        <select class="form-select form-select-lg" value={caracteristica} onChange={(e) => setCaracteristica(e.target.value)}>
                            <option selected>Select one</option>
                            <option value="films">Films</option>
                            <option value="people">People</option>
                            <option value="vehicles">Vehicule</option>
                            <option value="planets">Planets</option>
                            <option value="species">Species</option>
                            <option value="starships">Starships</option>
                        </select>
                        <div class="mb-3">
                            <label for="" class="form-label">Id: </label>
                            <input type="text"
                            class="form-control" value={id} onChange={(e) => setId(e.target.value)}/>
                        </div>
                        <input name="" id="" class="btn btn-success" type="submit" value="Send"/>
                    </div>
                </form>
                </div>
                {
                    valor === "vehicles" && error !== "1"?
                        <div>
                        <p><b>Vehicles name:</b> {data.name}</p>
                        <p> <b>Model:</b> {data.model}</p>
                        <p><b>passengers:</b> {data.passengers}</p>
                        <p><b>vehicle_class:</b> {data.vehicle_class}</p>
                        <p><b>manufacturer:</b> {data.manufacturer}</p>
                        </div>
                    :valor === "films" && error !== "1" ?
                    <div>
                        <p><b>Title: </b>{data.title}</p>
                        <p><b>Episode_id: </b>{data.episode_id}</p>
                        <p><b>Director: </b>{data.director}</p>
                        <p><b>Producer: </b>{data.producer}</p>
                        <p><b>release_date: </b>{data.release_date}</p>
                    </div>
                        
                    :valor === "starships" && error !== "1"?
                    <div>
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Model: </b>{data.model}</p>
                        <p><b>Manufacturer: </b>{data.manufacturer}</p>
                        <p><b>Cost in credits</b>{data.cost_in_credits}</p>
                        <p><b>Passengers: </b>{data.passengers}</p>
                    </div>
                        
                    :valor === "people" && error !== "1"?
                    <div> 
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>HomeWorld: </b>{mundo.name}</p>
                        <p><b>Height: </b>{data.height}</p>
                        <p><b>Hair color: </b>{data.hair_color}</p>
                        <p><b>Skin color: </b>{data.skin_color}</p>
                    </div>
                    : valor === "species" && error !== "1" ?
                    <div>
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Classification: </b>{data.classification}</p>
                        <p><b>Designation: </b>{data.designation}</p>
                        <p><b>Average lifespan: </b>{data.average_lifespan}</p>
                        <p><b>Skin colors: </b>{data.skin_colors}</p>
                        <p><b>Hair colors: </b>{data.hair_colors}</p>
                    </div>
                    : valor === "planets" && error !== "1"?
                    <div>
                        <p><b>Rotation period: </b>{data.rotation_period}</p>
                        <p><b>Orbital period: </b>{data.orbital_period}</p>
                        <p><b>Diameter: </b>{data.diameter}</p>
                        <p><b>Climate: </b>{data.climate}</p>
                        <p><b>Gravity: </b>{data.gravity}</p>
                    </div>
                    :null
                }
                {
                    error === "1" ? 
                    <div>
                    <p>Estos no son los droides que está buscando</p>
                    <img src="https://as01.epimg.net/meristation/imagenes/2021/01/18/noticias/1610985143_304525_1610985184_noticia_normal.jpg" alt="Obi-Wan Kenobi"/>
                    </div>
                    :
                    null
                    
                }
                    
            </div>
    )
}
    

export default ComponenteApiWalker;