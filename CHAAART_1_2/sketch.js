
let priceInit = 0.05;
let t = 0;
const meanZ = 0.002;
const sdZ = 0.023;
const priceMin = 0.01;
const tSeparate = 1500;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	price = priceInit * windowHeight;
	deltaT = windowWidth / tSeparate;
}

function draw() {
  pricePre = price;
	price = calcPrice(pricePre);
	stroke('white');
	line(t, windowHeight - pricePre, t + 1, windowHeight - price);
	t += deltaT;
	if (t > windowWidth) {
    noLoop();
  }
}

function calcPrice(priceInput) {
  priceOutput = priceInput + priceInput * randomGaussian(meanZ, sdZ);
	if (priceOutput <= priceMin) {
  	priceOutput = priceMin;
  }
	return priceOutput;
}