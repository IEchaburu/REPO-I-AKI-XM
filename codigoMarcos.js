//let element = document.querySelectorAll('span label');
	//let options = document.querySelectorAll("input");
	let p1Answers = "${q://QID153/SelectedChoicesRecode}".split(", ");
	let age =  parseInt("25");
	let sel = "C2";	
	
	//CUOTAS
	//P1
	let p1A = parseInt("5");
	let p1B = parseInt("5");
	//P2
	let p2A = parseInt("5");
	let p2B = parseInt("5");
	//P3
	let p3A = parseInt("4");
	let p3B = parseInt("4");
	//P4
	let p4A = parseInt("4");
	let p4B = parseInt("4");
	
	//PERFILES
	let perfil1 = true;
	let perfil2 = true;
	let perfil3 = true;
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
	
	if (p1Answers.includes("2") && age < 41 && age > 17 && (sel == "C1" || sel == "C2" || sel == "C3" || sel == "D" || sel == "E")) {
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
		console.log(9);
	};
	
	if (perfil4) {
		if (p4A <= p4B) {
			console.log(7);
		} else {
			console.log(8);
		}
	}
	
	if (perfil1 && perfil2 && perfil3) {
		let p1q = p1A + p1B;
		let p2q = p2A + p2B;
		let p3q = p3A + p3B;
		let qs = [p1q, p2q, p3q];
		
		let min = Math.min(...qs);
		let minP = qs.indexOf(min);
		
		if (minP == 0) {
			if (p1A <= p1B) {
				console.log(1);
			} else {
				console.log(2);
			}
		}
		
		if (minP == 1) {
			if (p2A <= p2B) {
				console.log(3);
			} else {
				console.log(4);
			}
		}
		
		if (minP == 2) {
			if (p3A <= p3B) {
				console.log(5)
			} else {
				console.log(6)
			}
		}
		
		
	} else if (perfil1 && perfil2) {
		let p1q = p1A + p1B;
		let p2q = p2A + p2B;
		
		if (p1q <= p2q) {
			if (p1A <= p1B) {
				console.log(1)
			} else {
				console.log(2)
			}
		} else {
			if (p2A <= p2B) {
				console.log(3)
			} else {
				console.log(4)
			}
		}
	} else if (perfil1 && perfil3) {
		let p1q = p1A + p1B;
		let p3q = p3A + p3B;
		
		if (p1q <= p3q) {
			if (p1A <= p1B) {
				console.log(1)
			} else {
				console.log(2)
			}
		} else {
			if (p3A <= p3B) {
				console.log(5)
			} else {
				console.log(6)
			}
		}
	} else if (perfil2 && perfil3) {
		let p2q = p2A + p2B;
		let p3q = p3A + p3B;
		
		if (p2q <= p3q) {
			if (p2A <= p2B) {
				console.log(3)
			} else {
				console.log(4)
			}
		} else {
			if (p3A <= p3B) {
				console.log(5)
			} else {
				console.log(6)
			}
		}
	} else if (perfil1) {
		if (p1A <= p1B) {
				console.log(1)
			} else {
				console.log(2)
			}
	} else if (perfil2) {
		if (p2A <= p2B) {
            console.log(3)
			} else {
				console.log(4)
			}
	} else if (perfil3) {
		if (p3A <= p3B) {
            console.log(5)
			} else {
				console.log(6)
			}
	}

