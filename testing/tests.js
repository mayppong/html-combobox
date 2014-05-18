module( 'Init', {
  setup: function() {
    var cbox = "\
    <combo-box>\
      <li>Canada</li>\
      <li>America</li>\
      <li>Thailand</li>\
    </combo-box>\
    ";
    jQuery("body").append(cbox);
  },
  teardown: function() {
    jQuery("combo-box").remove();
  }
});
  test( 'combobox includes all the shadow elements', function() {
    var shadowDOM = document.querySelector('combo-box').shadowRoot;

    ok( shadowDOM.querySelector('input'), 'found and input field.' );
    equal( shadowDOM.querySelector('span').innerHTML, String.fromCharCode(9660), 'found the arrow character.' );
    ok( shadowDOM.querySelector('ul'), 'found the ul holder.' )
  });

  test( 'combobox hides the list by default', function() {
    var ul = document.querySelector('combo-box').shadowRoot.querySelector('ul');

    equal( jQuery(ul).css('display'), 'none', 'the ul is hidden.');
  });


module( 'User Interaction', {
  setup: function() {
    var cbox = "\
    <combo-box id='test-one'>\
      <li>Canada</li>\
      <li>America</li>\
      <li>Thailand</li>\
    </combo-box>\
    ";
    jQuery("body").append(cbox);
  },
  teardown: function() {
    jQuery("combo-box").remove();
  }
});

  test( 'the options list visibility is toggled on focus and blur', function() {
    var focus = new FocusEvent('focus');
    var blur  = new FocusEvent('blur');
    var cbox  = document.querySelector('#test-one');

    cbox.dispatchEvent(focus);
    var ul = cbox.shadowRoot.querySelector('ul');
    ok( jQuery(ul).css('display') !== 'none', 'the ul is displayed when the combo-box gains focus.');

    cbox.dispatchEvent(blur);
    equal( jQuery(ul).css('display'), 'none', 'the ul is hidden again when the combobox loses focus.' ); 
  });

  test( 'selecting options', function() {
    var cbox = document.querySelector('combo-box');
    var ul   = cbox.shadowRoot.querySelector('ul');
    var focusin = new FocusEvent('focusin');
    var mousedown = new MouseEvent("mousedown");

    cbox.dispatchEvent(focusin);
    cbox.querySelector('li').dispatchEvent(mousedown);

    equal( cbox.shadowRoot.querySelector('input').value, 'Canada', 'the selected value is added to the input field' );
  });