export const pasteEmojiAtRandomCoordinates = (emoji: any) => {
  const container = document.querySelector(".emoji-container");
  if (container) {
    const containerRect = container.getBoundingClientRect();

    const randomX = Math.random() * containerRect.width;
    const randomY = Math.random() * containerRect.height;

    const emojiElement = document.createElement("div");
    emojiElement.style.position = "absolute";
    emojiElement.style.left = `${randomX}px`;
    emojiElement.style.top = `${randomY}px`;
    emojiElement.style.fontSize = "2.5rem";
    emojiElement.style.display = "flex";
    emojiElement.style.flexDirection = "column";
    emojiElement.style.alignItems = "center";

    const emojiValue = document.createElement("span");
    emojiValue.innerText = emoji.value;

    const emojiLabel = document.createElement("span");
    emojiLabel.innerText = emoji.label;
    emojiLabel.style.fontSize = "0.6rem";
    emojiLabel.style.marginTop = "0rem";
    emojiLabel.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    emojiLabel.style.color = "white";
    emojiLabel.style.padding = "0.2rem";

    emojiElement.appendChild(emojiValue);
    emojiElement.appendChild(emojiLabel);
    container.appendChild(emojiElement);
  }
};
