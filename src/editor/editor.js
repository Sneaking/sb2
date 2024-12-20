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
            EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                    const pos = update.state.selection.main.head;
                    const line = update.state.doc.lineAt(pos);

                    // Handle empty lines explicitly
                    if (line.text.trim() === "") {
                        update.view.dispatch({
                            changes: { from: pos, insert: "\n" }
                        });
                    }
                }
            })
        ]
    });

    const view = new EditorView({
        state: startState,
        parent: document.getElementById('editor-container')
    });

    return view;
}
