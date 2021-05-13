var header = document.getElementsByClassName('header')[0];
var section = document.getElementsByClassName('section')[0];
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
    showHero(superHeroes);
    
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj.squadName;
    header.appendChild(myH1);

    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj.homeTown + " // Formed: " + jsonObj.formed;
    header.appendChild(myPara); 
}

function showHero(jsonObj) {
    let heroJson = jsonObj.members;


    for (let i = 0; i < heroJson.length; i++) {
        var containerItem = document.createElement('div');
        containerItem.className = 'section__item';
        var heroName = document.createElement('h2');
        var heroIdentity = document.createElement('p');
        var heroAge = document.createElement('p');
        var heroSuperpowers = document.createElement('ul');

        heroName.textContent = heroJson[i].name;
        heroIdentity.textContent = "Secret identity: " + heroJson[i].secretIdentity;
        heroAge.textContent = "Age: " + heroJson[i].age;
        heroSuperpowers.textContent = "Superpowers:";


        section.appendChild(containerItem);
        let item = document.getElementsByClassName('section__item')[i];
        item.appendChild(heroName);
        item.appendChild(heroIdentity);
        item.appendChild(heroAge);
        item.appendChild(heroSuperpowers);

        for (let j = 0; j < heroJson[i].powers.length; j++) {
            let spisok = document.querySelector('.section__item:last-child > ul');
            let superpowerItem = document.createElement('li');
            let superpowerText = heroJson[i].powers[j];
            superpowerItem.textContent = superpowerText;
            spisok.appendChild(superpowerItem);
        }



    }

}
