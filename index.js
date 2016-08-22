var fetch = require('node-fetch'),
    assert = require('assert'),
    fs = require('fs');

assert.ok(process.argv[2], 'Usage: node github-contributions-scraper.js <output-file>');

fetch('https://github.com/users/donmccurdy/contributions')
  .then((res) => res.text())
  .then(loadGraph);

function loadGraph (text) {
  var data,
      re = /(data-count="\d".*data-date="\d{4}-\d{2}-\d{2}")/g,
      matches = text.match(re);
  data = matches.map(function (match) {
    return {
      count: +match.match(/data-count="(\d)"/)[1],
      date: match.match(/data-date="(\d{4}-\d{2}-\d{2})"/)[1]
    };
  });
  fs.writeFile(process.argv[2], JSON.stringify(data, null, 2), function (err) {
    if (err) console.error(err);
    else console.info('Exported %d days\' events', data.length);
  });
}
