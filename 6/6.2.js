const getSumOfNumbers = (number, type = "odd") => {
    let sum = 0;
  
    for (let i = 0; i <= number; i++) {
      switch (type) {
        case "odd":
          if (i % 2 === 1) sum += i;
          break;
        case "even":
          if (i % 2 === 0) sum += i;
          break;
        case "":
          sum += i;
          break;
      }
    }
  
    return sum;
  };
  