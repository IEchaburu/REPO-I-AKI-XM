//let element = document.querySelectorAll('span label');
//let options = document.querySelectorAll("input");
let p1Answers = ["1", "2"];
let age =  "51";
let sel = "C3";	

//CUOTAS
//P1
let p1A = "0";
let p1B = "0";
//P2
let p2A = "0";
let p2B = "0";
//P3
let p3A = "0";
let p3B = "0";
//P4
let p4A = "0";
let p4B = "0";

//PERFILES
let perfil1 = false;
let perfil2 = false;
let perfil3 = false;
let perfil4 = false;


let sum = 0;

console.log(p1Answers, "p1")

function marcar(cod){
	element[cod-1].click();
};

//VALIDACION DE PERFILES	
if (p1Answers.includes("1") && age < 41) {
	perfil1 = true;
} else {
	sum++
};

if (p1Answers.includes("2") && age < 41 && age > 17 && (sel == "C2" || sel == "C3" || sel == "D")) {
	perfil2 = true;
} else {
	sum++
};

if ((p1Answers.includes("3") || p1Answers.includes("4")) && age < 51 && age > 17) {
	perfil3 = true;
} else {
	sum++
};

if (age > 50) {
	perfil4 = true;
} else {
	sum++
};

//SELECCION DE PERFIL SEGUN CUOTAS
if (sum == 4) {
	marcar(9);
};

if (perfil4) {
	if (p4A <= p4B) {
		console.log("andaaaaa");
	} else {
		marcar(8);
	}
}

if (perfil1 && perfil2 && perfil3) {
	let p1q = parseInt(p1A) + parseInt(p1B);
	let p2q = parseInt(p2A) + parseInt(p2B);
	let p3q = parseInt(p3A) + parseInt(p3B);
	let qs = [p1q, p2q, p3q];
	
	let min = Math.min(...qs);
	let minP = qs.indexOf(min);
	
	if (minP == 0) {
		if (p1A <= p1B) {
			marcar(1);
		} else {
			marcar(2);
		}
	}
	
	if (minP == 1) {
		if (p2A <= p2B) {
			marcar(3);
		} else {
			marcar(4);
		}
	}
	
	if (minP == 2) {
		if (p3A <= p3B) {
			marcar(5);
		} else {
			marcar(6);
		}
	}
	
	
} else if (perfil1 && perfil2) {
	let p1q = parseInt(p1A) + parseInt(p1B);
	let p2q = parseInt(p2A) + parseInt(p2B);
	
	if (p1q <= p2q) {
		if (p1A <= p1B) {
			marcar(1)
		} else {
			marcar(2)
		}
	} else {
		if (p2A <= p2B) {
			marcar(3)
		} else {
			marcar(4)
		}
	}
} else if (perfil1 && perfil3) {
	let p1q = parseInt(p1A) + parseInt(p1B);
	let p3q = parseInt(p3A) + parseInt(p3B);
	
	if (p1q <= p3q) {
		if (p1A <= p1B) {
			marcar(1)
		} else {
			marcar(2)
		}
	} else {
		if (p3A <= p3B) {
			marcar(5)
		} else {
			marcar(6)
		}
	}
} else if (perfil2 && perfil3) {
	let p2q = parseInt(p2A) + parseInt(p2B);
	let p3q = parseInt(p3A) + parseInt(p3B);
	
	if (p2q <= p3q) {
		if (p2A <= p2B) {
			marcar(3)
		} else {
			marcar(4)
		}
	} else {
		if (p3A <= p3B) {
			marcar(5)
		} else {
			marcar(6)
		}
	}
} else if (perfil1) {
	if (p1A <= p1B) {
			marcar(1)
		} else {
			marcar(2)
		}
} else if (perfil2) {
	if (p2A <= p2B) {
			marcar(3)
		} else {
			marcar(4)
		}
} else if (perfil3) {
	if (p3A <= p3B) {
			marcar(5)
		} else {
			marcar(6)
		}
}
