document.addEventListener('DOMContentLoaded', () => {
  // Demo: log om te checken of script geladen is
  console.log('[RE5] script.js geladen');

  // Voorbeeld hooks voor de knoppen
  document.querySelectorAll('.actions .btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      console.log(`[RE5] Button clicked: ${action}`);
      // TODO: vervang met echte logica (open cart, navigeer, modal, etc.)
    });
  });
});
