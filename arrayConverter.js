const fs = require('fs');
const XLSX = require('xlsx');

// Cargar el archivo .xlsx
const workbook = XLSX.readFile('Panelistas Recontacto Ola 1 Rec 2.xlsx');

// Seleccionar la primera hoja del archivo
const sheetName = workbook.SheetNames[0]; // Nombre de la primera hoja
const sheet = workbook.Sheets[sheetName];

// Convertir la hoja a JSON (array de objetos)
const data = XLSX.utils.sheet_to_json(sheet);

//console.log(data[0]);

console.log(JSON.stringify(data, null, 2));


// Salida: [{ panelistId: 343443, date: '24/2', answer: 'yes' }, ...]






