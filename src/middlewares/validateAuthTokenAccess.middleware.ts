import { get } from 'lodash';
import * as jwt from 'jsonwebtoken';
import config from './../../config/default';
import { BadRequest } from '../skeleton/services/errors';

const validateAuthTokenAccessMiddleware = () => (req, _res, next) => {
  try {
    const userAuth = get(req.headers, 'authorization');
    const userAuthFinish = userAuth.replace('Bearer ', '');
    const payload = jwt.verify(userAuthFinish as string, config.token.secretKey);

    if (get(payload, 'idUser')) {
      req['user'] = payload;
      return next();
    }
  }catch (e) {
    throw new BadRequest('Access Invalid Token');
  }
};

export default validateAuthTokenAccessMiddleware;
