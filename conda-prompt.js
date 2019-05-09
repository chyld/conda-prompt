#!/usr/bin/env node

const { display } = require("./utilities.js");

display(process.env["CONDA_DEFAULT_ENV"]);
