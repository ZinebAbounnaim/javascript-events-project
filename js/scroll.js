import { handleEvent, resetExplainBox } from "./myHealpers.js";

export function initScrolEvents() {
  const scrollTestBox = document.getElementById("scrollTestBox");
  const scrollResult = document.getElementById("scrollResult");
  const scrollDemoBox = document.getElementById("scrollDemoBox");

  const explainScrollTitle = document.querySelector(".explainScrollTitle");
  const explainScrollText = document.querySelector("#explainScrollText");

  const scrollTopValue = document.getElementById("scrollTopValue");
  const scrollDirection = document.getElementById("scrollDirection");
  const scrollPercent = document.getElementById("scrollPercent");

  const scrollProgressBar = document.getElementById("scrollProgressBar");

const scrollTag = document.querySelector(
  '#scrollSection [data-event="scroll"]'
);
  function keepScrollActive(){
  scrollTag.classList.add("active");
}
  function updateScrollExplain(title, content) {
    explainScrollTitle.textContent = title;
    explainScrollText.innerHTML = content;
  }

  let old = 0;

  function scrollEvent() {

    let current = scrollDemoBox.scrollTop;

    scrollTopValue.textContent = Math.round(current);

    if (current > old) {
      scrollDirection.textContent = "Down";

      handleEvent(
        "scrollResult",
        "scrollTestBox",
        "down",
        "Scroll down détecté !",
      );
      keepScrollActive();
      updateScrollExplain(
        "Scroll Down",
        `
        <p><strong>Qu'est-ce qui s'est passé ?</strong><br>
        L'utilisateur a scroll down dans la scroll box.
        </p>

        <p><strong>Mini concept</strong><br>
        On compare la position actuelle avec l'ancienne position.
        </p>

        <p><strong>Rule</strong><br>
        currentScroll &gt; oldScroll
        </p>
        `,
      );
    } else if (current < old) {
      scrollDirection.textContent = "Up";

      handleEvent("scrollResult", "scrollTestBox", "up", "Scroll up détecté !");
      keepScrollActive();
      updateScrollExplain(
        "Scroll Up",
        `
        <p><strong>Qu'est-ce qui s'est passé ?</strong><br>
        L'utilisateur a scroll up dans la scroll box.
        </p>

        <p><strong>Mini concept</strong><br>
        Quand la scroll position devient plus petite, l'utilisateur monte.
        </p>

        <p><strong>Rule</strong><br>
        currentScroll &lt; oldScroll
        </p>
        `,
      );
    }

    if (current === 0) {
      scrollDirection.textContent = "Top";

      handleEvent("scrollResult", "scrollTestBox", "top", "Top atteint !");
      keepScrollActive();
      updateScrollExplain(
        "Top Position",
        `
        <p><strong>Qu'est-ce qui s'est passé ?</strong><br>
        L'utilisateur est revenu au début de la scroll box.
        </p>

        <p><strong>Mini concept</strong><br>
        scrollTop indique la distance scrollée depuis le top.
        </p>

        <p><strong>Rule</strong><br>
        scrollTop === 0
        </p>
        `,
      );
    }

    if (
      current + scrollDemoBox.clientHeight >=
      scrollDemoBox.scrollHeight - 2
    ) {
      scrollDirection.textContent = "Bottom";

      handleEvent(
        "scrollResult",
        "scrollTestBox",
        "bottom",
        "Bottom atteint !",
      );
      keepScrollActive();
      updateScrollExplain(
        "Bottom Position",
        `
        <p><strong>Qu'est-ce qui s'est passé ?</strong><br>
        L'utilisateur a atteint la fin de la scroll box.
        </p>

        <p><strong>Mini concept</strong><br>
        clientHeight est la partie visible, et
        scrollHeight est la hauteur totale du contenu.
        </p>

        <p><strong>Rule</strong><br>
        scrollTop + clientHeight &gt;= scrollHeight
        </p>
        `,
      );
    }
    resetExplainBox(
      ".explainScrollTitle",
      "#explainScrollText",
      "Explanation",
      `
  <p>
    Les Scroll events se produisent lorsque l’utilisateur se
    déplace dans le contenu avec mouse wheel ou trackpad.
  </p>

  <p>
    Dans cette section, tu vas tester scroll position, direction
    et progress.
  </p>

  <p>
    JavaScript peut détecter si l’utilisateur va up, down, atteint
    le top ou le bottom.
  </p>
  `,
      "#scrollSection .backToDefalutBtn",
    );
    let maxScroll = scrollDemoBox.scrollHeight - scrollDemoBox.clientHeight;

    let percent = (current / maxScroll) * 100;

    scrollPercent.textContent = Math.round(percent) + "%";
    scrollProgressBar.style.width = percent + "%";


    old = current;
  }

  scrollDemoBox.addEventListener("scroll", scrollEvent);
}
