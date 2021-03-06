import express from 'express';
import ImageChecker from './imageChecker';
import resizer from './resize';
import checkRepeating from './checkRepeating';

const routes = express.Router();

routes.get('/', async (req: express.Request, res: express.Response) => {
  if (Object.keys(req.query).length === 0) {
    res.send('Please write your image name and your sizes in the url');
  } else if (req.query.filename && req.query.width && req.query.height) {
    if (
      (await ImageChecker(req.query.filename as string)) &&
      !isNaN(parseInt(req.query.width.toString())) &&
      !isNaN(parseInt(req.query.height.toString())) &&
      parseInt(req.query.width.toString()) > 0 &&
      parseInt(req.query.height.toString()) > 0
    ) {
      if (
        await checkRepeating(
          req.query.filename as string,
          req.query.width as string,
          req.query.height as string
        )
      ) {
        if (
          await resizer(
            req.query.filename as string,
            req.query.width as string,
            req.query.height as string
          )
        ) {
          res.sendFile(
            __dirname +
              `/thumb/${req.query.filename}${req.query.width}x${req.query.height}.jpg`
          );
        }
      } else {
        res.sendFile(
          __dirname +
            `/thumb/${req.query.filename}${req.query.width}x${req.query.height}.jpg`
        );
      }
    } else {
      res.send('Please enter a valid name or a valid w and h');
    }
  } else {
    res.send('Please write filename or a size');
  }
});

export default routes;
