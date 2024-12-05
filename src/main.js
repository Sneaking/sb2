import { initEditor } from './editor/editor.js';
import { initChat } from './chat/chat.js';
import { setupKeyboardShortcuts } from './utils/shortcuts.js';
import { setupFileOperations } from './utils/fileOperations.js';

document.addEventListener('DOMContentLoaded', () => {
    const editor = initEditor();
    initChat(editor);
    setupKeyboardShortcuts(editor);
    setupFileOperations(editor);
});