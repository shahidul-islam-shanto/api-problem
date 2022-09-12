//bind
/**const normalParson = {
    firstName : "Bokul",
    secondName: "islam",
    salary: 14000,
     getFullName: function(){
      console.log(this.firstName, this.secondName)
     },
     chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
     }
 }
const brotherParson = {
    firstName : "Rakib",
    secondName: "islam",
    salary: 24000
 }
const friendParson = {
    firstName : "momin",
    secondName: "islam",
    salary: 34000
 }
const brotherChargeBill = normalParson.chargeBill.bind(brotherParson);
brotherChargeBill(2000);
brotherChargeBill(2000);
brotherChargeBill(2000);
const friendChargeBill = normalParson.chargeBill.bind(friendParson);
friendChargeBill(3000);
friendChargeBill(2000);
*/


//call
/**const normalParson = {
    firstName : "Bokul",
    secondName: "islam",
    salary: 14000,
     getFullName: function(){
      console.log(this.firstName, this.secondName)
     },
     chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
     }
 }
const brotherParson = {
    firstName : "Rakib",
    secondName: "islam",
    salary: 24000
 }
const friendParson = {
    firstName : "momin",
    secondName: "islam",
    salary: 34000
 }
normalParson.chargeBill.call(brotherParson, 3000, 200, 500);
console.log(brotherParson.salary);
*/

//apply
const normalParson = {
    firstName : "Bokul",
    secondName: "islam",
    salary: 14000,
     getFullName: function(){
      console.log(this.firstName, this.secondName)
     },
     chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
     }
 }
const brotherParson = {
    firstName : "Rakib",
    secondName: "islam",
    salary: 24000
 }
const friendParson = {
    firstName : "momin",
    secondName: "islam",
    salary: 34000
 }
normalParson.chargeBill.apply(brotherParson, [3000, 1000, 500]);
console.log(brotherParson.salary);

