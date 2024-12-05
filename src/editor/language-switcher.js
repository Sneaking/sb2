import { EditorView } from '@codemirror/view';
import { languageMap } from './config.js';

export function setupLanguageSwitch(view) {
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', (e) => {
        const language = languageMap[e.target.value];
        if (language) {
            view.dispatch({
                effects: EditorView.reconfigure.of([language()])
            });
        }
    });
}