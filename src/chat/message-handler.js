export function appendMessage(role, message) {
    const chatMessages = document.getElementById('chat-messages');

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('p-2', 'rounded', 'mb-2');

    if (role === 'user') {
        messageElement.classList.add('bg-blue-600', 'text-white');
    } else if (role === 'assistant') {
        messageElement.classList.add('bg-gray-700', 'text-white');
    } else if (role === 'system') {
        messageElement.classList.add('bg-red-600', 'text-white');
    }

    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    // Auto-scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
