import {prefix} from '../../../conf';
import talent from 'html-loader!./talent.html';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = talent;
  if (options)
    element.classList.add(options.className);
  element.setAttribute('id', options.id);
  return element;
}

document.body.querySelector('.' + prefix + '-wrapper').appendChild(component({
  className: prefix + '-view',
  id: prefix + 'Talent'
}));
