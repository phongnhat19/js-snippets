const container = document.getElementById('button_container');

if (container) {
  const myBtn = document.createElement('button');
  myBtn.innerHTML = 'Test Button 2';
  container.innerHTML = '';
  container.appendChild(myBtn);
}