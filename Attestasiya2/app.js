class Messenger {
    constructor() {
      this.history = [];
    }
    send(author, text) {
      this.history.push(new Message(author, this.gettime(), text));
    }
    show_history() {  
      this.history.forEach(el=> el.toString())
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`;
      }
  }
  class Message {
    constructor(author, time, text) {
      this.author = author;
      this.time = time;
      this.text = text;
    }
  
    toString() {
      console.log(`${this.time} ${this.author}: ${this.text}`)
    }
  }
  
  let messenger = new Messenger()
  messenger.send('Adil', 'ilk mesaj')
  messenger.send('Məryəm', 'İkinci mesaj')
  messenger.send("Somebody","Something")
  messenger.show_history()
  