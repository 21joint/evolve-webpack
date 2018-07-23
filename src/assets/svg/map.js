import SvgMap from 'html-loader?minimize=false!./map.html'


function component (options) {
  const element = document.createElement('div');
  element.innerHTML = SvgMap;
  if (options)
    element.classList.add(options.className);
  return element;
}

document.body.appendChild(component());
