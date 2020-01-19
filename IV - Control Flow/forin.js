function forIn() {
  console.clear();
  const person = {
    name: "Mosh",
    age: 30
  };

  for (let key in person) console.log(key, person[key]);
}

function forIn2() {
  console.clear();
  const colors = ["red", "green", "blue"];

  for (let index in colors) console.log(index, colors[index]);
}
