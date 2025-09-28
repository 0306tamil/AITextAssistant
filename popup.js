const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

document.getElementById("proofreadBtn").addEventListener("click", () => {
  processText("proofread");
});

document.getElementById("rewriteBtn").addEventListener("click", () => {
  processText("rewrite");
});

document.getElementById("summarizeBtn").addEventListener("click", () => {
  processText("summarize");
});

// Gemini Nano API function
async function processText(type) {
  const text = inputText.value.trim();
  if (!text) {
    outputText.innerHTML = "<i>Paste some text first.</i>";
    return;
  }

  outputText.innerHTML = "⏳ Processing...";

  try {
    let response;
    switch (type) {
      case "proofread":
        response = await chrome.ai.proofread({
          text: text,
          language: "en"
        });
        outputText.innerHTML = `✅ Proofread Text:<br>${response.correctedText}`;
        break;

      case "rewrite":
        response = await chrome.ai.rewrite({
          text: text,
          style: "formal",
          language: "en"
        });
        outputText.innerHTML = `✏️ Rewritten Text:<br>${response.rewrittenText}`;
        break;

      case "summarize":
        response = await chrome.ai.summarize({
          text: text,
          length: "short",
          highlight: true,
          language: "en"
        });
        outputText.innerHTML = `<b>Summary / Highlights:</b><br>${response.summary}`;
        break;
    }
  } catch (error) {
    console.error(error);
    outputText.innerHTML = "<i>Error processing text. Make sure your API access is valid.</i>";
  }
}

