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
  return ((new Date - birth) / 1000 / 60 / 60 / 24 / 365).toFixed(9);
}

// Function to update age display
async function updateAge() {
  for (;;) {
    ageDisplay.innerHTML = det();
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
  if (e.success && e.data.listening_to_spotify) {
    console.log(e);

    // Create an element to display the song and artist being listened to on Spotify
    const t = Object.assign(document.createElement("div"), {
      className: "listening",
      innerHTML: `<div class="listening-container"><i class="fa-brands fa-spotify"></i><p>Listening to <span class="title">${e.data.spotify.song}</span> by <span class="artist">${e.data.spotify.artist.replace(";", ",")}</span></p></div>`
    });

    // Append the element to the body
    document.body.appendChild(t);
  }
}));

// Get the 'ree' element and add span elements for each character
const ree = document.querySelector(".ree");
for (char of "Donate or 🔪")
    ree.appendChild(Object.assign(document.createElement("span"), {
        innerHTML: char
    }));

// Function to animate random characters in 'ree' element
async function blink() {
    for (; ; )
        ree.childNodes[Math.floor(Math.random() * ree.childNodes.length)].animate([{
            background: "black",
            color: "white",
            filter: "blur(3px)",
            offset: .5
        }], {
            duration: 500
        }),
        await sleep(200)
}

// Call the function to animate the 'ree' element
blink();
