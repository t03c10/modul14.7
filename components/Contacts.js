var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});
  
var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
});