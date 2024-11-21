// SELECTS AN ANSWER OPTION
let firstOption = document.querySelector('td.c4');
// SELECTS ALL THE ATTRIBUTES OF THE MATRIX
let attributes = document.querySelectorAll('.ChoiceRow');

// WHEN THE MATRIX IS VIEWED ON A MOBILE AN ATTRIBUTE NAMED "aria-hidden" WITH A A 'false' VALUE GETS CREATED
let ariaHiddenV = firstOption.getAttribute('aria-hidden');

if (ariaHiddenV == 'false' ) {
    console.log('is mobile');
    
    attributes.forEach(attribute => {
        let options = Array.from(attribute.children);
        // FIRST ELEMENT GETS SLICED BECAUSE IT'S THE TITLE
        let answers = options.slice(1);
        answers.reverse();

        let parent = attribute;

        // THE ANSWERS GET REMOVED AND THEN THE NEW ORDER GETS ADDED
        answers.forEach(answer => {
            parent.removeChild(answer);
        });

        answers.forEach(answer => {
            parent.appendChild(answer);
        });

    })
    
} else {
    console.log('is desktop');
}