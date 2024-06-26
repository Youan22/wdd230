// // Toggle active/not active buttons

// var gridSelector = document.querySelector('#directory-grid');
// var listSelector = document.querySelector('#directory-list');
// var directoryData = document.querySelector('#directory-data');

// gridSelector.addEventListener('click', ()=>{
//     if (!gridSelector.classList.contains('active')){    
//         gridSelector.classList.add('active');
//         listSelector.classList.remove('active');
//         directoryData.classList.add('directory-cards')
//         directoryData.classList.remove('directory-list')
//     }
// });

// listSelector.addEventListener('click', ()=>{
//     if (!listSelector.classList.contains('active')){
//         listSelector.classList.add('active');
//         gridSelector.classList.remove('active');
//         directoryData.classList.add('directory-list')
//         directoryData.classList.remove('directory-cards')
//     }
// });


// // Load JSON data and do stuff
// // Business URL loaded in config.js

// // COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// // Using the innerHTML version is a little less Javascript intensive.

// const businessDataUrl = 'data/members.json'; // Ensure this path is correct

// const displayBusinesses = (members) => {
//   const cards = document.querySelector(".directory-cards"); // select the output container element
//   cards.innerHTML = ''; // Clear any existing content

//   members.forEach((business) => {
//     // Create elements to add to the div.cards element
//     let card = document.createElement("section");
//     card.innerHTML = `
//       <img src="${business.imageURL}" alt="${business.name} logo" onerror="this.src='default-image.png';">
//       <h2>${business.name}</h2>
//       <p>${business.streetAddress}</p>
//       <p>${business.cityStateZip}</p>
//       <p><a href="${business.websiteURL}" target="_blank">Website</a></p>
//       <p>${business.adcopy}</p>
//     `;
//     if (business.membershipLevel.toLowerCase() === 'gold') {
//       card.classList.add('gold-member');
//     }
//     cards.appendChild(card);
//   }); // end of forEach loop
// }; // end of function expression

// async function getBusinessData() {
//   try {
//     const response = await fetch(businessDataUrl);
//     if (response.ok) {
//       const data = await response.json();
//       displayBusinesses(data.businesses);
//     } else {
//       console.error("There was an error loading the member directory data.");
//       const cards = document.querySelector(".directory-cards");
//       cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
//     }
//   } catch (error) {
//     console.error("There was an error loading the member directory data.", error);
//     const cards = document.querySelector(".directory-cards");
//     cards.innerHTML = "<section><h1>There was an error loading the data</h1><p>Please come back another time.</p></section>";
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   getBusinessData();
//   document.getElementById('directory-grid').addEventListener('click', () => {
//     document.querySelector('.directory-cards').classList.remove('list-view');
//     document.querySelector('.directory-cards').classList.add('grid-view');
//   });
//   document.getElementById('directory-list').addEventListener('click', () => {
//     document.querySelector('.directory-cards').classList.remove('grid-view');
//     document.querySelector('.directory-cards').classList.add('list-view');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  getBusinessData();

  document.getElementById('directory-grid').addEventListener('click', () => {
    document.querySelector('#directory-data').classList.add('directory-cards');
    document.querySelector('#directory-data').classList.remove('directory-list');
  });

  document.getElementById('directory-list').addEventListener('click', () => {
    document.querySelector('#directory-data').classList.add('directory-list');
    document.querySelector('#directory-data').classList.remove('directory-cards');
  });
});

async function getBusinessData() {
  const businessDataUrl = 'data/members.json'; // Ensure this path is correct
  try {
    const response = await fetch(businessDataUrl);
    if (response.ok) {
      const data = await response.json();
      displayBusinesses(data.businesses);
    } else {
      handleDataError();
    }
  } catch (error) {
    handleDataError();
    console.error("There was an error loading the member directory data.", error);
  }
}

function handleDataError() {
  const cards = document.querySelector("#directory-data");
  cards.innerHTML = "<section><h1>There was an error loading the data</h1><p>Please come back another time.</p></section>";
}

const displayBusinesses = (members) => {
  const cards = document.querySelector("#directory-data");
  cards.innerHTML = ''; // Clear any existing content

  members.forEach((business) => {
    let card = document.createElement("section");
    card.innerHTML = `
      <img src="${business.imageURL}" alt="${business.name} logo" onerror="this.src='images/default-image.png';">
      <h2>${business.name}</h2>
      <p>${business.streetAddress}</p>
      <p>${business.cityStateZip}</p>
      <p><a href="${business.websiteURL}" target="_blank">Website</a></p>
      <p>${business.adcopy}</p>
    `;
    if (business.membershipLevel.toLowerCase() === 'gold') {
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  });
};

