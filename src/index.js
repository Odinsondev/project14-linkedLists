import './normalize.css';
import './style.css';

import { createLinkedList } from './linkedListModule';

//cache DOM

const listOne = createLinkedList();

//bind events

//functions

listOne.append('dog');
listOne.append('cat');
listOne.append('parrot');
listOne.append('hamster');
listOne.append('snake');
listOne.append('turtle');

console.log(listOne.listToString());

listOne.prepend('dragon');
console.log(listOne.listToString());

console.log(listOne.size());

console.log(listOne.logHead());

console.log(listOne.logTail());

console.log(listOne.at(2));

listOne.pop();
console.log(listOne.listToString());

console.log(listOne.contains('wolf'));
console.log(listOne.contains('snake'));

console.log(listOne.find('dragon'));

listOne.insertAt('wolf', 2);
console.log(listOne.listToString());

listOne.removeAt(2);
console.log(listOne.listToString());
