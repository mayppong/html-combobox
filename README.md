## Setup

If you are using Chrome, you will need to enable

1. Experimental Web Platform features
2. Experimental JavaScript

To let you debug, you will also need to make sure you browser is showing shadow DOMs. Chrome has a setting in the Developer Tools for "Show Shadow DOM".


## Demo

There are two demo files included. The demo file uses the ```<link rel="import" href="">``` which is required to be enabled in Chrome in ```chrome://flags/```. You will also need to run the page through a web browser to avoid the error <br />
```Imported resource from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Received an invalid response. Origin 'null' is therefore not allowed access. ```


## To-Do

- [ ] Setup unit testing
- [x] Setup event handler (delegation? probably)
- [ ] When a user select an item from the list, it should populate the shadow input field
- [ ] Hide the list when user clicks elsewhere