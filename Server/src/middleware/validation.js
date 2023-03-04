const dataMethods = ["body", "query", "params"];
const validation = (schema) => {
  return (req, res, next) => {
    const validationErr = [];
    dataMethods.forEach((key) => {
      if (schema[key]) {
        const validationResult = schema[key].validate(req[key], {
          abortEarly: false,
        });
        if (validationResult.error) {
          validationErr.push(validationResult.error.details);
          console.log(validationResult.error);
        }
      }
    });
    if (validationErr.length) {
      return res.json({ message: "Validation Error", validationErr });
    }
    return next();
  };
};

export default validation;
