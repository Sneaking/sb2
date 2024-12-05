import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { defaultExtensions, defaultDocument } from './config.js';
import { updateCursorPosition } from './cursor.js';
import { setupLanguageSwitch } from './language-switcher.js';

export function initEditor() {
    const startState = EditorState.create({
        doc: defaultDocument,
        extensions: [
            ...defaultExtensions,
            EditorView.updateListener.of(update => {
                if (update.docChanged) {
                    updateCursorPosition(update.state);
                }
            })
        ]
    });

    const view = new EditorView({
        state: startState,
        parent: document.getElementById('editor-container')
    });

    setupLanguageSwitch(view);
    return view;
}