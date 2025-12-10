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

let entry = new Entry("Gounash", "The evilmost being in the realms universe. His name is often used to reference the real devil.");
let eheu = new Entry("Eheu", "A humphrusian greeting, also indicates one's departure.");
let slopism = new Entry("Slopism", "An abstract concept that can be further explored in Great Futures, by Spencer Michelson.");
let humphrusia = new Entry("Humphrusia", "More of an idea than a nation, it takes form in many of our different projects. It is famous for it's insect called the humphrusian snouthorn.");
let rusing = new Entry("Rusing", "The verb form of the word ruse, meaning to lie or act deceitfully.");
let baryonyxTray = new Entry("Baryonyx Tray", "A fictitious component of an advance electronic device.");
let quantumSpanner = new Entry("Quantum Spanner", "A device whose purpose is undefinable, it can be used to fix any sci-fi issue.");

let entrys = [entry, eheu, slopism, humphrusia, rusing, baryonyxTray, quantumSpanner];
entrys.sort((a, b) => a.word.localeCompare(b.word));

entrys.forEach((item) => {
  item.MakeEntry();
});
