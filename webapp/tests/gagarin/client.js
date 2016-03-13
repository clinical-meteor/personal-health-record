describe('Client test suites', function () {
  var server = meteor();
  var client = browser(server);
  var a = 1;

  it('should just work', function () {
    return server.execute(function () { console.log('I am alive!'); });
  });
  it("should be able to access local variable", function () {
    return client.execute(function (a) {
      return a + 1;
    }, [ a ]); // array of arguments
  });
});
