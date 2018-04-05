// creates the canvas grid
function makeGrid(num1, num2) {
  let anchorDiv = document.createElement('div');
  anchorDiv.className = 'container1';  
  pixelPainter.appendChild(anchorDiv);
  for (let i = 0; i < num1; i++) {
      let heightDivs = document.createElement('div');
      heightDivs.className = 'row';
      anchorDiv.appendChild(heightDivs);
      for (let y = 0; y < num2; y++) {
        let widthDivs = document.createElement('div');
        widthDivs.className = 'cell';
        heightDivs.appendChild(widthDivs);
        widthDivs.dataset.num = num2 * i + y;
        widthDivs.dataset.row = i;
        widthDivs.dataset.column = y;
      } 
    }
    return 
  };
  makeGrid(80,80);

// creates an empty space between the canvas and the swatch
// function emptyGrid(num1, num2) {
//   let anchorDiv = document.createElement('div');
//   anchorDiv.className = 'container2';
//   pixelPainter.appendChild(anchorDiv);
//   for (let i = 0; i < num1; i++) {
//     let heightDivs = document.createElement('div');
//     heightDivs.className = 'emptyRow';
//     anchorDiv.appendChild(heightDivs);
//     for (let y = 0; y < num2; y++) {
//       let widthDivs = document.createElement('div');
//       widthDivs.className = 'emptyCell';
//       heightDivs.appendChild(widthDivs);
//     }
//   }
//   return
// };
// emptyGrid(3, 20);

// creates the swatch with colors 
function colorGrid(num1, num2) {
  let anchorDiv = document.createElement('div');
  anchorDiv.className = 'container3';
  pixelPainter.appendChild(anchorDiv);
  for (let i = 0; i < num1; i++) {
    let heightDivs = document.createElement('div');
    heightDivs.className = 'colorRow';
    anchorDiv.appendChild(heightDivs);
    for (let y = 0; y < num2; y++) {
      let colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"]
      let widthDivs = document.createElement('div');
      widthDivs.className = 'colorCell';
      heightDivs.appendChild(widthDivs);
      widthDivs.style.backgroundColor = colors[y];
    }
  }
  return
};
colorGrid(1,30);

// creates divs which house the different utility features
function utilityDivs() {
  let listOfFeatures = ['Clear Canvas', 'Erase', 'Erase Current Color'];
 for (let i = 0; i < listOfFeatures.length; i++) {
   let anchorDiv = document.createElement('div');
   anchorDiv.className = 'container4';
   anchorDiv.id = 'feature'+ [i];
   anchorDiv.innerHTML = listOfFeatures[i];
   pixelPainter.appendChild(anchorDiv);
 }
  
}
utilityDivs();

let assignErase = document.getElementById('feature1');
assignErase.addEventListener('click', eraser);
// creates the Eraser function
function eraser(){
  currentColor = "white";
}

let assignCanvasClear = document.getElementById('feature0')
assignCanvasClear.addEventListener('click', canvasClear);
// creates the Clear Canvas function
function canvasClear(){
let allCanvasCells = document.getElementsByClassName('cell');
  for (let i = 0; i < allCanvasCells.length; i++){
    allCanvasCells[i].style.backgroundColor = "white";
}
}

let assignEraseCurrentColor = document.getElementById('feature2');
assignEraseCurrentColor.addEventListener('click', eraseCurrentColor);

function eraseCurrentColor(){
  let allCanvasCells = document.getElementsByClassName('cell');
  for (let i = 0; i < allCanvasCells.length; i++){
    (function (i){
      setTimeout(function(){
    if(allCanvasCells[i].style.backgroundColor === currentColor){
      allCanvasCells[i].style.backgroundColor = "white";
  }
      },1*i);
    })(i);
}
}

// sets event listeners on the swatch cells, allowing the user to choose the color
function assignColorListeners() {
  let setListeners = document.getElementsByClassName('colorCell');
  for(let i = 0; i < setListeners.length; i++){
    setListeners[i].addEventListener('click', setColors);
  }
};
assignColorListeners();



// variable which shows the currently selected color
let currentColor = '';

// sets the current color to be used on the grid
function setColors(event) {
  currentColor = event.target.style.backgroundColor;
};

// sets event listners on the canvas cells, allowing the cells to be colored
function assignBlankListeners() {
  let setListeners = document.getElementsByClassName('cell');
  for (let i = 0; i < setListeners.length; i++) {
    setListeners[i].addEventListener('click', assignColors);
    // setListeners[i].addEventListener('drag', assignColors);
    setListeners[i].addEventListener('dragover', assignColors);

  }
};
assignBlankListeners();

// changes the color of the grid cells to the current selected color
function assignColors(event) {
  console.log(event);
  event.target.style.backgroundColor = currentColor;
}


function floodFill(event,){
 if(event.target.style.backgroundColor == currentColor){
  return{
    else{
      
    }
  }
  }
 }
