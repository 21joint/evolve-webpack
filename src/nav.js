import {prefix} from '../conf';
import './assets/scss/nav.scss';
import Nav from 'html-loader?minimize=false!./nav.html';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = Nav;
  if (options)
    element.classList.add(options.className);
  return element;
}

(document.querySelector('.' + prefix + '-wrapper') || document.body).appendChild(component());
