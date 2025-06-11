const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    // Hide all contents
    boxes.forEach(b => {
      b.querySelector('.box-content').classList.add('hidden');
    });

    // Show the clicked one
    const content = box.querySelector('.box-content');
    if (content) {
      content.classList.remove('hidden');
    }

    // Select the radio button
    const radio = box.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
  });
});
