const setup = () => {
    let familieleden = ['vader', 'moeder', 'broer', 'zus', 'neef'];
    console.log(familieleden.length);
    console.log(familieleden[0] + ' ' + familieleden[2] + ' ' + familieleden[4]);

    const voegNaamToe = (newArr) => {
        let naam = window.prompt("Geef een extra naam", 'onbekend');
        newArr.push(naam);
    };
    voegNaamToe(familieleden);
    console.log(familieleden);
    console.log(familieleden.join(', '));
}
window.addEventListener("load", setup);
