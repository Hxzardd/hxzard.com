const sleep = e=>new Promise((t=>setTimeout(t, e)))
  , alerts = document.querySelector(".alerts");
function makeAlert(e, t, a) {
    const n = Object.assign(document.createElement("div"), {
        className: "alert"
    });
    return n.appendChild(Object.assign(document.createElement("i"), {
        className: e,
        style: t
    })),
    n.appendChild(Object.assign(document.createElement("p"), {
        innerHTML: a
    })),
    n
}
async function copy(e, text) {
  try {
    await navigator.clipboard.writeText(text);
    const alert = makeAlert(
      "fa-regular fa-circle-check",
      "color: #9bfa9b",
      "Copied to clipboard."
    );
    alerts.appendChild(alert);
    const index = Array.from(alerts.childNodes).indexOf(alert);
    alert.animate(
      [
        {
          opacity: 0,
          offset: 0,
        },
      ],
      {
        duration: 200,
      }
    );
    await sleep(2000);
    alert.animate(
      [
        {
          opacity: 0,
          offset: 1,
        },
      ],
      {
        duration: 200,
      }
    );
    await sleep(200);
    alert.style.height = 0;
    alert.style.opacity = 0;
    await sleep(200);
    alerts.removeChild(alert);
  } catch (err) {
    makeAlert(
      "fa-regular fa-exclamation-circle",
      { color: "#fa9b9b" },
      "Failed to copy to clipboard."
    );
  }
}
function fx(e) {
    e.animate([{
        background: "rgba(0, 0, 0, 0.3)",
        offset: 0
    }], {
        duration: 500
    })
}

const ageDisplay = document.querySelector(".age"),
  birth = new Date(atob("MjIgQXVnIDIwMDQgMDA6MDA6MDAgR01UKzA1OjMw"));

function det() {
  return ((new Date - birth) / 1000 / 60 / 60 / 24 / 365).toFixed(9);
}

async function updateAge() {
  for (;;) {
    ageDisplay.innerHTML = det();
    await sleep(20);
  }
}

updateAge();

const wrapper = document.querySelector(".wrapper"),
  r = new XMLHttpRequest();

r.open("GET", "https://api.lanyard.rest/v1/users/930055165480951809");
r.send();
r.addEventListener("load", () => {
  const e = JSON.parse(r.responseText);
  if (e.success && e.data.listening_to_spotify) {
    console.log(e);
    const t = Object.assign(document.createElement("div"), {
      className: "listening",
      innerHTML: `<div class="listening-container"><i class="fa-brands fa-spotify"></i><p>Listening to <span class="title">${e.data.spotify.song}</span> by <span class="artist">${e.data.spotify.artist.replace(
        ";",
        ","
      )}</span></p></div>`
    });
    document.body.appendChild(t);
  }
});

async function blink() {
  const ree = document.querySelector(".ree");
  const ree_spam = document.querySelector(".ree_spam");

  if (ree && ree_spam) {
    const texts = [ree, ree_spam];
    for (;;) {
      const text = texts[Math.floor(Math.random() * texts.length)];
      const char =
        text.childNodes[Math.floor(Math.random() * text.childNodes.length)];
      char.animate(
        [
          {
            background: "black",
            color: "white",
            filter: "blur(3px)",
            offset: 0.5
          }
        ],
        {
          duration: 500
        }
      );
      await sleep(200);
    }
  }
}
