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

  test( 'the options list view is toggled when combo-box element is clicked on or unfocused', function() {
    jQuery('combo-box').click();
    var ul = document.querySelector('combo-box').shadowRoot.querySelector('ul');

    ok( jQuery(ul).css('display') !== 'none', 'the ul is displayed when the user clicks on the combo-box.');

    jQuery('body').click();

    equal( jQuery(ul).css('display'), 'none', 'the ul is hidden again when the user clicks on the body of the page.' );
  });

  test( 'selecting options', function() {
    var cbox = document.querySelector('combo-box');
    var ul   = cbox.shadowRoot.querySelector('ul');
    jQuery(cbox).click();
    var selectedValue = jQuery('li:first', cbox).click().text();

    equal( cbox.shadowRoot.querySelector('input').value, selectedValue, 'the selected value is added to the input field' );
    equal( jQuery(ul).css('display'), 'none', 'the option listing is hidden.' );
  });