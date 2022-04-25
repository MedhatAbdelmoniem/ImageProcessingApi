import app from '../..';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing wrong api calls', () => {
  it('Testing a wrong filename', async () => {
    const response = await (await request.get('/images?filename=test')).text;
    expect(response).toEqual('Please write filename or a size');
  });

  it('Testing with no width', async () => {
    const response = await (
      await request.get('/images?filename=palmtunnel')
    ).text;
    expect(response).toEqual('Please write filename or a size');
  });
});
