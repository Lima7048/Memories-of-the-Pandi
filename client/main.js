const baseURL = import.meta.env.VITE_Server;
import anime from "./node_modules/animejs/lib/anime.es";

const form = document.getElementById("memoryLog");
const existingData = document.getElementById("existingMemories");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const memoryData = Object.fromEntries(formData);
  const response = await fetch(`${baseURL}/memories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memoryData),
  });
  if (response.ok) {
    displayMemories();
  } else {
    console.log("failed to add", response.status);
  }
});

async function fetchMemoriesList() {
  const memoriesList = await fetch(`${baseURL}/memories`);
  let result = await memoriesList.json();
  return result.reverse();
}
fetchMemoriesList();

async function displayMemories() {
  let memories = await fetchMemoriesList();
  existingData.innerHTML = "";
  memories.forEach((item) => {
    let memoryContainer = document.createElement("div");
    let picture = document.createElement("img")

    memoryContainer.classList.add("story");
    memoryContainer.innerHTML = `Username: ${item.username} message: ${item.message} date: ${item.date} location: ${item.location} picture: ${item.picture}`;
    existingData.appendChild(memoryContainer);
  });
}
displayMemories();

anime({
  targets: ".panid-img",
  translateY: [250, 50],
  duration: 2500,
  delay: 1000,
  loop: 5,
});

anime({
  targets: "#subheading",
  backgroundColor: "#FFF",
  borderRadius: ["0%", "20%"],
  delay: 2000,
});
