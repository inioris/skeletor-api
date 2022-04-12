import { set } from 'lodash';

const addDateInPostAndUpdate = (req, _res, next) => {
  const createdAt = new Date();
  const updatedAt = new Date();
  set(req.body, 'createdAt', createdAt);
  set(req.body, 'updatedAt', updatedAt);
  next();
};

export default addDateInPostAndUpdate;
