import fs from 'fs';

let imgsNames: string[] = [];

const checkRepeating = async (imgName: string, width: string, height: string): Promise<boolean> => {
  const func = () =>
    new Promise((res) => {
      fs.readdir('./thumb', (err, files) => {
        res(files);
      });
    });
  imgsNames = (await func()) as string[];
  if (imgsNames.includes(`${imgName}${width}x${height}.jpg`)) {
    return false;
  } else {
    return true;
  }
};
export default checkRepeating;