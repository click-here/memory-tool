quote_text = "He who knows only his own side of the case knows little of that. His reasons may be good, and no one may have been able to refute them. But if he is equally unable to refute the reasons on the opposite side, if he does not so much as know what they are, he has no ground for preferring either opinion... Nor is it enough that he should hear the opinions of adversaries from his own teachers, presented as they state them, and accompanied by what they offer as refutations. He must be able to hear them from persons who actually believe them...he must know them in their most plausible and persuasive form."

var range = function(start, end) { // from: https://stackoverflow.com/a/33457557
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

var shuffle = function(a) { // from: https://stackoverflow.com/a/6274381
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var addQuote = function(quote_text){
    var quoteParagraph = document.getElementById("quote");
    
    words = quote_text.split(' ');
    words.forEach(function(item){

        var wordDiv = document.createElement("div");
        wordDiv.setAttribute("class","quote-word");
        wordDiv.textContent = item;
        quoteParagraph.appendChild(wordDiv); 

    })
    
}
addQuote(quote_text);

var hideSomeWords = function(){
    var wordElems = document.getElementsByClassName("quote-word");
    var wordCnt = wordElems.length;    
    var rng = range(1,wordCnt);
    rng = shuffle(rng);

    hideAmount = 0.05 * wordCnt;
    slicedRng = rng.slice(0,hideAmount);

    Object.values(wordElems).forEach(function(item,index){
        if (slicedRng.includes(index)) {
            item.classList.remove("quote-word");
            item.classList.add("hidden-word");
        
        }
    })
}
hideSomeWords()