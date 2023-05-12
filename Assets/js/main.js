const sleep = (e) => new Promise((t) => setTimeout(t, e));
const alerts = document.querySelector(".alerts");

function makeAlert(iconClass, color, message) {
  const alert = Object.assign(document.createElement("div"), {
    className: "alert",
  });

  const icon = Object.assign(document.createElement("i"), {
    className: iconClass,
    style: color,
  });
  alert.appendChild(icon);

  const text = Object.assign(document.createElement("p"), {
    innerHTML: message,
  });
  alert.appendChild(text);

  alerts.appendChild(alert);
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
  sleep(2000)
    .then(() => {
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
      return sleep(200);
    })
    .then(() => {
      alert.style.height = 0;
      alert.style.opacity = 0;
      return sleep(200);
    })
    .then(() => {
      alerts.removeChild(alert);
    });
}

async function copy(e, text) {
  try {
    await navigator.clipboard.writeText(text);
    makeAlert(
      "fa-regular fa-check-circle",
      { color: "#9bfa9b" },
      "Copied to clipboard."
    );
  } catch (err) {
    makeAlert(
      "fa-regular fa-exclamation-circle",
      { color: "#fa9b9b" },
      "Failed to copy to clipboard."
    );
  }
}

function fx(e) {
  e.animate(
    [
      {
        background: "rgba(0, 0, 0, 0.3)",
        offset: 0
      }
    ],
    {
      duration: 500
    }
  );
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

const ree = document.querySelector(".ree");
for (char of "Donate or 🔪") {
  ree.appendChild(
    Object.assign(document.createElement("span"), {
      innerHTML: char
    })
  );
}

const ree_spam = document.querySelector(".ree_spam");
for (char of "Don't you dare to spam this!") {
  ree_spam.appendChild(
    Object.assign(document.createElement("span"), {
      innerHTML: char
    })
  );
}

async function blink() {
  const ree = document.querySelector(".ree"),
    ree_spam = document.querySelector(".ree_spam");

  if (ree && ree_spam) {
    const texts = [ree, ree_spam];
    for (;;) {
      const text = texts[Math.floor(Math.random() * texts.length)],
        char =
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

blink();
