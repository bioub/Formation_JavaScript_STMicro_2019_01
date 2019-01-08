function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  console.log('Bonjour je m\'appelle ' + this.prenom);
};

Contact.prototype.helloAsync = function() {
  setTimeout(function() {
    console.log('Bonjour je m\'appelle ' + this.prenom);
  }.bind(this), 100);
};

Contact.prototype.helloAsyncUseHello = function() {
  setTimeout(this.hello.bind(this), 100);
};

var romain = new Contact('Romain');
romain.hello();
romain.helloAsync();
romain.helloAsyncUseHello();

