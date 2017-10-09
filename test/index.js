global.fs = require('fs');
global.path = require('path');
global.chai = require('chai');
let request = require('supertest');

global.bitlyApiRequest = request('https://api-ssl.bitly.com');

