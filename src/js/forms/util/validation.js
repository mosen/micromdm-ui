/**
 * Validate that given keys are not falsy.
 *
 * @param keys {Array} Array of field names to check
 * @param values {Object} Redux-form values
 * @param errors {Object} Errors object which will be modified by this function.
 */
export function validateNotEmpty(keys, values, errors) {
  for (let key in keys) {
    if (!keys.hasOwnProperty(key)) continue;
    if (values.hasOwnProperty(key) && !values[key]) {
      errors[key] = 'Required';
    }
  }
}
