import resizer from '../../imageResizerUtil/resize';

describe('Testing that resizer is working', ()=>{
    it('Testing normal filename, w and h', async ()=>{
        expect(async()=> {await resizer('santamonicaa', '200', '200');}).not.toThrow();
    });
});