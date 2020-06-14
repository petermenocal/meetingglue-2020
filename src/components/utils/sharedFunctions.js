const notRequired = name => {
  concessionsRequirements[name] = false;
};
const required = name => {
  concessionsRequirements[name] = true;
};

exports.notRequired = notRequired;
exports.required = required;
