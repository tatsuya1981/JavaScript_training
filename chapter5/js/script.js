const menu = document.querySelector('#menu');

const lists = [
  'apple.jpg',
  'fig.jpg',
  'lemon.jpg',
  'lime.jpg',
  'mango.jpg',
  'strawberry.jpg',
];
// console.log(lists);
const content = `<div><img src="images/${lists[0]}" alt="strawberry"></div>
    <div><img src="images/${lists[1]}" alt="strawberry"></div>
    <div><img src="images/${lists[2]}" alt="strawberry"></div>
    <div><img src="images/${lists[3]}" alt="strawberry"></div>
    <div><img src="images/${lists[4]}" alt="strawberry"></div>
    <div><img src="images/${lists[5]}" alt="strawberry"></div>
`;

menu.insertAdjacentHTML('beforeend', content);