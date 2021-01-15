import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
export const getWeather = async (cityName) => {
  const {
    data: { data },
  } = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName},TR&days=8&key=${apiKey}`
  );
  return data;
};
