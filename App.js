// Setup our event listeners using DRY looping



// Setup VanillaJS selectors
const calculator = document.querySelector('.calculator')
const commands = calculator.querySelector('section.commands')
const numerals = calculator.querySelector('section.numerals')
const operators = calculator.querySelector('section.operators')
// const clear = document.getElementById("clear"); ***** NOTE: There's a better way to do this... in progress

// console.log('commands', commands)

// Temporarily disable operators section to prevent back-to-back operators without operands
// after each operator click

disableOperators = () => {}



// We'll need 2 queues to abide by order of operations - one for multiply/divide and one for add/subtract

/* Handle '=' command click by first pushing each item in the 
 * multiply/divide queue to calculatorCallStack
 * followed by pushing the items from the add/subtract queue
*/

// multiply divide queue
let multiplyDivideQueue = {}

// add subtract queue
let addSubtractQueue = {}

// We'll need a call stack to push and pop calculator input chars from the queues
let calculatorCallStack = []

// Validate the queues - we'll add this later due to time constraints
// TO DO



commands.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // TO DO - 
  }
 })


// Clear method based on functional specs - reset output display
clear.onclick = () => {

}

// Calculate based on operation input
compute = (operation) => {
  let operator = operation.target.innerText;
  switch(operator){
    case '+':
      console.log('+');
      break;
    case '-':
      console.log('-');
      break;
    case 'x':
      console.log('x');
      break;
    case '÷':
      console.log('÷');
      break;
  }
}

// REWORKING...