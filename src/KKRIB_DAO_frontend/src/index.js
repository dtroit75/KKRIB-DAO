import { KKRIB_DAO_backend } from "../../../.dfx/local/canisters/KKRIB_DAO_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
  
    const name = document.getElementById("name").value.toString();
  
    button.setAttribute("disabled", true);
  
    // Interact with foo actor, calling the greet method
    const greeting = await KKRIB_DAO_backend.greet(name);
  
    button.removeAttribute("disabled");
  
    document.getElementById("greeting").innerText = greeting;
  
    return false;
  });