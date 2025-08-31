function totalFine(fare) {
  if (typeof fare !== "number" || fare === 0 || Math.abs(fare) / fare === -1) {
    return "Invalid";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let step1 = str.split(" ");
  let step2 = step1.join("");
  let final = step2.toUpperCase();
  return final;
}

function bestTeam(player1, player2) {
  if (typeof player1 !== "object") {
    return "Invalid";
  }
  if (typeof player2 !== "object") {
    return "Invalid";
  }
  let total1 = player1.foul + player1.cardY + player1.cardR;
  let total2 = player2.foul + player2.cardY + player2.cardR;
  if (total1 < total2) {
    return player1.name;
  } else if (total1 > total2) {
    return player2.name;
  } else {
    return "Tie";
  }
}

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false) {
    return "Invalid";
  }
  if (Array.isArray(arr2) === false) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

function resultReport(marks) {
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  let pass = 0;
  let fail = 0;
  let sum = 0;
  for (let mark of marks) {
    sum = sum + mark;
    if (mark >= 40) {
      pass++;
    }
    if (mark < 40) {
      fail++;
    }
  }
  let finalScore;
  if (marks.length !== 0) {
    finalScore = Math.round(sum / marks.length);
  } else {
    finalScore = 0;
  }
  let Object = {};
  Object.finalScore = finalScore;
  Object.pass = pass;
  Object.fail = fail;
  return Object;
}