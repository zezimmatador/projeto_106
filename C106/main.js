var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  function start() { document.getElementById("textbox").innerHTML = "";
   recognition.start();
 } recognition.onresult = function(event) { console.log(event); var Content = event.results[0][0].transcript; 
    document.getElementById("textbox").innerHTML = Content;
    
 console.log(Content);
  if(Content =="tire minha selfie") { console.log("tirando selfie --- ");

   speak();
 } 
}

function speak(){ var synth = window.speechSynthesis;
speak_data = document.getElementById("textbox").value;
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
  Webcam.attach(camera);
   setTimeout(function() { take_snapshot(); save();
   }, 5000);
   Webcam.attach(camera);
   };



   camera = document.getElementById("camera");
   webcam.set({
    width:360,
    heigth:250,
    image_format:'jpeg',
    jpeg_quality:90
   });