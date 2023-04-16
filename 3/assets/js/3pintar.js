function pintar() {
    ele = document.querySelector('#ele1');
    ele.style.backgroundColor = 'yellow';
  }
  
  ele = document.querySelector('#ele1');
  ele.style.backgroundColor = 'green';
  ele.addEventListener("click", pintar);