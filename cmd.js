#!/usr/bin/env node
var app = require('./index');
var path = process.cwd() + '/package.json';
app(path);
