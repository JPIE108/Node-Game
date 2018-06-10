
const writeEvent = (text) => {
  // ul element
  const parent = document.querySelector('#events');

  //li element
  const el = document.createElement('li');
  el.innerHTML = text;

  parent.appendChild(el);
};

const onFormSubmitted = (e) => {
  e.preventDefault();

  const input = document.querySelector('#main');
  const text = input.value;
  input.value = '';

  sock.emit('message', text);
};

writeEvent('Welcome to the chat room');

const sock = io();
sock.on('message', writeEvent);

document.querySelector('#chat-form')
.addEventListener('submit', onFormSubmitted);
