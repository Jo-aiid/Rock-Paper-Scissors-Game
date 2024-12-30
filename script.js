const selections = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const computerSpan = document.querySelector("[data-computer-score]");
const yourSpan = document.querySelector("[data-you-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beat: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beat: "rock",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beat: "paper",
  },
];

function incrementScore(scoreSpan, winner) {
  if (winner) scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
selections.forEach((Selection) => {
  Selection.addEventListener("click", () => {
    const selectionName = Selection.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );

    makeSelection(selection);
  });
});
function makeSelection(selection) {
  const computerSelection = randomSelection();
  const computerwin = isWinner(computerSelection, selection);
  const youWin = isWinner(selection, computerSelection);

  addSelectionResult(computerSelection, computerwin);
  addSelectionResult(selection, youWin);
  incrementScore(computerSpan, computerwin);
  incrementScore(yourSpan, youWin);
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}
function isWinner(selection, opponentselection) {
  return selection.beat === opponentselection.name;
}
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
