const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRoomInput(data) {
  let errors = {};


  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, {min: 5, max: 30})) {
    errors.text = 'Room must be between 5 and 30 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};