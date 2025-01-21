/**
 * Module du plugin d'alerte.
 * Gère les alertes et les animations.
 */
import * as AnimationManager from './animations.js';

let alertContainer = null;
let options = {};
const icons = {
    fontawesome: {
        success: '<i class="fas fa-check-circle"></i>',
        error: '<i class="fas fa-times-circle"></i>',
        warning: '<i class="fas fa-exclamation-circle"></i>'
    },
    html: {
        success: '<span>&#10004;</span>', // Check mark
        error: '<span>&#10540;</span>', // Cross mark
        warning: '<span>&#9888;</span>' // Warning sign
    }
};

function init(mergedOptions){
    options = mergedOptions;
    AnimationManager.init(options.animation, options.position, options.duration);
    
    if (options.iconType === 'fontawesome') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(link);
    }
    createContainer();
}

function createContainer(){
    alertContainer = document.createElement('div');
    
    AnimationManager.addPosition(alertContainer);
    alertContainer.classList.add('alert-container');

    document.body.appendChild(alertContainer);
};

function addAlert(message, userOptions = {}){
    const mergedOptions = { ...options, ...userOptions }; 

    const alert = document.createElement('div'); 
    alert.classList.add('alert', `alert-${mergedOptions.type}`);

    alert.innerHTML = formatMessage(message, mergedOptions);
    AnimationManager.addAnimation(alert); 
    
    alertContainer.appendChild(alert); 
    setTimeout(() => { 
        alertContainer.removeChild(alert); 
    }, mergedOptions.duration); 
}

function formatMessage(message, options) {
    const icon = icons[options.iconType]?.[options.type] || '';
    return `${icon} ${message}`;
}


export {init, addAlert};