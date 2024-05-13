const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
populateForm();

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);

function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = event.target.elements;
  const inputEmail = email.value.trim();
  const inputMessage = message.value.trim();

  if (!inputEmail || !inputMessage) {
    alert('Please fill the empty fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function handleInput(event) {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}
