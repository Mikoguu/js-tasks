const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

  function getWortyWorkers(arr) {

    const worthyWorkers = [];

    for (let i=0 ; i < arr.length ; i++) {
      
      if (arr[i].salary > 1000) {
        worthyWorkers.push(arr[i].name)
      }
    }

    return worthyWorkers;
  }

  console.log(getWortyWorkers(workers));