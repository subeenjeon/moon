var solar, bg, earth, moon;
function setup() {
    createCanvas(1000, 1000);
	solar = loadImage("sun.png");
	bg = loadImage("bg.png");
	earth = loadImage("earth.png");
	moon = loadImage("moon.png");
	human = loadImage("human.png");
}


function draw() {

	background(bg);

	var duration0 = 7000;
	var timing0 = (new Date()%duration0)/duration0;
	var duration1 = 6000;
	var timing1 = (new Date()%duration1)/duration1;
	var duration2 = 5000;
	var timing2 = (new Date()%duration2)/duration2;
	var duration3 = 4000;
	var timing3 = (new Date()%duration3)/duration3;
	var duration4 = 3000;
	var timing4 = (new Date()%duration4)/duration4;
	var duration5 = 6000;
	var timing5 = (new Date()%duration5)/duration5;

	//태양
 	image(solar,250,250,500,500);


 	//지구
	image(earth,500 + Math.cos(timing1*2*PI)*300-150,500 + Math.sin(timing1*2*PI)*300-150,300,300);


	//토이스토리
	image(human,450 + Math.cos(timing5*2*PI)*485, 450 + Math.sin(timing5*2*PI)*485, 100, 126);  


 	//달1
	image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing2*4*PI)*150-100,
		500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing2*4*PI)*70-100,200,200);

	image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing3*4*PI)*100-100,
		500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing3*4*PI)*100-100,200,200);

	image(moon,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing4*4*PI)*50-100,
		500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing4*4*PI)*150-100,200,200);
}
