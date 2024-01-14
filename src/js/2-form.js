const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';
try {
  email.value = JSON.parse(localStorage.getItem(localStorageKey)).email ?? '';
  message.value =
    JSON.parse(localStorage.getItem(localStorageKey)).message ?? '';
} catch (error) {}

form.addEventListener('input', () =>
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    })
  )
);
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  localStorage.removeItem(localStorageKey);
  form.reset();
});
