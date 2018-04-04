function makeGrid(num1, num2) {
    for (let i = 0; i < num1; i++) {
      let heightDivs = document.createElement('div');
      heightDivs.className = 'row';
      pixelPainter.appendChild(heightDivs);
      for (let y = 0; y < num2; y++) {
        let widthDivs = document.createElement('div');
        widthDivs.className = 'cell';
        heightDivs.appendChild(widthDivs);
      } 
    }
    return 
  };

  makeGrid(20,20);
