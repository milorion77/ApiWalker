import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComponenteRuta = (props) => {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/"+id+"/")
            .then(response => setData(response.data))},[])

    return(
        <div className="container"> 
        <h2>People</h2>
            <p><b>Name: </b>{data.name}</p>
            <p><b>Height: </b>{data.height}</p>
            <p><b>Hair color: </b>{data.hair_color}</p>
            <p><b>Skin color: </b>{data.skin_color}</p>
            <p><b>Birth year: </b>{data.birth_year}</p>
            </div>
    )
}

export default ComponenteRuta;