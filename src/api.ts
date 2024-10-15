import axios from "axios";
import { Person, Planet } from "./types";

const BASE_URL = "https://swapi.dev/api";

export const searchPeople = async (query: string): Promise<Person[]> => {
  const response = await axios.get(`${BASE_URL}/people/?search=${query}`);
  return response.data.results;
};

export const searchPlanets = async (query: string): Promise<Planet[]> => {
  const response = await axios.get(`${BASE_URL}/planets/?search=${query}`);
  return response.data.results;
};
