'use strict';
var util = require('util');
var models = require('../models');

var members = {
    getAvailableMembers: function availablefn(req, res, next){
        var err = new Error({message: 'Denied' });
        next(err);
    }
};

module.exports = members;