const email =document.forms["myForm"]["email"].value;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
  if (email === "") {
    alert("Email must be filled out");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  return true;
}
