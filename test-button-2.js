const container2 = document.getElementById('button_container');

if (container2) {
  const myBtn = document.createElement('button');
  myBtn.innerHTML = 'Test Button 2';
  container2.innerHTML = '';
  container2.appendChild(myBtn);
}