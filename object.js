const romanNum = [
   { arabian: 1000, roman: "M" },
   { arabian: 500, roman: "D" },
   { arabian: 100, roman: "C" },
   { arabian: 50, roman: "L" },
   { arabian: 10, roman: "X" },
   { arabian: 5, roman: "V" },
   { arabian: 1, roman: "I" },
];

const RomanNumerals = {
   toRoman: function (num) {
      let toConvertNum = num;
      const result = [];
      const counters = [];
      for (let i = 0; i < romanNum.length; i++) {
         const { arabian } = romanNum[i];
         const numberToPush = Math.floor(toConvertNum / arabian);
         counters.push(numberToPush);
         toConvertNum -= numberToPush * arabian;
      }
      counters.forEach((counter, index) => {
         if (counter === 4 && romanNum[index - 1]) {
            if (counters[index - 1]) {
               result.pop();
               result.push(romanNum[index].roman);
               result.push(romanNum[index - 2].roman);
               return;
            }
            result.push(romanNum[index].roman);
            return result.push(romanNum[index - 1].roman);
         }
         for (let i = 0; i < counter; i++) {
            result.push(romanNum[index].roman);
         }
      });
      return result.join("");
   },
   fromRoman: function (num) {
      const numToConvert = [...num];
      let result = 0;
      numToConvert.forEach((romanToConvert, indexConvert) =>
         romanNum.forEach(({ roman, arabian }, index) => {
            if (roman === romanToConvert) {
               if (
                  romanNum[index - 1] &&
                  romanNum[index - 1].roman === numToConvert[indexConvert + 1]
               )
                  return (result -= romanNum[index].arabian);
               if (
                  romanNum[index - 2] &&
                  romanNum[index - 2].roman === numToConvert[indexConvert + 1]
               )
                  return (result -= romanNum[index].arabian);
               result += arabian;
            }
         })
      );
      return result;
   },
};
console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.fromRoman("M"));
