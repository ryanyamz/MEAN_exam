const surveyController = require('../../controllers/surveys');
const router = require('express').Router();

module.exports = router
  .get('/', surveyController.index)
  .post('/', surveyController.create)
  .delete('/:id', surveyController.destroy)
  .get('/:id', surveyController.show)
  .put('/:id', surveyController.update);
