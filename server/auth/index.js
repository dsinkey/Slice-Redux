var crypto = require('crypto');
var SliceStrategy = require('passport-slice').Strategy;

module.exports = function(passport, db){
  
  passport.serializeUser(function(userId, done){
    done(null, ob);
  });

  passport.deserializeUser(function(userId, done){
    done(null, ob);
  });

};