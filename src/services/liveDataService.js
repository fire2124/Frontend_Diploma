import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function getMhdPoBusses() {
  try {
    let response = await http.get(`${apiEndpoint}/currentMhdPoBusses`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getSadPoBusses() {
  try {
    let response = await http.get(`${apiEndpoint}/currentSadPoBusses`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getTrains() {
  try {
    let response = await http.get(`${apiEndpoint}/currentTrains`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getTraffic() {
  try {
    let response = await http.get(`${apiEndpoint}/currentTraffic`);
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}