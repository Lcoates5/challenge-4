// TODO: Create a variable that selects the form element
const form = document.getElementById('form');
const usernameEl = document.getElementById('username')
const titleEl = document.getElementById('title')
const contentEl = document.getElementById('content')
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.


function pageSubmission(event) {
  event.preventDefault();
}

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let formValue = {
    username:usernameEl.value,
    title:titleEl.value,
    content:contentEl.value
  }
  if (formValue.username === '' || formValue.title === '' || formValue.content === '') {
    const errorMessage = document.getElementById('errormessage');
    errorMessage.innerText = 'Please complete the form';
    return
  }

  localStorage.setItem('form', JSON.stringify(formValue));
  redirectPage('blog.html');
});
