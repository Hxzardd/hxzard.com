// Define sleep function that returns a Promise
const sleep = e => new Promise((t => setTimeout(t, e)));

// Get the alerts container element
const alerts = document.querySelector(".alerts");

// Function to create an alert message
function makeAlert(iconClass, style, message) {
  // Create a new div element with class 'alert'
  const alert = Object.assign(document.createElement("div"), {
    className: "alert"
  });

  // Append an icon element with class 'iconClass' and style 'style'
  const icon = Object.assign(document.createElement("i"), {
    className: iconClass,
    style: style
  });
  alert.appendChild(icon);

  // Append a paragraph element with innerHTML 'message'
  const messageElem = Object.assign(document.createElement("p"), {
    innerHTML: message
  });
  alert.appendChild(messageElem);

  // Return the alert message
  return alert;
}

// Function to copy text to clipboard
async function copy(e, text) {
  try {
    // Try writing text to clipboard using Clipboard API
    await navigator.clipboard.writeText(text);

    // Create an alert message for successful copy
    const alert = makeAlert(
      "far fa-check-circle",
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
      }, {
        opacity: 1,
        offset: 0.1,
      }, {
        opacity: 1,
        offset: 0.9,
      }, {
        opacity: 0,
        offset: 1,
      }],
      {
        duration: 1000,
      }
    );

    // Wait for 2 seconds
    await sleep(2000);

    // Remove the alert message from the alerts container
    alerts.removeChild(alert);
  } catch (err) {
    // Fallback to using execCommand to copy text to clipboard
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    // Create an alert message for successful copy
    const alert = makeAlert(
      "far fa-check-circle",
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
      }, {
        opacity: 1,
        offset: 0.1,
      }, {
        opacity: 1,
        offset: 0.9,
      }, {
        opacity: 0,
        offset: 1,
      }],
      {
        duration: 1000,
      }
    );

    // Wait for 2 seconds
    await sleep(2000);

    // Remove the alert message from the alerts container
    alerts.removeChild(alert);
  }
}

// Function to animate an element
function animate(element) {
  element.animate([{
    background: "rgba(0, 0, 0, 0.3)",
    offset: 0
  }], {
    duration: 500
  });
}

// Get the element that displays age
const ageDisplay = document.querySelector(".age");

// Get the birth date
const birth = new Date(atob("MjIgQXVnIDIwMDQgMDA6MDA6MDAgR01UKzA1OjMw"));

// Function to calculate age
function calculateAge() {
  return ((new Date() - birth) / 1000 / 60 / 60 / 24 / 365).toFixed(9);
}

// Function to update age display
async function updateAge() {
  while (true) {
    ageDisplay.innerHTML = calculateAge();
    await sleep(20);
  }
}

// Call the function to update age display
updateAge();

// Get the wrapper element
const wrapper = document.querySelector(".wrapper");

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define the request method and URL
xhr.open("GET", "https://api.lanyard.rest/v1/users/640368619058102332");

// Send the request
xhr.send();

// Listen for the 'load' event
xhr.addEventListener("load", () => {
  // Parse the response text as JSON
  const response = JSON.parse(xhr.responseText);

  // If the request is successful and user is listening to Spotify
  if (response.success && response.data.listening_to_spotify) {
    console.log(response);

    // Create an element to display the song and artist being listened to on Spotify
    const listeningElement = Object.assign(document.createElement("div"), {
      className: "listening",
      innerHTML: `<div class="listening-container"><i class="fab fa-spotify"></i><p>Listening to <span class="title">${response.data.spotify.song}</span> by <span class="artist">${response.data.spotify.artist.replace(";", ",")}</span></p></div>`
    });

    // Append the element to the body
    document.body.appendChild(listeningElement);
  }
});

// Get the 'ree' element and add span elements for each character
const ree = document.querySelector(".ree");
for (const char of "Donate or 🔪") {
  const span = Object.assign(document.createElement("span"), {
    innerHTML: char
  });
  ree.appendChild(span);
}

// Function to animate random characters in 'ree' element
async function blink() {
  while (true) {
    const randomSpan = ree.childNodes[Math.floor(Math.random() * ree.childNodes.length)];
    randomSpan.animate([{
      background: "black",
      color: "white",
      filter: "blur(3px)",
      offset: .5
    }], {
      duration: 500
    });
    await sleep(200);
  }
}

// Call the function to animate the 'ree' element
blink();
