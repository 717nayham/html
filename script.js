// كلمة السر
const correctPassword = "SPEED123AA";

// الوظيفة للتحقق من كلمة السر
function checkPassword() {
    const passwordInput = document.getElementById("password").value;

    if (passwordInput === correctPassword) {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("chat-page").style.display = "block";
        initializeChat();
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// إعداد الشات
let chatMessages = [];

function initializeChat() {
    // عرض الرسائل السابقة
    const chatBox = document.getElementById("chat-box");
    chatMessages.forEach(message => {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
    });
}

// إرسال رسالة
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    if (message.trim() !== "") {
        chatMessages.push(message);

        const chatBox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);

        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
