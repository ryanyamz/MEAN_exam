const Survey = require('mongoose').model('Survey');
const User = require('mongoose').model('User');

module.exports = {
 index(request, response) {
   Survey
    .find({})
    .populate('user')
    .then(surveys => response.json(surveys))
    .catch(error => console.log('error in survey.js index', error));
 },

 create(request, response) {
   console.log(request.body)
   Survey.create(request.body)
    .then(survey => {
      User.findById(survey.user)
        .then(user => {
          user.surveys.push(survey);
          user.save()
            .then(() => {
              response.json(survey);
            });
        })
    })
    .catch(error => {
       console.log('error in bucket_list.js create');
       response.status(422).json(
         Object.keys(error.errors).map(key => error.errors[key].message)
       );
     });
 },

  show(request, response) {
    Survey.findById(request.params.id)
      .then(survey => response.json(survey))
      .catch(console.log);
  },

  update(request, response) {
    console.log("update", response)
    Survey.findOne({_id: request.params.id})
      .then(survey => {
        survey.vote1 = request.body.vote1;
        survey.vote2 = request.body.vote2;
        survey.vote3 = request.body.vote3;
        survey.vote4 = request.body.vote4;
        console.log('survey & req.body', survey, request.body);
        survey.save()
          .then(survey => response.json(survey))
          .catch(console.log);

      })
      .catch(error => {
        console.log('error updating survey');
        response.status(422).json(
          Object.keys(error.errors).map(key => error.errors[key].message)
        )
      })
  },

  destroy(request, response) {
    Survey.findByIdAndRemove(request.params.id)
    .then(survey => response.json(survey))
    .catch(error => console.log(error));
  }

}
