document.getElementById("footer-container").innerHTML = `  
<center>
    <footer>
        <h1>PassGuard is under active development.</h1>

        <form id="applyForm">
            <input type="text" id="email" placeholder="Email" required><br>
            <button type="submit">Apply</button>
        </form>

        <p>Made with <span>♥</span> by Old Holborn</p>
        <ul class="footer-links">
            <li><a href="/passguard/legal">Legal</a></li>
            <li><a href="/passguard/privacy">Privacy</a></li>
            <li><a href="/passguard/privacy#terms">Terms</a></li>
        </ul>
    </footer>
</center>
`;

document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1345411645643423765/wXRBkWXu4vdZHInIoCvxX8Bo622cV5-UXaPubG8Qvr8d6SNxUiApIxVYhzm8Ac5AxFHa";
    const email = document.getElementById("email").value;

    const payload = {
        embeds: [
            {
                title: "New Application Submission",
                color: 0xff5733,
                fields: [
                    { name: "Email", value: email }
                ],
                timestamp: new Date().toISOString()
            }
        ]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert("Application submitted successfully!");
        } else {
            alert("Error submitting application.");
        }
    }).catch(error => {
        console.error("Error:", error);
        alert("Error submitting application.");
    });
});