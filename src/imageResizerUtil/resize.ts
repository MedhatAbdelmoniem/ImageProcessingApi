import sharp from 'sharp';
import { promises as fs } from 'fs';
import { info } from 'console';

const resizer = async (imgName: string, width: string, height: string): Promise<boolean>=>{
    const func = () =>
    new Promise((res) => {
        sharp(`./full/${imgName}.jpg`).resize(parseInt(width), parseInt(height)).toFile(`./thumb/${imgName}${width}x${height}.jpg`).then(()=>{
            res(true);
        });
    });
    return await func() as boolean;
};

export default resizer;
