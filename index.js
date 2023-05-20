const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
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
        await searches.city(place);
        //seach the places

        //select the place

        //weather

        //show results
        console.log("\ncity information\n".green);
        console.log("City:");
        console.log("Lat:");
        console.log("Lng:");
        console.log("Temp:");
        console.log("Min:");
        console.log("Max:");
        break;
    }
    if (opt !== 0) await pause();
  } while (opt !== 0);
};

main();
