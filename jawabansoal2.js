const hitungMinimumRequiredBus = (inputNumberFamily, inputMemberFamily) => {
  try {
    const inputFamily = inputNumberFamily;
    const inputMember = inputMemberFamily;
    if (inputFamily == inputMember.length) {
      return Math.ceil(inputMember.reduce((a, b) => a + b, 0) / 4);
    }

    if (inputFamily !== inputMember.length) {
      throw "Input must be equal with count of family";
    }
  } catch (error) {
    console.log(error);
  }
};

console.log(
  "Minimun Required Bus Pertama " + hitungMinimumRequiredBus(5, [1, 2, 4, 3, 3])
);
console.log(
  "Minimun Required Bus Pertama " +
    hitungMinimumRequiredBus(8, [2, 3, 4, 4, 2, 1, 3, 1])
);
console.log("Data Input Salah " + hitungMinimumRequiredBus(5, [1, 2]));
