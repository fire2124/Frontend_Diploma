import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function getMhdStops() {
  try {
    let response = await http.get(`${apiEndpoint}/MhdStops`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getSadStops() {
  try {
    let response = await http.get(`${apiEndpoint}/SadStops`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getTrainStops() {
  try {
    let response = await http.get(`${apiEndpoint}/TrainStops`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}
