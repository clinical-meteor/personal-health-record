describe('Server test suites', function () {
  var server = meteor();
  it('execute should work', function () {
    // return a promise
    return server.execute(function () {
      expect(Env).not.to.be.empty;
    });
  });
});
