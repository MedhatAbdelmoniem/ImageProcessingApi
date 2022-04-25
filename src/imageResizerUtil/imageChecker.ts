import fs from 'fs';

let imgsNames: string[];
const ImageChecker = async (imgName: string) : Promise<boolean>=>{
    const func = () => new Promise((res, rej) => {
        fs.readdir('./full',(err, files)=>{
            res(files); 
        });
    });
    imgsNames = await func() as string[];
    if(imgsNames.includes(`${imgName}.jpg`)){
        return true;
    }else{
        return false;
    }
}

export default ImageChecker;