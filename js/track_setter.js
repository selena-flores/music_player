var lecteur = document.getElementById("lecteur");
var music1 = document.getElementById("myMusic1");
var moreLyrics = document.getElementById("moreLyrics");
var moreFront = document.getElementById("moreFront");
var moreBack = document.getElementById("moreBack");
var moreIG = document.getElementById("imageGallery");
var myBackBtn = document.getElementById("myBackBtn");
var moreTrackListing = document.getElementById("moreTrackListing");
var lessTrackListing = document.getElementById("lessTrackListing");
var less1TrackListing = document.getElementById("less1TrackListing");
var myTrackListBtn = document.getElementById("myTrackListBtn");
var myNav1Btns = document.getElementById("myNav1Btns");
var myNav2Btns = document.getElementById("myNav2Btns");
var myNav3Btns = document.getElementById("myNav3Btns");

var scale;

function change_background(background, lyricPanel, songTitle) {
	const imageURL = background;
	music1.style.backgroundImage = "url(" + imageURL + ")";
	document.getElementById("songTitle").innerHTML = songTitle
	document.getElementById("lyricPANEL").setAttribute('src', lyricPanel);
}

var audio = {
	init: function () {
		myNav1Btns.style.left = "-500px";
		myNav2Btns.style.right = "-500px";
		myNav3Btns.style.left = "-500px";
		moreFront.style.display = "inline";
		moreBack.style.display = "none";
		moreLyrics.style.display = "none";
		lecteur.style.display = "inline";
		moreTrackListing.style.display = "none";
		lessTrackListing.style.display = "inline";
		less1TrackListing.style.display = "inline";
		music1.style.top = "100vh";

		currentTime = 0;
		scale = 1;
		var $that = this;
		$(function () {
			$that.components.media();
		});
	},
	components: {
		media: function (target) {
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
var track = 0;
var currentTrack = 0;

// tracks
function itimeStamp0() {
	if (track != 1 && currentTrack != 1) {
		cs_change_music("sounds/BC_1.wav");
		change_background("images/circ.gif", "images/lyrics.gif", "SURVIVE");

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
		change_background("images/5.jpg", "images/lyrics.gif", "BLUE SCREEN // MAGENTA GLITCH");
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
		change_background("images/6.jpg", "images/lyrics.gif", "THE ART GALLERY");
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
		change_background("images/6.gif", "images/lyrics.gif", "TRAP CONTROL");
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
		change_background("images/12.gif", "images/lyrics.gif", "BECOMING CYBORG");
		x.currentTime = 0;
		x.play();
		currentTrack = 5;
	}
	track = 5;
	openMusic();
}
