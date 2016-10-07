var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
//left wall
canvas.fillStyle = "#5c5c3d";
canvas.fillRect(0, 150, 600, 1000);

canvas.fillStyle = "#333333";
canvas.fillRect(100, 150, 10, 1300);

canvas.fillStyle = "#333333";
canvas.fillRect(150, 300, 10, 150);

canvas.fillStyle = "#333333";
canvas.fillRect(250, 400, 10, 150);

canvas.fillStyle = "#333333";
canvas.fillRect(300, 300, 10, 1300);
////////////////////////////////////
canvas.fillStyle = "green";
canvas.fillRect(0, 120, 400, 30);

canvas.fillStyle = "green";
canvas.fillRect(490, 120, 115, 30);
//right wall//////////////////////////////////////////
canvas.fillStyle = "#5c5c3d";
canvas.fillRect(1500, 80, 400, 1000);

canvas.fillStyle = "green";
canvas.fillRect(1500, 60, 400, 30);

canvas.fillStyle = "#333333";
canvas.fillRect(1600, 400, 10, 150);

canvas.fillStyle = "#333333";
canvas.fillRect(1700, 150, 10, 1300);

//house

canvas.fillStyle = 	"#D2691E"	 ;
canvas.fillRect(1000, 600, 100, 100);

canvas.fillStyle = 	"#1a8cff"	 ;
canvas.fillRect(1010, 640, 20, 60);


//roof
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(1050,550);
canvas.lineTo(1100,600);
canvas.lineTo(1000,600);
canvas.fill();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//string
canvas.beginPath();
canvas.moveTo(1080,580);
////////////////////////////
canvas.lineTo(1180,240);
//////////////////////////

canvas.moveTo(1080,580);
canvas.lineTo(900,300);
canvas.moveTo(1080,580);
canvas.lineTo(1000,300);
canvas.stroke();
//////////////////////////////////////////////////SUUUUUUNNNNNN//////////////////
canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(800,0,70,0,2*Math.PI,true);
canvas.fill();
/////////////////////////////////////////////// Balllooooonns///////////////////////
canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(1000,300,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "red";
canvas.arc(900,350,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "yellow";
canvas.arc(1070,200,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#0099cc";
canvas.arc(1170,200,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#00e600";
canvas.arc(1070,300,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#ff9900";
canvas.arc(1100,400,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#ff3385";
canvas.arc(920,250,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#751aff";
canvas.arc(1160,280,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#3366ff";
canvas.arc(1000,400,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#ff3333";
canvas.arc(1000,200,50,0,2*Math.PI,true);
canvas.fill();



canvas.beginPath();
canvas.fillStyle = "#ff751a";
canvas.arc(1150,350,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#ff00ff";
canvas.arc(1050,330,50,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "#ffff4d";
canvas.arc(950,350,50,0,2*Math.PI,true);
canvas.fill();
///////////////////////////////////////////water fall ///////////////////////////////////////////
canvas.fillStyle = "#0099cc";
canvas.fillRect(400, 150, 90, 200);

canvas.fillStyle = "#0099cc";
canvas.fillRect(350, 300, 200, 300);

canvas.fillStyle = "#0099cc";
canvas.fillRect(300, 600, 300, 400);

canvas.fillStyle = "white";
canvas.fillRect(400, 200, 10, 150);

canvas.fillStyle = "white";
canvas.fillRect(350, 600, 10, 150);

canvas.fillStyle = "white";
canvas.fillRect(450, 800, 10, 150);

canvas.fillStyle = "white";
canvas.fillRect(450, 300, 10, 150);

canvas.fillStyle = "white";
canvas.fillRect(480, 600, 10, 150);

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(540,1000,100,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(300,970,150,0,2*Math.PI,true);
canvas.fill();
