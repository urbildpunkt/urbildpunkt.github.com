/* @pjs transparent=true; */


float win_width = window.innerWidth; 
float maxCount = sqrt(win_width) / 4;


// Set number of circles
int count = round(maxCount);

// Set maximum and minimum circle size
int maxSize = 160;
int minSize = 20;

// Build float array to store circle properties
float[][] e = new float[count][5];

// Set size of dot in circle center
float ds=1;
// Set drag switch to false
boolean dragging=false;

// integers showing which circle (the first index in e) that's locked, and its position in relation to the mouse
int lockedCircle; 
int lockedOffsetX;
int lockedOffsetY;


// Set up canvas
void setup() {

  // Frame rate
  frameRate(60);
  // Size of canvas (width,height)
  size(win_width, 300); 
  // Stroke/line/border thickness
  strokeWeight(1);
  
  // Initiate array with random values for circles
  for (int j=0;j< count;j++) {
    e[j][0]=random(width); // X 
    e[j][1]=random(height); // Y
    e[j][2]=random(minSize, maxSize); // Radius        
    e[j][3]=random(-.6, .6); // X Speed
    e[j][4]=random(-.6, .6); // Y Speed
  }
  
}

// Begin main draw loop (called 25 times per second)
void draw() {

  // Fill background black
  background(0,0,0,0);
	 
  // Begin looping through circle array
  for (int j=0;j< count;j++) {
    // Disable shape stroke/border
    noStroke();
    // Cache diameter and radius of current circle
    float radi=e[j][2];
    float diam=radi/2;
    if (e[j][2] < 50)
      fill(64, 187, 128, 0); // green
    else
      fill(64, 128, 187, 0); // regular
      
    // Draw circle
    ellipse(e[j][0], e[j][1], radi, radi);
    // Move circle
    e[j][0]+=e[j][3];
    e[j][1]+=e[j][4];


    /* Wrap edges of canvas so circles leave the top
     and re-enter the bottom, etc... */
    if ( e[j][0] < -diam      ) { 
      e[j][0] = width+diam;
    } 
    if ( e[j][0] > width+diam ) { 
      e[j][0] = -diam;
    }
    if ( e[j][1] < 0-diam     ) { 
      e[j][1] = height+diam;
    }
    if ( e[j][1] > height+diam) { 
      e[j][1] = -diam;
    }

    // If green
    if (e[j][2] < 100) {
    // otherwise set center dot color to black.. 
      fill(0, 0, 0, 50);
      // set stroke color of line to green.
      stroke(64, 128, 187, 100);
    } 
    else {            
      // otherwise set center dot color to black.. 
      fill(0, 0, 0, 50);
      // and set line color to turquoise.
      stroke(30, 128, 213, 255);
    }

    // Loop through all circles
    for (int k=0;k< count;k++) {
      // If the circles are close...
      if ( sq(e[j][0] - e[k][0]) + sq(e[j][1] - e[k][1]) < 90000 ) {
        // Stroke a line from current circle to adjacent circle
        line(e[j][0], e[j][1], e[k][0], e[k][1]);
      }
    }
    // Turn off stroke/border
    noStroke();      
    // Draw dot in center of circle
    rect(e[j][0]-ds, e[j][1]-ds, ds*2, ds*2);
    
  }


}


void reSize() { 

  redraw();  

}
