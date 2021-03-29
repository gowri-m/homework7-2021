var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = video.volume * 100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change CSS to original");
	video.classList.remove("oldSchool")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	video.volume = this.value / 100;
	volume.innerHTML = video.volume * 100 + "%";	 
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		this.innerHTML = "Mute"
		console.log("Unmute video");
		video.muted = false;
}	 
else{
	console.log("Mute video");
	video.muted = true;
	this.innerHTML = "Unmute"
}
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
	video.currentTime += 15;
	if(video.currentTime >= video.duration){
		video.load();
	}
});


