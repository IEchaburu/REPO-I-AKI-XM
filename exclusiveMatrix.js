// THIS CODE IS APLIED WHEN A ROW IS EXCLUSIVE INSTEAD OF THE COLUMN

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
	
	let col1 = Array.from(checkboxes).filter((element, index) => index % 2 == 0 && index < 10);
	let col2 = Array.from(checkboxes).filter((element, index) => index % 2 != 0 && index < 10)

	let noneCol1 = checkboxes[10];
	let noneCol2 = checkboxes[11];

	noneCol1.addEventListener('click', function() {
		col1.forEach(box => {
			box.checked = false;
		});
	});
	
	noneCol2.addEventListener('click', function() {
		col2.forEach(box => {
			box.checked = false;
		});
	});
	
	col1.forEach(box => {
		box.addEventListener('click', () => {
			noneCol1.checked = false;
		});
	});
	
	col2.forEach(box => {
		box.addEventListener('click', () => {
			noneCol2.checked = false;
		});
	})

    //let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let row1 = Array.from(checkboxes).filter((element, index) => index < 2);
    let row2 = Array.from(checkboxes).filter((element, index) => index > 3 && index < 6);
    let row3 = Array.from(checkboxes).filter((element, index) => index > 7 && index < 10);
    let row4 = Array.from(checkboxes).filter((element, index) => index > 11 && index < 14);
    let row5 = Array.from(checkboxes).filter((element, index) => index > 15 && index < 18);
    let row6 = Array.from(checkboxes).filter((element, index) => index > 19 && index < 22);
    let row7 = Array.from(checkboxes).filter((element, index) => index > 23 && index < 26); 
    let row8 = Array.from(checkboxes).filter((element, index) => index > 27 && index < 30);

    let rows = [row1, row2, row3, row4, row5, row6, row7, row8]

    for (let j = 0; j < rows.length; j++) {
        let currentRow = rows[j];

        if (currentRow) {
            for (let i = 0; i < currentRow.length; i++) {
                if (i == 0 ) {
                    currentRow[0].addEventListener('click', () => {
                        currentRow[1].checked = false
                    })
                } else {
                    currentRow[1].addEventListener('click', () => {
                        currentRow[0].checked = false
                    })
                }
            }

        }

    }
    
    
    let option1 = checkboxes[1];
    let option2 = checkboxes[5];
    let option3 = checkboxes[9];
    let option4 = checkboxes[13];
    let option5 = checkboxes[17];
    let option6 = checkboxes[21];
    let option7 = checkboxes[25];
    let option8 = checkboxes[29];

    // MISMO QUE ARRIBA PERO INVIRTIENDO COLUMNAS Y FILAS

    let rows = document.querySelectorAll('tr.ChoiceRow');

    let row1 = Array.from(rows[0].children).slice(1);
    let row2 = Array.from(rows[1].children).slice(1);

    for(let i = 0; i < row1.length - 1; i++) {
        row1[i].querySelector('input').addEventListener('click', () => {
            row2[i].querySelector('input').checked = false;
        });

        row2[i].querySelector('input').addEventListener('click', () => {
            row1[i].querySelector('input').checked = false;
        });
    }

