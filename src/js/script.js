function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;

}
  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function toggleContactForm() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm.style.display === 'none' || contactForm.style.display === '') {
        contactForm.style.display = 'block';
    } else {
        contactForm.style.display = 'none';
    }
}

function submitContactForm() {
    // Add your form submission logic here
    // For now, just show the success message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    return false; // Prevent the form from actually submitting in this example
}
    
function sendEmail(){

                Email.send({
        SecureToken : "90152e3f-5d81-4474-b434-e3df76a51bee",
        To : 'info@aphomesvc.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enguiry",
    Body : "Name" + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Address: " + document.getElementById("address").value
        + "<br> Services: " + document.getElementById("services").value
        + "<br> Comments: " + document.getElementById("comments").value
        
        }).then(
    message => alert("Message Sent Succesfully")
    );
}
