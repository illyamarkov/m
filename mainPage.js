const aboutButton = document.getElementById('about');
const contactButton = document.getElementById('contact');
const homeButton = document.getElementById('home');
const content = document.getElementById('mainContent');
const title = document.getElementById('mainTitle');

const tempC = content.innerHTML;

function numToText(num){
    end = "";
    pre = "";
    if (num > 10000000) {
        end = num.toString();
        end += " copy!"
		return(end);
	}

    if (num == 1) {end = "copied!";}
	if (num == 2) {end = "double copy!";}
	if (num == 3) {end = "triple copy!";}
	if (num == 4) {end = "quadra copy!";}
	if (num == 5) {end = "penta copy!";}
	if (num == 6) {end = "hexa copy!";}
	if (num == 7) {end = "hepta copy!";}
	if (num == 8) {end = "octa copy!";}
	if (num == 9) {end = "ennea copy!";}
	if (num == 10) {end = "deca copy!";}
	if (num == 11) {end = "hendecagon copy!";}
	if (num == 12) {end = "dodeca copy!";}
	if (num == 13) {end = "trideca copy!";}
	if (num == 14) {end = "tetradeca copy!";}
	if (num == 15) {end = "pentadeca copy!";}
	if (num == 16) {end = "hexadeca copy!";}
	if (num == 17) {end = "heptadeca copy!";}
	if (num == 18) {end = "octadeca copy!";}
	if (num == 19) {end = "enneadeca copy!";}
	//20-99
	if (num > 19) {
		the1s = num % 10;
		if (the1s == 1) {pre = "hena"}
		if (the1s == 2) {pre = "di"}
		if (the1s == 3) {pre = "tri"}
		if (the1s == 4) {pre = "tetra"}
		if (the1s == 5) {pre = "penta"}
		if (the1s == 6) {pre = "hexa"}
		if (the1s == 7) {pre = "hepta"}
		if (the1s == 8) {pre = "octa"}
		if (the1s == 9) {pre = "ennea"}
		the10s = Math.floor((num / 10) % 10);
		if (the1s != 0 && the10s >= 2) {pre = "kai" + pre}
		if (the10s == 1) {
			if (the1s == 1) {pre = "hendeca"}
			if (the1s == 2) {pre = "dodeca"}
			if (the1s == 3) {pre = "trideca"}
			if (the1s == 4) {pre = "tetradeca"}
			if (the1s == 5) {pre = "pentadeca"}
			if (the1s == 6) {pre = "hexadeca"}
			if (the1s == 7) {pre = "heptadeca"}
			if (the1s == 8) {pre = "octadeca"}
			if (the1s == 9) {pre = "enneadeca"}
		}
		if (the10s == 2 && the1s == 0) {pre = "icosa" + pre}
		if (the10s == 2 && the1s != 0) {pre = "icosi" + pre}
		if (the10s == 3) {pre = "triaconta" + pre}
		if (the10s == 4) {pre = "tetraconta" + pre}
		if (the10s == 5) {pre = "pentaconta" + pre}
		if (the10s == 6) {pre = "hexaconta" + pre}
		if (the10s == 7) {pre = "heptaconta" + pre}
		if (the10s == 8) {pre = "octaconta" + pre}
		if (the10s == 9) {pre = "enneaconta" + pre}
		if (num >= 100) {
			the100s = Math.floor((num / 100) % 10);
			if (the100s == 1) {pre = "hecto" + pre}
			if (the100s == 2) {pre = "dihecta" + pre}
			if (the100s == 3) {pre = "trihecta" + pre}
			if (the100s == 4) {pre = "tetrahecta" + pre}
			if (the100s == 5) {pre = "pentahecta" + pre}
			if (the100s == 6) {pre = "hexahecta" + pre}
			if (the100s == 7) {pre = "heptahecta" + pre}
			if (the100s == 8) {pre = "octahecta" + pre}
			if (the100s == 9) {pre = "enneahecta" + pre}
		}
		if (num >= 1000) {
			the1ks = Math.floor((num / 1000) % 10);
			if (the1ks == 1) {pre = "chillia" + pre}
			if (the1ks == 2) {pre = "dischillia" + pre}
			if (the1ks == 3) {pre = "trischillia" + pre}
			if (the1ks == 4) {pre = "tetrakischillia" + pre}
			if (the1ks == 5) {pre = "pentakischillia" + pre}
			if (the1ks == 6) {pre = "hexakischillia" + pre}
			if (the1ks == 7) {pre = "heptakischillia" + pre}
			if (the1ks == 8) {pre = "octakischillia" + pre}
			if (the1ks == 9) {pre = "enneakischillia" + pre}
		}
		if (num >= 10000) {
			the10ks = Math.floor((num / 10000) % 10);
			if (the10ks == 1) {pre = "myria" + pre}
			if (the10ks == 2) {pre = "dismyria" + pre}
			if (the10ks == 3) {pre = "trismyria" + pre}
			if (the10ks == 4) {pre = "tetrakismyria" + pre}
			if (the10ks == 5) {pre = "pentakismyria" + pre}
			if (the10ks == 6) {pre = "hexakismyria" + pre}
			if (the10ks == 7) {pre = "heptakismyria" + pre}
			if (the10ks == 8) {pre = "octakismyria" + pre}
			if (the10ks == 9) {pre = "enneakismyria" + pre}
		}
		if (num >= 100000) {
			the100ks = Math.floor((num / 100000) % 10);
			if (the10ks == 0 && the100ks != 0) {pre = "kismyria" + pre}
			if (the100ks == 1) {pre = "deca" + pre}
			if (the100ks == 2 && the10ks == 0) {pre = "icosa" + pre}
			if (the100ks == 2 && the10ks != 0) {pre = "icosi" + pre}
			if (the100ks == 3) {pre = "triaconta" + pre}
			if (the100ks == 4) {pre = "tetraconta" + pre}
			if (the100ks == 5) {pre = "pentaconta" + pre}
			if (the100ks == 6) {pre = "hexaconta" + pre}
			if (the100ks == 7) {pre = "heptaconta" + pre}
			if (the100ks == 8) {pre = "octaconta" + pre}
			if (the100ks == 9) {pre = "enneaconta" + pre}
		if (num >= 1000000) {
			the1ms = Math.floor((num / 1000000) % 10);
			if (the1ms == 1) {pre = "mega" + pre}
			if (the1ms == 2) {pre = "dimega" + pre}
			if (the1ms == 3) {pre = "trimega" + pre}
			if (the1ms == 4) {pre = "tetramega" + pre}
			if (the1ms == 5) {pre = "pentamega" + pre}
			if (the1ms == 6) {pre = "hexamega" + pre}
			if (the1ms == 7) {pre = "heptamega" + pre}
			if (the1ms == 8) {pre = "octamega" + pre}
			if (the1ms == 9) {pre = "enneamega" + pre}
		}
	}
	end = pre + " copy!"
	}
    return(end);
}

aboutButton.addEventListener('click', function() {
	title.textContent = "ABOUT"
  content.innerHTML = `
    <h1>About Us</h1>
    <p>We are a team of developers dedicated to creating innovative software solutions.</p>
  `;
});

contactButton.addEventListener('click', function() {
	title.textContent = "CONTACT"
  content.innerHTML = `
  <h1>Contact Us</h1>
  <p>Get in touch with us to discuss your project or to ask any questions you may have.</p>
  <a href="mailto:contact@manticoreinteractive.com">contact@manticoreinteractive.com</a>
  <div>
  <button id="copy-email-btn">copy</button>
  </div>
  <script></script>
    `;
const emailLink = document.querySelector('a[href="mailto:contact@manticoreinteractive.com"]');

let clickCount = 0;
const copyEmailBtn = document.getElementById('copy-email-btn');

copyEmailBtn.addEventListener('click', () => {
  // create a temporary input element
  const tempInput = document.createElement('input');
  // set its value to the email link
  tempInput.value = emailLink.textContent.trim();
  // add it to the page
  document.body.appendChild(tempInput);
  // select the input
  tempInput.select();
  // copy the text to clipboard
  document.execCommand('copy');
  // remove the input
  document.body.removeChild(tempInput);

  copyEmailBtn.disabled = true;
  
  clickCount++; // increment the click count
  
  // update the button text
    copyEmailBtn.textContent = numToText(clickCount);
    document.documentElement.style.setProperty(`--val`, (clickCount/10).toString() + 'px');
    copyEmailBtn.classList.add('shake');

    if (clickCount >= 5 && clickCount < 10) {
        copyEmailBtn.style.color = '#FF0000'; // change the text color to red
    } else if (clickCount >= 10 && clickCount < 25) {
        copyEmailBtn.style.color = '#FF5733'; // change the text color to yellow
    } else if (clickCount >= 25 && clickCount < 100) {
    copyEmailBtn.style.color = '#FFC300'; // change the text color to yellow
    } else if (clickCount >= 100 && clickCount < 1500) {
    copyEmailBtn.style.color = '#00C851'; // change the text color to green
    } else if (clickCount >= 1500 && clickCount < 20000) {
    copyEmailBtn.style.color = '#007E33'; // change the text color to dark green
    } else if (clickCount >= 20000 && clickCount < 100000) {
    copyEmailBtn.style.color = '#4d4dff'; // change the text color to blue
    } else if (clickCount >= 100000 && clickCount < 1000000) {
    copyEmailBtn.style.color = '#a64dff'; // change the text color to purple
    } else if (clickCount >= 1000000 && clickCount < 10000000) {
    copyEmailBtn.style.color = '#ff80ff'; // change the text color to pink
    } else if (clickCount >= 10000000) {
    copyEmailBtn.style.color = '#FF1493'; // change the text color to deep pink
    }
  
  // reset the button text and color after 1 second
  setTimeout(() => {
    copyEmailBtn.disabled = false;
    copyEmailBtn.classList.remove('shake');
    copyEmailBtn.textContent = 'copy';
    copyEmailBtn.style.color = ''; // reset the text color
  }, 1000);
});

});

homeButton.addEventListener('click', function() {
	title.textContent = "HOME"
    content.innerHTML = tempC;
  });


