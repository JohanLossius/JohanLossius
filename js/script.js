// Contact form validation

const contactSection = document.querySelector(".contact-form-section");
const form = document.querySelector(".contact-form");

const feedbackContainer = document.querySelector(".feedback-container");

const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#contact-message");
const sendButton = document.querySelector("#submit-button");

const nameFeedbackCont = document.querySelector(".name-feedback-container");
const emailFeedbackCont = document.querySelector(".email-feedback-container");
const messageFeedbackCont = document.querySelector(".message-feedback-container");

// Name validation

nameInput.addEventListener("change", nameInputValidation);

function nameInputValidation() {
    if (nameCheck(nameInput.value) === false) {
        nameInput.style.borderColor = "red";
        nameFeedbackCont.innerHTML = `<span class="error-message">*Name should be at least 2 characters*</span>`;
    } else {
        nameInput.style.borderColor = "green";
        nameFeedbackCont.innerHTML = `<span class="success-message">*Looks good*</span>`;
    }
}

// Email validation

emailInput.addEventListener("change", emailInputValidation);

function emailInputValidation() {
    if (emailCheck(emailInput.value) === false) {
        emailInput.style.borderColor = "red";
        emailFeedbackCont.innerHTML = `<span class="error-message">*Please enter a valid email*</span>`;
    } else {
        emailInput.style.borderColor = "green";
        emailFeedbackCont.innerHTML = `<span class="success-message">*Looks good*</span>`;
    }
}

// Message validation

messageInput.addEventListener("change", messageInputValidation);

function messageInputValidation() {
    if (messageCheck(messageInput.value) === false) {
        messageInput.style.borderColor = "red";
        messageFeedbackCont.innerHTML = `<span class="error-message">*Message should be at least 2 characters*</span>`;
    } else {
        messageInput.style.borderColor = "green";
        messageFeedbackCont.innerHTML = `<span class="success-message">*Looks good*</span>`;
    }
}

// Form submit management

form.addEventListener("submit", sendMessage);

function sendMessage() {
    // event.preventDefault();
    console.log(event);

    // Manage the name instructions
    if (nameCheck(nameInput.value) === false) {
        nameInput.style.borderColor = "red";
        nameFeedbackCont.innerHTML = `<span class="error-message">*Name should be at least 2 characters*</span>`;
    } else {
        nameInput.style.borderColor = "green";
    }

    // Manage the email instructions
    if (emailCheck(emailInput.value) === false) {
        emailInput.style.borderColor = "red";
        emailFeedbackCont.innerHTML = `<span class="error-message">*Please enter a valid email*</span>`;
    } else {
        emailInput.style.borderColor = "green";
    }
    
    // Manage the messaging instructions
    if (messageCheck(messageInput.value) === false) {
        messageInput.style.borderColor = "red";
        messageFeedbackCont.innerHTML = `<span class="error-message">*Message should be at least 2 characters*</span>`;
    } else {
        messageInput.style.borderColor = "green";
    }

    // Submission validation and messaging.
    if (nameCheck(nameInput.value) && emailCheck(emailInput.value) && messageCheck(messageInput.value)) {
        feedbackContainer.innerHTML = `<span class="success-message">Your message was sent successfully!</span>`;
        form.reset();
        nameInput.style.borderColor = "#E48698";
        emailInput.style.borderColor = "#E48698";
        messageInput.style.borderColor = "#E48698";
        nameFeedbackCont.innerHTML = "";
        emailFeedbackCont.innerHTML = "";
        messageFeedbackCont.innerHTML = "";
    } else {
        feedbackContainer.innerHTML = `<span class="error-message">Your message was not sent. Please correct the following:</span>`;
    }
};

function nameCheck(name) {
    const nameLength = name.trim().length;
    console.log(nameLength);
    if (nameLength >= 2) {
        return true;
    } else {
        return false;
    }
};

function emailCheck(email) {
    const regEx = /\S+@\S+\.\S+/;
    const validEmail = regEx.test(email);
    console.log(validEmail);
    return validEmail;
};

function messageCheck(message) {
    const messageLength = message.trim().length;
    console.log(messageLength);
    if (messageLength >= 2) {
        return true;
    } else {
        return false;
    }
};