//Default let
let let0 = 0; // Ganti nilainya sesuai kebutuhan
let let1
let let2
let let3
let let4
let let5
let let6
let let7
let let8
let let9
let let10

//Default variable
let const0 = 0; // Ganti nilainya sesuai kebutuhan
let const1
let const2
let const3
let const4
let const5
let const6
let const7
let const8
let const9
let const10

//Default variable
let var0 = 0; // Ganti nilainya sesuai kebutuhan
let var1
let var2
let var3
let var4
let var5
let var6
let var7
let var8
let var9
let var10

//Move
let move
move = "";

//system
let ver
let runVer = "checked";
function bseanver(link, version) {
	if (link == 'https://cdn.jsdelivr.net/gh/UngGasStudio/BseanKIT@main/main.js/' && version == "0.0.1B1" || version == "0.0.1B2") {
		ver = version;
		runVer = "running";
		let sendVer = {};
		sendVer[link] = version;
		Object.assign(window, sendVer);
		console.log('checked version succes, version running on ' + ver)
} else if (link == '' && version == '') {
	console.log("sorry, your link or version not reading");
} else {
	console.log("sorry, your link or version is wrong");
}
}

let format
function bseankit(system) {
	if (system == "bseansystem.js" && runVer == "running") {
		format = "bseansystem.js";
		system = format;
		console.log('running system succes')
		console.log('this system is running on bseansystem.js');
		
	} else {
		format = "unknow.txt";
		console.log('running system error');
		console.log('this system is running on unknow.txt');
	}
}

//if (runVer == "checked") {
	//console.log("sorry, your bsean system, link, and version is not reading.");
//}

//Condition
if (format == "bseansystem.js") {
function step(condition) {
    if (condition) {
        return true;
    } else {
        return false;
    }
}

function stepout() {
    // Kode untuk langkah setelah kondisi
    //showConsoleToast('Langkah setelah kondisi terpenuhi');
    //createToast('Ini adalah prompt dari createToast');
    //moveToPage('https://example.com'); // Ganti URL dengan halaman yang diinginkan
    console.log('step condition not detected, stepout running.');
}

//Variable
function setLet(variableNameLet = "defaultName", valueLet = "defaultValue") {
  let dynamicObjectLet = {};
  dynamicObjectLet[variableNameLet] = valueLet;
  Object.assign(window, dynamicObjectLet);
  // Gunakan dynamicObject di sini
}

// Fungsi untuk mengatur variabel dengan var
function setVar(variableNameVar, valueVar) {
  window[variableNameVar] = valueVar;
}

// Fungsi untuk mengatur konstanta dengan const
function setConst(variableNameConst, valueConst) {
  Object.defineProperty(window, variableNameConst, {
    value: valueConst,
    writable: false,
    configurable: false
  });
}
}

function layarToast(toast) {
	if (toast == '') {
		console.log('toast message error');
	} else if (format == "bseansystem.js") {
		alert("Layar Toast: " + toast);
	}
}

function consoleToast(toast) {
	if (toast == '') {
		console.log('toast message error');
	} else if (format == "bseansystem.js") {
		console.log("Console Toast: " + toast);
	}
}

let toastValue
function makeToast(maketoast) {
	if (maketoast == '') {
		console.log('toast message error');
	} else if (format == "bseansystem.js") {
		toastValue = prompt("Make Toast: " + maketoast);
	}
}

function moveToPage(page) {
    // Kode untuk pindah halaman
    //move.href =
    //page;
    //window.location.
//href = move;
    if (page === '') {
    	console.log = ('your link error');
    } else if (format == "bseansystem.js") {
    	if (!page.startsWith('https://') && !page.startsWith('http://') && !page.startsWith('')) {
    	page = 'https://' + page;
    	} else {
    	window.location.href = page;
    }
   }
}

function stepkey(key) {
    // Kode untuk mengecek key yang ditekan
    moveToPage('https://example.com'); // Ganti URL dengan halaman yang diinginkan
}

//Control Input
function setKey(key, callback) {
    document.addEventListener('keydown', function (event) {
        if (format == "bseansystem.js" || event.key === key) {
            callback();
        }
    });
}

function setMouse(button, callback) {
    document.addEventListener('mousedown', function (event) {
        if (format == "bseansystem.js" || event.button === button) {
            callback();
        }
    });
}

//Exclusive Feature
let dalmode = 1;
let defaultThemes = "light";
let defaultStop = 0;
let lightColor = "white";
let darkColor = "#2C2C2C";
let lightBorder = "1px solid white";
let darkBorder = "1px solid #2C2C2C";
if (format == "bseansystem.js") {
function defaultTheme(dtheme) {
	if (dtheme == "device") {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			alert('halo');
			}
	} else if (dtheme == "dark") {
        document.body.style.backgroundColor = darkColor;
        dalt.style.color = lightColor;
        dalBtn.style.color = darkColor;
        dalBtn.style.backgroundColor = lightColor;
        dalBtn.style.border = lightBorder;
        defaultStop = 10;
	} else if (dtheme == "light") {
        document.body.style.backgroundColor = lightColor;
        dalt.style.color = darkColor;
        dalBtn.style.color = lightColor;
        dalBtn.style.backgroundColor = darkColor;
        dalBtn.style.border = darkBorder;
        defaultStop = 10;
	}
}

function dalMode() {
        defaultStop = 1;
    if (dalmode == 1) {
        document.body.style.backgroundColor = darkColor;
        dalt.style.color = lightColor;
        dalBtn.style.color = darkColor;
        dalBtn.style.backgroundColor = lightColor;
        dalBtn.style.border = lightBorder;
        dalmode = 2;
    } else if (dalmode == 2) {
        document.body.style.backgroundColor = lightColor;
        dalt.style.color = darkColor;
        dalBtn.style.color = lightColor;
        dalBtn.style.backgroundColor = darkColor;
        dalBtn.style.border = darkBorder;
        dalmode = 1;
    }
}
}

let loopCount = 0;
let i = 0;
if (format == "bseansystem.js") {
function setLoop(condition, action) {
	while (condition()) {
		action();
	}
}

function setTimer(action, interval) {
	setInterval(action, interval);
}

let valueRadiuss = "0px";
function roundedElement(valueRadius) {
		dalBtn.style.borderRadius = valueRadius;
}
}

//Cara penggunaan

setLet("tema", 5);
setTimer(() => {
if (step(tema == 5)) {
defaultTheme("light");
roundedElement("5px");
tema = tema-5
console.log(tema);
}
}, 1);

function theme() {
	dalMode();
}
