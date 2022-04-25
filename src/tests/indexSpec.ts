import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe('Main Testing index', ()=>{
    it('Testing that server is running', async ()=>{
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    });
});