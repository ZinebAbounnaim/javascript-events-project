const quizQuestions = [
  {
    question: "Quel événement se déclenche quand on clique sur un élément ?",
    choices: ["click", "focus", "scroll", "submit"],
    correct: "click",
  },
  {
    question:
      "Quel événement se déclenche quand la souris entre dans un élément ?",
    choices: ["mouseleave", "mouseenter", "keydown", "blur"],
    correct: "mouseenter",
  },
  {
    question: "Quel événement se déclenche quand la souris quitte un élément ?",
    choices: ["mouseout", "keyup", "change", "submit"],
    correct: "mouseout",
  },
  {
    question:
      "Quel événement se déclenche quand l’utilisateur écrit dans un input ?",
    choices: ["input", "click", "load", "scroll"],
    correct: "input",
  },
  {
    question: "Quel événement se déclenche quand un input reçoit le focus ?",
    choices: ["blur", "focus", "change", "submit"],
    correct: "focus",
  },
  {
    question: "Quel événement se déclenche quand un input perd le focus ?",
    choices: ["focus", "blur", "click", "keydown"],
    correct: "blur",
  },
  {
    question:
      "Quel événement se déclenche quand on change la valeur d’un select ?",
    choices: ["input", "change", "mouseover", "scroll"],
    correct: "change",
  },
  {
    question: "Quel événement se déclenche quand on envoie un formulaire ?",
    choices: ["submit", "click", "focus", "keyup"],
    correct: "submit",
  },
  {
    question: "Pourquoi on utilise e.preventDefault() dans submit ?",
    choices: [
      "Pour empêcher le rechargement de la page",
      "Pour supprimer le formulaire",
      "Pour changer la couleur",
      "Pour arrêter JavaScript",
    ],
    correct: "Pour empêcher le rechargement de la page",
  },
  {
    question:
      "Quel événement se déclenche quand on appuie sur une touche du clavier ?",
    choices: ["keyup", "keydown", "blur", "submit"],
    correct: "keydown",
  },
  {
    question:
      "Quel événement se déclenche quand on relâche une touche du clavier ?",
    choices: ["keydown", "keyup", "focus", "change"],
    correct: "keyup",
  },
  {
    question: "Quel événement se déclenche quand on fait défiler une zone ?",
    choices: ["scroll", "click", "input", "focus"],
    correct: "scroll",
  },
  {
    question: "À quoi sert scrollTop ?",
    choices: [
      "Connaître la position du scroll",
      "Changer le texte",
      "Créer un bouton",
      "Supprimer une section",
    ],
    correct: "Connaître la position du scroll",
  },
  {
    question: "Quelle propriété permet de récupérer le texte d’un élément ?",
    choices: ["textContent", "style", "classList", "addEventListener"],
    correct: "textContent",
  },
  {
    question: "Quelle méthode permet d’écouter un événement ?",
    choices: ["querySelector", "addEventListener", "innerHTML", "appendChild"],
    correct: "addEventListener",
  },
  {
    question: "Quelle méthode permet de sélectionner un élément par son id ?",
    choices: [
      "getElementById",
      "querySelectorAll",
      "createElement",
      "preventDefault",
    ],
    correct: "getElementById",
  },
  {
    question:
      "Quelle propriété permet de changer le contenu HTML d’un élément ?",
    choices: ["innerHTML", "value", "checked", "scrollTop"],
    correct: "innerHTML",
  },
  {
    question: "Quelle propriété permet de récupérer la valeur d’un input ?",
    choices: ["value", "textContent", "innerHTML", "classList"],
    correct: "value",
  },
  {
    question:
      "Quelle propriété permet de vérifier si une checkbox est cochée ?",
    choices: ["checked", "value", "selected", "focus"],
    correct: "checked",
  },
  {
    question: "Pourquoi on utilise trim() avec un input ?",
    choices: [
      "Pour supprimer les espaces au début et à la fin",
      "Pour ajouter une classe",
      "Pour changer le type de l’input",
      "Pour créer un événement",
    ],
    correct: "Pour supprimer les espaces au début et à la fin",
  },
];

export function initQuizSection() {
  const quizContainer = document.getElementById("quizContainer");

  let curQuesIndex = 0;
  let score = 0;
  //  dom affichage
  function renderQuestion() {
    let currentQuestion = quizQuestions[curQuesIndex];

    quizContainer.innerHTML = `
      <div class="quizBox">

        <div class="quizProgress">
          Question ${curQuesIndex + 1} / ${quizQuestions.length}
        </div>

        <h3 class="quizQuestion">
          ${currentQuestion.question}
        </h3>

        <div class="quizChoices">
          ${currentQuestion.choices
            .map(
              (choice) => `
            <button class="quizChoiceBtn">
              ${choice}
            </button>
          `,
            )
            .join("")}
        </div>

      </div>
    `;
  }
  //  next Logique
  function nextQuestion() {
    curQuesIndex++;

    if (curQuesIndex < quizQuestions.length) {
      renderQuestion();
    } else {
      renderResult();
    }
  }
  //  apres thee last question
  function renderResult() {
    quizContainer.innerHTML = `
      <div class="quizResultBox">
        <h3>Quiz terminé 🎉</h3>
        <p>Votre score est : ${score} / ${quizQuestions.length}</p>

        <button class="restartQuizBtn">Recommencer</button>
        <button class="giftQuizBtn">Récupère ton petit cadeau 🎁</button>
      </div>
    `;
  }

  // restart Logique
  function restartQuiz() {
    curQuesIndex = 0;
    score = 0;
    renderQuestion();
  }
  //  case Two
  function renderGiftForm() {
quizContainer.innerHTML = `
  <div class="giftFormBox">

    <h3>Ton souvenir est prêt 💜</h3>

    <p>
      Tu as terminé le quiz avec succès !  
      Entre ton prénom pour personnaliser ton souvenir ✨
    </p>

    <form id="giftForm">

      <input
        type="text"
        id="studentName"
        placeholder="Ton prénom ici..."
        required
      >

      <button
        type="submit"
        class="generateGiftBtn"
      >
        Ouvrir mon souvenir 🎀
      </button>

    </form>

  </div>
`;
  }

  function checkAnswer(e) {
    if (e.target.classList.contains("quizChoiceBtn")) {
      let userAnswer = e.target.textContent.trim();
      let currentQuestion = quizQuestions[curQuesIndex];

      if (userAnswer === currentQuestion.correct) {
        score++;
      }

      nextQuestion();
    }

    if (e.target.classList.contains("restartQuizBtn")) {
      restartQuiz();
    }

    if (e.target.classList.contains("giftQuizBtn")) {
      renderGiftForm();
    }
  }
  function getTodayDate() {
    let today = new Date();

    return today.toLocaleDateString("fr-FR");
  }





    async function saveUpdateUsers(studentName) {
    try {
      let allUsersJs = await fetch(apiUrl);
      if (!allUsersJs.ok) {
        throw new Error("Impossible de charger users");
      }
      let allUsers = await allUsersJs.json();
      let user = allUsers.find(
        (el) => el.name.toLowerCase() === studentName.toLowerCase(),
      );

      if (user) {
        user.score = score;
        user.date = getTodayDate();
        user.totalInsc++;
        let updateRes = await fetch(apiUrl + "/" + user.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (!updateRes.ok) {
          throw new Error("Update failed");
        }
      } else {
        let addRes = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: studentName,
            score: score,
            date: getTodayDate(),
            totalInsc: 1,
          }),
        });

        if (!addRes.ok) {
          throw new Error("Add failed");
        }
      }
      return true ;
    } catch (error) {
      console.log(error)
      return false;
    }
  }


  
  // event d submit
async function handleGiftSubmit(e) {
  if (e.target.id !== "giftForm") return;

  e.preventDefault();

  let studentNameInput = document.getElementById("studentName");
  let giftResult = document.getElementById("giftResult");
  let studentName = studentNameInput.value.trim();

  giftResult.innerHTML = "";

  if (studentName === "") {
    studentNameInput.focus();
    giftResult.innerHTML = `
      <p class="errorMessage">Veuillez entrer votre nom.</p>
    `;
    return;
  }

  let done = await saveUpdateUsers(studentName);

  if (done) {
    renderGiftPreview(studentName);
  } else {
    giftResult.innerHTML = `
      <p class="errorMessage">
        Impossible d'enregistrer vos informations. Veuillez réessayer.
      </p>
    `;
  }
}



  //  render gift
  function renderGiftPreview(studentName) {
quizContainer.innerHTML = `
<div class="giftPreviewBox">

  <div id="giftContent" class="giftContent luxurySouvenir">

    <div class="souvenirBadge">Official Souvenir</div>

    <div class="souvenirIcon">🎓</div>

    <p class="souvenirSmallText">Presented to</p>

    <h2 class="souvenirName">${studentName}</h2>

    <div class="souvenirLine"></div>

    <h3 class="souvenirTitle">JavaScript Events Quiz</h3>

    <p class="souvenirText">
    Made especially for you, with love 💜
    </p>

    <div class="souvenirInfo">
      <span>Score</span>
      <strong>${score} / ${quizQuestions.length}</strong>
    </div>

    <p class="souvenirDate">${getTodayDate()}</p>

    <div class="souvenirSignature">
      <span>Created with pride by</span>
      <strong>Zineb 💜</strong>
    </div>

  </div>

  <div class="giftActions">
    <button class="downloadGiftBtn">
      Download 🎁
    </button>

    <button class="restartQuizBtn">
     Recommencer
    </button>
  </div>

</div>
`;
    document.querySelector(".downloadGiftBtn").addEventListener("click", () => {
      downloadGift(studentName);
    });
  }

  // pdfff

function downloadGift(studentName) {
  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const img = new Image();
  img.src = "./sticker.png";

  img.onload = function () {

    pdf.setFillColor(250, 246, 255);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");

    pdf.setDrawColor(168, 85, 247);
    pdf.setLineWidth(4);
    pdf.roundedRect(40, 40, pageWidth - 80, pageHeight - 80, 18, 18);

    pdf.setDrawColor(217, 196, 255);
    pdf.setLineWidth(1);
    pdf.roundedRect(60, 60, pageWidth - 120, pageHeight - 120, 14, 14);


    pdf.setFillColor(242, 231, 255);
    pdf.circle(pageWidth / 2, 105, 42, "F");


    pdf.addImage(
      img,
      "PNG",
      pageWidth / 2 - 34,
      72,
      68,
      68
    );

    pdf.setTextColor(124, 58, 237);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(28);
    pdf.text("Special Keepsake", pageWidth / 2, 175, {
      align: "center",
    });

    pdf.setTextColor(95, 74, 134);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(16);
    pdf.text("Presented to", pageWidth / 2, 220, {
      align: "center",
    });

    pdf.setTextColor(147, 51, 234);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(42);
    pdf.text(studentName, pageWidth / 2, 280, {
      align: "center",
    });

    pdf.setDrawColor(168, 85, 247);
    pdf.setLineWidth(1.5);
    pdf.line(pageWidth / 2 - 120, 315, pageWidth / 2 + 120, 315);

    pdf.setTextColor(80, 80, 80);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(17);
    pdf.text("A little gift made just for you.", pageWidth / 2, 355, {
      align: "center",
    });

    pdf.setTextColor(124, 58, 237);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);

    pdf.text(
      `Score: ${score} / ${quizQuestions.length}`,
      pageWidth / 2 - 110,
      415
    );

    pdf.text(
      `Date: ${getTodayDate()}`,
      pageWidth / 2 + 55,
      415
    );

    pdf.setTextColor(147, 51, 234);
    pdf.setFont("helvetica", "italic");
    pdf.setFontSize(16);
    pdf.text("Created with love by Zineb", pageWidth / 2, 485, {
      align: "center",
    });

    pdf.save(`${studentName}-keepsake.pdf`);
  };
}
  renderQuestion();
  quizContainer.addEventListener("click", checkAnswer);
  quizContainer.addEventListener("submit", handleGiftSubmit);

  const apiUrl = "https://69eb03a415c7e2d5126a49d3.mockapi.io/quizUsers";


}
