import joi from "joi";

export const signUp = {
  body: joi
    .object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      age: joi.number().integer(),
      password: joi
        .string()
        .pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        )
        .required(),
      confirmation: joi.string().valid(joi.ref("password")).required(),
    })
    .required(),
};

export const signIn = {
  body: joi
    .object({
      email: joi.string().email().required(),
      password: joi
        .string()
        .pattern(
          new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
        )
        .required(),
    })
    .required(),
};
