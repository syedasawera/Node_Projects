import inquirer from "inquirer";
import { faker } from "@faker-js/faker";




interface User {
  deposite: number;
  Rupes: number;
  id: number;
  pin: number;
  name: string;
  accountNumber: number;
  balance: number;
}

const CreateUsers = () => {
  let users: User[] = []

  for (let i = 0; i < 5; i++) {
    let abc: User = {
      id: i,
      deposite: 1000,
      Rupes: 100,
      pin: 1000 + i,
      name: faker.person.fullName(),
      accountNumber: Math.floor(100000000 * Math.random() * 90000000),
      balance: 10000000 * i,
    }
users.push(abc)


  }

  return users;
};

const users = CreateUsers();
//console.log(users);

const AtmMachine  = async(users: User[] )=> {
const res = await inquirer.prompt({

  type :  "number",
  message: "enter the pin code",
  name :"pin",
})
//console.log("Welcome user")
//const user = CreateUsers()

//AtmMachine(user)

 //console.log(user)

const user = users.find(val => val.pin == res.pin)
if(user){
  console.log(`welcome ${user.name}`);
  atmfunc(user)
  return;
}
console.log("invalid user pin ")
}; 
//Atm function 

const atmfunc = async(user:User)=>{
  const  ans = await inquirer.prompt({
    type :"list",
    name : "select",
    message:"please selects one option",
    choices:["withdraw","balance","exit","Deposite"]
  
  })

  if(ans.select == "withdraw"){
    const amount = await inquirer.prompt({
      type    :"number",
      message :"Enter Amount",
      name    :"rupes"
    })
    
    if (amount.rupes > user.balance){
      return console.log("your balance is insufficient")
    }

  
  if(ans.select == `withdraw amount:${amount.rupes}`)
  if(ans.select == `blance : ${user.balance-amount.rupes}`){}

}
if(ans.select == "balance"){
  console.log(`balance : ${user.balance}`)
  return
}

if(ans.select == "deposite"){
  const amount = await inquirer.prompt({
    type    :"number",
    message :"Deposite Amount",
    name    :"rupes"
  })
  console.log(`please deposite money : ${user.deposite}`)
  console.log(`total balance : ${user.balance +user.deposite}`)
  return
}
if(ans.select == "exit"){
  console.log(`thank you for using Atm!`)
}
  console.log(ans)

  //const user = CreateUsers()
}

const user = CreateUsers()
AtmMachine(user)