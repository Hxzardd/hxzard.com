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
async function copy(e, t) {
    navigator.clipboard.writeText(t);
    const a = makeAlert("fa-regular fa-circle-check", "color: #9bfa9b", "Copied to clipboard.");
    alerts.appendChild(a);
    Array.from(alerts.childNodes).indexOf(a);
    a.animate([{
        opacity: 0,
        offset: 0
    }], {
        duration: 200
    }),
    await sleep(2e3),
    a.animate([{
        opacity: 0,
        offset: 1
    }], {
        duration: 200
    }),
    await sleep(200),
    a.style.height = 0,
    a.style.opacity = 0,
    await sleep(200),
    alerts.removeChild(a)
}
function fx(e) {
    e.animate([{
        background: "rgba(0, 0, 0, 0.3)",
        offset: 0
    }], {
        duration: 500
    })
}
const ageDisplay = document.querySelector(".age")
  , birth = new Date(atob("MjIgQXVnIDIwMDQgMDA6MDA6MDAgR01UKzA1OjMw"));
function det() {
    return ((new Date - birth) / 1e3 / 60 / 60 / 24 / 365).toFixed(9)
}
async function updateAge() {
    for (; ; )
        ageDisplay.innerHTML = det(),
        await sleep(20)
}
updateAge();
const wrapper = document.querySelector(".wrapper")
  , r = new XMLHttpRequest;
r.open("GET", "https://api.lanyard.rest/v1/users/930055165480951809"),
r.send(),
r.addEventListener("load", (()=>{
    const e = JSON.parse(r.responseText);
    if (e.success && e.data.listening_to_spotify) {
        console.log(e);
        const t = Object.assign(document.createElement("div"), {
            className: "listening",
            innerHTML: `<div class="listening-container"><i class="fa-brands fa-spotify"></i><p>Listening to <span class="title">${e.data.spotify.song}</span> by <span class="artist">${e.data.spotify.artist.replace(";", ",")}</span></p></div>`
        });
        document.body.appendChild(t)
    }
}
));
const ree = document.querySelector(".ree");
for (char of "T E S T")
    ree.appendChild(Object.assign(document.createElement("span"), {
        innerHTML: char
    }));
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
blink();
