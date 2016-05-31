'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');

var AddOn = new mongoose.Schema({
  priceType: String,
  priceCents: {
    type: Number,
    validate: {
      validator: function(v) {
        console.log('this', this) // logs out the space document
        return this.priceType === 'FREE' ?
          !v :
          v;
      }
    }
  }
});

var Space = new mongoose.Schema({
  data: {
    addOns: [AddOn]
  }
});

var Venue = new mongoose.Schema({
  data: {
    spaces: [Space]
  }
});

module.exports = {
  Venue: Venue
  Space: Space,
  AddOn: Space
};
