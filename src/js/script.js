import { BarcodeScanner } from "@capacitor-mlkit/barcode-scanning";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#start-scan-button")
    .addEventListener("click", async () => {
      await BarcodeScanner.startScan();
    });
});
