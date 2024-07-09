// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
const driver = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function findMatching(driversNames, lookupName) {
  return driversNames.filter(
    (name) => name.toLowerCase() === lookupName.toLowerCase()
  );
}

function fuzzyMatch(driversNames, lookupLetters) {
  return driversNames.filter((name) =>
    name.toLowerCase().startsWith(lookupLetters.toLowerCase())
  );
}

function matchName(driverCollection, driverName) {
  return driverCollection.filter(
    (driverObj) => driverObj.name.toLowerCase() === driverName.toLowerCase()
  );
}

//Function calls
findMatching(drivers, "Sally");
fuzzyMatch(drivers, "Sa");
matchName(driver, "Sally");
