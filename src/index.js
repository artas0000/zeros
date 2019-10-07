module.exports = function zeros(expression) {
  var arrFactorials = expression.split('*');
  var arrOneFactorial = [];
  var arrTwoFactorial = [];

  for (let i = 0; i < arrFactorials.length; i++) {
    if (arrFactorials[i][arrFactorials[i].length - 2] == "!") {
      arrTwoFactorial.push(parseInt(arrFactorials[i].slice(0, -2)));
    } else {
      arrOneFactorial.push(parseInt(arrFactorials[i].slice(0, -1)));
    }
  }

  modFiveAndTwoInTwoFactorial = zeroInTwoFactorial(arrTwoFactorial);
  modFiveAndTwoInOneFactorial = zeroInOneFactorial(arrOneFactorial);

  allNumOfFive = modFiveAndTwoInTwoFactorial.numOfFive + modFiveAndTwoInOneFactorial.numOfFive;
  allNumOfTwo = modFiveAndTwoInTwoFactorial.numOfTwo + modFiveAndTwoInOneFactorial.numOfTwo;

  if (allNumOfTwo >= allNumOfFive) zero = allNumOfFive;
  else zero = allNumOfTwo;

  return zero

  function zeroInOneFactorial(arr) {
    let modFiveAndTwo = {
      numOfTwo: 0,
      numOfFive: 0
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j <= arr[i]; j++) {
        if (j % 25 == 0) modFiveAndTwo.numOfFive += 2;
        else if (j % 5 == 0) modFiveAndTwo.numOfFive++;

        if (j % 2 == 0) modFiveAndTwo.numOfTwo++;
      }
    }

    return modFiveAndTwo
  }

  function zeroInTwoFactorial(arr) {

    let modFiveAndTwo = {
      numOfTwo: 0,
      numOfFive: 0
    }


    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
        for (let j = 1; j <= arr[i]; j += 2) {
          if (j % 25 == 0) modFiveAndTwo.numOfFive += 2;
          else if (j % 5 == 0) modFiveAndTwo.numOfFive++;
        }
      } else {
        for (let j = 2; j <= arr[i]; j += 2) {
          if (j % 25 == 0) modFiveAndTwo.numOfFive += 2;
          else if (j % 5 == 0) modFiveAndTwo.numOfFive++;

          if (j % 2 == 0) modFiveAndTwo.numOfTwo++;
        }
      }
    }
    return modFiveAndTwo
  }
}