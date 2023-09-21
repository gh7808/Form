const scriptUrl = '';
const form = document.forms['google-sheet']

form.addEventListener('submit',e => {
    e.preventDeafult()
    fetch(scriptURL, {method: 'POST',body: new FormData(form)})
        .then(response => alert("Thanks for Contacting us..! We will Contact You Soon..."))
        .catch(error => comsole.error('Error!', error.message))

})