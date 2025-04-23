// Toggle travel tips
function toggleTip(tipId) {
    const tipContent = document.getElementById(tipId);
    tipContent.style.display = tipContent.style.display === "block" ? "none" : "block";
}

// Handle travel buddy form submission
document.getElementById("connectForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const destination = document.getElementById("destination").value;
    const responseElement = document.getElementById("response");

    if (name && destination) {
        responseElement.innerHTML = `🌍 Hey ${name}, we are finding travel buddies going to ${destination}! Stay tuned.`;
        responseElement.style.color = "green";
    } else {
        responseElement.innerHTML = "⚠️ Please fill in all fields!";
        responseElement.style.color = "red";
    }
});
