const elements = ["Hola", "mundo", "Bootcamp", "🚀"];

let helloWorldBootcamp = '';
const separator = '/';
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  helloWorldBootcamp = i === elements.length - 1 ? helloWorldBootcamp + element :
    helloWorldBootcamp + element + separator;
}
console.log(helloWorldBootcamp);

const helloWorldBootcamp1 = elements.join('/');

console.log(helloWorldBootcamp1);

const baseForUrl = 'modulo IV algoritmos y cosas';

console.log(baseForUrl.split(' '));
const url = baseForUrl.split(' ').join('-').toLowerCase();

console.log(url);