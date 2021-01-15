import axios from "axios";

const apiKey = "549cff979fb249c187d6da06f1242c31";
export const getWeather = async (cityName) => {
  const {
    data: { data },
  } = await axios.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName},TR&days=8&key=${apiKey}`
  );
  return data;
};
