async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
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
          .then(res => updateResultsUi(res.response))
          .catch(err => console.log(err));
}

function uiHelper(id, value) {
    document.getElementById(id).innerHTML = value
}

function updateResultsUi(resultsFromApi) {
    const polarityConfidence =
          (resultsFromApi.polarity_confidence * 100).toFixed(2);
    const subjectivityConfidence =
          (resultsFromApi.subjectivity_confidence * 100).toFixed(2);
    const polarityText =
          `${resultsFromApi.polarity} (${polarityConfidence}% Confidence)`;
    const subjectivityText =
          `${resultsFromApi.subjectivity} (${subjectivityConfidence}% Confidence)`;
    
    uiHelper('textSubmitted',
             `Text Processed: ${resultsFromApi.text.substring(0,20)}...`);
    uiHelper('polarity', `Polarity: ${polarityText}`);
    uiHelper('subjectivity', `Subjectivity: ${subjectivityText}`);
}

export { handleSubmit }
