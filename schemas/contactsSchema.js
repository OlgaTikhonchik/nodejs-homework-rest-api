const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    .regex(/^\d{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be a 10-digit number",
    }),
});

module.exports = {
  contactSchema,
};
