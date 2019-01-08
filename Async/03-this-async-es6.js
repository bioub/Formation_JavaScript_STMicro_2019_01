class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 100);
  }
  helloAsyncUseHello() {
    setTimeout(this.hello.bind(this), 100);
  }
}

const romain = new Contact('Romain');
romain.hello();
romain.helloAsync();
romain.helloAsyncUseHello();

