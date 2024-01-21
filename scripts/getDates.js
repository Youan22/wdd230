// This is the get current year
//const currentYearElemet = document.querySelector('#year');
//const currentYear = 

// This is the get last Modified Date

//const lastModifiedParagragraph = document.querySelector('#lastModified');
//const lastModifiedDate = document.lastModified;



//lastModifiedElement.innerHTML = 'Last Modified: <em> ${lastModified}</em>';

let myDate = new Date();
let myYear = myDate.getFullYear();

document.querySelector('.current_year').textContent = myYear;

document.querySelector('#lastModified').textContent = myDate;
