const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

let formData = { email: "", message: "" };

form.addEventListener('input', saveToStorage);

function saveToStorage(event) {

if (event.target.nodeName === 'INPUT') {
    formData.email = (event.target.value).trim();
} else {
    formData.message = (event.target.value).trim();
}

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const savedData = localStorage.getItem(STORAGE_KEY);


if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  document.querySelector('[name="email"]').value = formData.email;
  document.querySelector('[name="message"]').value = formData.message;
}


form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.clear();
    form.reset();
}