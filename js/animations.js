/**
 * Module du plugin d'alerte.
 * Gère les différentes animations possibles pour les alertes et l'ajout du css.
 */

import * as animators from './animators.js';

let position = null;
let duration = null;
let animator = null;

function init(animation, newPosition, newDuration) {
    position = newPosition;
    duration = newDuration;
    animator = selectAnimator(animation, duration, position);
}

function selectAnimator(animation, duration, position) {
    const animatorClasses = {
        slide: animators.SlideAnimator,
        fade: animators.FadeAnimator,
        shake: animators.ShakeAnimator,
        zoom: animators.ZoomAnimator,
        bounce: animators.BounceAnimator,
        flip: animators.FlipAnimator
    };

    const AnimatorClass = animatorClasses[animation];
    
    if (AnimatorClass) {
        return new AnimatorClass(duration, position);
    } else {
        console.error('Invalid animation'); 
        return null;
    }
}

function addPosition(el) {
    const positions = {
        'top-right': { top: '10px', right: '10px' },
        'top-left': { top: '10px', left: '10px' },
        'bottom-right': { bottom: '10px', right: '10px' },
        'bottom-left': { bottom: '10px', left: '10px' }
    };

    const style = positions[position];
    if (style) {
        Object.assign(el.style, style); 
    } else {
        console.error('Invalid position'); 
    }
}

function addAnimation(el) {
    if (animator) {
        animator.animate(el);
    }
}

export { init, addPosition, addAnimation };
