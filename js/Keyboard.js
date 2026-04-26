import { handleEvent } from "./myHealpers.js";

export function initKeyboardEvents() {
  const input = document.getElementById("keyboardInput");
  const keyboardTestBox = document.getElementById("keyboardTestBox");
  const keyboardResult = document.getElementById("keyboardResult");
  const keyValue = document.getElementById("keyValue");
  const codeValue = document.getElementById("codeValue");
  const isCtrl = document.getElementById("ctrlValue");
  const isShift = document.getElementById("shiftValue");

  input.addEventListener("keydown", keyDownEvent);
  input.addEventListener("keyup", keyUpEvent);

  function keyDownEvent(e) {
    keyValue.textContent = e.key;
    codeValue.textContent = e.code;
    isCtrl.textContent = e.ctrlKey;
    isShift.textContent = e.shiftKey;

    handleEvent(
      "keyboardResult",
      "keyboardTestBox",
      "keydown",
      "Key down détecté !",
    );
  }

  function keyUpEvent(e) {
    keyValue.textContent = e.key;
    codeValue.textContent = e.code;
    isCtrl.textContent = e.ctrlKey;
    isShift.textContent = e.shiftKey;

    handleEvent(
      "keyboardResult",
      "keyboardTestBox",
      "keyup",
      "Key up détecté !",
    );
  }
}
