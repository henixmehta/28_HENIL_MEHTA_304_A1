console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

global.message = "Hello from global!";
console.log(global.message);

setTimeout(() => {
  console.log("setTimeout executed after 1 second");
}, 1000);

setImmediate(() => {
  console.log("setImmediate executed immediately after I/O events");
});

process.nextTick(() => {
  console.log("process.nextTick executed before other asynchronous events");
});

console.log("Program started");
