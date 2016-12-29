"use strict";

var request = require("request");

var exports = module.exports = {};
exports.shorten = function (longUrl, apiKey, callback) {
    request({
        uri: "https://www.googleapis.com/urlshortener/v1/url?key=" + apiKey,
        method: "POST",
        json: {longUrl: longUrl}
    }, function (error, response, body) {
        if ((response && response.statusCode === 200) && body.id) {
            callback(null, body.id);
        } else if (error) {
            callback(error)
        } else {
            callback(new Error("Unable to shorten URL"));
        }
    });
};