import { eyes, browse } from '@applitools/eyes-playwright';

describe('Advertisement Board', () => {
  it('should have no visual regressions', async () => {
    await eyes.open({
      appName: 'Advertisement Board App',
      testName: 'Advertisement Board Visual Regression Test',
    });
    await browse(({ page, eyes }) => {
      page.goto('http://localhost:3000/');
      eyes.checkWindow('Advertisement Board Page');
    });
    await eyes.close();
  });
});
