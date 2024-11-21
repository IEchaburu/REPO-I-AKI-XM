let z1 = parseInt('${q://QID375/SelectedChoicesRecode}');
	let z2 = parseInt('${q://QID376/SelectedChoicesRecode}');
	let z3 = parseInt('${q://QID377/SelectedChoicesRecode}');
	let z4 = parseInt('${q://QID379/SelectedChoicesRecode}');
	
	if (z2 == 1 && (z1== 1 || z1 == 2 || z1 == 3)) {
		if (z4 == 1 || z4 == 2) {
			element[6].click();
		}
		
		if(z4 == 3) {
			element[5].click();
		}
		
		if(z4 == 4 || z4 == 5) {
			element[4].click();
		}
		
		if(z4 == 6 || z4 == 7) {
			element[3].click();
		}
	} else if (z2 == 2 && (z1 == 1 || z1 == 2)) {
		
		if(z4 == 1) {
			element[6].click();
		}
		
		if(z4 == 3 || z4 == 2) {
			element[5].click();
		}
		
		if(z4 == 4 || z4 ==5) {
			element[4].click();
		}
		
		if(z4 == 6 || z4 == 7) {
			element[3].click();
		}
	} else if ((z1 == 3 && z2 == 2) || ((z1 == 4 || z1 == 5) && (z2 == 1 || z2 == 2)) || ((z1== 1 || z1== 2 || z1== 3) && (z2== 3 || z2== 4 || z2 == 5 || z2 == 10)) || ((z1 == 1 || z1 == 2) && z2 == 6)) {
		
        if(z4 == 1) {
            element[6].click();
        }
        
        if(z4 == 3 || z4 == 2) {
            element[5].click();
        }
        
        if(z4 == 4) {
            element[4].click();
        }
        
        if(z4 == 5 || z4 == 6 || z4 == 7) {
            element[3].click();
        }

	} else if (((z1 == 4 || z1 == 5) && (z2 == 3 || z2 == 4 || z2 == 5 || z2 == 10 || z2 == 6)) || (z1 == 3 && (z2 == 6 || z2 == 7)) || ((z1 == 6 || z1 == 7 || z1 == 8) && z2 == 1) || ((z1 == 1 || z1 == 2) && z2 == 7)) {

        if(z4 == 1) {
            element[6].click();
        }
        
        if(z4 == 2) {
            element[5].click();
        }
        
        if(z4 == 3 || z4 == 4) {
            element[4].click();
        }
        
        if(z4 == 5 || z4 == 6) {
            element[3].click();
        }
        if(z4 == 7) {
            element[2].click();
        }

    } else if (((z1 == 6 || z1 == 7 || z1 == 8) && z2 == 2)) {

        if(z4 == 1 || z4 == 2) {
            element[5].click();
        }
        
        if(z4 == 3 || z4 == 4) {
            element[4].click();
        }
        
        if(z4 == 5) {
            element[3].click();
        }
        
        if(z4 == 6 || z4 == 7) {
            element[2].click();
        }

    } else if (((z1 == 6 || z1 == 7 || z1 == 8) && (z2 == 3 || z2 == 4 || z2 == 5 || z2 == 10 || z2 == 6)) || ((z1 == 4 || z1 == 5) && z2 == 7) || ((z1 == 9 || z1 == 10) && z2 == 1) || ((z1 == 1 || z1 == 2) && (z2 == 8 || z2 == 9))) {
        if(z4 == 1 || z4 == 2) {
            element[5].click();
        }
        
        if(z4 == 3) {
            element[4].click();
        }

        if(z4 == 4 || z4 == 5) {
            element[3].click();
        }

        if(z4 == 6 || z4 == 7) {
            element[2].click();
        }

    } else if ((z1 == 3 && (z2 == 8 || z2 == 9))) {

        if(z4 == 1 || z4 == 2) {
            element[5].click();
        }
        
        if(z4 == 3) {
            element[4].click();
        }
        
        if(z4 == 4) {
            element[3].click();
        }
        
        if(z4 == 5 || z4 == 6 || z4 == 7) {
            element[2].click();
        }

    } else if ((z1 == 9 || z1 == 10) && (z2 == 2 || z2 == 3 || z2 == 4 || z2 == 5 || z2 == 10)) {

        if(z4 == 1) {
            element[5].click();
        }
        
        if(z4 == 2 || z4 == 3) {
            element[4].click();
        }
        
        if(z4 == 4) {
            element[3].click();
        }
        
        if(z4 == 5 || z4 == 6 || z4 == 7) {
            element[2].click();
        }

    } else if (((z1 == 4 || z1 == 5) && (z2 == 8 || z2 == 9)) || ((z1 == 6 || z1 == 7 || z1 == 8) && z2 == 7)) {

        if(z4 == 1) {
            element[5].click();
        }
        
        if(z4 == 2 || z4 == 3) {
            element[4].click();
        }
        
        if(z4 == 4) {
            element[3].click();
        }
        
        if(z4 == 5 || z4 == 6) {
            element[2].click();
        }
        
        if(z4 == 7) {
            element[1].click();
        }

    } else if ((z1 == 9 || z1 == 10) && z2 == 6) {

        if(z4 == 1) {
            element[5].click();
        }
        
        if(z4 == 2) {
            element[4].click();
        }
        
        if(z4 == 3 || z4 == 4) {
            element[3].click();
        }
        
        if(z4 == 5 || z4 == 6) {
            element[2].click();
        }
        
        if(z4 == 7) {
            element[1].click();
        }

    } else if (((z1 == 6 || z1 == 7 || z1 == 8) && (z2 == 8 || z2 == 9)) || ((z1 == 9 || z1 == 10) && z2 == 7)) {

        if(z4 == 1) {
            element[5].click();
        }
        
        if(z4 == 2) {
            element[4].click();
        }
        
        if(z4 == 3 || z4 == 4) {
            element[3].click();
        }
        
        if(z4 == 5) {
            element[2].click();
        }
        
        if(z4 == 6 || z4 == 7) {
            element[1].click();
        }

    } else if ((z1 == 9 || z1 == 10) && (z2 == 8 || z2 == 9)) {

        if(z4 == 1 || z4 == 2) {
            element[4].click();
        }
        
        if(z4 == 3) {
            element[3].click();
        }
        
        if(z4 == 4) {
            element[2].click();
        }
        
        if(z4 == 5 || z4 == 6) {
            element[1].click();
        }
        
        if(z4 == 7) {
            element[0].click();
        }
        
    }