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
    ok( shadowDOM.querySelector('button'), 'found the button.' );
    ok( shadowDOM.querySelector('ul'), 'found the ul holder.' )
  });

  test( 'combobox hides the list by default', function() {
    var ul = document.querySelector('combo-box').shadowRoot.querySelector('ul');

    equal( jQuery(ul).css('display'), 'none', 'the ul is hidden.');
  });

module( 'User Interaction', {
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

  test( 'the options are displayed when combo-box element is clicked on', function() {
    jQuery('combo-box').click();
    var ul = document.querySelector('combo-box').shadowRoot.querySelector('ul');

    ok( jQuery(ul).css('display') !== 'none', 'the ul is displayed.');
  });

  test( 'the value of the selected option is placed in the input field', function() {
    var cbox = document.querySelector('combo-box');
    jQuery(cbox).click();
    var selectedValue = jQuery('li:first', cbox).click().text();

    equal( cbox.shadowRoot.querySelector('input').value, selectedValue, 'the selected value is added to the input field' );
  });