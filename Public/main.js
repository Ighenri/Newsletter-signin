const subscribeBtn = document.querySelector(".subscribeBtn");
const email = document.querySelector("#email");
const body = document.querySelector(".body");
const form = document.querySelector(".myForm");

const isvalidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(String(email).toLowerCase()) // convert to string and to small letter format
}

form.addEventListener("submit", (e) => {
  const emailValue = email.value.trim() // to remove white spaces
  if (emailValue === "") {
    alert("Email is required");
    e.preventDefault(); // prevents the form from being submitted by defualt 
  } else if (!isvalidEmail(emailValue)) {
    alert("Invalid email format");
    e.preventDefault();
  } else {
    body.innerHTML = `  <div class="sm:place-items-center ">
    <div class="grid place-items-center h-screen w-[90%] mx-auto sm:flex flex-col justify-center items-center sm:w-[50%] lg:w-[40%]">
      <header class="flex flex-col justify-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#FF6A3A" />
                <stop offset="100%" stop-color="#FF527B" />
              </linearGradient>
            </defs>
            <g fill="none">
              <circle cx="32" cy="32" r="32" fill="url(#a)" />
              <path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285" />
            </g>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold w-[60%] my-4">Thanks for subscribing!</h1>
        <p class="text-sm">
          A confirmation email has been sent to <span class="font-bold"> ${emailValue}</span>.
          Please open it and click the button inside to confirm your subscription.
        </p>
      </header>
      <footer
        class="bg-DarkSlateGrey text-White p-3 w-full text-center rounded-md text-sm sm:bg-Tomato sm:my-8  sm:shadow-Tomato shadow-lg cursor-pointer">
        <p onclick="location.reload()">Dismiss message</p>
      </footer>
    </div>
  </div>`
  }
})
