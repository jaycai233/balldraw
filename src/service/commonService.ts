const getRandomNumberInRange = (
  numberMax: number,
  numberMin: number,
  count: number
) => {
  if (numberMax - numberMin + 1 < count) {
    throw new Error('Invalid range or ball count.');
  }

  const numbers = new Set<number>();

  while (numbers.size < count) {
    const randomNum =
      Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
};

const getOneRandomNumberInRange = (
  numberMax: number,
  numberMin: number,
) => {
  if (numberMax - numberMin + 1 < 1) {
    throw new Error('Invalid range or ball count.');
  }

  const randomNum =
    Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;

  return randomNum
};



const commonService = {
  getRandomNumberInRange,
  getOneRandomNumberInRange
};

export default commonService;
