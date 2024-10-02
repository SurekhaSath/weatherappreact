import React from "react";
import axios from "axios";
export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apikey = "b2d9fa1f2b35557e4615dd5fab218834";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Helo</h2>;
}
