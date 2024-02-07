const baseURL = import.meta.env.VITE_Server;

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
  return result;
}
fetchMemoriesList();

async function displayMemories() {
  let memories = await fetchMemoriesList();
  existingData.innerHTML = "";
  memories.forEach((item) => {
    let memoryContainer = document.createElement("div");
    memoryContainer.innerHTML = `Username: ${item.username} message: ${item.message} date: ${item.date} location: ${item.location} picture: ${item.picture}`;
    existingData.appendChild(memoryContainer);
  });
}
displayMemories();
