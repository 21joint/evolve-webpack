import {prefix} from '../../../conf';
import Schedule from 'html-loader!./schedule.html';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = Schedule;
  if (options)
    element.classList.add(options.className);
  element.setAttribute('id', options.id);
  return element;
}

document.body.appendChild(component({
  className: prefix + '-wrapper',
  id: prefix + 'Schedule'
}));
