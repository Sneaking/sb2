export function updateCursorPosition(state) {
    const pos = state.selection.main.head;
    const line = state.doc.lineAt(pos);
    document.getElementById('cursor-position').textContent = 
        `Line: ${line.number}, Column: ${pos - line.from + 1}`;
}