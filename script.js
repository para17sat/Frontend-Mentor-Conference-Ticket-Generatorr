const form = document.getElementById('ticket-form');

const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileInput');

const uploadImage = document.getElementById('uploadImage');
const messageAction = document.getElementById('messageAction');
const fileActions = document.getElementById('fileActions');
const removeImage = document.getElementById('removeimage');
const changeImage = document.getElementById('changeimage');
const uploadInt = document.getElementById('uploadint');

const textInputs = document.querySelectorAll('.required');
const formData = {
  image: '',
  name: '',
};

dropArea.addEventListener('click', () => {
  fileInput.click();
});


dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});


dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('dragover');

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;

    dropArea.textContent = `Selected file: ${files[0].name}`;
  }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    dropArea.textContent = `Selected file: ${fileInput.files[0].name}`;
  }
});
