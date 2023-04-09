const inputs = document.querySelectorAll("input");
const error_message = document.querySelector("#error-message");
const error_icon = document.querySelector(".validation-icon");

inputs.forEach(input => {
   input.addEventListener("input", () => {
      if (input.checkValidity()) {
         input.style.borderBottom = "1px solid hsl(154, 71%, 59%)";
         error_message.style.display = "none";
         error_icon.style.display = "none";
      } else {
         input.style.borderBottom = "1px solid hsl(7, 100%, 68%)";
         error_message.style.display = "inline-block";
         error_icon.style.display = "inline-block";
      }
   });
});
