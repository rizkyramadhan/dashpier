require('./api-init');
const Frisbee = require('frisbee');

export default new Frisbee({
  baseURI: 'https://dashpier.web.andromedia.co.id/', // optional
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).auth('admin:admin');
