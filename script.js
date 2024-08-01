let container = document.querySelector('.hackTerminal')

function getTime() {
    let timeing = (Math.floor(1 + Math.random() * 7)) * 1000;
    console.log(timeing)
    return timeing
}

async function apendtext(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            container.innerHTML = container.innerHTML + text
            resolve(455)
            blink()
        }, time)
    })
}
async function main() {
    await apendtext(`<h2>Initializing Hacking <span class="dots">.</span></h2>`, getTime())
    await apendtext(`<h2>Reading Your Files<span class="dots">.</span></h2>`, getTime())
    await apendtext(`<h2>Password Files Detected<span class="dots">.</span></h2>`, getTime())
    await apendtext(`<h2>Sending All Passwords and personal Files to server<span class="dots">.</span></h2>`, getTime())
    await apendtext(`<h2>cleaning up<span class="dots">.</span></h2>`, getTime())
}

function blink() {
    let dots = document.querySelectorAll('.dots');
    dots.forEach((dot) => {
        const doting = setInterval(() => {
            if (dot.innerHTML.length < 3) {
                dot.innerHTML = dot.innerHTML + ".";
            } else {
                dot.innerHTML = "";
            }
        }, 500);
    })
}

main();