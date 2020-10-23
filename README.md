# Calculator

Calculator created using pure JavaScript, HTML, and CSS with the below constraints

## Functional Specs

* The calculator should be able to add, subtract, multiply and divide
* The input element should reflect user interaction with the buttons – **_NOTE: It is not meant to be a true input field_**
* When the user hits the "=" button or enter button, the result will appear in the result block
* The calculator should respect order of operations: _multiply_ and _divide_ are calculated before _plus_ and _minus_
* __Clear__ will clear the most recent entry
* The user can chain operations via multiple operations within the component
* __Undo__ will reset both the input display and the results display - **_NOTE: This spec is based an assumption derived from additional data that had been excluded from the original functional specifications_**
* The calculator does not require a decimal - **_NOTE: This spec is based on an assumption made for the sake of simplicity because it was not listed in the original specifications_**

### Assumptions

* We are operating under the assumption that __Undo__ clears the most recent entry
* We are operating under the assumption that the calculator does not require a decimal for the sake of simplicity _(this can always be added in a future iteration in a real-world environment)_
