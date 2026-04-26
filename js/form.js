import { handleEvent , resetExplainBox } from "./myHealpers.js";

export function initFormEvents() {
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#nameInput");
  const select = document.querySelector("#levelSelect");
  const checkBox = document.querySelector("#acceptCheck");
  const formResult = document.querySelector("#formResult");
  const formTestBox = document.querySelector("#formTestBox");

  const explainFormTitle = document.querySelector(".explainFormTitle");
  const explainFormText = document.querySelector("#explainFormText");

  function updateExplain(title, content) {
    explainFormTitle.textContent = title;
    explainFormText.innerHTML = content;
  }

  function inputFormEvent(e) {
    if (e.type === "input") {
      handleEvent(
        "formResult",
        "formTestBox",
        "input",
        "Input event détecté !",
      );

      updateExplain(
        "Input Event",
        `
        <p><strong>Qu'est-ce que c'est ?</strong><br>
        L'event input détecte chaque changement instantané dans la valeur du champ.
        </p>

        <p><strong>Quand s'exécute-t-il ?</strong><br>
        Il s'exécute quand l'utilisateur écrit, supprime ou modifie le contenu de l'input.
        </p>

        <p><strong>Utilisation courante</strong><br>
        Live search, form validation, character counters, real-time feedback.
        </p>

        <p><strong>Mini exemple</strong><br>
        L'utilisateur écrit : Z → Zi → Zin → Zineb<br>
        L'event se lance à chaque étape.
        </p>
        `,
      );
    }
  }

  function focusFormEvent(e) {
    if (e.target.tagName === "BUTTON") return;

    if (e.type === "focus") {
      handleEvent(
        "formResult",
        "formTestBox",
        "focus",
        "Focus event détecté !",
      );

      updateExplain(
        "Focus Event",
        `
        <p><strong>Qu'est-ce que c'est ?</strong><br>
        L'event focus se déclenche quand l'utilisateur entre dans un input.
        </p>

        <p><strong>Quand s'exécute-t-il ?</strong><br>
        Il s'exécute quand l'utilisateur clique dans un input ou y arrive avec Tab.
        </p>

        <p><strong>Utilisation courante</strong><br>
        Highlight fields, show hints, guide the user.
        </p>

        <p><strong>Mini exemple</strong><br>
        L'utilisateur clique sur name input → l'event focus se lance.
        </p>
        `,
      );
    }
  }

  function blurFormEvent(e) {
    if (e.target.tagName === "BUTTON") return;

    if (e.type === "blur") {
      handleEvent("formResult", "formTestBox", "blur", "Blur event détecté !");

      updateExplain(
        "Blur Event",
        `
        <p><strong>Qu'est-ce que c'est ?</strong><br>
        L'event blur se déclenche quand l'utilisateur quitte un input.
        </p>

        <p><strong>Quand s'exécute-t-il ?</strong><br>
        Il s'exécute quand l'input perd le focus.
        </p>

        <p><strong>Utilisation courante</strong><br>
        Check if the field is empty, show errors, validate after typing.
        </p>

        <p><strong>Mini exemple</strong><br>
        L'utilisateur écrit son nom puis clique à l'extérieur → l'event blur se lance.
        </p>
        `,
      );
    }
  }

  function changeFormEvent(e) {
    if (e.type === "change") {
      handleEvent(
        "formResult",
        "formTestBox",
        "change",
        "Change event détecté !",
      );

      updateExplain(
        "Change Event",
        `
        <p><strong>Qu'est-ce que c'est ?</strong><br>
        L'event change se déclenche quand la valeur est changée et confirmée.
        </p>

        <p><strong>Quand s'exécute-t-il ?</strong><br>
        Avec select, checkbox, radio, ou après avoir quitté un text input.
        </p>

        <p><strong>Utilisation courante</strong><br>
        Detect selected level, checkbox state, or changed options.
        </p>

        <p><strong>Mini exemple</strong><br>
        L'utilisateur sélectionne Beginner → Intermediate → l'event change se lance.
        </p>
        `,
      );
    }
  }

  function submitFormEvent(e) {
    e.preventDefault();

    let userName = nameInput.value.trim();
    let userLevel = select.value;
    let accepted = checkBox.checked;

    if (userName === "" || userLevel === "" || accepted === false) {
      handleEvent(
        "formResult",
        "formTestBox",
        "submit",
        "Veuillez compléter le form d'abord !",
      );

      updateExplain(
        "Submit Event - Validation Failed",
        `
        <p><strong>Qu'est-ce qui s'est passé ?</strong><br>
        JavaScript a arrêté le form car certains champs obligatoires sont vides.
        </p>

        <p><strong>Mini validation</strong><br>
        Entrez votre nom, choisissez votre level et acceptez la checkbox.
        </p>

        <p><strong>Client side validation</strong><br>
        Avec JavaScript, on peut valider les données avant de les envoyer au server.
        </p>

        <p><strong>Mini exemple</strong><br>
        Empty input + unchecked checkbox → submit bloqué.
        </p>
        `,
      );

      return;
    }

    handleEvent(
      "formResult",
      "formTestBox",
      "submit",
      "Submit event détecté !",
    );

    updateExplain(
      "Submit Event - Success",
      `
      <p><strong>Qu'est-ce que c'est ?</strong><br>
      L'event submit se déclenche quand l'utilisateur envoie le form.
      </p>

      <p><strong>Client side validation</strong><br>
      Tous les champs ont passé la validation avec succès en utilisant JavaScript.
      </p>

      <p><strong>User data</strong><br>
      Name: <strong>${userName}</strong><br>
      Level: <strong>${userLevel}</strong><br>
      Accepted: <strong>${accepted ? "Oui" : "Non"}</strong>
      </p>

      <p><strong>Mini exemple</strong><br>
      L'utilisateur remplit tous les champs → clique sur submit → validation réussie.
      </p>
      `,
    );
  }
  resetExplainBox(
  ".explainFormTitle",
  "#explainFormText",
  "Explanation",
  `
  <p>
    Les Form events aident JavaScript à comprendre comment les
    utilisateurs interagissent avec les inputs et les forms en
    temps réel.
  </p>

  <p>
    Dans cette section, tu vas tester typing, selecting, checking
    et submitting data.
  </p>
  `,
  "#formSection .backToDefalutBtn"
);
  form.addEventListener("submit", submitFormEvent);
  form.addEventListener("change", changeFormEvent);
  form.addEventListener("input", inputFormEvent);
  form.addEventListener("focus", focusFormEvent, true);
  form.addEventListener("blur", blurFormEvent, true);
}
