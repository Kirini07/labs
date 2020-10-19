let students = [
  {
    firstName: "Jack",
    lastName: "Sand",
    mathematics: 73,
    english: 50,
    programingDatabases: 69
  },
  {
    firstName: "Oliver",
    lastName: "Pike",
    mathematics: 64,
    english: 72,
    programingDatabases: 71
  },
  {
    firstName: "Noah",
    lastName: "Stone",
    mathematics: 63,
    english: 90,
    programingDatabases: 52
  },
  {
    firstName: "Harry",
    lastName: "Waters",
    mathematics: 91,
    english: 59,
    programingDatabases: 81
  },
  {
    firstName: "Leo",
    lastName: "Snow",
    mathematics: 96,
    english: 92,
    programingDatabases: 82
  },
  {
    firstName: "Oliver",
    lastName: "Snow",
    mathematics: 61,
    english: 67,
    programingDatabases: 50
  },
  {
    firstName: "Oscar",
    lastName: "Waters",
    mathematics: 92,
    english: 83,
    programingDatabases: 74
  },
  {
    firstName: "Leo",
    lastName: "Pike",
    mathematics: 83,
    english: 67,
    programingDatabases: 90
  },
  {
    firstName: "Charlie",
    lastName: "Pike",
    mathematics: 81,
    english: 63,
    programingDatabases: 61
  },
  {
    firstName: "Charlie",
    lastName: "Sand",
    mathematics: 60,
    english: 81,
    programingDatabases: 60
  },
  {
    firstName: "Charlie",
    lastName: "Snow",
    mathematics: 72,
    english: 84,
    programingDatabases: 54
  },
  {
    firstName: "Jacob",
    lastName: "Stone",
    mathematics: 68,
    english: 55,
    programingDatabases: 82
  },
  {
    firstName: "Noah",
    lastName: "Flowers",
    mathematics: 68,
    english: 70,
    programingDatabases: 71
  },
  {
    firstName: "Noah",
    lastName: "Pike",
    mathematics: 76,
    english: 59,
    programingDatabases: 85
  },
  {
    firstName: "George",
    lastName: "Flowers",
    mathematics: 74,
    english: 87,
    programingDatabases: 79
  },
  {
    firstName: "Noah",
    lastName: "Pike",
    mathematics: 95,
    english: 73,
    programingDatabases: 58
  },
  {
    firstName: "George",
    lastName: "Stone",
    mathematics: 57,
    english: 91,
    programingDatabases: 69
  },
  {
    firstName: "Harry",
    lastName: "Snow",
    mathematics: 69,
    english: 97,
    programingDatabases: 58
  },
  {
    firstName: "Charlie",
    lastName: "Hill",
    mathematics: 94,
    english: 62,
    programingDatabases: 57
  },
  {
    firstName: "Oscar",
    lastName: "Sand",
    mathematics: 96,
    english: 88,
    programingDatabases: 52
  },
  {
    firstName: "Jack",
    lastName: "Hill",
    mathematics: 73,
    english: 84,
    programingDatabases: 96
  },
  {
    firstName: "George",
    lastName: "Hill",
    mathematics: 85,
    english: 85,
    programingDatabases: 68
  },
  {
    firstName: "Leo",
    lastName: "Storm",
    mathematics: 90,
    english: 58,
    programingDatabases: 91
  },
  {
    firstName: "Jacob",
    lastName: "Storm",
    mathematics: 90,
    english: 97,
    programingDatabases: 50
  },
  {
    firstName: "Harry",
    lastName: "Snow",
    mathematics: 62,
    english: 74,
    programingDatabases: 67
  },
  {
    firstName: "Jacob",
    lastName: "Storm",
    mathematics: 59,
    english: 100,
    programingDatabases: 65
  },
  {
    firstName: "Harry",
    lastName: "Pike",
    mathematics: 51,
    english: 80,
    programingDatabases: 58
  },
  {
    firstName: "Noah",
    lastName: "Sand",
    mathematics: 58,
    english: 51,
    programingDatabases: 75
  },
  {
    firstName: "Leo",
    lastName: "Storm",
    mathematics: 62,
    english: 69,
    programingDatabases: 92
  },
  {
    firstName: "Jack",
    lastName: "Hill",
    mathematics: 62,
    english: 87,
    programingDatabases: 74
  }
];
const node = document.querySelector(".content");
const task1 = document.querySelector(".task1"),
      task2 = document.querySelector(".task2");


const sortByName = (field = "lastName", array) => {
  return array.sort((a, b) => (a[field] < b[field] ? -1 : 1));
}; 
const genAvgValue = (array = []) => {
  return array.map((e) => {
    return {
      ...e,
      avgRatting: Math.floor(
        (e.mathematics + e.english + e.programingDatabases) / 3
      )
    };
  });
};
const sortByRatting = (array = []) => {
  return array.sort((a, b) => a.avgRatting - b.avgRatting).reverse();
};
const getThreeStudent = (array = []) => {
  return array.filter((e, i, arr) => {
    switch (i) {
      case 0:
        return e;
      case arr.length / 2:
        return e;
      case arr.length - 1:
        return e;
      default:
        return null;
    }
  });
};
// getThreeStudent виводить учнів із максимальною, мінімальною та середньою оцінкою
const setSacristy = (array = []) => {
  const maxRatting = array[0].avgRatting;
  return array.map((el) => ({
    ...el,
    rate: maxRatting - el.avgRatting
  }));
};
const printStudList = (list = [], node) => {
  let nodeList = document.createElement("ul");
  nodeList.classList.add('list');
  list.forEach((e, i) => {
    let li = document.createElement("li");
    li.innerHTML = 
    `<p>
      ${i + 1}) ${e.lastName} ${e.firstName} --> <span style="color:#5e35b1;"> Average rating: ${e.avgRatting || '-'} </span> <span style="color:#6200ea;">, Rate: ${e.rate || "-"}</span>
    </p>`;
    nodeList.append(li);
  });
  node.append(nodeList)
};
const clearNode = ()=> {
  const oldList = document.querySelectorAll('.list');
  oldList.forEach(e => e.remove())
}
const compose = (...functions) => (array) =>
  functions.reduceRight((acc, next) => next(acc), array);



task1.addEventListener('click', ()=>{
  clearNode();
  printStudList(compose(sortByRatting)(students), node);
  printStudList(compose(sortByRatting, genAvgValue)(students), node);
  printStudList(compose(getThreeStudent,sortByRatting, genAvgValue)(students), node);
});
task2.addEventListener('click', ()=>{
  clearNode();
  printStudList(compose(setSacristy,sortByRatting, genAvgValue)(students), node);
});