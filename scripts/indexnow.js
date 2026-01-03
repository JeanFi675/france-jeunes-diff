import https from 'https';

const HOST = 'www.bing.com';
const KEY = '8a54d2e9b1f749c6832a5e4d2a1b9c80';
const KEY_LOCATION = `https://fjd2026.caflarochebonneville.fr/key-${KEY}.txt`;
const URL_LIST = [
  'https://fjd2026.caflarochebonneville.fr/',
  'https://fjd2026.caflarochebonneville.fr/blog/',
];

const data = JSON.stringify({
  host: 'fjd2026.caflarochebonneville.fr',
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URL_LIST,
});

const options = {
  hostname: HOST,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length,
  },
};

console.log('🚀 IndexNow: Submission started...');

const req = https.request(options, (res) => {
  console.log(`📡 IndexNow Status: ${res.statusCode}`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

  if (res.statusCode >= 200 && res.statusCode < 300) {
    console.log('\n✅ IndexNow: URLs successfully submitted!');
  } else {
    console.log('\n❌ IndexNow: Submission failed.');
  }
});

req.on('error', (error) => {
  console.error('\n❌ IndexNow Error:', error);
});

req.write(data);
req.end();
