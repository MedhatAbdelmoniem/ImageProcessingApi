import sharp from 'sharp';
import { promises as fs } from 'fs';

const resizer = async (imgName: string, width: string, height: string)=>{
    fs.mkdir('./thumb');
    sharp(`./full/${imgName}.jpg`).resize(parseInt(width), parseInt(height)).toFile(`./thumb/${imgName}${width}x${height}.jpg`);
};

export default resizer;
