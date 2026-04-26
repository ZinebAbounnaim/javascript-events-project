export function updatePanel(panelBoxId, message) {
  const panel = document.getElementById(panelBoxId);
  panel.textContent = message;
}

export function updateTagsTitle(boxId, message) {
  const box = document.getElementById(boxId);
  const statusText = box.querySelector(".eventStatus");

  statusText.textContent = message;
}

export function clearActiveTags(boxId) {
  const box = document.getElementById(boxId);
  const tags = box.querySelectorAll(".eventTags span");

  tags.forEach(function (tag) {
    tag.classList.remove("active-tag");
  });
}

export function activateEventTag(boxId, eventName) {
  const box = document.getElementById(boxId);
  const targetTag = box.querySelector(`[data-event="${eventName}"]`);

  clearActiveTags(boxId);

  if (targetTag) {
    targetTag.classList.add("active-tag");
  }
}

export function handleEvent(panelBoxId, tagsBoxId, eventName, resultMessage) {
  updatePanel(panelBoxId, resultMessage);
  updateTagsTitle(tagsBoxId, "Dernier événement testé : " + eventName);
  activateEventTag(tagsBoxId, eventName);
}


export function resetExplainBox(
  titleSelector,
  textSelector,
  defaultTitle,
  defaultContent,
  btnSelector
) {
  const titleEl = document.querySelector(titleSelector);
  const textEl = document.querySelector(textSelector);
  const btn = document.querySelector(btnSelector);

  if (!titleEl || !textEl || !btn) return;

  btn.addEventListener("click", function () {
    titleEl.textContent = defaultTitle;
    textEl.innerHTML = defaultContent;
  });
}
