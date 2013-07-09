var protractor = require('protractor');

describe('my app', function () {
  var ptor;
  describe('logging in', function () {
    ptor = protractor.getInstance();

    beforeEach(function () {
      ptor.get('/');
    });

    it('should authenticate', function() {
      ptor.findElement(protractor.By.input('credentials.username')).sendKeys('Ralph');
      ptor.findElement(protractor.By.input('credentials.password')).sendKeys('Wiggum');

      ptor.findElement(protractor.By.id('log-in')).click()
      var message = ptor.findElement(protractor.By.css('.alert-box')).getText().then(function(text) {
        expect(text).toEqual('mom');
        console.log(text);
      });
    });
  });
});
