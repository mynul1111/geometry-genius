// function calculateParallelogramArea(){
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);


//     const base = getPallelogramBase();
//     console.log(base);
// }

// function getPallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }



function calculateParallelogramArea(){

    const base = getInputValueById('parallelogram-base');
    // console.log('bade value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height value', height);

    const area = base * height;
    console.log('area of the parallelogram is', area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(imputFieldId){
    const inputField = document.getElementById(imputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue)
    return inputValue;

}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}