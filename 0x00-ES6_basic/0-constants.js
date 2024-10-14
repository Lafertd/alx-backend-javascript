// 0-constants.js
export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use const because 'task' does not change
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use let because 'combination' can change
  combination += getLast();
  return combination;
}