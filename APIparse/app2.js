const fs = require("fs");
const { fileURLToPath } = require("url");

let rawdata = fs.readFileSync("everypark.json");
let parks = JSON.parse(rawdata);

let csvString = "";

parks.data.forEach((park) => {
  let url = park.url;
  let name = park.fullName;
  if (park.addresses[0]) {
    var address =
      park.addresses[0].line1 +
      " " +
      park.addresses[0].city +
      " " +
      park.addresses[0].postalCode;
  }
  let coords = [park.latitude, park.longitude];
  let state = park.states;
  let weather = park.weather;
  csvString +=
    url +
    "," +
    name +
    "," +
    address +
    "," +
    coords[0] +
    "," +
    coords[1] +
    "," +
    state +
    "\n";
  //csv file   // url,name,address,lat,lng,state,weather\nurl,name,
});
//console.log(csvString);

fs.writeFile("parks.csv", csvString, (err) =>
  err ? console.error(err) : console.log("Commit logged!")
);
