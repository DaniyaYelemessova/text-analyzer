// Utility Logic

function isEmpty(testString) {
  return testString.trim().length === 0;
}

// Buisness logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

// ------------------------------

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// ----------------------------------

function offensiveWordOmit(text) {
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const lowerCaseOffensiveWords = offensiveWords.map((word) =>
    word.toLowerCase()
  );
  const textArray = text.split(" ");
  let sentence;
  sentence = textArray.filter(
    (word) => !lowerCaseOffensiveWords.includes(word.toLowerCase())
  );
  const newSen = sentence.join(" ");
  return newSen;
}

// ------------------------------

function wordFrequency(text) {
  const newText = text.toLowerCase();
  const textArray = newText.split(" ");
  let wordFrequency = {};
  textArray.forEach(function (word) {
    if (wordFrequency[word]) {
      wordFrequency[word]++;
    } else {
      wordFrequency[word] = 1;
    }
  });
  return wordFrequency;
}

// UI LOGIC

function reset() {
  const form = document.querySelector("form");
  form.reset();
}

function boldPassage(word, text){
  if(isEmpty(word) || isEmpty(text)){
    return null;
  }
  const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function(element, index){
    if(word === element){
      const bold = document.createElement("strong");
      bold.append(text);
      p.append(bold);
  }else{
    p.append(element);
  }
  if (index !== (textArray.length - 1)) {
    p.append(" ");
  }
})
  return p;
}

function boldWords(text){

}


// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  const wordFreq = wordFrequency(passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  const wordNum = (document.getElementById("wordNumber").innerText =
    JSON.stringify(wordFreq));
  wordNum.innerText = " ";
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function () {
  document
    .querySelector("form#word-counter")
    .addEventListener("submit", handleFormSubmission);
});

