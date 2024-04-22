

export function checkRequired(fieldId) {
    const fieldValue = form.elements[fieldId].value.trim();
    if (fieldValue === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

export function checkState() {
    const stateValue = form.elements["state"].value.trim().toUpperCase();
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    if (!states.includes(stateValue)) {
        alert("Please enter a valid state code.");
        return false;
    }
    return true;
}

export function checkZip() {
    const zipValue = form.elements["zip"].value.trim();
    const zipRegex = /^\d{5}$/;
    if (!zipRegex.test(zipValue)) {
        alert("Please enter a valid ZIP code (5 digits).");
        return false;
    }
    return true;
}

export function checkPhone() {
    const phoneValue = form.elements["phone"].value.trim();
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phoneValue)) {
        alert("Please enter a valid phone number (XXX-XXX-XXXX).");
        return false;
    }
    return true;
}

export function checkEmail() {
    const emailValue = form.elements["email"].value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

export function checkCheckboxGroup(groupName) {
    const checkboxes = form.elements[groupName];
    let checked = false;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checked = true;
        }
    });
    if (!checked) {
        alert("Please select at least one option.");
        return false;
    }
    return true;
}
