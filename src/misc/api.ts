require('./api-init');
const Frisbee = require('frisbee');

export default new Frisbee({
  baseURI: 'https://dashpier.rx.plansys.co', // optional
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}).auth('admin:admin');
