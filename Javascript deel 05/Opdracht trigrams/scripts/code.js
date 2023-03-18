const setup = () => {
    let teSplitsen = "onoorbaar";

    for (let i = 0; i < teSplitsen.length-2; i++) {
        console.log(teSplitsen.slice(i, i+3))
    }
}
window.addEventListener("load", setup);