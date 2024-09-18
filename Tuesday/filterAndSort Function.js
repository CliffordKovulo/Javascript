function filterAndSort(filterfn, ...numbers) {

    const filteredNumbers = numbers.filter(filterfn);
  
    const sortedNumbers = filteredNumbers.sort((a, b) => a - b);
  

    return sortedNumbers;
  }
  
  const isEven = (num) => num % 2 === 0;
  console.log(filterAndSort(isEven, 5, 3, 8, 6, 2));
  