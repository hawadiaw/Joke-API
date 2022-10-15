import axios from "axios";
import { useState, useEffect } from "react";

const Planets = (props) => {
  const { id } = props;
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((response) => {
        setError(false);
        console.log(response.data);
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  if (!error) {
    return (
      <div>
        <h1>Planet Component</h1>
        <h2>Climate: {apiData.climate}</h2>
        <h3>Terrain: {apiData.terrain}</h3>
        <h3>Surface Water: {apiData.surface_water}</h3>
        <h3>Population: {apiData.population}</h3>
      </div>
    );
  } else
    return (
      <div>
        <h1>These aren't the droids you're looking for</h1>
        <img
          src="https://c8p9p3e5.rocketcdn.me/wp-content/uploads/2022/05/obi-wan-judging-you-meme.jpeg"
          alt=""
        />
      </div>
    );
};

export default Planets;
