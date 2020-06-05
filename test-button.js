const container = document.getElementById('button_container');

if (container) {
  const myBtn = document.createElement('button')
  myBtn.innerHTML = 'Test Button'
  container.innerHTML = '';
  container.appendChild(myBtn);
}