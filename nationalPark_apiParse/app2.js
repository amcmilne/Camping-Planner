const fs = require("fs");
const { fileURLToPath } = require("url");
const sequelize = require("sequelize");

let rawdata = fs.readFileSync("everypark.json");
let parks = JSON.parse(rawdata);

let csvString = "url,parkname,address,description,weather_description,state,createdAt,updatedAt,UserId\n";

console.log(Date.UTC());

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

  let description = park.description;
  description = description.replace(/"/g, "'");

  let weather;
  if (park.weatherInfo) {
    weather = park.weatherInfo;
    weather = weather.replace(/"/g, "'");
  } else {
    weather = "No weather info provided";
  }

  csvString +=
    url +
    "," +
    name +
    "," +
    address +
    "," +
/*     coords[0] +
    "," +
    coords[1] +
    "," + */
    '"' +
    description +
    '"' +
    "," +
    '"' +
    weather +
    '"' +
    "," +
    '"' +
    state +
    '"' +
    "," +
    Date() +
    "," +
    Date() +
    "," +
    "null" +
    "\n";
  //csv file   // url,name,address,lat,lng,state,weather\nurl,name,
});
//console.log(csvString);

fs.writeFile("parks.csv", csvString, (err) =>
  err ? console.error(err) : console.log("Commit logged!")
);
