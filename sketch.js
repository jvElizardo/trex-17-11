var trex, trex_running, edges;
var soloinvisivel;
var groundImage;
var nuvem,imgceu;
var solo ;
var randomn;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;
var pontos=0;
var obstaculogroup
var nuvemgroup
var inicio = 1 
var fim = 0 
var estado_de_jogo=inicio
// carrega as animaçoes 
function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  imgceu=loadImage("cloud.png");
   obstacle1=loadImage("obstacle1.png");
   obstacle2=loadImage("obstacle2.png");
   obstacle3=loadImage("obstacle3.png");
   obstacle4=loadImage("obstacle4.png");
   obstacle5=loadImage("obstacle5.png");
   obstacle6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  solo=createSprite(300,180,60,20);
  solo.addAnimation("terra",groundImage);
  edges = createEdgeSprites();
  soloinvisivel=createSprite(40,200,300,20);
  soloinvisivel.visible=false;
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50;
  console.log("qwfcxvcg"+7);
  obstaculogroup=new Group ();
  nuvemgroup= new Group ();

}
  

function draw(){
  //definir a cor do plano de fundo 
  background("white");
  text("pontos"+pontos,50,20);
  
  if (estado_de_jogo===inicio)
  { 
    solo.velocityX=-6;
    pontos=pontos+Math.round(frameCount/60);
    if (solo.x<0){
      solo.x=solo.width/2;
    }
    if(keyDown("space")&& trex.y>=150 )
  {
    trex.velocityY = -10; 
  }
  trex.velocityY = trex.velocityY + 0.5;
  ceu();
  obstaculogroup();
  if (trex.isTouching(obstaculogroup)){
    estado_de_jogo=fim;
  }
}

  else if (estado_de_jogo===fim){
    solo.velocityX=0;
   obstaculogroup.setVelocityXEach(0)
   nuvemgroup.setVelocityXEach(0)
  }
  
  //registrando a posição y do trex
  //console.log(trex.y);
  
  //pular quando tecla de espaço for pressionada
  
  
//console.log(frameCount);
 
  
 //impedir que o trex caia
  trex.collide(soloinvisivel);
 
  drawSprites();
}

function ceu ()
{
  if (frameCount%100===0)
  {
   
 nuvem=createSprite(400,20,60,20);
 nuvem.addImage(imgceu);
 nuvem.velocityX=-3;
 console.log(trex.depth);
console.log(nuvem.depth);
nuvem.y=Math.round(random(30,60));
nuvem.depth=trex.depth;
trex.depth+=1;
nuvem.lifetime=40;
nuvemgroup.add(nuvem);
}

}
function obstaculos ()
{
  if(frameCount%50===0)
{
  cacto=createSprite(400,180,20,25);
  cacto.scale=0.5;
  cacto.velocityX=-6;
  randomn=Math.round(random(1,6));
  cacto.lifetime=80;
  switch(randomn)
  {
   case 1: cacto.addImage(obstacle1);
            break;
   case 2: cacto.addImage(obstacle2);
           break
   case 3: cacto.addImage(obstacle3);
           break;
  case 4: cacto.addImage(obstacle4);
           break; 
  case 5: cacto.addImage(obstacle5);
           break; 
    case 6: cacto.addImage(obstacle6);
           break;
    default:break;                
  }
  obstaculogroup.add(cacto);
}

}