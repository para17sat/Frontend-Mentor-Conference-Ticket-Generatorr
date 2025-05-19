const form = document.getElementById('ticket-form');
 const style = document.createElement('style');
style.textContent = `
.attribution {
      font-size: 11px;
      text-align: center;
      margin-top: 2rem;
    }

    .attribution a {
      color: hsl(228, 13%, 48%);
    }

    .upload-box {
      border: 2px dashed #ccc;
      padding: 20px;
      text-align: center;
      cursor: pointer;
      margin-bottom: 1rem;
    }

    .file-input {
      display: none;
    }

    form {
      max-width: 400px;
      margin: 0 auto;
      font-family: sans-serif;
    }

    .form-item {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 0.75rem 1.5rem;
      background-color: #889a9c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #84289b50;
    }

    .image-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 1rem;
    }

    .svg-image img {
      width: 50px;
      height: 50px;
    }
`;
document.head.appendChild(style);
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
