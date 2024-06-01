
document.addEventListener('DOMContentLoaded', function() {
    const titles = ["FULL STACK DEVELOPER", "FRONT-END DEVELOPER", "BACK-END DEVELOPER"];
    let currentIndex = 0;
    const dynamicTextElement = document.getElementById('dynamic-text');

    function changeTitle() {
       
        dynamicTextElement.classList.add('fade-out');

     
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            dynamicTextElement.textContent = titles[currentIndex];
            dynamicTextElement.classList.remove('fade-out');
        }, 500); 
    }

    setInterval(changeTitle, 3000); 
});





// form 

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var form = event.target;
        var formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Reset the form
                showAlert('Thank you for your message!', 'success'); // Show success alert
            } else {
                showAlert('There was a problem with your submission. Please try again.', 'danger'); // Show error alert
            }
        }).catch(error => {
            console.error('Error:', error);
            showAlert('There was a problem with your submission. Please try again.', 'danger'); // Show error alert
        });
    });

    function showAlert(message, type) {
        var alertPlaceholder = document.getElementById('alertPlaceholder');
        var wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        alertPlaceholder.append(wrapper);

        // Automatically remove the alert after 5 seconds
        setTimeout(() => {
            wrapper.remove();
        }, 5000);
    }
