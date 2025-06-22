function passFunction(fn) {
    console.log("Calling the passed function:");
    fn();
}
function sayHello() {
    console.log("Hello from the passed function!");
}
passFunction(sayHello);