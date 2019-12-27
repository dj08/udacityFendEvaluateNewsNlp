export function activateSubmitIfValidUrl() {
    let formText = document.getElementById('name').value;
    if (validateUrl(formText)) {
	document.getElementById('submit_button').disabled=false;
    }
}

// Borrowed from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validateUrl(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i' // fragment locator
    );
    return !!pattern.test(str);
}
