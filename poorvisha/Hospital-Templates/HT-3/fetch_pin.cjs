const https = require('https');

https.get('https://pin.it/11GlJyqHF', (res) => {
  // It will likely redirect, we need to follow the redirect
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      let data = '';
      res2.on('data', chunk => data += chunk);
      res2.on('end', () => {
        const match = data.match(/<meta property="og:image" content="(.*?)"/);
        if (match) console.log(match[1]);
        else console.log('no match');
      });
    });
  }
});
