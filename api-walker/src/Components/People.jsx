import axios from "axios";
import { useState, useEffect } from "react";
const People = (props) => {
  const { id } = props;
  const [apiData, setApiData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
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
        <h1>People Component</h1>
        <h2>Name: {apiData.name}</h2>
        <h3>Height: {apiData.height}</h3>
        <h3>Hair color: {apiData.hair_color}</h3>
        <h3>Eye color: {apiData.eye_color}</h3>
        <h3>Skin color: {apiData.skin_color}</h3>
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
export default People;
