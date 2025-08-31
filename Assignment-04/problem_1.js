function totalFine(fare) {
  if (typeof fare !== "number" || fare === 0 || Math.abs(fare) / fare === -1) {
    return "Invalid";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}

console.log(totalFine("Gorib tai ticket katinai"));