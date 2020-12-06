require( "cookieconsent");

let cc  = window.cookieconsent.initialise({
        showLink: false,
        position: 'bottom',
        content: {
            message: 'This website uses cookies.',
            dismiss: 'Got it!'
        }
    })