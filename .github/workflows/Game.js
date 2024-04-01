var a = document.querySelectorAll(".cell");
var arr1 = Array.from(a);

var red = document.querySelectorAll(".red");
var green = document.querySelectorAll(".green");
var blue = document.querySelectorAll(".blue");
var yellow = document.querySelectorAll(".yellow");

// seperate  arrays for the seperate movements 
var Bluearray = Array.from(blue);
var Redarray = Array.from(red);
var Greenarray = Array.from(green);
var Yellowarray = Array.from(yellow);

var chr,chb,chg,chy;
chr=1;
chb=0;
chg=0;
chy=0;
// for selecting the dice faces
var one = document.querySelector("#d1");
var two = document.querySelector("#d2");
var three = document.querySelector("#d3");
var four = document.querySelector("#d4");
var five = document.querySelector("#d5");
var six = document.querySelector("#d6");
var p1=document.querySelector(".roll");
var p2=document.querySelector(".roll1");
var p3=document.querySelector(".roll2");
var p4=document.querySelector(".roll3");

p2.style.visibility="hidden";
p3.style.visibility="hidden";
p4.style.visibility="hidden";

// dummy array for the movement on the board according to correct sequence

var dummy = [11,31,30,29,28,27,26,25,24,23,0,1,2,3,4,5,6,7,8,9,10,34,35,36,37,38,39,40,41,42,43,20,19,18,17,16,15,14,13,12];

p1.onclick=()=>{
    
    Roll();
    p2.style.visibility="visible";
    p1.style.visibility="hidden";

  }

p2.onclick=()=>{
     Roll1();
     p3.style.visibility="visible";
     p2.style.visibility="hidden";
  }
 p3.onclick=()=>{
   Roll2();
   p4.style.visibility="visible";
   p3.style.visibility="hidden";
 }

 p4.onclick=()=>{
   Roll3();
   p1.style.visibility="visible";
   p4.style.visibility="hidden";
 }

var c = 0;
var count = 0;
var c1 = 0;
var count1 = 0;
var c2 = 0;
var count2 = 0;
var c3 = 0;
var count3 = 0;
var n ;

// money time

var buyy = document.querySelectorAll(".buy");
var purArr = Array.from(buyy);


const tickets ={
  index: ["starrt","vinestreet", "communitychest","coventrystreet", " IncomeTax", " maryleboneStattion","leicester Suare"," chance"," BowStreet", 
               "white chappelroad"," jail"," theangleislington"," electic company"," traflgarsquare"," northormldavenug"," fenchurchstation"," m.boroughstreet",
              " communitychest", "fleetstreet","oldkentroad","freeRanking"," whitehall"," chamce","pentonvilleroad","pallmall"," kingscrossstation","bondstreet",
            " strand"," waterworks","regentstreet","GoToJail","eusstonRoad"," piccadilly","communitychest"," oxfordstreet","liverpool st.station"," chance","parklane","superTax",
          "mayfair"],
  price:[20000000,15000000,0,57000000,100000000,500000000,68000000,1,81000000,81000000,100000,91000000,2400000000,97000000,112000000,700000000,125000000,
  0,148000000,2080000000,2,211000000,1,215000000,228000000,1000000000,271000000,320000000,8000000000,10000000,404000000,440000000,
0,550000000,1500000000,1,562000000,200000000,1800000000,370000000],

purchased:[ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
rent : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
owner: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// ownerG: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// ownerB: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// ownerY: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
RR: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
YY: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
GG: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
BB: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
}
 for(let a = 0; a<40; a++){
 tickets.rent[a] =parseInt( tickets.price[a]/7);
 }


var initial = 600000000;
var initial2 = 600000000;
var initial3= 600000000;
var initial4 = 600000000;

var money1= document.querySelector("#sel1");
var money2= document.querySelector("#sel2");
var money3= document.querySelector("#sel3");
var money4= document.querySelector("#sel4");

money1.innerHTML = initial;
money2.innerHTML = initial2;
money3.innerHTML = initial3;
money4.innerHTML = initial4;

var access = document.querySelectorAll(".ticbox");
var ticketArray = Array.from(access);

// function for movement of Red player 



function cancel(){
 if(Redarray[dummy[count]].style.visibility == "visible"){
    ticketArray[count-1].style.visibility="hidden";
    tickets.RR[count] = 0;
 }
 if(Bluearray[dummy[count1]].style.visibility == "visible"){
    ticketArray[count1-1].style.visibility="hidden";
    tickets.BB[count1] = 0;
 }
 if(Greenarray[dummy[count2]].style.visibility == "visible"){
    ticketArray[count2-1].style.visibility="hidden";
   tickets.GG[count2] = 0;
 }
 if(Yellowarray[dummy[count3]].style.visibility == "visible"){
    ticketArray[count3-1].style.visibility="hidden";
    tickets.YY[count3] = 0;
 }

}

console.log(tickets.owner.length);



function buy()
{
  if(Redarray[dummy[count]].style.visibility== "visible")  
  {
    if(tickets.RR[count] == 1){
      if(money1.innerHTML< tickets.price[count]){
        cancel();
      }
        money1.innerHTML = parseInt(money1.innerHTML)- tickets.price[count];
     ticketArray[count-1].style.visibility = "hidden";
     tickets.purchased[count] = 1;
     if(tickets.purchased[count] == 1){
       purArr[count-1].style.visibility = "hidden";
     }
    
     tickets.owner[count] = 1;
     
     tickets.RR[count] = 0;

    }
    else{
      money1.innerHTML = parseInt(money1.innerHTML) -0;
      ticketArray[count-1].style.visibility = "hidden";
    }
    
  
  
  }
  if( Bluearray[dummy[count1]].style.visibility == "visible"){
    if(tickets.BB[count1]== 1){
      if(money3.innerHTML< tickets.price[count1]){
        cancel();
      }
     
    
        money3.innerHTML = parseInt(money3.innerHTML) - tickets.price[count1];
        ticketArray[count1-1].style.visibility = "hidden";
        tickets.purchased[count1] = 1;
        if(tickets.purchased[count1] == 1){
          purArr[count1-1].style.visibility = "hidden";
        }
    
        tickets.owner[count1] = 3;  
        tickets.BB[count1] =0;
    }
    else{
      money3.innerHTML = parseInt(money3.innerHTML) -0;
      ticketArray[count1-1].style.visibility = "hidden";
     
    }
   

   }
  
  if( Greenarray[dummy[count2]].style.visibility ==  "visible"){
  
    if(tickets.GG[count2] == 1){
      if(money2.innerHTML< tickets.price[count2]){
        cancel();
      }
     
        money2.innerHTML = parseInt(money2.innerHTML) - tickets.price[count2];
        ticketArray[count2-1].style.visibility = "hidden";
        tickets.purchased[count2] = 1;
        if(tickets.purchased[count2] == 1){
          purArr[count2-1].style.visibility = "hidden";
        }
    
        tickets.owner[count2] = 2;
        tickets.GG[count2] =0;
      
    
    }
    else{
      money2.innerHTML = parseInt(money2.innerHTML) -0;
      ticketArray[count2-1].style.visibility = "hidden";

    }
   
  }
  if( Yellowarray[dummy[count3]].style.visibility ==  "visible"){
    if(tickets.YY[count3] == 1){
      if(money4.innerHTML< tickets.price[count3]){
        cancel();
      }
      
        money4.innerHTML =parseInt(money4.innerHTML) - tickets.price[count3];
        ticketArray[count3-1].style.visibility = "hidden";
        tickets.purchased[count3] = 1;
        if(tickets.purchased[count3] == 1){
          purArr[count3-1].style.visibility = "hidden";
        }
        tickets.owner[count3] = 4;     
        tickets.YY[count3] =0;
    }
    else{
      money4.innerHTML = parseInt(money4.innerHTML) -0;
      ticketArray[count3-1].style.visibility = "hidden";
    }

   
    }
    Yellowarray[dummy[count3]].style.visibility ==  "hidden"
    Redarray[dummy[count]].style.visibility== "hidden"
    Bluearray[dummy[count1]].style.visibility == "hidden"
    Greenarray[dummy[count2]].style.visibility ==  "hidden"
   console.log(tickets.ownerR);
}

var selrent = document.querySelectorAll(".rent");
var rentArr = Array.from(selrent);



rentArr[0].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
          ticketArray[count-1].style.visibility = "hidden";
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility = "hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility ="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[1].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[2].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[3].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[4].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[5].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[6].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[7].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[8].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[9].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[10].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[11].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[12].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[13].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[14].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[15].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[16].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[17].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[18].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[19].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[20].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[21].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[22].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[23].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[24].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[25].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[26].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}
rentArr[27].onclick = ()=>{

        if(chr==1){
            if(tickets.owner[count] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+0 ;
              
             }
            if(tickets.owner[count] == 3){
              money3.innerHTML=parseInt(money3.innerHTML) +tickets.rent[count-1] ;
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 2){
              money2.innerHTML =parseInt(money2.innerHTML)+ tickets.rent[count-1];
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }
            if(tickets.owner[count] == 4){
              money4.innerHTML =parseInt(money4.innerHTML)+tickets.rent[count-1]; 
              money1.innerHTML=parseInt(money1.innerHTML)-tickets.rent[count-1];
             }  
             ticketArray[count-1].style.visibility="hidden"
           }

           if(chb==1){

            if(tickets.owner[count1] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count1-1] ;
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 3){
             money3.innerHTML =parseInt(money3.innerHTML)+0 ;
              
             }
            if(tickets.owner[count1] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+ tickets.rent[count1-1];
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }
            if(tickets.owner[count1] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count1-1]; 
              money3.innerHTML=parseInt(money3.innerHTML)-tickets.rent[count1-1];
             }  
             ticketArray[count1-1].style.visibility="hidden"
          }

          if(chg==1){

            if(tickets.owner[count2] == 1){
              money1.innerHTML=parseInt(money1.innerHTML)+tickets.rent[count2-1] ;
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 2){
             money2.innerHTML =parseInt(money2.innerHTML)+0 ;
              
             }
            if(tickets.owner[count2] == 2){
              money3.innerHTML=parseInt(money3.innerHTML)+ tickets.rent[count2-1];
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }
            if(tickets.owner[count2] == 4){
              money4.innerHTML=parseInt(money4.innerHTML)+tickets.rent[count2-1]; 
              money2.innerHTML=parseInt(money2.innerHTML)-tickets.rent[count2-1];
             }  
             ticketArray[count2-1].style.visibility="hidden"
          }

          if(chy==1){

            if(tickets.owner[count3] ==1){
              money1.innerHTML=parseInt(money1.innerHTML)+  tickets.rent[count3-1] ;
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 3){
              money3.innerHTML=parseInt(money3.innerHTML)+tickets.rent[count3-1];
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
              
             }
            if(tickets.owner[count3] == 2){
              money2.innerHTML=parseInt(money2.innerHTML)+tickets.rent[count3-1]; 
              money4.innerHTML=parseInt(money4.innerHTML)-tickets.rent[count3-1];
             }
            if(tickets.owner[count3] == 4){
              money4.innerHTML+=0;
            }
            ticketArray[count3-1].style.visibility="hidden"
          }
    
}


//community chest area
var community = document.querySelectorAll(".community");
var communityArr = Array.from(community);
console.log(communityArr);

communityArr[0].onclick = () =>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) - 10000000;
        ticketArray[count-1].style.visibility = "hidden"
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) - 10000000;
        ticketArray[count2-1].style.visibility = "hidden"
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) - 10000000;
        ticketArray[count1-1].style.visibility = "hidden"
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) - 10000000;
        ticketArray[count3-1].style.visibility = "hidden"
    }
}
communityArr[1].onclick = () =>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) + 50000000;
        ticketArray[count-1].style.visibility = "hidden"
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) + 50000000;
        ticketArray[count2-1].style.visibility = "hidden"
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) + 50000000;
        ticketArray[count1-1].style.visibility = "hidden"
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) + 50000000;
        ticketArray[count3-1].style.visibility = "hidden"
    }
}
communityArr[2].onclick = () =>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) - 15000000;
        money2.innerHTML = parseInt(money2.innerHTML) + 5000000;
        money3.innerHTML = parseInt(money3.innerHTML) + 5000000;
        money4.innerHTML = parseInt(money4.innerHTML) + 5000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) - 15000000;
        money1.innerHTML = parseInt(money1.innerHTML) + 5000000;
        money3.innerHTML = parseInt(money3.innerHTML) + 5000000;
        money4.innerHTML = parseInt(money4.innerHTML) + 5000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) - 15000000;
        money2.innerHTML = parseInt(money2.innerHTML) + 5000000;
        money1.innerHTML = parseInt(money1.innerHTML) + 5000000;
        money4.innerHTML = parseInt(money4.innerHTML) + 5000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) - 15000000;
        money2.innerHTML = parseInt(money2.innerHTML) + 5000000;
        money3.innerHTML = parseInt(money3.innerHTML) + 5000000;
        money1.innerHTML = parseInt(money1.innerHTML) + 5000000;
    }
}

// all payfunction

var paying = document.querySelectorAll(".pay");
var payArr = Array.from(paying);

payArr[0].onclick = ()=>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) - 100000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) - 100000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) - 100000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) - 100000000;
    }
}
payArr[1].onclick = ()=>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) - 5000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) - 5000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) - 5000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) - 5000000;
    }
}
payArr[2].onclick =()=>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) - 40000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) - 40000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) - 40000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) - 40000000;
    }
}

// chances area

var chance = document.querySelectorAll(".chance");
var chanceArr = Array.from(chance);
console.log(chanceArr)

chanceArr[0].onclick = ()=>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) + 20000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) + 20000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) + 20000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) + 20000000;
    }
}
chanceArr[1].onclick = ()=>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) - 30000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) - 30000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) - 30000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) - 30000000;
    }
}
chanceArr[2].onclick = ()=>{
    if(chr == 1){
        money1.innerHTML = parseInt(money1.innerHTML) + 45000000;
        money2.innerHTML = parseInt(money2.innerHTML) - 15000000;
        money3.innerHTML = parseInt(money3.innerHTML) - 15000000;
        money4.innerHTML = parseInt(money4.innerHTML) - 15000000;
    }
    if(chg == 1){
        money2.innerHTML = parseInt(money2.innerHTML) + 45000000;
        money1.innerHTML = parseInt(money1.innerHTML) - 15000000;
        money3.innerHTML = parseInt(money3.innerHTML) - 15000000;
        money4.innerHTML = parseInt(money4.innerHTML) - 15000000;
    }
    if(chb == 1){
        money3.innerHTML = parseInt(money3.innerHTML) + 45000000;
        money2.innerHTML = parseInt(money2.innerHTML) - 15000000;
        money1.innerHTML = parseInt(money1.innerHTML) - 15000000;
        money4.innerHTML = parseInt(money4.innerHTML) - 15000000;
    }
    if(chy == 1){
        money4.innerHTML = parseInt(money4.innerHTML) + 45000000;
        money2.innerHTML = parseInt(money2.innerHTML) - 15000000;
        money3.innerHTML = parseInt(money3.innerHTML) - 15000000;
        money1.innerHTML = parseInt(money1.innerHTML) - 15000000;
    }
}

function moveR() {
    count += c;
    // let passes will be 60
        Redarray.forEach((e, index) => {
          if (index == count) {
            e.style.visibility = "visible";
          }
          e.style.visibility = "hidden";
        });          

        if(count>= 40){
           money1.innerHTML = parseInt(money1.innerHTML) + 200000000;
            count = count - 40;      
        }
        Redarray[dummy[count]].style.visibility = "visible";
        ticketArray[count-1].style.visibility = "visible";

    }
    
function moveY() {
    count3 += c3;
    // let passes will be 60
        Yellowarray.forEach((e, index) => {
          if (index == count3) {
            e.style.visibility = "visible";
          }
          e.style.visibility = "hidden";
        });          

        if(count3>= 40){
          money4.innerHTML = parseInt(money4.innerHTML) + 200000000;
            count3 = count3 - 40;      
        }
        Yellowarray[dummy[count3]].style.visibility = "visible";
        ticketArray[count3-1].style.visibility = "visible";
    }
    
function moveB() {
    count1 += c1;
    // let passes will be 60
        Bluearray.forEach((e, index) => {
          if (index == count1) {
            e.style.visibility = "visible";
          }
          e.style.visibility = "hidden";
        });          

        if(count1>= 40){
          money3.innerHTML = parseInt(money3.innerHTML) + 200000000;
            count1 = count1 - 40;      
        }
        Bluearray[dummy[count1]].style.visibility = "visible";
        ticketArray[count1-1].style.visibility = "visible";
    }
    
function moveG() {
    count2 += c2;
    // let passes will be 60
        Greenarray.forEach((e, index) => {
          if (index == count2) {
            e.style.visibility = "visible";
          }
          e.style.visibility = "hidden";
        });          

        if(count2>= 40){
          money2.innerHTML = parseInt(money2.innerHTML) + 200000000;
            count2 = count2 - 40;      
        }
        Greenarray[dummy[count2]].style.visibility = "visible";
        ticketArray[count2-1].style.visibility = "visible";
    }
    


function Roll1() {
  chg=1;
  chb=0;
  chy=0;
  chr=0;
  var rand = Math.random();
  if (rand >= 0 && rand < 0.16) {
    one.style.visibility = "visible";
    c2 = 1;
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveG();
 
  
  } else if (rand >= 0.16 && rand < 0.32) {
    one.style.visibility = "hidden";
    c2= 2;
    two.style.visibility = "visible";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveG();

  } else if (rand >= 0.32 && rand < 0.48) {
    one.style.visibility = "hidden";
    c2 = 3;
    two.style.visibility = "hidden";
    three.style.visibility = "visible";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveG();
    
  } else if (rand >= 0.48 && rand < 0.64) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c2 = 4;
    four.style.visibility = "visible";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveG();

  } else if (rand >= 0.64 && rand < 0.8) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    c2 = 5;
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "visible";
    six.style.visibility = "hidden";
   
    moveG();
    
  } else if (rand >= 0.8 && rand < 1) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    c2 = 6;
    five.style.visibility = "hidden";
    six.style.visibility = "visible";

    moveG();

  } else {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c2 = null;
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    moveG();
  }
  
  //dice GREEN logic ends
}

function Roll() {
  chr=1;
  chg=0;
  chb=0;
  chy=0;
  var rand = Math.random();
  if (rand >= 0 && rand < 0.16) {
    one.style.visibility = "visible";
    c = 1;
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveR();
 
  
  } else if (rand >= 0.16 && rand < 0.32) {
    one.style.visibility = "hidden";
    c = 2;
    two.style.visibility = "visible";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveR();

  } else if (rand >= 0.32 && rand < 0.48) {
    one.style.visibility = "hidden";
    c = 3;
    two.style.visibility = "hidden";
    three.style.visibility = "visible";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveR();
    
  } else if (rand >= 0.48 && rand < 0.64) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c = 4;
    four.style.visibility = "visible";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveR();

  } else if (rand >= 0.64 && rand < 0.8) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    c = 5;
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "visible";
    six.style.visibility = "hidden";
   
    moveR();
    
  } else if (rand >= 0.8 && rand < 1) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    c = 6;
    five.style.visibility = "hidden";
    six.style.visibility = "visible";

    moveR();

  } else {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c = null;
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    moveR();
  }
  
  //dice red logic ends
}

  function Roll2() {
    chb=1;
    chr=0;
    chy=0;
    chg=0;
    var rand = Math.random();
    if (rand >= 0 && rand < 0.16) {
      one.style.visibility = "visible";
      c1 = 1;
      two.style.visibility = "hidden";
      three.style.visibility = "hidden";
      four.style.visibility = "hidden";
      five.style.visibility = "hidden";
      six.style.visibility = "hidden";
  
      moveB();
   
    
    } else if (rand >= 0.16 && rand < 0.32) {
      one.style.visibility = "hidden";
      c1 = 2;
      two.style.visibility = "visible";
      three.style.visibility = "hidden";
      four.style.visibility = "hidden";
      five.style.visibility = "hidden";
      six.style.visibility = "hidden";
  
      moveB();
  
    } else if (rand >= 0.32 && rand < 0.48) {
      one.style.visibility = "hidden";
      c1 = 3;
      two.style.visibility = "hidden";
      three.style.visibility = "visible";
      four.style.visibility = "hidden";
      five.style.visibility = "hidden";
      six.style.visibility = "hidden";
  
      moveB();
      
    } else if (rand >= 0.48 && rand < 0.64) {
      one.style.visibility = "hidden";
      two.style.visibility = "hidden";
      three.style.visibility = "hidden";
      c1 = 4;
      four.style.visibility = "visible";
      five.style.visibility = "hidden";
      six.style.visibility = "hidden";
  
      moveB();
  
    } else if (rand >= 0.64 && rand < 0.8) {
      one.style.visibility = "hidden";
      two.style.visibility = "hidden";
      c1 = 5;
      three.style.visibility = "hidden";
      four.style.visibility = "hidden";
      five.style.visibility = "visible";
      six.style.visibility = "hidden";
     
      moveB();
      
    } else if (rand >= 0.8 && rand < 1) {
      one.style.visibility = "hidden";
      two.style.visibility = "hidden";
      three.style.visibility = "hidden";
      four.style.visibility = "hidden";
      c1 = 6;
      five.style.visibility = "hidden";
      six.style.visibility = "visible";
  
      moveB();
  
    } else {
      one.style.visibility = "hidden";
      two.style.visibility = "hidden";
      three.style.visibility = "hidden";
      c1 = null;
      four.style.visibility = "hidden";
      five.style.visibility = "hidden";
      six.style.visibility = "hidden";
      moveB();
    }
    
    //dice red logic ends
  }



function Roll3() {
  chy=1;
  chr=0;
  chb=0;
  chg=0;
  var rand = Math.random();
  if (rand >= 0 && rand < 0.16) {
    one.style.visibility = "visible";
    c3 = 1;
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveY();
 
  
  } else if (rand >= 0.16 && rand < 0.32) {
    one.style.visibility = "hidden";
    c3 = 2;
    two.style.visibility = "visible";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveY();

  } else if (rand >= 0.32 && rand < 0.48) {
    one.style.visibility = "hidden";
    c3 = 3;
    two.style.visibility = "hidden";
    three.style.visibility = "visible";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveY();
    
  } else if (rand >= 0.48 && rand < 0.64) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c3 = 4;
    four.style.visibility = "visible";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";

    moveY();

  } else if (rand >= 0.64 && rand < 0.8) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    c3 = 5;
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "visible";
    six.style.visibility = "hidden";
   
    moveY();
    
  } else if (rand >= 0.8 && rand < 1) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    c3 = 6;
    five.style.visibility = "hidden";
    six.style.visibility = "visible";

    moveY();

  } else {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    c3 = null;
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    moveY();
  }
  
  //dice red logic ends
}




 var ranking = document.querySelector(".rank");
 ranking.onclick = ()=>{
  if(parseInt(money1.innerHTML)> parseInt(money2.innerHTML) && parseInt(money1.innerHTML) > parseInt(money3.innerHTML) && parseInt(money1.innerHTML) > parseInt(money4.innerHTML)){
    alert('Player At frist position is: red');
  }
 else if(parseInt(money2.innerHTML)> parseInt(money1.innerHTML) && parseInt(money2.innerHTML) > parseInt(money3.innerHTML) && parseInt(money2.innerHTML) > parseInt(money4.innerHTML)){
    alert('Player At frist position is : green');
  }
 else if(parseInt(money3.innerHTML)> parseInt(money2.innerHTML) && parseInt(money3.innerHTML) > parseInt(money1.innerHTML) && parseInt(money3.innerHTML) > parseInt(money4.innerHTML)){
    alert('Player At frist position is : blue ');
  }
  else{
    alert('Player At frist position is : yellow' );
  }
 }

 var playerR = document.getElementById("n1");
 var playerG = document.getElementById("n2");
 var playerB = document.getElementById("n3");
 var playerY = document.getElementById("n4");



playerR.innerHTML = "Red"
playerG.innerHTML = "Green"
playerB.innerHTML ="Blue"
playerY.innerHTML = "Yellow"

setTimeout(()=>{
  if(parseInt(money1.innerHTML)> parseInt(money2.innerHTML) && parseInt(money1.innerHTML) > parseInt(money3.innerHTML) && parseInt(money1.innerHTML) > parseInt(money4.innerHTML)){
    alert('Player At frist position is: red');
  }
 else if(parseInt(money2.innerHTML)> parseInt(money1.innerHTML) && parseInt(money2.innerHTML) > parseInt(money3.innerHTML) && parseInt(money2.innerHTML) > parseInt(money4.innerHTML)){
    alert('Player At frist position is : green');
  }
 else if(parseInt(money3.innerHTML)> parseInt(money2.innerHTML) && parseInt(money3.innerHTML) > parseInt(money1.innerHTML) && parseInt(money3.innerHTML) > parseInt(money4.innerHTML)){
    alert('Player At frist position is : blue ');
  }
  else{
    alert('Player At frist position is : yellow' );
  }

 },1800000);
