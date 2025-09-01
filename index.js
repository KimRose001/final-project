// let myButton = document.getElementById("button")
// myButton.onclick = function() {
//     alert("Thanks! We'll respond to your inquiry shortly.");
// }




  const buttons = document.querySelectorAll('.Btn.margin');
    buttons.forEach(button => {
        button.addEventListener('click', () =>{
            alert('Item added to cart!');
        });
    });


   

  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from reloading the page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠ Please fill out all fields before submitting.");
    } else {
      alert("✅ Thanks! We'll respond to your inquiry shortly.");
      // form.reset(); // optional: clear fields after success
    }
  });


