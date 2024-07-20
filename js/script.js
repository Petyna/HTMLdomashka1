var modal = document.getElementById("myModal");

var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];

var form = document.getElementById("modalForm");
var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];

var phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function() {
    var x = phoneInput.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    phoneInput.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the form is submitted, add data to the table
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var urlImage = document.getElementById("url-image").value;
    var name = document.getElementById("name").value;

    // Validate phone number format
    var phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number in the format (123) 456-7890");
        return;
    }

    // Create a new row and cells
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    // Add the data to the cells
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = '<img src="' + urlImage + '" alt="Image">';
    cell4.innerHTML = phone;

    // Clear form
    form.reset();

    // Close the modal
    modal.style.display = "none";
}