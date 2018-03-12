const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    User.findOne({ name: request.body.name })
      .then(user => {
        if (!user) {
          User.create(request.body)
            .then(user => {
              console.log('new user saved');
              completeLogin(request, response, user);
            })
        }
        completeLogin(request, response, user);
        console.log('logged in user server side');
      })
      .catch(error => {
        console.log('server login error', error);
      });
  },

  logout(request, response) {
    console.log('logging out of server side');
    request.session.destroy();
    response.clearCookie('userID');

    response.json(true);
  },

  show(request, response) {
    console.log('grabbing 1 user');
    User.findById(request.params.id) //make sure this (id) matches how you put it in the route
      .then(user => response.json(user))
      .catch(() => console.log('error in users.js show'));
  },

};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  response.cookie('userID', user._id.toString());
  response.json(user);
}
