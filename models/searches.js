const axios = require("axios");

class Searches {
  history = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: read DB
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }
  async city(place = "") {
    //http
    // console.log("city", place);
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();
      return resp.data.features.map((place) => ({
        id: place.id,
        name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searches;
