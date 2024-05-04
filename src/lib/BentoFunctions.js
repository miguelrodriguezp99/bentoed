export async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);

  Toastify({
    text: "Copied to clipboard!",
    duration: 3000,
    position: "right",
    offset: { x: 40, y: 20 },
    style: {
      background: "#ddd",
      color: "black",
      borderRadius: "10px",
    },
  }).showToast();
}

export function showCode(
  code,
  htmlCode,
  cssCode,
  tailwindCode,
  bentoDiv,
  bentoBtn
) {
  switch (code) {
    case "html":
      htmlCode.style.display = "block";
      bentoDiv.style.display = "none";
      cssCode.style.display = "none";
      tailwindCode.style.display = "none";
      bentoBtn.classList.remove("text-highlight_hover");
      bentoBtn.classList.add("text-highlight", "hover:text-highlight_hover");
      break;
    case "css":
      htmlCode.style.display = "none";
      bentoDiv.style.display = "none";
      cssCode.style.display = "block";
      tailwindCode.style.display = "none";
      bentoBtn.classList.remove("text-highlight_hover");
      bentoBtn.classList.add("text-highlight", "hover:text-highlight_hover");
      break;
    case "tailwind":
      htmlCode.style.display = "none";
      bentoDiv.style.display = "none";
      cssCode.style.display = "none";
      tailwindCode.style.display = "block";
      bentoBtn.classList.remove("text-highlight_hover");
      bentoBtn.classList.add("text-highlight", "hover:text-highlight_hover");
      break;
    case "bento":
      htmlCode.style.display = "none";
      cssCode.style.display = "none";
      tailwindCode.style.display = "none";
      bentoDiv.style.display = "grid";
      bentoBtn.classList.remove("text-highlight", "hover:text-highlight_hover");
      bentoBtn.classList.add("text-highlight_hover");
      break;
  }
}
