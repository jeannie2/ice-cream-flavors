//'use strict';

const flavorsArray = require("./icecream.json");

const getRandomFlavor = () => {
    return flavorsArray[Math.floor(Math.random()*flavorsArray.length)];
}

const getAllFlavors = () => {
    return flavorsArray;
};

module.exports = {
 getRandomFlavor,
 getAllFlavors
};