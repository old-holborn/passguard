document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const webhookURL = "https://discord.com/api/webhooks/1345411645643423765/wXRBkWXu4vdZHInIoCvxX8Bo622cV5-UXaPubG8Qvr8d6SNxUiApIxVYhzm8Ac5AxFHa";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value;
    const category = document.querySelector('input[name="category"]:checked').value;
    
    const payload = {
        content: `**New Contact Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Country:** ${country}\n**Category:** ${category}\n**Message:** ${message}`
    };
    
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("Failed to send message.");
        }
    })
    .catch(error => console.error("Error:", error));
});