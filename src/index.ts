import express from 'express';
import imageResizerRoute from './imageResizerUtil/imageResizer';

const app = express();
const port = 3000;

app.use('/images', imageResizerRoute);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello and welcome to Image Resizer');
});

app.listen(port);

export default app;
