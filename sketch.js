var b1, b2 ,b3,b4,b5,b6,b7,b8,b9,b10;

function setup() {
  createCanvas(500, 400);
  
  b1=new Building();
  b1.position=0;
  b1.floors=27;
  
  b2=new Building();
  b2.position=1;
  b2.floors=19;
  
  b3=new Building();
  b3.position=2;
  b3.floors=23;
  
  b4=new Building();
  b4.position=3;
  b4.floors=21;
  
  b5=new Building();
  b5.position=4;
  b5.floors=25;
  
  b6=new Building();
  b6.position=8;
  b6.floors=9;
  
  b7=new Building();
  b7.position=9;
  b7.floors=15;
  
  b8=new Building();
  b8.position=10;
  b8.floors=13;
  
  b9=new Building();
  b9.position=11;
  b9.floors=11;
  
  b10=new Building();
  b10.position=12;
  b10.floors=17;

 
}
function draw() {
  background('red')
  fill('green')
  rect(220,390,70,10 )
  fill('yellow');
  b1.display();
  fill('yellow');
  b2.display();
 fill('yellow');
  b3.display();
  fill('yellow');
  b4.display();
    fill('yellow');
  b5.display();
    fill('yellow');
  b6.display();
  fill('yellow');
  b7.display();
  fill('yellow');
  b8.display();
    fill('yellow');
  b9.display();
   fill('yellow');
  b10.display();
}
