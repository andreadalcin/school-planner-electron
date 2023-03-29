// Description: This script is injected into the DOM when the page is ready.
const head = document.getElementsByTagName('head')[0];

const styleSheet = document.createElement('style');
styleSheet.innerText = `
    header:not(.open) {
        margin-left: 64px !important;
    } 
    #nav-logo {
        margin-top: 24px !important;
    }
`;

head.appendChild(styleSheet);