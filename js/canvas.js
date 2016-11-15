window.onload = function () {
   "use strict";
   var theCanvas1 = document.getElementById("canvas01");
   if (theCanvas1 && theCanvas1.getContext) {
      var ctx1 = theCanvas1.getContext("2d");
      if (ctx1) {
         // Set a canvas to draw in
         ctx1.canvas.width  = 400;
         ctx1.canvas.height = 300;
         ctx1.fillStyle = "lightGray";
         ctx1.fillRect(0, 0, ctx1.canvas.width, ctx1.canvas.height);


         // Draw broccoli in the canvas, closed path
         ctx1.strokeStyle = "green";
         ctx1.fillStyle = "green";
         ctx1.lineWidth = 2;

         ctx1.beginPath();
         ctx1.moveTo(175, 275);
         ctx1.lineTo(175, 200);
         ctx1.lineTo(100, 150);
         ctx1.bezierCurveTo(75, 75, 50, 50, 150, 130);
         ctx1.bezierCurveTo(125, 25, 150, 50, 200, 100);
         ctx1.bezierCurveTo(225, 25, 250, 25, 275, 130);
         ctx1.bezierCurveTo(255, 25, 375, 25, 300, 150);
         ctx1.lineTo(225, 200);
         ctx1.lineTo(225, 275);
         ctx1.closePath();
         ctx1.fill();
         ctx1.stroke();
      }
   }
   var theCanvas2 = document.getElementById("canvas02");
   if (theCanvas2 && theCanvas2.getContext) {
      var ctx2 = theCanvas2.getContext("2d");
      if (ctx2) {
         // Set a canvas to draw in
         ctx2.canvas.width  = 400;
         ctx2.canvas.height = 300;
         ctx2.fillStyle = "lightGray";
         ctx2.fillRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);


         // Draw broccoli in the canvas, closed path
         ctx2.strokeStyle = "green";
         ctx2.fillStyle = "green";
         ctx2.lineWidth = 2;

         ctx2.beginPath();
         ctx2.moveTo(175, 275);
         ctx2.lineTo(175, 200);
         ctx2.lineTo(100, 150);
         ctx2.bezierCurveTo(75, 75, 50, 50, 150, 130);
         ctx2.bezierCurveTo(125, 25, 150, 50, 200, 100);
         ctx2.bezierCurveTo(225, 25, 250, 25, 275, 130);
         ctx2.bezierCurveTo(255, 25, 375, 25, 300, 150);
         ctx2.lineTo(225, 200);
         ctx2.lineTo(225, 275);
         ctx2.closePath();
         ctx2.fill();
         ctx2.stroke();
         // create a radial gradient
         var radGrd = ctx2.createRadialGradient(200,150,8,200,150,40);
         radGrd.addColorStop(0, "#f00"); // start with red at 0
         radGrd.addColorStop(0.5, "#00f"); // put blue at the halfway point
         radGrd.addColorStop(1,"#0f0"); // finish with green
         ctx2.fillStyle = radGrd;

         ctx2.beginPath();
         ctx2.arc(200,150,45,0,2*Math.PI);
         ctx2.stroke();
         ctx2.fill();
      }
   }
   // Animation
   var rectY=1, rectW=40;
   var rectX = -rectW;
   var canvas = null;
   var context = null;
   canvas = document.getElementById('testCanvas');
   context = canvas.getContext("2d");

   blank();

   context.fillStyle= "yellow";
   context.fillRect(rectX,rectY,rectW,rectW);
   setInterval(anim, 30);

   function blank() {
      context.fillStyle = "lightGray";
      context.fillRect(0,0,context.canvas.width, context.canvas.height);
   }

   function anim() {
      if (rectX < context.canvas.width) {
         blank();
         rectX += 5;
         rectY += 2;
         context.fillStyle = "yellow";
         context.strokeStyle = "red";
         context.lineWidth = 3;
         context.fillRect(rectX,rectY,rectW,rectW);
         context.strokeRect(rectX,rectY,rectW,rectW);
      }
      else {
         rectX=-rectW;
      }
      if (rectY > context.canvas.height) {
         rectY = 0;
      }
   }
};
