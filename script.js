// Simple AI demo for Elysian Concierge
function askAI() {
  const input = document.getElementById("ai-input").value.toLowerCase();
  const responseEl = document.getElementById("ai-response");

  if (!input) {
    responseEl.textContent = "Please ask a question!";
    return;
  }

  // Simple keyword-based responses
  if (input.includes("room")) {
    responseEl.textContent = "We have Luxury, Family, and Penthouse rooms available. Check our Rooms section!";
  } else if (input.includes("food") || input.includes("dining")) {
    responseEl.textContent = "We serve traditional Ethiopian food, coffee, and tea daily!";
  } else if (input.includes("booking") || input.includes("reserve")) {
    responseEl.textContent = "You can book a room directly from our booking form above.";
  } else {
    responseEl.textContent = "Sorry, I don't understand that. Try asking about rooms, dining, or booking.";
  }
}

// Room recommendation function
function recommendRoom() {
  const guests = parseInt(document.getElementById("guests-num").value) || 1;
  const type = document.getElementById("room-type").value;
  const result = document.getElementById("recommendation-result");

  if (type === "Luxury") {
    result.textContent = `We recommend the Oceanview Signature Suite for ${guests} guest(s).`;
  } else if (type === "Family") {
    result.textContent = `We recommend the Garden Family Retreat for ${guests} guest(s).`;
  } else if (type === "Penthouse") {
    result.textContent = `We recommend the Skyline Penthouse for ${guests} guest(s).`;
  } else {
    result.textContent = "Please select a room type.";
  }
}