#!/usr/bin/env node
// const program = require("commander");
// import interview from "./src/inverview.js";
const interview = require("./src/interview.js");
// const QUESTIONS = require("./src/constants/questions.js");
// const {
//   validateTicker,
//   validateFiat,
//   validateOperation,
//   validatePayTypes,
// } = require("./src/utils/commandValidations.js");

// program
//   .addOption(
//     new program.Option(
//       "-t, --ticker <type>",
//       `Crypto ticker`,
//       validateTicker
//     ).choices(QUESTIONS[0].choices)
//   )
//   .addOption(
//     new program.Option(
//       "-f, --fiat <type>",
//       "Fiat currency",
//       validateFiat
//     ).choices(QUESTIONS[1].choices)
//   )
//   .addOption(
//     new program.Option(
//       "-o, --operation <type>",
//       "Operation type",
//       validateOperation
//     ).choices(QUESTIONS[2].choices)
//   )
//   .addOption(
//     new program.Option(
//       "-p, --pay-types <type>",
//       "payment method ",
//       validatePayTypes
//     ).choices(QUESTIONS[3].choices)
//   );

// program.parse(process.argv);
// const options = program.opts();

setInterval(function(){
    // do something
    interview({});
}, 5000);
