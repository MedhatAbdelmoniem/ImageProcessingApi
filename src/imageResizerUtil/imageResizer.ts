import express from 'express';
import ImageChecker from './imageChecker';
import resizer from './resize';

const routes = express.Router();

routes.get('/', async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.send('Please write your image name and your sizes in the url');
  } else if (req.query.filename && req.query.width && req.query.height) {
    if (await ImageChecker(req.query.filename as string)) {
      resizer(req.query.filename as string, req.query.width as string, req.query.height as string);
    } else {
      res.send('Please enter a valid name');
    }
  } else {
    res.send('Please write filename or a size');
  }
});

export default routes;
