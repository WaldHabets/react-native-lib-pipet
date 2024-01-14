"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate_input_time = validate_input_time;
const validate_input_time_regex = /^([0?[0-9]|1[0-9]|2[0-3])(:|.|,|-)[0-5][0-9]$/;
function validate_input_time(value) {
  if (!value || !value.match) return false;
  return !!value.match(validate_input_time_regex);
}
//# sourceMappingURL=validators.js.map