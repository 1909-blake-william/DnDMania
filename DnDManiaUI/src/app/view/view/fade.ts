import { trigger, transition, style, animate, keyframes, state } from '@angular/animations';

export let swish = trigger('swish', [
    state('initial', style({ left: '.45vw', top: '.9vh' })),
    state('final', style({ left: '10.45vw', top: '10.9vh', opacity: 1 })),
    transition('initial => final', animate('3s 50ms', keyframes([
        style({ opacity: 1}),
        style({ left: '.45vw', top: '.9vh' }),
        style({ opacity: 0}),
        style({ left: '10.45vw', top: '10.9vh', opacity: 1 })
        ]))
    )
]);

export let swash = trigger('swash', [
    state('first', style({ left: '10.45vw', top: '10.9vh', opacity: 1 })),
    state('last', style({ left: '20.45vw', top: '20.7vh', opacity: 1 })),
    transition('first => last', animate('3s 50ms', keyframes([
        style({ opacity: 1}),
        style({ left: '10.45vw', top: '10.9vh', opacity: 1 }),
        style({ opacity: 0}),
        style({ left: '20.45vw', top: '20.7vh', opacity: 1})
        ]))
    )
]);

export let stash = trigger('stash', [
    state('alpha', style({ left: '20.45vw', top: '20.7vh', opacity: 1})),
    state('omega', style({ left: '30.45vw', top: '20.7vh', opacity: 1})),
    transition('alpha => omega', animate('3s 50ms', keyframes([
        style({ opacity: 0 }),
        style({ left: '20.45vw', top: '20.7vh', opacity: 1 }),
        style({ opacity: 0 }),
        style({ left: '30.45vw', top: '20.7vh', opacity: 1 })
    ])))
]);

export let ash = trigger('ash', [
    state('ashen', style({ left: '30.45vw', top: '20.7vh', opacity: 1})),
    state('one', style({ left: '40.45vw', top: '40.8vh', opacity: 1})),
    transition('ashen => one', animate('3s 50ms', keyframes([
        style({ opacity: 0 }),
        style({ left: '30.45vw', top: '20.7vh', opacity: 1 }),
        style({ opacity: 0 }),
        style({ left: '40.45vw', top: '40.8vh', opacity: 1 }),
    ])))
]);

export let sew = trigger('sew', [
    state('night', style({ left: '40.45vw', top: '40.8vh', opacity: 1})),
    state('hunt', style({ left: '49.47vw', top: '32.8vh', opacity: 1})),
    transition('night => hunt', animate('3s 50ms', keyframes([
        style({ opacity: 0 }),
        style({ left: '40.45vw', top: '40.8vh', opacity: 1 }),
        style({ opacity: 0 }),
        style({ left: '49.47vw', top: '32.8vh', opacity: 1 }),
    ])))
]);

export let sin = trigger('sin', [
    state('light', style({ left: '49.47vw', top: '32.8vh', opacity: 1})),
    state('dark', style({ left: '54.45vw', top: '13.8vh', opacity: 1})),
    transition('light => dark', animate('3s 50ms', keyframes([
        style({ opacity: 0 }),
        style({ left: '49.47vw', top: '32.8vh', opacity: 1 }),
        style({ opacity: 0 }),
        style({ left: '54.45vw', top: '13.8vh', opacity: 1 }),
    ])))
]);

export let take = trigger('take', [
    state('left', style({ left: '54.45vw', top: '13.8vh', opacity: 1})),
    state('right', style({ left: '60.45vw', top: '30.85vh', opacity: 1})),
    transition('left => right', animate('3s 50ms', keyframes([
        style({ opacity: 0 }),
        style({ left: '54.45vw', top: '13.8vh', opacity: 1 }),
        style({ opacity: 0 }),
        style({ left: '60.45vw', top: '30.85vh', opacity: 1 }),
    ])))
]);

export let king = trigger('king', [
    state('end', style({ left: '60.45vw', top: '30.85vh', opacity: 1})),
    state('time', style({ left: '70.45vw', top: '23.85vh', opacity: 1})),
    transition('end => time', animate('3s 50ms', keyframes([
        style({ opacity: 0 }),
        style({ left: '60.45vw', top: '30.85vh', opacity: 1 }),
        style({ opacity: 0 }),
        style({ left: '70.45vw', top: '23.85vh', opacity: 1 }),
    ])))
]);
