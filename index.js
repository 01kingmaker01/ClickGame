alert("Sorry for inconvenience!!! THIS SITE FULLY FUNCTIONS ONLY ON COMPUTER");var keyData={q:{sound:new Howl({src:["bubbles.mp3"]}),color:"#1abc9c"},w:{sound:new Howl({src:["clay.mp3"]}),color:"#2ecc71"},e:{sound:new Howl({src:["confetti.mp3"]}),color:"#3498db"},r:{sound:new Howl({src:["corona.mp3"]}),color:"#9b59b6"},t:{sound:new Howl({src:["dotted-spiral.mp3"]}),color:"#34495e"},y:{sound:new Howl({src:["flash-1.mp3"]}),color:"#16a085"},u:{sound:new Howl({src:["flash-2.mp3"]}),color:"#27ae60"},i:{sound:new Howl({src:["flash-3.mp3"]}),color:"#2980b9"},o:{sound:new Howl({src:["glimmer.mp3"]}),color:"#8e44ad"},p:{sound:new Howl({src:["moon.mp3"]}),color:"#2c3e50"},a:{sound:new Howl({src:["pinwheel.mp3"]}),color:"#f1c40f"},s:{sound:new Howl({src:["piston-1.mp3"]}),color:"#e67e22"},d:{sound:new Howl({src:["piston-2.mp3"]}),color:"#e74c3c"},f:{sound:new Howl({src:["prism-1.mp3"]}),color:"#95a5a6"},g:{sound:new Howl({src:["prism-2.mp3"]}),color:"#f39c12"},h:{sound:new Howl({src:["prism-3.mp3"]}),color:"#d35400"},j:{sound:new Howl({src:["splits.mp3"]}),color:"#1abc9c"},k:{sound:new Howl({src:["squiggle.mp3"]}),color:"#2ecc71"},l:{sound:new Howl({src:["strike.mp3"]}),color:"#3498db"},z:{sound:new Howl({src:["suspension.mp3"]}),color:"#9b59b6"},x:{sound:new Howl({src:["timer.mp3"]}),color:"#34495e"},c:{sound:new Howl({src:["ufo.mp3"]}),color:"#16a085"},v:{sound:new Howl({src:["veil.mp3"]}),color:"#27ae60"},b:{sound:new Howl({src:["wipe.mp3"]}),color:"#2980b9"},n:{sound:new Howl({src:["zig-zag.mp3"]}),color:"#8e44ad"},m:{sound:new Howl({src:["moon.mp3"]}),color:"#2c3e50"}},circles=[];function onKeyDown(o){if(keyData[o.key]){var c=new Point(view.size.width,view.size.height)*Point.random(),e=new Path.Circle(c,500);e.fillColor=keyData[o.key].color,keyData[o.key].sound.play(),circles.push(e)}}function onFrame(o){for(var c=0;c<circles.length;c++)circles[c].scale(.9),circles[c].fillColor.hue+=1,circles[c].area<1&&(circles[c].remove(),circles.splice(c,1),console.log(circles))}
