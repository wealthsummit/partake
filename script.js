document.getElementById('userDataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;

    const data = {
        firstName,
        surname,
        phoneNumber,
        email,
        state,
    };

    fetch('https://script.google.com/macros/s/AKfycbw9vsk8eK2wsXhBqZEOz3mRBj_hSRBDiezQ3PTcdqWpXjnmhtJU6TKzp-vSslFn1eLz/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = 'Data submitted successfully!';
        document.getElementById('userDataForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Error submitting data.';
    });
});

