import '../styles/index.scss';
import '../scripts/shape-outside.js';

document.addEventListener('DOMContentLoaded', () => {
    objectFitImages(); // IE & Edge 12-15 don't support object-fit

    window.ShapesPolyfill.run();
});