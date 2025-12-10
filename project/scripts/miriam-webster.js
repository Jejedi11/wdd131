class Entry {
  constructor(word, text) {
    this.word = word;
    this.text = text;
  }
  MakeEntry() {
    const event = document.createElement("div");
    event.innerHTML = "<h2>" + this.word + "</h2><p>" + this.text + "</p>";
    document.querySelector('.entrys').appendChild(event);
  }
}

let entry = new Entry("Gounash", "The Devil");
let eheu = new Entry("Eheu", "A humphrusian greeting, also indicates one's departure.");
let slopism = new Entry("Slopism", "An abstract concept that can be further explored in Great Futures, by Spencer Michelson.");

let entrys = [entry, eheu, slopism]
entrys.sort((a, b) => a.word.localeCompare(b.word));

entrys.forEach((item) => {
  item.MakeEntry();
});
