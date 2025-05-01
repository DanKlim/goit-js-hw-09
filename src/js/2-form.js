let formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function loadStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    formData = { ...formData, ...parsedData };
  }
}

form.addEventListener('input', saveToStorage);
form.addEventListener('submit', submitForm);

function saveToStorage(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function submitForm(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

loadStorage();
