var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = "Fun " + chalk.blue("Stuff");
console.log(message2);

var message3 = "Wow " + chalk.red("I get it!");
console.log(message3);

var message4 = chalk.red("What a reflief!");
console.log(message4);

var summary = chalk.red(

"I may " + chalk.green.underline.bold('actually get a job!')

  );
console.log(summary);

