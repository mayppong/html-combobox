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

  test( 'the options list visibility is toggled on click and unfocus', function() {
    jQuery('combo-box').click();
    var ul1 = document.querySelector('#test-one').shadowRoot.querySelector('ul');

    ok( jQuery(ul1).css('display') !== 'none', 'the ul is displayed when the user clicks on the combo-box.');

    jQuery('body').click();

    equal( jQuery(ul1).css('display'), 'none', 'the ul is hidden again when the user clicks on the body of the page.' ); 

    var cbox2 = "\
    <combo-box id='test-two'>\
      <li>Nanaimo</li>\
      <li>Victoria</li>\
      <li>Vancouver</li>\
    </combo-box>\
    ";
    jQuery("body").append(cbox2);
    jQuery("#test-one").click();
    jQuery("#test-two").click();
    var ul2 = document.querySelector('#test-two').shadowRoot.querySelector('ul');
    equal( jQuery(ul1).css('display'), 'none', 'the ul of the first element is hidden after the second element is clicked' );
    equal( jQuery(ul2).css('display'), 'block', 'the ul of the second element stay displayed' );
  });

  test( 'selecting options', function() {
    var cbox = document.querySelector('combo-box');
    var ul   = cbox.shadowRoot.querySelector('ul');
    jQuery(cbox).click();
    var selectedValue = jQuery('li:first', cbox).click().text();

    equal( cbox.shadowRoot.querySelector('input').value, selectedValue, 'the selected value is added to the input field' );
    equal( jQuery(ul).css('display'), 'none', 'the option listing is hidden.' );
  });