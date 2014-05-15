## ComboBoxElement

The goal of the project is to create a custom HTML element that resemble the combo-box functionality found in many desktop application. This will sure make many Enterprise web users happy. 

### Spec
  - You can add a new element to the document like you would any other native elements, no addition coding is required except for adding the source.
  - The data in the element should submit with the form just like any native control elements.

Essentially the goal is to make it behave just like what you would expect from any native control elements. No extra JavaScript should be required. But it should be open and allow for web developer to customize it to meet their needs.


## Setup

If you are using Chrome, you will need to enable

1. Experimental Web Platform features
2. Experimental JavaScript

To let you debug, you will also need to make sure you browser is showing shadow DOMs. Chrome has a setting in the Developer Tools for "Show Shadow DOM".


## Demo

There are two demo files included. The demo file uses the ```<link rel="import" href="">``` which is required to be enabled in Chrome in ```chrome://flags/```. You will also need to run the page through a web browser to avoid the error <br />
```Imported resource from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Received an invalid response. Origin 'null' is therefore not allowed access. ```


## Testing

The project is set up with qUnit framework for testing. Since it uses the link import feature, the test must be run through a web server to avoid the same Cross-Origin Resource Sharing policy violation.


## To-Do

- [x] Setup unit testing
- [x] Setup event handler (delegation? probably)
- [x] When a user select an item from the list, it should populate the shadow input field
- [x] Hide the list when user clicks elsewhere
- [ ] Hide other lists when the user click on a different combobox
- [ ] Make sure combobox data is submitted with the form
- [ ] Suggest autocomplete when user typing


- [ ] Update the styling of the ul element so it shows up directly under the input box and not spanning the entire width
- [ ] Style the highlighting of option on hover