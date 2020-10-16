
var gl;
var points;
let canvas;

var vPosition, vPosition2;
var bufferId, bufferId2;
var program;

var mountainpoints = [];


//var vertices2 = new Float32Array([-1, 1, 0, -1, 1, 1]);

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }


    
    //
    //  Configure WebGL
    //
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.411, 0.635, 1.0);

    //  Load shaders and initialize attribute buffers

    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    gl.clear(gl.COLOR_BUFFER_BIT);
        /*-----------------------------------------------------------------*/


     //island shallow waters    -0.25/-0.2
   arrw=[
    0.0,0.0,
    0.9+0.05,0.0,
    0.75,-0.6-0.20,
    0.5,-0.7-0.25,
    0.2,-0.8-0.20,
    0.0,-0.6-0.20,
    -0.1,-0.65-0.25,
    -0.3,-0.7-0.20,
    -0.55,-0.8-0.25,
    -0.9-0.04,-0.4-0.08,
    -0.73,-0.05-0.25,

    -0.75,0.1,
    -0.5,0.5,
    -0.2,0.4,
    -0.1,0.5,
    0.1,0.4,
    0.15,0.3,
    0.2,0.27,
    0.45,0.4,
    0.65,0.3,
    0.9+0.05,0.0,

         ]
var carrw=[],times=arrw.length/2;
while(times)
{
 carrw.push(0.035, 0.835, 0.945);
 --times;
}

 var islandw = new Float32Array(arrw);
 var islandcw = new Float32Array(carrw);

     


 



    /*-----------------------------------------------------------------*/

   //island soil    -0.1
   arr=[
    0.0,0.0,
    0.9,0.0,
    0.9,0.0-0.1,
    0.75,-0.6-0.1,
    0.5,-0.7-0.1,
    0.2,-0.8-0.1,
    0.0,-0.6-0.08,
    -0.1,-0.65-0.1,
    -0.3,-0.7-0.08,
    -0.55,-0.8-0.1,
    -0.9,-0.4-0.08,
    -0.9,-0.4,
    -0.73,-0.05-0.09,

    -0.75,0.1,
    -0.5,0.5,
    -0.2,0.4,
    -0.1,0.5,
    0.1,0.4,
    0.15,0.3,
    0.2,0.27,
    0.45,0.4,
    0.65,0.3,
    0.9,0.0,




         ]
 carr=[],times=arr.length/2;
while(times)
{
 carr.push(0.517,0.411,0.305);
 --times;
}

 var island = new Float32Array(arr);
 var islandc = new Float32Array(carr);

     





       /*-----------------------------------------------------------------*/


//island greenery
    arrg=[
    0.0,0.0,
    0.9,0.0,
    0.75,-0.6,
    0.5,-0.7,
    0.2,-0.8,
    0.0,-0.6,
    -0.1,-0.65,
    -0.3,-0.7,
    -0.55,-0.8,
    -0.9,-0.4,
    -0.73,-0.05,

    -0.75,0.1,
    -0.5,0.5,
    -0.2,0.4,
    -0.1,0.5,
    0.1,0.4,
    0.15,0.3,
    0.2,0.27,
    0.45,0.4,
    0.65,0.3,
    0.9,0.0,




         ]
 carrg=[],times=arrg.length/2;
 carrg.push(0.0,0.9,0.0)
while(times)
{
 carrg.push(0.0,Math.random()*(1.0-0.8)+0.8,0.0);
 --times;
}

 var islandg = new Float32Array(arrg);
 var islandcg = new Float32Array(carrg);

     





  
/*-----------------------------------------------------------------*/

//sky

var verticessky = new Float32Array([1.0,0.6, 1.0,1.0, -1.0,0.6, -1.0,1.0,]);
var cverticessky = new Float32Array([
    0.996,0.623,0.101,
    0.996,0.623,0.101,
    0.996,0.823,0.301,
    0.996,0.823,0.301,
   ]);




/*-----------------------------------------------------------------*/


//mountains
//left mountain
var sideLength = 1.5;
mountainvertices = [
         vec2( 0-0.5,sideLength/Math.sqrt(3)-0.03), // top
        vec2( -sideLength/2+0.20,  -sideLength/(2*Math.sqrt(3))+0.80),  // center-up corner
        vec2( sideLength/2-1.0,  -sideLength/(2*Math.sqrt(3))+0.80)
];   

    performTessellation(mountainvertices[0], mountainvertices[1], mountainvertices[2],1);
   
    let mountainpointsc=[];
    mountainpointsc.push(1.0,1.0,1.0);
        for(let i=0;i<mountainpoints.length;i++)
        {
            //Math.random()*(0.5-0.45)+0.45,Math.random()*(0.370-0.360)+0.360,Math.random()*(0.230-0.220)+0.22
            mountainpointsc.push(Math.random()*(0.4-0.30)+0.30,Math.random()*(0.270-0.20)+0.20,Math.random()*(0.200-0.150)+0.150);


        }
        let mountainpoints1=mountainpoints;
        

    
        mountainpoints=[];

           //-------------------------------------------


           //right mountain 
mountainvertices = [
    vec2( 0+0.0,sideLength/Math.sqrt(3)-0.1), // top
   vec2( -sideLength/2+0.5,  -sideLength/(2*Math.sqrt(3))+0.75),  // center-up corner
   vec2( 0.15,0.30,)
];   

performTessellation(mountainvertices[0], mountainvertices[1], mountainvertices[2],1 );

let mountainpoints2c=[];
mountainpoints2c.push(1.0,1.0,1.0);
   for(let i=0;i<mountainpoints.length;i++)
   {
    mountainpoints2c.push(Math.random()*(0.4-0.30)+0.30,Math.random()*(0.270-0.20)+0.20,Math.random()*(0.200-0.150)+0.150);


   }
   let mountainpoints2=mountainpoints;
 
   mountainpoints=[];



   //--------------------------
//mountain 3
       // var sideLength = 1.5;
mountainvertices = [
         vec2( 0-0.2,sideLength/Math.sqrt(3)-0.05), // top
        vec2( -sideLength/2+0.4,  -sideLength/(2*Math.sqrt(3))+0.75),  // center-up corner
        vec2( sideLength/2-0.7,  -sideLength/(2*Math.sqrt(3))+0.75)
];   

    performTessellation(mountainvertices[0], mountainvertices[1], mountainvertices[2],1 );
   
     let mountainpoints3c=[];
     mountainpoints3c.push(1.0,1.0,1.0);
        for(let i=0;i<mountainpoints.length;i++)
        {
            //mountainpoints3c.push(Math.random()*(0.9-0.7)+0.7,Math.random()*(0.5-0.3)+0.3,Math.random()*(0.4-0.17)+0.17);
            mountainpoints3c.push(Math.random()*(0.6-0.40)+0.40,Math.random()*(0.400-0.355)+0.355,Math.random()*(0.300-0.200)+0.20);

        }


        /*-----------------------------------------------------------------*/



        //human figure

        let human=[]
        let humanc=[];
        var vertCount = 2;
    for (var i=0.0; i<=360; i+=1) {
      // degrees to radians
    
      var j = i * Math.PI / 180;
      // X Y Z
    
      var vert1 = [
       (0.02* Math.sin(j))-0.60,
        (0.048*Math.cos(j)),
        // 0,
      ];
      var vert2 = [
        0-0.60,
        0,
        // 0,
      ];
      j = (i+1) * Math.PI / 180;
      var vert3 = [
        (0.02* Math.sin(j))-0.60,
         (0.048*Math.cos(j)),
         // 0,
       ];
      // DONUT:
      // var vert2 = [
      //   Math.sin(j)*0.5,
      //   Math.cos(j)*0.5,
      // ];
      human = human.concat(vert1);  
      human = human.concat(vert2);  
      human = human.concat(vert3);  

    }

    
    //chest
   human= human.concat([0.05,-0.05,  0.05,-0.22,  -0.05,-0.05,   0.05,-0.22,  -0.05,-0.05,  -0.05,-0.22,]); 
   //arms   //right then left
    human= human.concat([0.05,-0.06,  0.1,-0.1,  0.1,-0.15,  0.1,-0.15,  0.05,-0.06, 0.05,-0.1,
        -0.05,-0.06, - 0.1,-0.1,  -0.1,-0.15,  -0.1,-0.15,  -0.05,-0.06, -0.05,-0.1,]);
    //legs  right then left
    human= human.concat([0.02,-0.2, 0.04,-0.2,  0.04,-0.35, 0.02,-0.2, 0.04,-0.35, 0.02,-0.35, 
                     -0.02,-0.2, -0.04,-0.2,  -0.04,-0.35, -0.02,-0.2, -0.04,-0.35, -0.02,-0.35,])

      for(let i=2166;i<human.length;i+=2)
      human[i]-=0.60;
      const humanstart=Array.from(human);
      
    var h = human.length / vertCount;
//2166
      
    for(let i=0;i<1083;i++)
    {
      //  humanc.push(Math.random()*(0.95-0.80)+0.80,Math.random()*(0.75-0.60)+0.60,Math.random()*(0.50-0.40)+0.40);
        humanc.push(Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70);

    }

    humanc.push(Math.random()*(1.0-0.85)+0.85,0.0,0.0, Math.random()*(1.0-0.85)+0.85,0.0,0.0,Math.random()*(1.0-0.85)+0.85,0.0,0.0,Math.random()*(1.0-0.85)+0.85,0.0,0.0,Math.random()*(1.0-0.85)+0.85,0.0,0.0,Math.random()*(1.0-0.85)+0.85,0.0,0.0,);

    humanc.push(Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70, Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,Math.random()*(1.0-0.9)+0.9,Math.random()*(0.87-0.80)+0.80,Math.random()*(0.74-0.70)+0.70,);

    humanc.push(0.0,0.0,Math.random()*(1.0-0.85)+0.85,  0.0,0.0,Math.random()*(1.0-0.85)+0.85,  0.0,0.0,Math.random()*(1.0-0.85)+0.85,   0.0,0.0,Math.random()*(1.0-0.85)+0.85,   0.0,0.0,Math.random()*(1.0-0.85)+0.85,   0.0,0.0,Math.random()*(1.0-0.85)+0.85,);
    humanc.push(0.0,0.0,Math.random()*(1.0-0.85)+0.85,  0.0,0.0,Math.random()*(1.0-0.85)+0.85,  0.0,0.0,Math.random()*(1.0-0.85)+0.85,   0.0,0.0,Math.random()*(1.0-0.85)+0.85,   0.0,0.0,Math.random()*(1.0-0.85)+0.85,   0.0,0.0,Math.random()*(1.0-0.85)+0.85,);

   



    
        /*-----------------------------------------------------------------*/

        //tree branch 

        var trunk=new Float32Array([ 0.26,0.45, 0.29,0.30, 0.28,0.1,  0.24, 0.1,  0.25,0.3, 0.24,0.5, ]);
        var trunk1=new Float32Array([ 0.36+0.08,0.48+0.04,     0.37+0.08,0.33+0.04,     0.38+0.08,0.13+0.04,      0.34+0.08, 0.13+0.04,      0.33+0.08,0.33+0.04,     0.34+0.08,0.53+0.04, ]);
        //var trunk2=new Float32Array([ 0.26,0.45, 0.29,0.30, 0.28,0.1,  0.24, 0.1,  0.25,0.3, 0.24,0.5, ]);
        var temp=[];
        for(let i=0;i<trunk.length;i++)
        {
          temp=temp.concat([Math.random()*(0.6-0.40)+0.40,Math.random()*(0.400-0.355)+0.355,Math.random()*(0.300-0.200)+0.20])
        }
        var trunkc=new Float32Array(temp);

        



        /*-----------------------------------------------------------------*/



        //tree

        let tree=[]
        let treec=[];
        var vertCount = 2;
    for (var i=0.0; i<=360; i+=1) {
      // degrees to radians
    
      var j = i * Math.PI / 180;
      // X Y Z
    //0.24,0.5,
      var vert1 = [
       (Math.random()*(0.08-0.05)* Math.sin(j))+0.26,
        (Math.random()*(0.08-0.05)*Math.cos(j))+0.5,
        // 0,
      ];
      var vert2 = [
        0+0.26,
        0+0.5,
        // 0,
      ];
      j = (i+1) * Math.PI / 180;
      var vert3 = [
        (0.10* Math.sin(j))+0.26,
         (0.18*Math.cos(j))+0.5,
         // 0,
       ];
   
      tree = tree.concat(vert1);  
      tree = tree.concat(vert2);  
      tree = tree.concat(vert3);  

    }
    var n = tree.length / vertCount;
    for(let i=0;i<tree.length;i++)
    {
      //  humanc.push(Math.random()*(0.95-0.80)+0.80,Math.random()*(0.75-0.60)+0.60,Math.random()*(0.50-0.40)+0.40);
        treec.push(Math.random()*(0.15-0.0)+0.0,Math.random()*(0.75-0.40)+0.40,Math.random()*(0.10-0.05)+0.05);

    }

            /*-----------------------------------------------------------------*/



        //tree2

        let tree2=[]
  
    for (var i=0.0; i<=360; i+=1) {
      // degrees to radians
    
      var j = i * Math.PI / 180;
      // X Y Z
    //0.24,0.5,
      var vert1 = [
       (Math.random()*(0.08-0.05)* Math.sin(j))+0.44,
        (Math.random()*(0.08-0.05)*Math.cos(j))+0.55,
        // 0,
      ];
      var vert2 = [
        0+0.44,
        0+0.55,
        // 0,
      ];
      j = (i+1) * Math.PI / 180;
      var vert3 = [
        (0.10* Math.sin(j))+0.44,
         (0.18*Math.cos(j))+0.55,
         // 0,
       ];
   
      tree2 = tree2.concat(vert1);  
      tree2 = tree2.concat(vert2);  
      tree2 = tree2.concat(vert3);  

    }
   
   

            /*-----------------------------------------------------------------*/


    //fruit

    var fruit=[];
    var fruitc=[];
    for(let i=0;i<20;i++)
    {
       fruit=fruit.concat([Math.random()*(0.35-0.20)+0.20,Math.random()*(0.6-0.4)+0.4]);
      fruitc=fruitc.concat([Math.random()*(1-0.8)+0.8,0.0,0.0]);
    }


    var fruit2=[];
    for(let i=0;i<20;i++)
    {
       fruit2=fruit2.concat([Math.random()*(0.52-0.37)+0.37,Math.random()*(0.68-0.5)+0.5]);
    }
    

        
      /*-----------------------------------------------------------------*/

    //bullet

    var bullet=[]
    var bulletc=[1.0,1.0,0.0,  1.0,1.0,0.0];
    var bulletmultiplier=1;
    var gun=[],gunc=[];
    setInterval(()=>{
      let pos=Math.random()*(0.2+0.4)-0.4;
      bullet[0]=0.7;
      bullet[1]=pos;
      bullet[2]=bullet[0]+0.06;
      bullet[3]=pos;
      bulletmultiplier=1;
       gun=new Float32Array([bullet[2]+0.04,bullet[3],  bullet[2]+0.08,bullet[3]-0.06,  bullet[2]+0.08,bullet[3]-0.1,   bullet[2]+0.04,bullet[3]-0.04,   bullet[2]-0.08,bullet[3]-0.04, bullet[2]-0.08,bullet[3]+0.01,]);
    gunc=new Float32Array([ 0.329,0.360,0.329,  0.749,0.403,0.149,  0.749,0.403,0.149,  0.329,0.360,0.329,   0.4,0.4,0.4,   0.4,0.4,0.4,]);
    },2000)


        /*-----------------------------------------------------------------*/
    //treasure

    var treasure=new Float32Array([0.40,-0.25,  0.60,-0.25,  0.65,-0.4,  0.65,-0.6,   0.35,-0.6,   0.35,-0.4]);
    var treasurec= new Float32Array([Math.random()*(1-0.9)+0.9,Math.random()*(0.9-0.8)+0.8,Math.random()*(0.1-0),  Math.random()*(1-0.9)+0.9,Math.random()*(0.9-0.8)+0.8,Math.random()*(0.1-0), Math.random()*(1-0.9)+0.9,Math.random()*(0.9-0.8)+0.8,Math.random()*(0.1-0), Math.random()*(1-0.9)+0.9,Math.random()*(0.9-0.8)+0.8,Math.random()*(0.1-0), Math.random()*(1-0.9)+0.9,Math.random()*(0.9-0.8)+0.8,Math.random()*(0.1-0), Math.random()*(1-0.9)+0.9,Math.random()*(0.9-0.8)+0.8,Math.random()*(0.1-0),  ])
    

   


    //falling fruits

    var fallingfruit=[ ]
    var multiplier=1;
    setInterval(()=>{
      fallingfruit[0]=Math.random()*(0.52-0.20)+0.20;
      fallingfruit[1]=Math.random()*(0.65-0.4)+0.4;
      multiplier=1;
    },4000)






   

          /*-----------------------------------------------------------------*/

  
          var translation=gl.getUniformLocation(program,"translation");

        
          
          canvas.addEventListener('keypress',(event)=>{
            if(event.key==='w')
           {
             for(let i=1;i<human.length;i+=2){
              if((human[2225]+0.1)>=(0.35) )
              break;
              human[i]+=0.1; 
             }
             
           }
           else if(event.key==='s')
           {
             for(let i=1;i<human.length;i+=2)
             {   
               if((human[2225]-0.1)<=(-0.6) )
               break;
              human[i]-=0.1; 
             }
             
           }

           else if(event.key==='a')
           {
             for(let i=0;i<human.length;i+=2){
              if((human[2224]-0.1)<=(-0.68) )
              break;
              human[i]-=0.1; 
             }
             
           }
           else if(event.key==='d')
           {
             for(let i=0;i<human.length;i+=2){
              if((human[2224]+0.1)>=(0.75) )
              break;
              human[i]+=0.1; 
             }
             
           }
           
          })
          
          let tx=0.00;
        
          animate();
              function animate() {
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.clearColor(0.0, 0.411, 0.635, 1.0);

                gl.uniform4f(translation,0.0,0.0,0.0,0.0);
                
                renderfan(islandw, islandcw,arrw.length/2);
                renderfan(island, islandc,arr.length/2);
                renderfan(islandg, islandcg,arrg.length/2);
               rendertristrip(verticessky, cverticessky);
               
               renderfan(trunk,trunkc,trunk.length/2)
               renderfan(trunk1,trunkc,trunk1.length/2)
               rendertriangle(flatten(mountainpoints1),new Float32Array(mountainpointsc));
               rendertriangle(flatten(mountainpoints2),new Float32Array(mountainpoints2c));
               rendertriangle(flatten(mountainpoints),new Float32Array(mountainpoints3c));

               renderhuman(new Float32Array(tree),new Float32Array(treec),n);
               renderhuman(new Float32Array(tree2),new Float32Array(treec),n);
               renderpoints(new Float32Array(fruit),new Float32Array(fruitc))
               renderpoints(new Float32Array(fruit2),new Float32Array(fruitc))


                /*
                let movex=0.1,movey=0.1,mul=1;
                canvas.addEventListener('keypress',(event)=>{
                  if(event.key==='w')
                 {
                   console.log("ha");
                   mul++;
                  gl.uniform4f(translation,0.5,0.0,0.0,0.0); 
                 }
                 else if(event.key==='s')
                 {
                  gl.uniform4f(translation,0.0,0.0,0.0,0.0); 
                 }
      
                 else if(event.key==='a')
                 {
                   gl.uniform4f(translation,0.0,0.0,0.0,0.0); 
                 }
                 else if(event.key==='d')
                 {
                   gl.uniform4f(translation,0.0,0.0,0.0,0.0); 
                 }
                 
                })*/

                
                renderfan(treasure,treasurec,treasure.length/2)
                renderhuman(new Float32Array(human),new Float32Array(humanc),h)


                renderfan(gun,gunc,6)
               
                
               let bulletx=0.00;
                bulletmultiplier+=0.5;
                bulletx-=(0.02*bulletmultiplier);
                gl.uniform4f(translation,bulletx,0.0,0.0,0.0);
              
               if(human[2166]>=(bullet[0]+bulletx) && (bullet[1]<=human[2167]+0.1) && (bullet[1]>=human[2169]-0.1)) 
               {
                alert("Oops the bullet hit it, Better Luck Next time :o"); 
                human=Array.from(humanstart); 
               } 
              
               if(human[2166]>=0.40  &&  ((human[2169]-0.1)<=-0.30))
               {
                 alert("You won ;)");
                human=Array.from(humanstart); 
               }
            
               renderlines(new Float32Array(bullet),new Float32Array(bulletc))
               
                let ty=0.00;
                multiplier+=0.1;
                ty-=(0.02*multiplier);
                gl.uniform4f(translation,0.0,ty,0.0,0.0);
                
               if(fallingfruit[1]+ty>=0.0)
               renderpoints(new Float32Array(fallingfruit),new Float32Array(fruitc))
               else
               {
                
                  fallingfruit[0]=Math.random()*(0.52-0.20)+0.20;
                  fallingfruit[1]=Math.random()*(0.65-0.4)+0.4;
            
               }
                
               requestAnimFrame(animate);

              }


               
    
};





function rendertristrip(vertices, cvertices) {
    //gl.clear( gl.COLOR_BUFFER_BIT );

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    colorbufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.bufferData(gl.ARRAY_BUFFER, cvertices, gl.STATIC_DRAW);



    //gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition = gl.getAttribLocation(program, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );


    colorvPosition = gl.getAttribLocation(program, "color");
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.vertexAttribPointer(colorvPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorvPosition);


    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    /* 
     
     gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
     vPosition2 = gl.getAttribLocation( program, "vPosition" );
     gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
     gl.enableVertexAttribArray( vPosition2 );
     gl.drawArrays( gl.TRIANGLES, 0, 3 );
     */
}



function rendertriangle(vertices, cvertices) {
    //gl.clear( gl.COLOR_BUFFER_BIT );

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    colorbufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.bufferData(gl.ARRAY_BUFFER, cvertices, gl.STATIC_DRAW);



    //gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition = gl.getAttribLocation(program, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );


    colorvPosition = gl.getAttribLocation(program, "color");
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.vertexAttribPointer(colorvPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorvPosition);


    gl.drawArrays(gl.TRIANGLES, 0,vertices.length/2);
    /* 
     
     gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
     vPosition2 = gl.getAttribLocation( program, "vPosition" );
     gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
     gl.enableVertexAttribArray( vPosition2 );
     gl.drawArrays( gl.TRIANGLES, 0, 3 );
     */
}



function renderfan(vertices, cvertices, repeat) {
    //gl.clear( gl.COLOR_BUFFER_BIT );

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    colorbufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.bufferData(gl.ARRAY_BUFFER, cvertices, gl.STATIC_DRAW);



    //gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition = gl.getAttribLocation(program, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );


    colorvPosition = gl.getAttribLocation(program, "color");
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.vertexAttribPointer(colorvPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorvPosition);


    gl.drawArrays(gl.TRIANGLE_FAN, 0, repeat);
    /* 
     
     gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
     vPosition2 = gl.getAttribLocation( program, "vPosition" );
     gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
     gl.enableVertexAttribArray( vPosition2 );
     gl.drawArrays( gl.TRIANGLES, 0, 3 );
     */
}


function renderlines(vertices, cvertices) {
    //gl.clear( gl.COLOR_BUFFER_BIT );

    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    colorbufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.bufferData(gl.ARRAY_BUFFER, cvertices, gl.STATIC_DRAW);



    //gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition = gl.getAttribLocation(program, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );


    colorvPosition = gl.getAttribLocation(program, "color");
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.vertexAttribPointer(colorvPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorvPosition);


    gl.drawArrays(gl.LINES, 0, vertices.length/2);
    /* 
     
     gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
     vPosition2 = gl.getAttribLocation( program, "vPosition" );
     gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
     gl.enableVertexAttribArray( vPosition2 );
     gl.drawArrays( gl.TRIANGLES, 0, 3 );
     */
}


function renderpoints(vertices, cvertices) {
    //gl.clear( gl.COLOR_BUFFER_BIT );

    bufferId2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId2);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var colorbufferId2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId2);
    gl.bufferData(gl.ARRAY_BUFFER, cvertices, gl.STATIC_DRAW);



    //gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition2 = gl.getAttribLocation(program, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId2);
    gl.vertexAttribPointer(vPosition2, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition2);


    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );


     var colorvPosition2 = gl.getAttribLocation(program, "color");
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId2);
    gl.vertexAttribPointer(colorvPosition2, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorvPosition2);

    gl.drawArrays(gl.POINTS, 0,vertices.length/2);

}


function triangle (a, b, c){
    // a = twistVector(a),
     //b = twistVector(b),
     //c = twistVector(c);
 
    // points.push(a, b, c);
 
    //for wireframe
      /* a[0]+=Math.random()*(0.3-0.1);
     a[1]+=Math.random()*(0.3-0.1);
     b[0]+=Math.random()*(0.3-0.1);
     b[1]+=Math.random()*(0.3-0.1);
     
 
   c[0]+=Math.random()*(0.3-0.1);
     c[1]+=Math.random()*(0.3-0.1);
 */
    
     mountainpoints.push(a, b, c);
 
     //points.push(a, b);
     //points.push(b, c);
     //points.push(a, c);
     
 }
 
 function performTessellation(a, b, c, count){
     //base case
     if(count === 0){ 
         triangle(a,b,c);
          return;
         }
 
     //calculate new sides
     var ab = mix( a, b, Math.random()*(0.45-0.35)+0.35 );
     var ac = mix( a, c, Math.random()*(0.45-0.35)+0.35 );
     var bc = mix( b, c, Math.random()*(0.45-0.3)+0.3 );
         
    if(Math.random()<0.5)
    {
        ab[0]+=Math.random()*(0.03);
        ab[1]+=Math.random()*(0.03);
        ac[0]+=Math.random()*(0.03);
        ac[1]+=Math.random()*(0.03);   
    }
    else{
        ab[0]-=Math.random()*(0.03);
    ab[1]-=Math.random()*(0.03);
    ac[0]+=Math.random()*(0.03);
    ac[1]+=Math.random()*(0.03);
    }
    
    
     //recursive calls
     --count;
     performTessellation(a, ab, ac, count);
     performTessellation(ac, bc, ab, count);
   performTessellation(c, ac, bc, count);
     performTessellation(b, bc, ab, count);
    
 }



 function renderhuman(vertices, cvertices,n){
    bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    colorbufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.bufferData(gl.ARRAY_BUFFER, cvertices, gl.STATIC_DRAW);



    //gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    vPosition = gl.getAttribLocation(program, "vPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );


    colorvPosition = gl.getAttribLocation(program, "color");
    gl.bindBuffer(gl.ARRAY_BUFFER, colorbufferId);
    gl.vertexAttribPointer(colorvPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorvPosition);


    gl.drawArrays(gl.TRIANGLES, 0,n);
    
   
   
 }



