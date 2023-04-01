var scrollBack = 0;
var scrollFront = 0;
// states
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
	} else {
		moreIG.style.display = "flex";
		moreFront.style.display = "inline";
		moreLyrics.style.display = "none";
		lecteur.style.bottom = "-50vh";
	}
	document.body.scrollTop = scrollFront;
	document.documentElement.scrollTop = scrollFront;

}

function backTime() {
	scrollFront = window.pageYOffset;
	if (moreBack.style.display === "inline") {
	} else {
		moreBack.style.display = "inline";
		moreFront.style.display = "none";
		moreLyrics.style.display = "none";
		moreIG.style.display = "none";
	}
	document.body.scrollTop = scrollBack;
	document.documentElement.scrollTop = scrollBack;
}

function lyricTime() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;

	if (moreLyrics.style.display === "inline") {
	} else {
		moreLyrics.style.display = "inline";
		music1.style.top = "100vh";
		myNav2Btns.style.right = "-500px";
		myNav3Btns.style.left = "0";
		moreIG.style.display = "none";
		moreFront.style.display = "none";
		moreBack.style.display = "none";
		document.getElementById("lecteur").style.bottom = "0vh";
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
	document.getElementById("myNav2Btns").style.right = "0";
	myNav3Btns.style.left = "-500px";
	music1.style.top = "0";
}

function closeMusic() {
	music1.style.top = "100vh";
	moreFront.style.display = "inline";
	moreIG.style.display = "flex";
	document.body.scrollTop = scroll;
	document.documentElement.scrollTop = scroll;
	document.getElementById("myNav2Btns").style.right = "-500px";
	myNav3Btns.style.left = "-500px";
	track = 0;
}

$("#closebtn").click(closeMusic());