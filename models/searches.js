const axios = require("axios");

class Searches {
  history = ["Tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: read DB
  }

  async city(place = "") {
    //http
    console.log("city", place);

    return [];
  }
}

module.exports = Searches;
