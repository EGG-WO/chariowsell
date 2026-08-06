import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const status = document.getElementById("status");
const ticketBox = document.getElementById("ticket");

async function getTicket() {
  try {
    const snap = await getDocs(collection(db, "tickets"));

    console.log("Nombre de tickets :", snap.size);

    if (snap.empty) {
      status.textContent = "❌ Aucun ticket dans Firestore";
      return;
    }

    const data = snap.docs[0].data();

    ticketBox.style.display = "block";
    ticketBox.textContent = data.code;
    status.textContent = "✅ Ticket trouvé";

  } catch (e) {
    console.error(e);
    status.textContent = "❌ " + e.message;
  }
}

getTicket();