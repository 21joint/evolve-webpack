import {prefix} from '../../../conf';
import Dining from 'html-loader!./dining.html';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = Dining;
  if (options)
    options.className && element.classList.add(options.className || ' ');
  element.setAttribute('id', options.id);
  return element.innerHTML;
}

(document.querySelector('.' + prefix + '-wrapper') || document.body).innerHTML = component({
  // className: prefix + '-wrapper',
  id: prefix + 'Dining'
});

