function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  console.log('Bonjour je m\'appelle ' + this.prenom);
};

Contact.prototype.helloAsync = function() {
  var that = this;
  setTimeout(function() {
    console.log('Bonjour je m\'appelle ' + that.prenom);
  }, 100);
};

Contact.prototype.helloAsyncUseHello = function() {
  setTimeout(bind(this.hello, this), 100);
};

function bind(fct, thisArg) {
  return function() {
    fct.call(thisArg);
  }
}

var romain = new Contact('Romain');
romain.hello();
romain.helloAsync();
romain.helloAsyncUseHello();

