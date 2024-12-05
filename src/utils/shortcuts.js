import { saveFile, newFile } from './file-handlers.js';

export function setupKeyboardShortcuts(editor) {
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey) {
            switch (e.key) {
                case 'S':
                    e.preventDefault();
                    saveFile(editor.state.doc.toString());
                    break;
                case 'N':
                    e.preventDefault();
                    newFile(editor);
                    break;
                case 'C':
                    e.preventDefault();
                    document.getElementById('toggle-chat').click();
                    break;
            }
        }
    });
}