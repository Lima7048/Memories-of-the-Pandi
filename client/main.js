const baseURL = import.meta.env.VITE_Server;
const form = document.getElementById("memoryLog");
const existingData = document.getElementById("existingMemories");

form.addEventListener("sumit", async (event) => {
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
