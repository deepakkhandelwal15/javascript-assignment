function showClock() {
  setInterval(() => {
    let d = new Date();
    console.log(d.toLocaleTimeString());
  }, 1000);
}
showClock();