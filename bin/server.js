#!/usr/bin/env node
'use strict';

const express = require('express');
const version = require('../package.json').version

const app = express()
const PORT = 8080;

app.use((req, res) => {
  res.send(version.toString());
});

app.listen(PORT, () => {
  console.log(`Listening ${ PORT }`);
});
