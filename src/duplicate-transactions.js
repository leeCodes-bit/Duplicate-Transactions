const data = [
    {
      id: 201,
      sourceAccount: 'company_x',
      targetAccount: 'my_account',
      amount: 10000,
      category: 'pension_benefits',
      time: '2018-02-25T08:00:00.000Z',
    },
    {
      id: 1,
      sourceAccount: 'company_x',
      targetAccount: 'my_account',
      amount: 10000,
      category: 'salary',
      time: '2018-02-25T08:00:00.000Z',
    },
    {
      id: 101,
      sourceAccount: 'company_x',
      targetAccount: 'my_account',
      amount: 240,
      category: 'salary',
      time: '2018-02-25T08:00:30.000Z',
    },
    {
      id: 2,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'eating_out',
      time: '2018-03-01T12:34:00.000Z',
    },
    {
      id: 3,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -1000,
      category: 'groceries',
      time: '2018-03-01T17:28:32.000Z',
    },
    {
      id: 4,
      sourceAccount: 'my_account',
      targetAccount: 'cinema',
      amount: -330,
      category: 'other',
      time: '2018-03-01T20:10:15.000Z',
    },
    {
      id: 6,
      sourceAccount: 'my_account',
      targetAccount: 'internet_shop',
      amount: -250,
      category: 'other',
      time: '2018-03-01T22:16:40.000Z',
    },
    {
      id: 102,
      sourceAccount: 'my_account',
      targetAccount: 'internet_shop',
      amount: -250,
      category: 'other',
      time: '2018-03-01T22:16:50.000Z',
    },
    {
      id: 5,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'eating_out',
      time: '2018-03-02T09:25:20.000Z',
    },
    {
      id: 7,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -160,
      category: 'groceries',
      time: '2018-03-02T13:14:00.000Z',
    },
    {
      id: 8,
      sourceAccount: 'my_account',
      targetAccount: 'restaurant',
      amount: -670,
      category: 'eating_out',
      time: '2018-03-02T18:54:45.000Z',
    },
    {
      id: 9,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'eating_out',
      time: '2018-03-04T07:14:20.000Z',
    },
    {
      id: 10,
      sourceAccount: 'my_account',
      targetAccount: 'fitness_club',
      amount: -560,
      category: 'other',
      time: '2018-03-04T12:54:10.000Z',
    },
    {
      id: 11,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -1540,
      category: 'groceries',
      time: '2018-03-05T16:24:31.000Z',
    },
    {
      id: 12,
      sourceAccount: 'my_account',
      targetAccount: 'bowling_place',
      amount: -600,
      category: 'other',
      time: '2018-03-05T21:12:10.000Z',
    },
    {
      id: 16,
      sourceAccount: 'company_x',
      targetAccount: 'my_account',
      amount: 10000,
      category: 'salary',
      time: '2018-03-25T08:10:00.000Z',
    },
    {
      id: 13,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'eating_out',
      time: '2018-04-01T10:24:00.000Z',
    },
    {
      id: 14,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'eating_out',
      time: '2018-04-01T10:24:40.000Z',
    },
    {
      id: 15,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'eating_out',
      time: '2018-04-01T10:25:10.000Z',
    },
    {
      id: 17,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -1870,
      category: 'groceries',
      time: '2018-04-05T10:24:30.000Z',
    },
    {
      id: 18,
      sourceAccount: 'my_account',
      targetAccount: 'cinema',
      amount: -580,
      category: 'other',
      time: '2018-04-05T20:01:18.000Z',
    },
    {
      id: 19,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -90,
      category: 'eating_out',
      time: '2018-04-07T09:54:21.000Z',
    },
    {
      id: 20,
      sourceAccount: 'my_account',
      targetAccount: 'internet_shop',
      amount: -1650,
      category: 'other',
      time: '2018-04-08T21:36:41.000Z',
    },
    {
      id: 21,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -1690,
      category: 'groceries',
      time: '2018-04-10T18:14:10.000Z',
    },
    {
      id: 23,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -70,
      category: 'eating_out',
      time: '2018-04-15T09:12:20.000Z',
    },
    {
      id: 22,
      sourceAccount: 'my_account',
      targetAccount: 'restaurant',
      amount: -970,
      category: 'eating_out',
      time: '2018-04-17T19:52:46.000Z',
    },
    {
      id: 25,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -850,
      category: 'groceries',
      time: '2018-04-20T18:51:31.000Z',
    },
    {
      id: 24,
      sourceAccount: 'my_account',
      targetAccount: 'fitness_club',
      amount: -610,
      category: 'other',
      time: '2018-04-22T11:54:10.000Z',
    },
    {
      id: 26,
      sourceAccount: 'my_account',
      targetAccount: 'cinema',
      amount: -450,
      category: 'other',
      time: '2018-04-23T19:13:10.000Z',
    },
    {
      id: 27,
      sourceAccount: 'company_x',
      targetAccount: 'my_account',
      amount: 10000,
      category: 'salary',
      time: '2018-04-25T08:00:00.000Z',
    },
    {
      id: 28,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -1870,
      category: 'groceries',
      time: '2018-05-05T10:24:30.000Z',
    },
    {
      id: 29,
      sourceAccount: 'my_account',
      targetAccount: 'cinema',
      amount: -580,
      category: 'other',
      time: '2018-05-05T20:01:18.000Z',
    },
    {
      id: 30,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -90,
      category: 'eating_out',
      time: '2018-05-07T09:54:21.000Z',
    },
    {
      id: 31,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -90,
      category: 'eating_out',
      time: '2018-05-07T09:55:10.000Z',
    },
    {
      id: 32,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -90,
      category: 'eating_out',
      time: '2018-05-07T09:56:09.000Z',
    },
    {
      id: 33,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -90,
      category: 'eating_out',
      time: '2018-05-07T09:57:05.000Z',
    },
    {
      id: 35,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -90,
      category: 'eating_out',
      time: '2018-05-07T09:58:06.000Z',
    },
    {
      id: 36,
      sourceAccount: 'my_account',
      targetAccount: 'internet_shop',
      amount: -1650,
      category: 'other',
      time: '2018-05-08T21:36:41.000Z',
    },
    {
      id: 37,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -1690,
      category: 'groceries',
      time: '2018-05-10T18:14:10.000Z',
    },
    {
      id: 39,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -70,
      category: 'eating_out',
      time: '2018-05-15T09:12:20.000Z',
    },
    {
      id: 38,
      sourceAccount: 'my_account',
      targetAccount: 'restaurant',
      amount: -970,
      category: 'eating_out',
      time: '2018-05-17T19:52:46.000Z',
    },
    {
      id: 41,
      sourceAccount: 'my_account',
      targetAccount: 'supermarket',
      amount: -850,
      category: 'groceries',
      time: '2018-05-20T18:51:31.000Z',
    },
    {
      id: 40,
      sourceAccount: 'my_account',
      targetAccount: 'fitness_club',
      amount: -610,
      category: 'other',
      time: '2018-05-22T11:54:10.000Z',
    },
    {
      id: 42,
      sourceAccount: 'my_account',
      targetAccount: 'cinema',
      amount: -450,
      category: 'other',
      time: '2018-05-23T19:13:10.000Z',
    },
  ];
  
function findDuplicateTransactions(transactions) {
    if(!Array.isArray(transactions)){
        throw Error
    }else if(Array.isArray(transactions) && transactions.lenngth < 2){
        return []
    }
let transactionObj = {}
let inputObj = JSON.parse(JSON.stringify(transactions))
console.log("inputObj", inputObj);
inputObj.sort((a,b) => {
  
    a = new Date(a.time).getTime();//converting this to milliseconds
    b = new Date(b.time).getTime();
    console.log("a",a);
    return a-b;
})
let multipleTransaction = inputObj.map((items, index) => {
    //return inputObj[index]['sourceAccount']+ inputObj[index]['targetAccount']+ inputObj[index]['amount'] + inputObj[index]['category'];
    return items.sourceAccount + items.targetAccount + items.category + items.amount
})


multipleTransaction= multipleTransaction.filter((items,index)=>{
    return (multipleTransaction.slice(index+1).includes(multipleTransaction[index]));
})
// console.log(multipleTransaction);

let duplicateTransactions= Array.from(new Set(multipleTransaction))
duplicateTransactions.forEach((item) => {
    transactionObj[item]=[]
})
// console.log(duplicateTransactions);

inputObj.forEach((items,index)=>{
    //let concatenatedProperties= inputObj[index]['sourceAccount']+ inputObj[index]['targetAccount']+ inputObj[index]['amount'] + inputObj[index]['category'];
    let concatenatedProperties= items.sourceAccount + items.targetAccount + items.category + items.amount;
    
    if(!transactionObj[concatenatedProperties]){
        return
    }
    transactionObj[concatenatedProperties].push(inputObj[index])
})

let arrays= Object.keys(transactionObj);
console.log("arrays",arrays);
let result=[];
for (let i=0; i<arrays.length; i++){
    result.push(transactionObj[arrays[i]])
}

for (let i=0; i<result.length; i++){
    for (let j=1; j<result[i].length; j++){
        let timeOfLastTransaction= new Date (result[i][j-1]['time']).getTime();
        let timeOfTransaction= new Date (result[i][j]['time']).getTime();
        if((timeOfTransaction- timeOfLastTransaction)>60000){
            result.push(result[i].slice(j));
            result[i]= result[i].slice(0,j)
        }
    }
}

result= result.filter(item=> item.length>1)
return result.sort((a,b)=> {
    a= new Date(a[0]['time'])
    b= new Date(b[0]['time'])
    return a-b
})

}



findDuplicateTransactions(data);
// export default findDuplicateTransactions;




/* 1. first we pass in the transactions argument into our function
2. we check if the input passed is an array using Array.isArray if not it throws an error
 also check if it is an array is less than 2 then it return an empty array.
 
3. we create an object to store our duplicated transactions
4. we make a copy of the transactions to avoid mutation and assign it to a variable
5. then we sort the variable created above based on date(time) of the transaction

6. The next step is to create an array called multipleTransactions,
 that concatenates four properperties of each transaction(`sourceAccount`, `targetAccount`, `category`, `amount) into a single string
The purpose of creating this multipleTransaction array is to identify if there are any duplicates 
in the transaction based on these four properties (`sourceAccount`, `targetAccount`, `category`, `amount).
By concatenating these properties into a single string, I am creating a unique identifier for each transactions.
By checking for duplicate in this multipleTransaction array, i can determine if there are 
identical transactions, transactions that have similar values for the 4 properties.

7. We then filter the multipleTransactions array to only contain duplicated transactions.

8. Create an array of unique duplicate transactions and create an empty array for each in resultObj
with the concatenated string as the key.

9. Loop through the copy of the transaction you made which is inputObj and concat the properties together
  we want to check if the resultObj contains the concatenatedVariables, if it doesn't, return
else if it does, push the element at that particular index to resultObj

10. Then we push everything inside an array

11. We then calculate the time difference between 2 transactions

12. filter and sort the array in ascending order

  */
