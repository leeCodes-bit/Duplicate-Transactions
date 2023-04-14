const input = [
  {
    name: 'Hendrick',
    dob: '1853-07-18T00:00:00.000Z',
    regNo: '041',
  },
  {
    name: 'Albert',
    dob: '1879-03-14T00:00:00.000Z',
    regNo: '033',
  },
  {
    name: 'Marie',
    dob: '1867-11-07T00:00:00.000Z',
    regNo: '024',
  },
  {
    name: 'Neils',
    dob: '1885-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1858-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1887-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1884-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1901-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis', //
    dob: '1892-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1879-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1871-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1866-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1868-02-14T00:00:00.000Z',
    regNo: '091',
  },
];


function classifier(input) {
    if (!Array.isArray(input)) throw Error('Input must be an array');
  if (!input.length) return { noOfGroups: 0 };

  // Make a new copy of classifier input...
  const newInput = [...input];
  // console.log(newInput);

  // Function to calculate age of students assuming current year is 2019...
  const newAge = (year) =>
    new Date(2019, 0, 1).getFullYear() - new Date(year).getFullYear();
console.log(new Date(2019, 0, 1).getFullYear());
  // Create a new classifier object literal that includes all student details including age...
  const newClassifier = newInput.map((detail) => ({
    name: detail.name,
    age: newAge(detail.dob),
    regNo: detail.regNo,
    dob: detail.dob,
  }));

  // Sort students age in ascending order...
  const sortedAge = newClassifier.sort((a, b) => a.age - b.age);

  // Initialize a store with the first student in the sorted age array and use the student as a base to check for grouping conditions...
  let store = [sortedAge[0]];
  let studentGroup = [];

  // Group students by age difference not more than 5 and group length not more than 3...
  for (let i = 1; i < sortedAge.length; i++) {
    if (sortedAge[i].age - store[0].age <= 5 && store.length <= 2) {
      store.push(sortedAge[i]);
    } else {
      studentGroup.push(store);
      store = [];
      store.push(sortedAge[i]);
    }
  }

  // For last group in store...
  if (store.length) {
    studentGroup.push(store);
  }

  // Set key for number of groups in output..
  let output = {};
  output['noOfGroups'] = studentGroup.length;

  // Create output format for each student group...
  const groupOutput = studentGroup.map((group) => {
    return {
      members: group.map((details) => ({
        name: details.name,
        age: details.age,
        dob: details.dob,
        regNo: details.regNo,
      })),
      oldest: group[group.length - 1].age,
      sum: group.reduce((a, b) => {
        return a + b.age;
      }, 0),
      regNos: group.map((n) => Number(n.regNo)).sort((a, b) => a - b),
    };
  });

  // Set output key for each group...
  groupOutput.forEach((group, i) => {
    let currentGroup = `group${i + 1}`;

    output = {
      ...output,
      [currentGroup]: group,
    };
  });

  return output;
}
classifier(input);
// export default classifier;
