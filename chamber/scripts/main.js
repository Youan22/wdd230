// Show the meet-greet message on Tue/Thu
// Date.getDay() uses a 0 based index to return the day of the week
var messagedate = new Date();
if (messagedate.getDay() == 2 || messagedate.getDay() == 4) {
  document.querySelector("#meet-greet").classList.add("active");
}

// select HTML elements in the document
const weatherIcon = document.querySelector("#weathericon");
const weatherDesc = document.querySelector("#weatherdesc");

function displayResults(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;
  const main = weatherData.weather[0].main;
  let temperatureSpan = document.querySelector("#temperature");
  let windSpeedSpan = document.querySelector("#windspeed");

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  weatherDesc.textContent = main;
  temperatureSpan.textContent = weatherData.main.temp.toFixed(0);
  windSpeedSpan.textContent = weatherData.wind.speed.toFixed(0);
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();

function displaySpotlights(businessList) {
  spotlights = [];
  for (let i = 0; i < 3; i++) {
    var elt = Math.floor(Math.random() * businessList.length);
    spotlights.push(businessList.splice(elt, 1)[0]);
  }

  // Now display stuff
  var mainspotlight = document.querySelector(".main-spotlight");
  spotlightcount = 1;
  spotlights.forEach((spotlight) => {
    var newdiv = document.createElement("div");
    newdiv.classList.add("spotlight" + spotlightcount);
    spotlightcount++;
    newdiv.innerHTML = `<h4>${spotlight.name}</h4>
                        <p class="centered-image"><a href="${spotlight.websiteURL}"><img src="${spotlight.imageURL}"></a></p>
                        <p>${spotlight.streetAddress}, ${spotlight.cityStateZip}</p>
                        <p>${spotlight.adcopy}</p>`;
    mainspotlight.append(newdiv);
  });
}

async function getBusinessData() {
  const response = await fetch(businessDataUrl);
  if (response.ok) {
    const data = await response.json();
    displaySpotlights(data.businesses);
  } else {
    console.error("There was an error loading the data.");
  }
}

getBusinessData();
