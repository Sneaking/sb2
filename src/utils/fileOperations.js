export function setupFileOperations(editor) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.js,.py,.html,.css,.txt';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                editor.dispatch({
                    changes: {
                        from: 0,
                        to: editor.state.doc.length,
                        insert: e.target.result
                    }
                });
            };
            reader.readAsText(file);
        }
    });

    return {
        openFile: () => fileInput.click(),
        saveFile: () => {
            const content = editor.state.doc.toString();
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'code.txt';
            a.click();
            URL.revokeObjectURL(url);
        }
    };
}