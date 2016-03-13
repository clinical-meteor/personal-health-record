describe('ClientServer test suites', function () {
  var server = meteor();
  var client = browser(server);

  it('should work for both client and server', function () {
    return server.execute(function () {
      // some code to execute
      Env.allow({DEBUG: true});
    }).then(function (value) {
      return client.execute(function () {
        // some code to execute on server
        expect(Env.variable('DEBUG')).to.be.ok;
        expect(Env.variable('DEBUG')).to.equal(true);
      });
    });
  });
});
