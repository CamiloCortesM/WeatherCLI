require("dotenv").config();
const {
  inquirerMenu,
  pause,
  readInput,
  listPlaces,
} = require("./helpers/inquirer");
const Searches = require("./models/searches");

const main = async () => {
  const searches = new Searches();
  let opt;
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        //show message
        const place = await readInput("City: ");
        //search the places
        const places = await searches.city(place);

        //select the place
        const id = await listPlaces(places);
        if (id === "0") continue;

        const placeSelected = places.find((place) => place.id === id);
      
        searches.addHistory(placeSelected.name);
        //weather
        const weather = await searches.weatherPlace(
          placeSelected.lat,
          placeSelected.lng
        );
        //show results
        console.log("\ncity information\n".green);
        console.log("City:", placeSelected.name.green);
        console.log("Lat:", placeSelected.lat);
        console.log("Lng:", placeSelected.lng);
        console.log("Temp:", weather.temp);
        console.log("Min:", weather.min);
        console.log("Max:", weather.max);
        console.log("Description:", weather.desc.green);
        break;
      case 2:
        searches.history.forEach((place, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${place}`);
        });
        break;
    }
    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
