import express from 'express';
import ImageChecker from './imageChecker';

const routes = express.Router();

routes.get('/', async (req, res)=>{
    if(Object.keys(req.query).length === 0){
        res.send('Please write your image name and your sizes in the url');
    }else if(req.query.filename){
        if(await ImageChecker(req.query.filename as string)){
            
        }else{
            res.send('Please enter a valid name');
        }
    }else{
        res.send('Please write filename');
    }
});

export default routes;