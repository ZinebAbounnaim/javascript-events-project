import { handleEvent , resetExplainBox } from "./myHealpers.js";
export function initSourisEvents() {
  const clickBtn = document.getElementById("clickBtn");
  const hoverBox = document.getElementById("hoverBox");

  const clickCountSpan = document.getElementById("clickCount");
  const dblClickCountSpan = document.getElementById("dblClickCount");
  const explainSourisTitle = document.querySelector(".explainsourisTitle");
  const explainSourisText = document.querySelector(".explainSourisText");

  function updateSourisExplain(title, content) {
    explainSourisTitle.textContent = title;
    explainSourisText.innerHTML = content;
  }
  let clickCount = 0;
  let dblClickCount = 0;

  clickBtn.addEventListener("click", function (e) {
    clickCount++;
    clickCountSpan.textContent = clickCount;

    handleEvent(
      "mouseResult",
      "mouseTestBox",
      "click",
      "Single click détecté !",
    );

    updateSourisExplain(
      "Click Event",
      `
  <p><strong>Qu'est-ce que c'est ?</strong><br>
  L'event click se déclenche quand l'utilisateur clique une fois.
  </p>

  <p><strong>Quand s'exécute-t-il ?</strong><br>
  Après un seul click de la souris.
  </p>

  <p><strong>Mini exemple</strong><br>
  L'utilisateur clique sur le button → l'event se lance.
  </p>
  `,
    );
  });
  clickBtn.addEventListener("dblclick", function () {
    dblClickCount++;
    dblClickCountSpan.textContent = dblClickCount;

    handleEvent(
      "mouseResult",
      "mouseTestBox",
      "dblclick",
      "Double click détecté!",
    );

    updateSourisExplain(
      "Double Click Event",
      `
  <p><strong>Qu'est-ce que c'est ?</strong><br>
  L'event dblclick se déclenche quand l'utilisateur clique deux fois rapidement.
  </p>

  <p><strong>Quand s'exécute-t-il ?</strong><br>
  Après deux clicks rapides.
  </p>

  <p><strong>Mini exemple</strong><br>
  L'utilisateur fait un double click sur le button → l'event se lance.
  </p>
  `,
    );
  });



  hoverBox.addEventListener("mouseenter", function () {
    handleEvent(
      "mouseResult",
      "mouseTestBox",
      "mouseenter",
      "La souris est entrée dans la hover box.",
    );

    updateSourisExplain(
      "Mouse Enter Event",
      `
  <p><strong>Qu'est-ce que c'est ?</strong><br>
  L'event mouseenter se déclenche quand la souris entre dans l'element.
  </p>

  <p><strong>Quand s'exécute-t-il ?</strong><br>
  Quand le cursor entre dans la box.
  </p>

  <p><strong>Mini exemple</strong><br>
  Le cursor entre dans la hover box → l'event se lance.
  </p>
  `,
    );
  });

  hoverBox.addEventListener("mouseleave", function () {
    handleEvent(
      "mouseResult",
      "mouseTestBox",
      "mouseleave",
      "La souris a quitté la hover box.",
    );

    updateSourisExplain(
      "Mouse Leave Event",
      `
  <p><strong>Qu'est-ce que c'est ?</strong><br>
  L'event mouseleave se déclenche quand la souris quitte l'element.
  </p>

  <p><strong>Quand s'exécute-t-il ?</strong><br>
  Quand le cursor sort de la box.
  </p>

  <p><strong>Mini exemple</strong><br>
  Le cursor quitte la hover box → l'event se lance.
  </p>
  `,
    );
  });

  resetExplainBox(
  ".explainsourisTitle",
  ".explainSourisText",
  "Explanation",
  `
  <p>
    Les Mouse events se produisent lorsque l’utilisateur interagit
    avec la page en utilisant la souris.
  </p>

  <p>
    Dans cette section, tu peux tester <strong>click</strong> et
    <strong>hover</strong>, puis observer directement les
    changements dans l’interface.
  </p>
  `,
  "#mouseSection .backToDefalutBtn"
);
}
