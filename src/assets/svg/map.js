import SvgMap from 'html-loader!./map.html'
import {prefix} from '../../../conf';


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = SvgMap;
  if (options)
    element.classList.add(options.className);
  return element;
}

document.body.appendChild(component());
