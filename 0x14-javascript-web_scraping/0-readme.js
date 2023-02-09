#!/usr/bin/node

const fs = require('fs');

if (process.argv.length < 3) {
  console.error('Usage: node script.js file_path');
  process.exit(1);
}

const file = process.argv[2];

fs.readFile(file, 'utf-8', function (err, data) {
  if (err) {
    console.error(`An error occurred while reading the file: ${err}`);
    process.exit(1);
  } else {
    console.log(data);
  }
});
