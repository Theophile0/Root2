let history = [];
const setup = () => {
    let button = document.getElementById("goButton");
    button.addEventListener("click", go);

        makeCard();
}
const go = () => {
  let commandoLine = document.getElementById("commandoline");
  command = commandoLine.value;
  command.value = "";
    let link = "";
    let blokje = {};
    switch (command.slice(0,2)){
        case "/g":
            link = "http://www.google.com/search?q=";
            blokje.title = "Google";
            break;
        case "/y":
            link = "http://www.youtube.com/results?search_query=";
            blokje.title = "Youtube"
            break;
        case "/t":
            link = "https://twitter.com/hashtag/";
            blokje.title = "Twitter"
            break;
        case "/i":
            link = "http://www.instagram.com/explore/tags/";
            blokje.title = "Instagram"
            break;
        default: window.alert("Invalid commmand");
        break;
    }
    link += command.slice(3, command.length);
    blokje.text = command.slice(3, command.length);
    blokje.url = link;
    history.push(blokje);
    updateHistory();
    window.open(link, '_blank');
    makeCard();
}
const updateHistory = () => {
  let tekst = JSON.stringify(history);
  localStorage.setItem('history', tekst);
}
const makeCard = () => {
    history = JSON.parse(localStorage.getItem('history'));
    let row = null;
    let container = document.getElementById('super');
    container.innerHTML = '';
    for (let i = 0; i < history.length; i++) {

        let kaart = document.createElement('div');
        let h1 = document.createElement('h3');
        let p = document.createElement('p');
        let a = document.createElement("a");
        let wrapper = document.createElement('div');

        h1.appendChild(document.createTextNode(history[i].title));
        p.appendChild(document.createTextNode(history[i].text));
        a.appendChild(document.createTextNode("GO!"));

        kaart.className = 'col  card text-white'
        kaart.style.backgroundColor = getBackgroundColor(i);
        h1.className = 'card-title';
        p.className = 'card-text';
        a.setAttribute('href', history[i].url);
        a.className = 'btn btn-sm text-white';
        a.style.backgroundColor = getButtonBackgroundColor(i);
        wrapper.className = 'col-4'


        if((i%3) === 0 ){
            // wrapper nieuwe row toevoegen.
            // toevoegen aan parent container.
            // div hier toevoegen.
            row = document.createElement('div');
            row.setAttribute('class', 'row');
            container.appendChild(row);
        }
        kaart.appendChild(h1);
        kaart.appendChild(p);
        kaart.appendChild(a);
        wrapper.appendChild(kaart);
        row.appendChild(wrapper);
    }
}
const getBackgroundColor = (historyItem) => {
    let returnstatement = "";
    switch (history[historyItem].title){
        case "Google":
            returnstatement = `rgb(${66}, ${133}, ${244})`;
            break;
        case "Youtube":
            returnstatement = `rgb(${255}, ${0}, ${0})`;
            break;
        case "Twitter":
            returnstatement = `rgb(${29}, ${161}, ${242})`;
            break;
        case "Instagram":
            returnstatement = `rgb(${214}, ${41}, ${118})`;
            break;
    }
    return returnstatement;
}

const getButtonBackgroundColor = (historyItem) => {
    switch (history[historyItem].title){
        case "Google":
            return `rgb(${234}, ${67}, ${53})`;
        case "Instagram":
            return `rgb(${244}, ${111}, ${48})`;
        case "Twitter":
            return `rgb(${20}, ${23}, ${26})`;
        case "Youtube":
            return `rgb(${40}, ${40}, ${40})`
    }
}
window.addEventListener("load", setup);