import Joi from "joi";

const schemaValidations = {
  AddTask: {
    name: Joi.string().min(2).required(),
    description: Joi.string().min(15).max(50).required(),
    projectName: Joi.string().required(),
    collaboratorName: Joi.string()
  },
  EditTask: {
    id: Joi.string().required(),
    name: Joi.string(),
    description: Joi.string(),
    projectName: Joi.string(),
    collaboratorName: Joi.string()
  },
  DeleteTask: Joi.string().required()
};

export default schemaValidations;