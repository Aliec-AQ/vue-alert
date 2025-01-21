/**
 * Plugin d'alerte pour une application Vue.
 */

import './css/mainAlert.css';
import './css/animationAlert.css';
import { init, addAlert } from './js/alerts.js';


// Options par défaut
const defaultOptions = {
    type: 'success',
    duration: 3000,
    animation: 'slide',
    position: 'top-right',
    iconType: 'none',
};

const alertPlugin = {};

alertPlugin.install = function (app, options = {}) {
    const installOption = { ...defaultOptions, ...options };
    init(installOption);

    app.config.globalProperties.$alertSuccess = function (message) {
        addAlert(message, { type: 'success' });
    };

    app.config.globalProperties.$alertError = function (message) {
        addAlert(message, { type: 'error' });
    };

    app.config.globalProperties.$alertWarning = function (message) {
        addAlert(message, { type: 'warning' });
    };
};

export default alertPlugin;