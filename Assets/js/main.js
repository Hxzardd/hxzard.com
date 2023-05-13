// Define sleep function that returns a Promise
const sleep = e => new Promise((t => setTimeout(t, e))),
  // Get the alerts container element
  alerts = document.querySelector(".alerts");

// Function to create an alert message
function makeAlert(e, t, a) {
  // Create a new div element with class 'alert'
  const n = Object.assign(document.createElement("div"), {
    className: "alert"
  });

  // Append an icon element with class 'e' and style 't'
  n.appendChild(Object.assign(document.createElement("i"), {
    className: e,
    style: t
  })), 
  // Append a paragraph element with innerHTML 'a'
  n.appendChild(Object.assign(document.createElement("p"), {
    innerHTML: a
  })), 
  // Return the alert message
  return n;
}

// Function to copy text to clipboard
async function copy(e, text) {
  try {
    // Write text to clipboard
    await navigator.clipboard.writeText(text);

    // Create an alert message for successful copy
    const alert = makeAlert(
      "fa-regular fa-circle-check",
      "color: #9bfa9b",
      "Copied to clipboard."
    );

    // Append the alert message to the alerts container
    alerts.appendChild(alert);

    // Get the index of the alert message
    const index = Array.from(alerts.childNodes).indexOf(alert);

    // Animate the alert message
    alert.animate(
      [{
        opacity: 0,
        offset: 0,
      }, ],
      {
        duration: 200,
      }
    );

    // Wait for 2 seconds
    await sleep(2000);

    // Animate the alert message
    alert.animate(
      [{
        opacity: 0,
        offset: 1,
      }, ],
      {
        duration: 200,
      }
    );

    // Wait for 200ms
    await sleep(200);

    // Hide the alert message
    alert.style.height = 0;
    alert.style.opacity = 0;

    // Wait for 200ms
    await sleep(200);

    // Remove the alert message from the alerts container
    alerts.removeChild(alert);
  } catch (err) {
    // Create an alert message for failed copy
    makeAlert(
      "fa-regular fa-exclamation-circle", {
        color: "#fa9b9b"
      },
      "Failed to copy to clipboard."
    );
  }
}

// Function to animate an element
function fx(e) {
  e.animate([{
    background: "rgba(0, 0, 0, 0.3)",
    offset: 0
  }], {
    duration: 500
  });
}

// Get the element that displays age
const ageDisplay = document.querySelector(".age"),
  // Get the birth date
  birth = new Date(atob("MjIgQXVnIDIwMDQgMDA6MDA6MDAgR01UKzA1OjMw"));

// Function to calculate age
function det() {
  return ((new Date() - birth) / 1000 / 60 / 60 / 24 / 365).toFixed(9);
}

// Function to update age display
async function updateAge() {
  for (;;) {
    ageDisplay.textContent = det();
    await sleep(20);
  }
}

// Call the function to update age display
updateAge();

// Get the wrapper element
const wrapper = document.querySelector(".wrapper"),
  // Create a new XMLHttpRequest object
  r = new XMLHttpRequest;

// Define the request method and URL
r.open("GET", "https://api.lanyard.rest/v1/users/640368619058102332"),

// Send the request
r.send(),

// Listen for the 'load' event
r.addEventListener("load", (() => {
  // Parse the response text as JSON
  const e = JSON.parse(r.responseText);

  // If the request is successful and user is listening to Spotify
  if (200 === r.status && e.data.spotify) {
    // Get the Spotify song information
    const t = e.data.spotify,
      a = t.album.images[0].url,
      n = t.name,
      o = t.artists.map(e => e.name).join(", ");
    // Append the song information to the wrapper element
    wrapper.innerHTML += `
    <div class="song">
      <img class="song-image" src="${a}" alt="Album Cover"/>
      <div class="song-details">
        <h2 class="song-title">${n}</h2>
        <p class="song-artist">${o}</p>
      </div>
    </div>
    `;
  }
}), !1);
