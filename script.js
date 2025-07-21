const alphabet = [
  { char: ' ', img: 'https://i.imgur.com/QgfnhnU.png' },
  { char: 'A', img: 'https://i.imgur.com/ZesJAW2.png' },
  { char: 'B', img: 'https://i.imgur.com/aCy3QNg.png' },
  { char: 'C', img: 'https://i.imgur.com/pm1TSqn.png' },
  { char: 'D', img: 'https://i.imgur.com/AdyVKtB.png' },
  { char: 'E', img: 'https://i.imgur.com/F8vnc2F.png' },
  { char: 'F', img: 'https://i.imgur.com/FAVItNI.png' },
  { char: 'G', img: 'https://i.imgur.com/3425o4o.png' },
  { char: 'H', img: 'https://i.imgur.com/e3zxkSJ.png' },
  { char: 'I', img: 'https://i.imgur.com/CR95aD4.png' },
  { char: 'J', img: 'https://i.imgur.com/f9eD0UX.png' },
  { char: 'K', img: 'https://i.imgur.com/KEnEh6Y.png' },
  { char: 'L', img: 'https://i.imgur.com/NGs85OT.png' },
  { char: 'M', img: 'https://i.imgur.com/AMIhNME.png' },
  { char: 'N', img: 'https://i.imgur.com/2BA1H5z.png' },
  { char: 'Ñ', img: 'https://i.imgur.com/ptgOfxT.png' },
  { char: 'O', img: 'https://i.imgur.com/xW5Y2Lx.png' },
  { char: 'P', img: 'https://i.imgur.com/FhBoxAH.png' },
  { char: 'Q', img: 'https://i.imgur.com/esuzNZ2.png' },
  { char: 'R', img: 'https://i.imgur.com/GXQhtWY.png' },
  { char: 'S', img: 'https://i.imgur.com/Qmru6Hg.png' },
  { char: 'T', img: 'https://i.imgur.com/gmzZK9V.png' },
  { char: 'U', img: 'https://i.imgur.com/nCrZtyW.png' },
  { char: 'V', img: 'https://i.imgur.com/CjczYpu.png' },
  { char: 'W', img: 'https://i.imgur.com/asEIIim.png' },
  { char: 'X', img: 'https://i.imgur.com/b5a0I6W.png' },
  { char: 'Y', img: 'https://i.imgur.com/62SYX0q.png' },
  { char: 'Z', img: 'https://i.imgur.com/tXStyBA.png' }
];

const targetWord = "GATO";
const slotCount = 6;
const slotContainer = document.getElementById("slotContainer");
const slots = [];

function getCurrentWord() {
  return slots.map(slot => alphabet[slot.currentIndex].char).join('');
}

for (let s = 0; s < slotCount; s++) {
  const slotWrapper = document.createElement("div");
  slotWrapper.className = "slot";

  const upArrow = document.createElement("div");
  upArrow.className = "arrow";
  upArrow.innerHTML = `<img src="https://i.imgur.com/fTGeZ8u.png">`;

  const downArrow = document.createElement("div");
  downArrow.className = "arrow";
  downArrow.innerHTML = `<img src="https://i.imgur.com/YyomiA6.png">`;
  downArrow.style.marginTop = "10px";

  const letterSlot = document.createElement("div");
  letterSlot.className = "letter-slot";
  const letterList = document.createElement("div");
  letterList.className = "letter-list";
  letterSlot.appendChild(letterList);

  alphabet.forEach(({ img }) => {
    const div = document.createElement("div");
    div.className = "letter";
    const image = document.createElement("img");
    image.src = img;
    div.appendChild(image);
    letterList.appendChild(div);
  });

  let currentIndex = 0;
  const updatePosition = () => {
    letterList.style.transform = `translateY(${-currentIndex * 90}px)`;
    slots[s].currentIndex = currentIndex;

    const currentWord = getCurrentWord().trim();
    const fadeOverlay = document.getElementById("fadeOverlay");

    if (currentWord === "GATO") {
      fadeOverlay.style.opacity = "1";
      fadeOverlay.style.pointerEvents = "auto";
      setTimeout(() => {
        window.location.href = "Gato/index.html";
      }, 1000);
    }

    if (currentWord === "ABCDEF") {
      fadeOverlay.style.opacity = "1";
      fadeOverlay.style.pointerEvents = "auto";
      setTimeout(() => {
        window.location.href = "ABCDEF/index.html";
      }, 1000);
    }
  };

  upArrow.onclick = () => {
    currentIndex = (currentIndex + 1) % alphabet.length;
    updatePosition();
  };

  downArrow.onclick = () => {
    currentIndex = (currentIndex - 1 + alphabet.length) % alphabet.length;
    updatePosition();
  };

  slots.push({ letterList, currentIndex });

  slotWrapper.appendChild(upArrow);
  slotWrapper.appendChild(letterSlot);
  slotWrapper.appendChild(downArrow);
  slotContainer.appendChild(slotWrapper);

  updatePosition();
}
