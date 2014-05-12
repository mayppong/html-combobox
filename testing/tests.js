

test( 'combobox includes all the shadow elements', function() {

  var combobox = document.createElement('combo-box');
  var shadowDOM = combobox.shadowRoot;

  ok( shadowDOM.querySelector('input'), 'found and input field.' );
  ok( shadowDOM.querySelector('button'), 'found the button.' );
  ok( shadowDOM.querySelector('ul'), 'found the ul holder.')

});