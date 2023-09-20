const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Center" , "png");
}

function setup_layers(pScope){

  new PLayer(null,200);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Vinyl);
  layer1.mode(RING);
  layer1.set_boundary( 0, 800 );
 
  var layer2 = new PLayer(VinylEdge);
  layer2.mode(RING);
  layer2.set_boundary( 780, 800 );

  var layer3 = new PLayer(VinylDesign);
  layer3.mode(SWIRL(2));
  layer3.set_boundary( 170, 750 );

  var layer4 = new PLayer(VinylCenter);
  layer4.mode(RING);
  layer4.set_boundary( 0, 170 );

  var layer5 = new PLayer(Needle);
  layer5.mode(RING);

  var layer6 = new PLayer(CenterDesign);
  layer6.mode(RING);

}

function Vinyl(x, y, animation, pScope){
  let c1 = color(20)
  let c2 = color(60)
  let fincol = lerpColor(c1, c2, animation.wave(2))
  pScope.fill_background(fincol);
  }




function VinylCenter(x, y, animation, pScope){

  pScope.fill_background(184, 38, 28);
} 
function VinylDesign(x, y, animation, pScope){
  scale(1.5-animation.wave());
  noFill();
  strokeWeight(3);
  stroke(255);
  rotate(45)
  rect(10,10,50,50);
  rect(0,0,50,50);
  circle(0,0,20,20);
  circle(60,60,20,20);
} 

function CenterDesign(x, y, animation, pScope){
  if(animation.frame==0){
    scale(0.54);
  pScope.draw_image("Center",0,0);
  }  
} 

function VinylEdge(x, y, animation, pScope){
  pScope.fill_background(184, 38, 28);
  }
  let time = 0
function Needle(x, y, animation, pScope){

  // if(animation.frame > 0){ //trying to make only one needle appear
    
    fill(80);
    stroke(40);
    strokeWeight(6);
    ellipse(130,-980,350,350);
    stroke(235, 179, 96);
    strokeWeight(60);
    line(130,-980,60,-700);
    line(60,-700,-40,-600);
    stroke(181, 133, 62);
    strokeWeight(40);
    line(130,-980,60,-700);
    line(60,-700,-40,-600);
    fill(181, 133, 62);
    strokeWeight(10);
    stroke(235, 179, 96);
    push();
    translate(-40+10*animation.wave(),-600-10*animation.wave());
    rotate(45);
    scale(1+0.08*animation.wave())
    beginShape();
    vertex(-50,75);
    vertex(50,75);
    vertex(50,-75);
    vertex(-50,-75);
    endShape(CLOSE);
    pop();
    fill(235, 179, 96);
    stroke(40);
    strokeWeight(20);
    ellipse(130,-980,200,200);
    noStroke()
    fill(181, 133, 62)
    ellipse(130,-980,160,160);
    
  //   if (time < 18){
  //     time = time + 1
  //   }
  //   else {time = 0
  //   }
  // }
}
