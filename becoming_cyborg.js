var lecteur = document.getElementById("stuff");
var music1 = document.getElementById("myMusic1");
var moreLyrics = document.getElementById("moreLyrics");
var moreChron = document.getElementById("moreChron");
var morePReel = document.getElementById("morePReel");
var moreFront = document.getElementById("moreFront");
var moreBack = document.getElementById("moreBack");
var moreIG = document.getElementById("imageGallery");
var myBackBtn = document.getElementById("myBackBtn");
var moreTrackListing = document.getElementById("moreTrackListing");
var lessTrackListing = document.getElementById("lessTrackListing");
var less1TrackListing = document.getElementById("less1TrackListing");
var myTrackListBtn = document.getElementById("myTrackListBtn");
var myFrontBtn = document.getElementById("myFrontBtn");
var myLyricBtn = document.getElementById("myLyricBtn");
var myPReelBtn = document.getElementById("myPReelBtn");
const el = document.getElementById('myNavBtns');
var myNavBtns = document.getElementById("myNavBtns");
var myNav1Btns = document.getElementById("myNav1Btns");
var myNav2Btns = document.getElementById("myNav2Btns");
var myNav3Btns = document.getElementById("myNav3Btns");

var scale;
var audio = {
	init: function() {
		myNavBtns.style.top = "0";
		myNav1Btns.style.left = "-500px";
		myNav2Btns.style.right = "-500px";
		myNav3Btns.style.left = "-500px";
		moreFront.style.display = "inline";
		morePReel.style.display = "none";
		moreBack.style.display = "none";
		moreLyrics.style.display = "none";
		lecteur.style.display = "inline";
		moreTrackListing.style.display = "none";
		lessTrackListing.style.display = "inline";
		less1TrackListing.style.display = "inline";
		music1.style.top = "100vh";

		currentTime = 0;
		myFrontBtn.focus();
		scale = 1;
		var $that = this;
		$(function() {
			$that.components.media();
		});
	},
	components: {
		media: function(target) {
			var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
			if (media.length) {
				media.mediaelementplayer({
					audioHeight: 100,
					features: ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
					alwaysShowControls: true,
					timeAndDurationSeparator: '<span></span>',
					iPadUseNativeControls: true,
					iPhoneUseNativeControls: true,
					AndroidUseNativeControls: true
				});
			}
		},
	},
};
// features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
audio.init();

var changeTrack = true;

var x = document.getElementById('myAudio');

function cs_change_music(music) {
	x.style.display = "inline";
	x.pause();
	x.setAttribute('src', music);
	x.load();
	x.play();
}

function change_background(background, lyricPanel, songTitle) {
	const imageURL = background;
	music1.style.backgroundImage = "url(" + imageURL + ")";
	document.getElementById("songTitle").innerHTML = songTitle
	document.getElementById("lyricPANEL").setAttribute('src', lyricPanel);
}
var track = 0;
var currentTrack = 0;
//imageTimestamps
function itimeStamp0() {
	if (track != 1 && currentTrack != 1) {
		cs_change_music("sounds/BC_1.wav");
		change_background("images/circ.gif", "images/survive.svg", "SURVIVE");

		x.currentTime = 0;
		currentTrack = 1;
		x.play();
	}
	track = 1;
	openMusic();
}

function itimeStamp1() {
	if (track != 2 && currentTrack != 2) {
		cs_change_music("sounds/BC_2.wav");
		change_background("images/5.jpg", "images/circ.gif", "BLUE SCREEN // MAGENTA GLITCH");
		x.currentTime = 0;
		currentTrack = 2;
		x.play();
	}
	track = 2;
	openMusic();
}

function itimeStamp2() {
	if (track != 3 && currentTrack != 3) {
		cs_change_music("sounds/BC_3.wav");
		change_background("images/6.jpg", "images/circ.gif", "THE ART GALLERY");
		x.currentTime = 0;
		x.play();
		currentTrack = 3;
	}
	track = 3;

	openMusic();
}

function itimeStamp3() {
	if (track != 4 && currentTrack != 4) {
		cs_change_music("sounds/BC_4.wav");
		change_background("images/city/6.gif", "images/circ.gif", "TRAP CONTROL");
		x.currentTime = 0;
		currentTrack = 4;
		x.play();
	}
	track = 4;
	openMusic();
}

function itimeStamp4() {
	if (track != 5 && currentTrack != 5) {
		cs_change_music("sounds/BC_5.wav");
		change_background("images/city/12.gif", "images/circ.gif", "BECOMING CYBORG");
		x.currentTime = 0;
		x.play();
		currentTrack = 5;
	}
	track = 5;
	openMusic();
}

var scrollBack = 0;
var scrollFront = 0;

function trackListTime() {
	if (moreTrackListing.style.display === "inline") {
		lessTrackListing.style.display = "inline";
		less1TrackListing.style.display = "inline";
		moreTrackListing.style.display = "none";
	} else {
		moreTrackListing.style.display = "inline"
		lessTrackListing.style.display = "none";
		less1TrackListing.style.display = "none";
	}
}

function frontTime() {
	if (moreBack.style.display == "inline") {
		scrollBack = window.pageYOffset;
	}
	moreBack.style.display = "none";
	moreIG.style.display = "flex";
	if (moreFront.style.display === "inline") {
		// moreFront.style.display = "none";
	} else {
		myFrontBtn.focus();
		myLyricBtn.blur();
		myPReelBtn.blur();
		moreIG.style.display = "flex";
		moreFront.style.display = "inline";
		moreLyrics.style.display = "none";
		morePReel.style.display = "none";
		document.getElementById("wow").style.bottom = "-50vh";
	}
	document.body.scrollTop = scrollFront;
	document.documentElement.scrollTop = scrollFront;
	myNavBtns.style.top = "0";

}

function backTime() {
	scrollFront = window.pageYOffset;
	if (moreBack.style.display === "inline") {
		// moreFront.style.display = "none";
	} else {
		myFrontBtn.blur();
		myLyricBtn.blur();
		myPReelBtn.blur();
		moreBack.style.display = "inline";
		moreFront.style.display = "none";
		moreLyrics.style.display = "none";
		moreIG.style.display = "none";
		morePReel.style.display = "none";
	}
	document.body.scrollTop = scrollBack;
	document.documentElement.scrollTop = scrollBack;
	myNavBtns.style.top = "0";
}

function lyricTime() {
	myNavBtns.style.display = "none";
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	if (moreLyrics.style.display === "inline") {
		// moreFront.style.display = "none";
	} else {
		myLyricBtn.blur();
		myFrontBtn.blur();
		myPReelBtn.blur();
		moreLyrics.style.display = "inline";
		music1.style.top = "100vh";
		myNav2Btns.style.right = "-500px";
		myNav3Btns.style.left = "0";
		moreIG.style.display = "none";
		moreFront.style.display = "none";
		moreBack.style.display = "none";
		morePReel.style.display = "none";
		document.getElementById("wow").style.bottom = "0vh";
	}
}

function pReelTime() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	if (morePReel.style.display === "inline") {
		// moreFront.style.display = "none";
	} else {
		myPReelBtn.focus();
		myFrontBtn.blur();
		myLyricBtn.blur();
		morePReel.style.display = "inline";
		moreIG.style.display = "none";
		moreLyrics.style.display = "none";
		moreBack.style.display = "none";
		moreFront.style.display = "none";
		document.getElementById("wow").style.bottom = "0vh";

	}
}

var scroll;

function openMusic() {
	if (moreFront.style.display == "inline") {
		scroll = window.pageYOffset;
	}
	lecteur.style.display = "inline";
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	moreBack.style.display = "none";
	moreFront.style.display = "none";
	moreLyrics.style.display = "none";
	moreIG.style.display = "none";
	morePReel.style.display = "none";
	document.getElementById("myNavBtns").style.top = "-50px";
	document.getElementById("myNav2Btns").style.right = "0";
	document.getElementById("myNav3Btns").style.left = "-500px";
	music1.style.top = "0";
	myNavBtns.style.display = "none";
}

function closeMusic() {
	music1.style.top = "100vh";
	moreFront.style.display = "inline";
	document.getElementById("myNavBtns").style.top = "0";
	moreIG.style.display = "flex";
	myNavBtns.style.display = "inline-flex";
	document.body.scrollTop = scroll;
	document.documentElement.scrollTop = scroll;
	document.getElementById("myNav2Btns").style.right = "-500px";
	document.getElementById("myNav3Btns").style.left = "-500px";
	track = 0;
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	if (prevScrollpos == currentScrollPos && window.pageYOffset < 20 && x.currentTime == 0) {
		x.play();
		document.getElementById('tap').style.display = 'none';
	}

	if (x.currentTime != 0) {
		document.getElementById('tap').style.display = 'none';
	}
	// console.log(window.pageYOffset);
	var currentScrollPos = window.pageYOffset;
	if (lecteur.style.display === "none" && window.pageYOffset >= 100) {
		lecteur.style.display = "inline";
		document.getElementById("myNavBtns").style.top = "0";
		document.getElementById("wow").style.bottom = "0vh";

	}

	if (prevScrollpos > currentScrollPos || window.pageYOffset < 20) {
		document.getElementById("myNavBtns").style.top = "0";
		if (track != 0 && moreLyrics.style.display == "none") {
			document.getElementById("myNav1Btns").style.left = "0";
			if (moreBack.style.display == "none") {
				document.getElementById("myNav2Btns").style.right = "0";
			}
		}
		if (track != 0 && moreLyrics.style.display == "inline") {
			document.getElementById("myNav3Btns").style.left = "0";
		}


		if (window.pageYOffset > 20 || moreFront.style.display == "none") {
			document.getElementById("wow").style.bottom = "0vh";
		} else {
			document.getElementById("wow").style.bottom = "-50vh";

			if (x.currentTime == 0) {
				document.getElementById('tap').style.display = 'inline';
			}
		}

	} else {
		document.getElementById("myNavBtns").style.top = "-50px";
		document.getElementById("myNav1Btns").style.left = "-500px";
		document.getElementById("myNav2Btns").style.right = "-500px";
		document.getElementById("myNav3Btns").style.left = "-500px";
		document.getElementById("wow").style.bottom = "0px";
	}
	prevScrollpos = currentScrollPos;
}
let touchstartX = 1;
let touchstartY = 1;
let touchendX = 0;
let touchendY = 0;
const gestureZone = document.getElementById('gestureZone');
let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;


document.getElementById('oop').onclick = function(event) {
	if (x.currentTime == 0) {
		x.play();
		document.getElementById('tap').style.display = 'none';
	}
};

gestureZone.addEventListener('touchstart', function(event) {
	touchstartX = event.touches[0].clientX;
	touchstartY = event.touches[0].clientY;
	if (x.currentTime != 0) {
		document.getElementById('tap').style.display = 'none';
	}
}, false);
gestureZone.addEventListener('touchend', function(event) {
	touchendX = event.changedTouches[0].clientX;
	touchendY = event.changedTouches[0].clientY;
	if (moreFront.style.display === "inline" || moreBack.style.display == "inline") {
		toggle();
	}
	if (track != 0) {
		toggle2();
		console.log(document.body.scrollHeight - screen.height - window.pageYOffset);
	}
}, false);
gestureZone.addEventListener('touchmove', function(event) {
	touchendX = event.changedTouches[0].clientX;
	touchendY = event.changedTouches[0].clientY;
}, false);

function toggle(event) {
	if (touchendX > touchstartX + 100 && moreBack.style.display == "inline" && touchstartX < 100) {
		frontTime();
	}
	if (touchendX < touchstartX - 100 && moreFront.style.display == "inline" && touchstartX > screen.width - 100) {
		backTime();
	}
	if (touchstartX == touchendX && touchendY == touchstartY && window.pageYOffset <= 50) {

		if (lecteur.style.display === "inline" && touchendY < screen.height * .8) {
			lecteur.style.display = "none";
			document.getElementById("myNavBtns").style.top = "-50px";
			document.getElementById("wow").style.bottom = "-60px";
		} else if (lecteur.style.display === "none") {
			lecteur.style.display = "inline";
			document.getElementById("myNavBtns").style.top = "0";
			document.getElementById("wow").style.bottom = "0px";
		}
	}
}

function toggle2(event) {
	if (touchendY < touchstartY - 20 && moreLyrics.style.display == "none") {
		lyricTime();
	}
	if (touchendY > touchstartY && window.pageYOffset < 10) {
		if (moreLyrics.style.display == 'inline') {
			moreLyrics.style.display == "none";
			openMusic();
		} else {
			closeMusic();
		}
	}
	if (touchstartX == touchendX && touchendY == touchstartY) {
		if (touchendY < 50 && touchendX < 50 && moreLyrics.style.display == "none") {
			closeMusic();
		}
		if (lecteur.style.display == "inline" && touchendY >= 50) {
			lecteur.style.display = "none"
			document.getElementById("wow").style.bottom = "-60px";
			document.getElementById("myNav2Btns").style.right = "-500px";
		} else {
			lecteur.style.display = "inline"
			document.getElementById("wow").style.bottom = "0vh";
			if (moreLyrics.style.display == "none" && moreBack.style.display == "none") {
				document.getElementById("myNav2Btns").style.right = "0vw";
			}
		}
	}
	// if(touchendY < touchstartY && document.body.scrollHeight-screen.height-window.pageYOffset < 10){
	// 	closeMusic();
	// 	}
}
