$(document).ready(function () {
    const form = $("#loanForm");
    const submissionStatus = $("#submissionStatus");

    form.submit(function (event) {
        event.preventDefault();

        if (form[0].checkValidity()) {
            submitForm();
        } else {
            form.addClass('was-validated');
        }
    });

    function submitForm() {
        const fullName = $("#fullName").val();
        const email = $("#email").val();
        const course = $("#course").val();

        $.ajax({
            type: "POST",
            url: "/submit-application",
            data: { fullName, email, course },
            success: function (response) {
                displaySubmissionStatus('success', response.message);
                form[0].reset();
                form.removeClass('was-validated');
            },
            error: function (error) {
                displaySubmissionStatus('danger', 'Error submitting the application. Please try again.');
            }
        });
    }

    function displaySubmissionStatus(status, message) {
        submissionStatus.html(`<div class="alert alert-${status}" role="alert">${message}</div>`);
    }
});
