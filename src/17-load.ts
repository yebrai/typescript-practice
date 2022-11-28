import _ from "lodash";

const data = [
  {
    username: "nico",
    role: "admin",
  },
  {
    username: "ivan",
    role: "seller",
  },
  {
    username: "zulema",
    role: "seller",
  },
];

const rta = _.groupBy(data, (items => items.role))

console.log(rta);
