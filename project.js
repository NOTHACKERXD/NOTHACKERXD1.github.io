function playSong(id) {
    var audio = document.getElementById("audio" + id);
    if (audio.paused) {
      audio.play();
      startRotation(id);
    } else {
      audio.pause();
      stopRotation(id);
    }
  }
  
  var rotationIntervals = {};
  
  function startRotation(id) {
    var vinyl = document.getElementById("vinyl" + id);
    rotationIntervals[id] = setInterval(function() {
      vinyl.style.transform += "rotate(1deg)";
    }, 50);
  }
  
  function stopRotation(id) {
    clearInterval(rotationIntervals[id]);
    var vinyl = document.getElementById("vinyl" + id);
    //vinyl.style.transform = "rotate(0deg)"; // Reset rotation to stop rotation
  }
  
  function pauseAudio(id) {
    var audio = document.getElementById("audio" + id);
    audio.pause();
    stopRotation(id);
  }