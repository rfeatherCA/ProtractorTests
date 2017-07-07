describe('CDBU Modern Software Factory UI Test - AC-CDBU Pre-Prod Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://ac-raffle-preprod.us-west-2.elasticbeanstalk.com');
    element(by.css('[name="name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('I\'m In!')).click();
    });
});