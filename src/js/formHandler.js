async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // checkForName(formText)
    
    console.log("::: Form Submitted :::")
    const apiResponse = await fetch('http://localhost:8081/analyze', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({input: formText})
    })
          .then(res => res.json())
          .then(res => {
              console.log(res);
              document.getElementById('results').innerHTML = JSON.stringify(res.response, null, '\t');
          })
          .catch(err => console.log(err))
}

export { handleSubmit }
