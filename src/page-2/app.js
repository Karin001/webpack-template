 import './style.scss'
 //import _ from 'lodash'
 import {sayHello} from '../utils/say'
 import $ from 'jquery'
// console.log(_.join([1,2,3],'-'))
var btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!'
document.body.appendChild(btn);
 sayHello();