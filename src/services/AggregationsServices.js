import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export async function getDelay(type_of_vehicles, time_interval) {
  try {
    let response = await http.get(
      `${apiEndpoint}/delay_${type_of_vehicles}/${time_interval}`
    );
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getChange_of_delay(type_of_vehicles, time_interval) {
  try {
    let response = await http.get(
      `${apiEndpoint}/change_of_delay_${type_of_vehicles}/${time_interval}`
    );
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getTraffic_queries(time_interval) {
  try {
    let response = await http.get(
      `${apiEndpoint}/traffic_queries/${time_interval}`
    );
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getTimeOnCurrentStop(Current_Stop, time_interval) {
  try {
    let response = await http.get(`${apiEndpoint}/timeOnCurrentStop/`, {
      Current_Stop: Current_Stop,
      time_interval: time_interval,
    });
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getTimeOnStopsByCurrentBus(ROUTE_NUMBER, time_interval) {
  try {
    let response = await http.get(`${apiEndpoint}/timeOnStopsByCurrentBus/`, {
      ROUTE_NUMBER: ROUTE_NUMBER,
      time_interval: time_interval,
    });
    if (response.data.succeeded) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
