function bubbleSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    
    return arr;
  }
  
  // Example usage
  const numbers = [5, 2, 8, 1, 4];
  console.log('Original array:', numbers);
  
  const sortedNumbers = bubbleSort(numbers);
  console.log('Sorted array:', sortedNumbers);