let node = document.querySelector('.app');

const createDomElement = (type, config) => {
  const {id, props, text, clazz, elements} = config;
  let el = document.createElement(type);
  id && el.setAttribute('id', id);
  props && props.forEach(e => el.setAttribute(e.name, e.value));
  text ? el.textContent = text : el;
  clazz && clazz.forEach(e => el.classList.add(e));
  elements && elements.forEach(e => el.append(e));
  return el;
}


let element = createDomElement('h1', {
  id: 'title-part1',
  props: [{name: 'style', value: 'color:red;'}],
  text: 'Hello',
  clazz: ['clazz1', 'clazz2'],
  elements: []
});
let element1 = createDomElement('h2', {
  id: 'title-part2',
  props: [{name: 'style', value: 'color:green;'}],
  text: 'World!',
  clazz: ['clazz3', 'clazz4'],
  elements: []
});
let elWrap = createDomElement('div', {
  id: 'wrap',
  clazz: ['clazz1', 'clazz2'],
  elements: [
    createDomElement('span', {
      id: 'p1',
      props: [{name: 'style', value: 'color:blue; font-size: 20px;'}],
      text: 'Lorem',
      clazz: ['clazz3', 'clazz4'],
      elements: []
    }),
    createDomElement('span', {
      id: 'p2',
      props: [{name: 'style', value: 'color:yellow; font-size: 20px;'}],
      text: 'Isput!',
      clazz: ['clazz3', 'clazz4'],
      elements: []
    })
  ]
});
let wrap = createDomElement('div', {
  id: 'wrap',
  props: [{name: 'style', value: 'background-color: #160024; text-align: center;'}],
  clazz: ['clazz1', 'clazz2'],
  elements: [element, element1, elWrap]
})


node.append(wrap);
