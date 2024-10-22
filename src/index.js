import './normalize.css';
import './style.css';

import { createLinkedList } from './linkedListModule';

//cache DOM

const listOne = createLinkedList();
listOne.append('dog');
listOne.append('cat');
listOne.append('parrot');
listOne.append('hamster');
listOne.append('snake');
listOne.append('turtle');

const resultText = document.getElementById('result-text');
const linkedListString = document.getElementById('linked-list-string');
const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');

const appendButton = document.getElementById('append-button');
const prependButton = document.getElementById('prepend-button');
const sizeButton = document.getElementById('size-button');
const logHeadButton = document.getElementById('log-head-button');
const logTailButton = document.getElementById('log-tail-button');
const atButton = document.getElementById('at-button');
const popButton = document.getElementById('pop-button');
const containsButton = document.getElementById('contains-button');
const findButton = document.getElementById('find-button');
const insertAtButton = document.getElementById('insert-at-button');
const removeAtButton = document.getElementById('remove-at-button');

//bind events

appendButton.addEventListener('click', appendList);
prependButton.addEventListener('click', prependList);
sizeButton.addEventListener('click', logListSize);
logHeadButton.addEventListener('click', logListHead);
logTailButton.addEventListener('click', logListTail);
atButton.addEventListener('click', logDataAtIndex);
popButton.addEventListener('click', popLastNode);
containsButton.addEventListener('click', logIfListContains);
findButton.addEventListener('click', findIndex);
insertAtButton.addEventListener('click', insertNodeAt);
removeAtButton.addEventListener('click', removeNodeAt);

//functions

function listToString() {
  linkedListString.textContent = listOne.listToString();
}
listToString();

function appendList() {
  let newNodeValue = input.value;
  listOne.append(newNodeValue);
  listToString();
  input.value = '';
}

function prependList() {
  let newNodeValue = input.value;
  listOne.prepend(newNodeValue);
  listToString();
  input.value = '';
}

function logListSize() {
  resultText.textContent = 'List size: ' + listOne.size() + ' nodes';
}

function logListHead() {
  resultText.textContent = 'Head: ' + listOne.logHead().value;
}

function logListTail() {
  resultText.textContent = 'Tail: ' + listOne.logTail().value;
}

function logDataAtIndex() {
  let nodeIndex = Number(input2.value);

  if (nodeIndex === 0 || nodeIndex < 0) {
    return;
  } else {
    resultText.textContent = listOne.at(nodeIndex).value;
    listToString();
    input2.value = '';
  }
}

function popLastNode() {
  listOne.pop();
  resultText.textContent = 'Last node removed';
  listToString();
}

function logIfListContains() {
  let string = input.value;
  let result = listOne.contains(string);
  if (result === true) {
    resultText.textContent = 'True';
  } else if (result === false) {
    resultText.textContent = 'False';
  }
  input.value = '';
}

function findIndex() {
  let string = input.value;
  let result = listOne.find(string);
  if (result !== null) {
    resultText.textContent = 'Index: ' + result;
  } else if (result === null) {
    resultText.textContent = 'Unable to find';
  }
  input.value = '';
}

function insertNodeAt() {
  let data = input3.value;
  let nodeIndex = Number(input4.value);

  if (nodeIndex === 0 || nodeIndex < 0) {
    return;
  } else {
    listOne.insertAt(data, nodeIndex);
    resultText.textContent = 'List updated';
    listToString();
    input3.value = '';
    input4.value = '';
  }
}

function removeNodeAt() {
  let nodeIndex = Number(input4.value);

  if (nodeIndex === 0 || nodeIndex < 0) {
    return;
  } else {
    listOne.removeAt(nodeIndex);
    resultText.textContent = 'List updated';
    listToString();
    input4.value = '';
  }
}
