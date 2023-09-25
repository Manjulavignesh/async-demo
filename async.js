console.log("Person1: shows Ticket");
console.log("Person2: Shows Ticket");
let conversation= async()=>
{
    let bringingTickets=new Promise((resolve,reject)=>{setTimeout(()=>{reject("ticket")})
        })
        let getPopCorn=new Promise((resolve,reject)=>{
            resolve("Popcorn");
        })
        let butter=new Promise((resolve,reject)=>{
            resolve("Butter");
        })
        let getColdDrinks=new Promise((resolve,reject)=>{
            resolve("and Have gotten Cold drinks")
        })
        let ticket;
        try{
        ticket=await bringingTickets;
        }catch(e){
            ticket="sad face";
        }
         let popcorn=await getPopCorn;
        let Butter=await butter;
        let drinks=await getColdDrinks;
       
        let [sevary,sweet,colddrink]=await Promise.all([popcorn,Butter,drinks]);
        console.log(sevary+" "+sweet+" "+colddrink);
        return ticket;
}
conversation().then((m)=>console.log('Person3: shows '+m));
