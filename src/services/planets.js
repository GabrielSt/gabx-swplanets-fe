import axios from "axios";
import toastr from "toastr";

export const getPlanet = planetId => {
  return axios
    .get(`https://swapi.co/api/planets/${planetId}`)
    .then(resp => {
      return resp.data;
    })
    .catch(err => {
      if (err.response != null) {
        toastr.error(err.response.data.message);
      } else {
        toastr.error(err);
      }
    });
};
