exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8888',
      show: true,
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'TodoWeb'
}
