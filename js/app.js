// DEFINING THE CLASS

class Video {
  // constructor
  constructor(title, director, duration) {
    this.title = title;
    this.director = director;
    this.duration = duration;
  }

  // method
  present() {
    console.log(`This is \"${this.title}\", directed by ${this.director}.`);
  }
}

// CLASS INHERITANCE

// Class child 1:

class Film extends Video {
  constructor(title, director, duration, genre, year) {
    super(title, director, duration);
    this.genre = genre;
    this.year = year;
  }

  premier() {
    console.log(`In ${this.year} was released the film \"${this.title}\".`)
  }
}

// Class child 2:

class Tvspot extends Video {
  constructor(title, director, duration, product, channel) {
    super(title, director, duration);
    this.product = product;
    this.channel = channel;
  }

  showAdd() {
    console.log(`This TV show was been sponsored by ${this.product}. You are watching ${this.channel}\"!`)
  }
}

// INSTANCES

var myFirstRecording = new Video("Summer 1995", "Albert Johnson", "37");
var ironMan = new Film("Iron Man", "Jon Favreau", 126, "Scify", 2008);
var iphone = new Tvspot("iPhone 11 Slofies", "Peter Willson", 1, "iPhone 11", "neox");

// Playing with the different methods on console:

myFirstRecording.present();
ironMan.premier();
iphone.showAdd();
