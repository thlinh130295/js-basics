function example() {
  console.clear();
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
function demoBreak() {
  console.clear();
  let i = 0;
  while (i <= 10) {
    if (i === 5) break;
    console.log(i);
    i++;
  }
}

function demoContinue() {
  console.clear();
  let i = 0;
  while (i <= 10) {
    if (i % 2 === 0) {
      i++;
      continue;
    }

    console.log(i);
    i++;
  }
}
