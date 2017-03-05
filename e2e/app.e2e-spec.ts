import { CitySmartWayPage } from './app.po';

describe('city-smart-way App', function() {
  let page: CitySmartWayPage;

  beforeEach(() => {
    page = new CitySmartWayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
