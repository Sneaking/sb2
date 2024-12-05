export function saveFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.txt';
    a.click();
    URL.revokeObjectURL(url);
}

export function newFile(editor) {
    editor.dispatch({
        changes: {
            from: 0,
            to: editor.state.doc.length,
            insert: ''
        }
    });
}