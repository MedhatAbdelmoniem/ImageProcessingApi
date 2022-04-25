import fs from 'fs';

let imgsNames: string[] = [];

const checkRepeating = async (
  imgName: string,
  width: string,
  height: string
): Promise<boolean> => {
  if (!fs.existsSync(__dirname + '/thumb')) {
    fs.mkdir(__dirname + '/thumb', (err) => {
      console.log(err);
    });
  }
  const func = () =>
    new Promise((res) => {
      fs.readdir(__dirname + '/thumb', (err, files) => {
        res(files);
      });
    });
  imgsNames = (await func()) as string[];
  if (imgsNames === undefined) {
    return false;
  }
  if (imgsNames.includes(`${imgName}${width}x${height}.jpg`)) {
    return false;
  } else {
    return true;
  }
};
export default checkRepeating;
