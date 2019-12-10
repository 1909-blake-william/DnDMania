import { trigger, transition, style, animate, keyframes, state } from '@angular/animations';

export let swish = trigger('swish', [
    state('initial', style({ left: '.25vw', top: '.8vh' })),
    state('final', style({ left: '9.3vw', top: '11.75vh'})),
    transition('initial => final', animate('1.5s', keyframes([
        style({ left: '.25vw', top: '.8vh', offset: 0 }),
        style({ left: '3.25vw', top: '0vh', offset: 0.25 }),
        style({ left: '6.3vw', top: '1.7vh', offset: 0.5 }),
        style({ left: '8.3vw', top: '6.75vh', offset: 0.75 }),
        style({ left: '9.3vw', top: '11.75vh', offset: 1})
        ]))
    )
]);

export let swash = trigger('swash', [
    state('first', style({ left: '9.3vw', top: '11.75vh'})),
    state('last', style({ left: '3.3vw', top: '22.5vh'})),
    transition('first => last', animate('2.5s', keyframes([
        style({ left: '9.3vw', top: '11.75vh'}),
        style({ left: '11.3vw', top: '16.75vh'}),
        style({ left: '8.5vw', top: '19.7vh'}),
        style({ left: '5.8vw', top: '15.6vh'}),
        style({ left: '2.75vw', top: '12.65vh'}),
        style({ left: '1.3vw', top: '18.75vh'}),
        style({ left: '3.3vw', top: '22.5vh'})
        ]))
    )
]);

export let stash = trigger('stash', [
    state('alpha', style({ left: '3.3vw', top: '22.5vh'})),
    state('omega', style({ left: '7.3vw', top: '38.75vh'})),
    transition('alpha => omega', animate('1.5s', keyframes([
        style({ left: '3.3vw', top: '22.5vh'}),
        style({ left: '6.35vw', top: '25.9vh'}),
        style({ left: '9.3vw', top: '28.75vh'}),
        style({ left: '10.3vw', top: '34.75vh'}),
        style({ left: '7.3vw', top: '38.75vh'})
    ])))
]);

export let ash = trigger('ash', [
    state('ashen', style({ left: '7.3vw', top: '38.75vh'})),
    state('one', style({ left: '20.3vw', top: '22.5vh'})),
    transition('ashen => one', animate('2s', keyframes([
        style({ left: '7.3vw', top: '38.75vh'}),
        style({ left: '10.3vw', top: '42.75vh'}),
        style({ left: '14.3vw', top: '40.75vh'}),
        style({ left: '17.3vw', top: '36.75vh'}),
        style({ left: '18.3vw', top: '28.75vh'}),
        style({ left: '20.3vw', top: '22.5vh'}),
    ])))
]);

export let sew = trigger('sew', [
    state('night', style({ left: '20.3vw', top: '22.5vh'})),
    state('hunt', style({ left: '29.3vw', top: '5.75vh'})),
    transition('night => hunt', animate('2s', keyframes([
        style({ left: '20.3vw', top: '22.5vh'}),
        style({ left: '23.3vw', top: '18.75vh'}),
        style({ left: '26.3vw', top: '14.75vh'}),
        style({ left: '29.3vw', top: '11.25vh'}),
        style({ left: '29.3vw', top: '5.75vh'}),
    ])))
]);

export let sin = trigger('sin', [
    state('light', style({ left: '29.3vw', top: '5.75vh'})),
    state('dark', style({ left: '34.3vw', top: '16.75vh'})),
    transition('light => dark', animate('1.75s', keyframes([
        style({ left: '29.3vw', top: '5.75vh'}),
        style({ left: '31.3vw', top: '1.75vh'}),
        style({ left: '34.8vw', top: '1.75vh'}),
        style({ left: '36.3vw', top: '7.75vh'}),
        style({ left: '33.3vw', top: '11.75vh'}),
        style({ left: '34.3vw', top: '16.75vh'}),
    ])))
]);

export let take = trigger('take', [
    state('left', style({ left: '34.3vw', top: '16.75vh'})),
    state('right', style({ left: '26.3vw', top: '33.75vh'})),
    transition('left => right', animate('1.5s', keyframes([
        style({ left: '34.3vw', top: '16.75vh'}),
        style({ left: '35.3vw', top: '22.2vh'}),
        style({ left: '32.75vw', top: '25.75vh'}),
        style({ left: '29.3vw', top: '28.75vh'}),
        style({ left: '26.3vw', top: '33.75vh'}),
    ])))
]);

export let king = trigger('king', [
    state('end', style({ left: '26.3vw', top: '33.75vh'})),
    state('time', style({ left: '34.3vw', top: '40.5vh'})),
    transition('end => time', animate('1.5s', keyframes([
        style({ left: '26.3vw', top: '33.75vh'}),
        style({ left: '27.3vw', top: '40.5vh'}),
        style({ left: '30.85vw', top: '43.75vh'}),
        style({ left: '34.3vw', top: '40.5vh'}),
    ])))
]);
