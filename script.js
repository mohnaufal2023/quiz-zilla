document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("demoForm");
    const nameInput = document.getElementById("name");
    const successMessage = document.getElementById("successMessage");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        const nameValue = nameInput.value.trim();
        if (nameValue === "") {
            alert("Please enter your name.");
            return;
        }

        
        

        
        header.style.backgroundColor = "#D91656";  
        footer.style.backgroundColor = "#D91656";  
    });
});
