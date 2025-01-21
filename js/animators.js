/**
 * Module du plugin d'alerte.
 * Gère les différentes animations possibles pour les alertes.
 */

/* 
Template pour les animators :
- Une classe par type d'animation (FadeAnimator, SlideAnimator, etc.)
- Chaque classe doit avoir un constructeur qui prend en paramètre la durée de l'animation et la position de l'alerte.
- Chaque classe doit avoir une méthode animate qui prend en paramètre l'élément à animer.

Le constructeur de la classe AnimationManager doit instancier l'objet animateur en fonction du type d'animation passé en paramètre.

/!\ pas oublier de rajouter les animations nécéssaires dans le fichier alert.css /!\

export class Animaor{
    constructor(duration, position){
        this.duration = duration;
        this.position = position;
    }

    animate(el){
        el.style.animation = ``;
    }
}
*/

export class FadeAnimator{
    constructor(duration, position){
        this.duration = duration;
        this.position = position;
    }

    animate(el){
        el.style.animationName = 'fade-in, fade-out';
        el.style.animationDuration = '0.2s, 0.3s';
        el.style.animationTimingFunction = 'ease-out, ease-out';
        el.style.animationDelay = `0s, ${this.duration/1000 - 0.3}s`;
    }
}

export class SlideAnimator{
    constructor(duration, position){
        this.duration = duration;
        if(position === 'top-right' || position === 'bottom-right'){
            this.direction = 'right';
        }

        if(position === 'top-left' || position === 'bottom-left'){
            this.direction = 'left';
        }
    }

    animate(el){
        el.style.animationName = `slide-in-${this.direction}, slide-out-${this.direction}`;
        el.style.animationDuration = '0.2s, 0.3s';
        el.style.animationTimingFunction = 'ease-out, ease-out';
        el.style.animationDelay = `0s, ${this.duration/1000 - 0.3}s`;
    }
}

export class FlipAnimator{
    constructor(duration, position){
        this.duration = duration;
        this.position = position;
    }

    animate(el){
        el.style.animationName = 'flip-in, flip-out';
        el.style.animationDuration = '0.2s, 0.3s';
        el.style.animationTimingFunction = 'ease-out, ease-out';
        el.style.animationDelay = `0s, ${this.duration/1000 - 0.3}s`;
    }
}

export class ShakeAnimator {
    constructor(duration, position) {
        this.duration = duration;
        this.position = position;
    }

    animate(el) {
        el.style.animationName = 'shake';
        el.style.animationDuration = `${this.duration / 1000}s`;
        el.style.animationTimingFunction = 'ease-in-out';
    }
}

export class ZoomAnimator {
    constructor(duration, position) {
        this.duration = duration;
        this.position = position;
    }

    animate(el) {
        el.style.animationName = 'zoom-in, zoom-out';
        el.style.animationDuration = '0.2s, 0.3s';
        el.style.animationTimingFunction = 'ease-out, ease-out';
        el.style.animationDelay = `0s, ${this.duration / 1000 - 0.3}s`;
    }
}

export class BounceAnimator {
    constructor(duration, position) {
        this.duration = duration;
        this.position = position;
    }

    animate(el) {
        el.style.animationName = 'bounce-in, bounce-out';
        el.style.animationDuration = '0.2s, 0.3s';
        el.style.animationTimingFunction = 'ease-out, ease-out';
        el.style.animationDelay = `0s, ${this.duration / 1000 - 0.3}s`;
    }
}