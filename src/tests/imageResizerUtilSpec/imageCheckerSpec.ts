import ImageChecker from '../../imageResizerUtil/imageChecker';

describe('Testing image exist or not', () => {
  it('see if image not exist', async () => {
    expect(await ImageChecker('noImage')).toBeFalsy();
  });

  it('see if an image exist', async () => {
    expect(await ImageChecker('encenadaport')).toBeTruthy();
  });
});
