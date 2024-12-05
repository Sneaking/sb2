import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';

export const languageMap = {
    javascript,
    python,
    html,
    css
};

export const defaultExtensions = [
    oneDark,
    javascript()
];

export const defaultDocument = '// Start coding here';