var prevScrollpos = window.pageYOffset;
window.onclick = function () {
	if (prevScrollpos == currentScrollPos && window.pageYOffset < 20 && x.currentTime == 0) {
		x.play();
		document.getElementById('tap').style.display = 'none';
	}

	if (x.currentTime != 0) {
		document.getElementById('tap').style.display = 'none';
	}
	var currentScrollPos = window.pageYOffset;
	if (lecteur.style.display === "none" && window.pageYOffset >= 100) {
		lecteur.style.display = "inline";
		document.getElementById("lecteur").style.bottom = "0vh";

	}

	if (prevScrollpos > currentScrollPos || window.pageYOffset < 20) {
		if (track != 0 && moreLyrics.style.display == "none") {
			myNav1Btns.style.left = "0";
			if (moreBack.style.display == "none") {
				myNav2Btns.style.right = "0";
			}
		}
		if (track != 0 && moreLyrics.style.display == "inline") {
			myNav3Btns.style.left = "0";
		}


		if (window.pageYOffset > 20 || moreFront.style.display == "none") {
			document.getElementById("lecteur").style.bottom = "0vh";
		} else {
			document.getElementById("lecteur").style.bottom = "-50vh";

			if (x.currentTime == 0) {
				document.getElementById('tap').style.display = 'inline';
			}
		}

	} else {
		myNav1Btns.style.left = "-500px";
		myNav2Btns.style.right = "-500px";
		myNav3Btns.style.left = "-500px";
		document.getElementById("lecteur").style.bottom = "0px";
	}
	prevScrollpos = currentScrollPos;
}

let touchstartX = 1;
let touchstartY = 1;
let touchendX = 0;
let touchendY = 0;
const gestureZone = document.body;
let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;

gestureZone.addEventListener('touchstart', function (event) {
	touchstartX = event.touches[0].clientX;
	touchstartY = event.touches[0].clientY;
	if (x.currentTime != 0) {
		document.getElementById('tap').style.display = 'none';
	}
}, false);
gestureZone.addEventListener('touchend', function (event) {
	touchendX = event.changedTouches[0].clientX;
	touchendY = event.changedTouches[0].clientY;
	if (moreFront.style.display === "inline" || moreBack.style.display == "inline") {
		toggle();
	}
	if (track != 0) {
		toggle2();
	}
}, false);
gestureZone.addEventListener('touchmove', function (event) {
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
			document.getElementById("lecteur").style.bottom = "-60px";
		} else if (lecteur.style.display === "none") {
			lecteur.style.display = "inline";
			document.getElementById("lecteur").style.bottom = "0px";
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
			document.getElementById("lecteur").style.bottom = "-60px";
			document.getElementById("myNav2Btns").style.right = "-500px";
		} else {
			lecteur.style.display = "inline"
			document.getElementById("lecteur").style.bottom = "0vh";
			if (moreLyrics.style.display == "none" && moreBack.style.display == "none") {
				document.getElementById("myNav2Btns").style.right = "0vw";
			}
		}
	}
	// if(touchendY < touchstartY && document.body.scrollHeight-screen.height-window.pageYOffset < 10){
	// 	closeMusic();
	// 	}
}