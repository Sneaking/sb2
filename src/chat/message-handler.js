export function appendMessage(role, content) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `mb-4 p-2 rounded ${
        role === 'user' ? 'bg-blue-900' : 'bg-gray-700'
    }`;
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}