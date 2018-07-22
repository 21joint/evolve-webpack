import {prefix} from '../../../conf';
import Home from 'html-loader!./home.html';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = Home;
  if (options)
    element.classList.add(options.className);
  element.setAttribute('id', options.id);
  return element;
}

document.body.querySelector('.' + prefix + '-wrapper').appendChild(component({
  className: prefix + '-view',
  id: prefix + 'Home'
}));
