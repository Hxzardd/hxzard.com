const sleep = e => new Promise(a => setTimeout(a, e));
const alerts = document.querySelector(".alerts");

// Function to create an alert element
function makeAlert(e, a, t) {
  let s = Object.assign(document.createElement("div"), {
    className: "alert"
  });
  s.appendChild(Object.assign(document.createElement("i"), {
    className: e,
    style: a
  }));
  s.appendChild(Object.assign(document.createElement("p"), {
    innerHTML: t
  }));
  return s;
}

// Function to copy text to clipboard and display a success message
async function copy(e) {
  navigator.clipboard.writeText(e);
  // Create and add an alert element to the DOM
  let a = makeAlert("fa-regular fa-circle-check", "color: #9bfa9b", "Copied to clipboard.");
  alerts.appendChild(a);
  // Get the index of the newly added alert element and animate it
  Array.from(alerts.childNodes).indexOf(a);
  a.animate([{ opacity: 0, offset: 0 }], { duration: 200 });
  await sleep(2000);
  a.animate([{ opacity: 0, offset: 1 }], { duration: 200 });
  await sleep(200);
  a.style.height = 0;
  a.style.opacity = 0;
  await sleep(200);
  // Remove the alert element from the DOM
  alerts.removeChild(a);
}

const ageDisplay = document.querySelector(".age");
const birth = new Date(atob("MjIgQXVnIDIwMDQgMDA6MDA6MDAgR01UKzA1OjMw"));

// Function to calculate the age
function det() {
  let e = new Date();
  return ((e - birth) / 1e3 / 60 / 60 / 24 / 365).toFixed(9);
}

// Function to update the age display continuously
async function updateAge() {
  for (;;) {
    ageDisplay.innerHTML = det();
    await sleep(20);
  }
}

updateAge();

const r = new XMLHttpRequest();
r.open("GET", "https://api.lanyard.rest/v1/users/930055165480951809");
r.send();
r.addEventListener("load", () => {
  let e = JSON.parse(r.responseText);
  if (e.success && e.data.listening_to_spotify) {
    console.log(e);
    // Create a div element to display the currently playing Spotify song
    let a = Object.assign(document.createElement("div"), {
      className: "listening",
      // Add the song details to the innerHTML of the div element
      innerHTML: `<div class="listening-container"><i class="fa-brands fa-spotify"></i>
        <p>Listening to <span class="title">${e.data.spotify.song}</span> by
        <span class="artist">${e.data.spotify.artist.replaceAll(";", ",")}</span></p></div>`
    });
    document.body.appendChild(a);
  }
});
const Donate = document.querySelector(".Donate");
for (char of "Donate below or 🔪")
    kp.appendChild(Object.assign(document.createElement("span"), {
        innerHTML: char
    }));
async function blink() {
    for (; ; )
        kp.childNodes[Math.floor(Math.random() * kp.childNodes.length)].animate([{
            background: "black",
            color: "white",
            filter: "blur(3px)",
            offset: .5
        }], {
            duration: 500
        }),
        await sleep(200)
}
blink();
