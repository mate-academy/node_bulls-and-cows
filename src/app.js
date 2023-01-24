"use strict";

const { generateRandomNumber } = require("./randomNumberGenerator");
const { terminalOperator } = require("./terminalOperator");

const randomNumber = generateRandomNumber();

terminalOperator("Please guess a number from 1000 to 9999 \n", randomNumber);
