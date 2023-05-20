const axios = require("axios");

class Searches {
  history = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: read DB
  }

  async city(place = "") {
    //http
    // console.log("city", place);

    try {
      const resp = await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/bogota.json?access_token=pk.eyJ1IjoiY2FtaWxvY29ydGVzMTc1MyIsImEiOiJjbGh2aHVwYW8wOGZxM2RxZmRkdmp4eDRiIn0.CYMUQBePcfXrAnlaf0iXew&limit=5&language=es");
      console.log(resp.data);

      return [];
    } catch (error) {
      return [];
    }

    return [];
  }
}

module.exports = Searches;
