import { API_CONFIG } from "./config";
import axios from "axios";
import type {
  ForecastData,
  Coordinates,
  WeatherData,
  GeocodingResponse,
} from "./types";
const api = axios.create({});

export const createUrl = (
  endpoint: string,
  params: Record<string, string | number> //object with key:string and value:string|number
) => {
  const searchParams = new URLSearchParams({
    appid: API_CONFIG.API_KEY,
    ...params,
  });

  return `${endpoint}?${searchParams.toString()}`;
};

export const fetchData = async <T>(url: string): Promise<T> => {
  const res = await api.get<T>(url);
  if (res.status !== 200) {
    throw new Error("Error fetching data");
  }
  console.log(res.data);
  return res.data;
};

export const getCurrentWeather = ({
  lat,
  lon,
}: Coordinates): Promise<WeatherData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/weather`, {
    lon,
    lat,
    unit: API_CONFIG.DEFAULT_PARAMS.units,
  });
  return fetchData<WeatherData>(url);
};

export const getForecast = ({
  lat,
  lon,
}: Coordinates): Promise<ForecastData> => {
  const url = createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
    lon,
    lat,
    unit: API_CONFIG.DEFAULT_PARAMS.units,
  });
  return fetchData<ForecastData>(url);
};

export const reverseGeocode = ({
  lat,
  lon,
}: Coordinates): Promise<GeocodingResponse[]> => {
  const url = createUrl(`${API_CONFIG.GEO}/reverse`, {
    lat: lat.toString(),
    lon: lon.toString(),
    limit: "1",
  });
  return fetchData<GeocodingResponse[]>(url);
};
