// require('static/main.scss');
// import 'static/main.scss'
import '@/static/main.scss'

var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello 555 World</h1>';
app.appendChild(sub());
document.body.appendChild(app);