function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let step1 = str.split(" ");
  let step2 = step1.join("");
  let final = step2.toUpperCase();
  return final;
}