const setup = () => {
    let btnsubstring=document.getElementById("stringbutton");
    btnsubstring.addEventListener("click", deel)
}

const deel = () => {
    let txtInput=document.getElementById("string");
    let index1=document.getElementById("index1");
    let index2=document.getElementById("index2");
    let txtOutput=document.getElementById("txtOutput");

    let bound = parseInt(index1.value, 10);
    let bound1 = parseInt(index2.value, 10);

    let result=txtInput.value.substring(bound, bound1);
    txtOutput.innerHTML=result;
}
window.addEventListener("load", setup);