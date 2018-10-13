const express = require('express');
const path    = require("path");

const server = express();

const lessons = [
    'alignment-and-centering',
    'autoprefixer',
    'equal-height-elements',
    'flex-direction',
    'flex-grow-and-shrink',
    'flex-wrapping-and-columns',
    'flexbox-app-layout',
    'flexbox-form',
    'flexbox-nav',
    'flexbox-sizing',
    'intro',
    'mobile-reordering',
    'nesting-flexbox',
    'ordering',
    'pricing-grid'
];

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

lessons.forEach(lesson => {
   server.use(`/${lesson}`, express.static(lesson));
});


server.listen(8000, () => {
    console.log('Listening on port 8000');
})