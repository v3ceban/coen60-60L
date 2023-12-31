const main = () => {
  const button = document.querySelectorAll("button");
  const svg = document.querySelector("svg");
  const svgWidth = svg.getBoundingClientRect().width;
  const svgHeight = svg.getBoundingClientRect().height;
  var rects = [];
  const width = svgWidth / 20;
  const height = svgHeight / 20;
  let flag = false;

  const randNum = (x) => {
    return Math.floor(Math.random() * x);
  };

  const randColor = () => {
    let a = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += a[randNum(a.length)];
    }
    return color;
  };

  const createSquare = () => {
    let square = document.createElementNS(`http://www.w3.org/2000/svg`, `rect`);
    square.setAttribute("x", randNum(svgWidth - width));
    square.setAttribute("y", randNum(svgHeight - height));
    square.setAttribute("width", width);
    square.setAttribute("height", height);
    square.setAttribute("fill", randColor());
    rects.push(square);
    return square;
  };

  button[0].addEventListener("click", () => {
    let square = createSquare();
    svg.appendChild(square);
  });
  button[1].addEventListener("click", () => {
    for (let index = 0; index < 5; index++) {
      let square = createSquare();
      svg.appendChild(square);
    }
  });
  button[2].addEventListener("click", () => {
    if (flag == false) {
      flag = true;
      alert("Because I can.");
    }
    for (let index = 0; index < 100; index++) {
      let square = createSquare();
      svg.appendChild(square);
    }
  });
  button[3].addEventListener("click", () => {
    for (let index = 0; index < rects.length; index++) {
      const square = rects[index];
      square.setAttribute("fill", randColor());
    }
  });
  button[4].addEventListener("click", () => {
    for (let index = 0; index < rects.length; index++) {
      const square = rects[index];
      svg.removeChild(square);
    }
    rects = [];
  });
};

main();
