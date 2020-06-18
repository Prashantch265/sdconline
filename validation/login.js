const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.std_id = !isEmpty(data.std_id) ? data.std_id : "";  
    data.email = !isEmpty(data.email) ? data.email : "";

    //name check
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
      }
    
    //id check
    if (Validator.isEmpty(data.std_id)) {
        errors.id = "std_id is required";
      }

    // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};