import {prefix} from '../../../conf';
import Dining from 'html-loader!./dining.html';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = Dining;
  if (options)
    element.classList.add(options.className);
  element.setAttribute('id', options.id);
  return element;
}

document.body.appendChild(component({
  className: prefix + '-wrapper',
  id: prefix + 'Dining'
}));
