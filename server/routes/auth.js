module.exports = function(app, passport){
  app.get('/auth/slice', passport.authenticate('slice'));

  app.get('/auth/slice/callback',
    passport.authenticate('slice', {
      successRedirect: '/', failureRedirect: '/login'
    })
  );
};