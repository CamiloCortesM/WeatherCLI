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

        const placeSelected = places.find((place) => place.id === id);

        //weather

        //show results
        console.log("\ncity information\n".green);
        console.log("City:", placeSelected.name);
        console.log("Lat:", placeSelected.lat);
        console.log("Lng:", placeSelected.lng);
        console.log("Temp:");
        console.log("Min:");
        console.log("Max:");
        break;
    }
    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
