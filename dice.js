// const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// function roll() {


//     for (var i = 0; i <= 1000; i++) {
//         var x = Math.floor(Math.random() * 6) + 1;
//         var y = Math.floor(Math.random() * 6) + 1;
//         let total = x + y;
//         array[total - 2]++
//         // var divroll = document.createElement("div")
//         // var post = document.createTextNode(i + ": " + i++)
//         // divroll.appendChild(post)
//     }

//     document.write(console.log(array));
//     return array;
//     //  let total = document.getElementById("total").innerHTML = total;
// }
// roll()
// array = roll()

// let total = document.getElementById("total");



// for (i = 2; i <= 12; i++) {
//     var post = document.createTextNode(i + ": " + array[i - 2])
//     total.appendChild(post);

// }





// function rolldie() {
//     const arraycount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     let roll = 0
//     for (i = 0; i < 1000; i++)
//         roll = rolldie()
//         arraycount[roll-2] 
// }


// function rollDie() {
//     return Math.floor(Math.random() * 12) + 1; 
//   }

//   var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//   var results = [0, 0, 0, 0, 0, 0];

// for (var i = 1; i < 1000; i++) {
//     const array = []  
//     let result = rollDie();
//     counts[result] = counts[result] + 1;
//     results.push(result);
//   }

//   console.log(results);  
//   console.log(counts); 




// var dice = {
//     sides: 6,
//     roll: function () {
//       var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//       return randomNumber;
//     }
//   }

//   //Prints dice roll to the page

//   function printNumber(number) {
//     var placeholder = document.getElementById('placeholder');
//     placeholder.innerHTML = number;
//   }

//   var button = document.getElementById('button');

//   button.onclick = function() {
//     var result = dice.roll();
//     printNumber(result);
//   };




// Dice Counter



let count = ['', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function rolldice1() {
    let number = Math.floor(Math.random() * 6 + 1);
    // let rolldice1 = number
    // console.log(number);
    return number;
}

function roll() {
    for (let i= 1; i <= 1000; i++) {
    let result = rolldice1() + rolldice1()
    count[result] += 1;
}
totalcount();
}

// function rolldice2() {
//     let number = Math.floor((Math.random() * 6) + 1);
//     // let rolldice2 = number
//     // console.log(number);
//     return number;
// }

function totalcount() {
    let mainDiv = document.getElementById("mainDiv")
    for (let i = 2; i < count.length; i++) {
    let div2 = document.createElement("div")
    let para = document.createElement("p")
    let textn = document.createTextNode(i + ": " + count[i])
    para.appendChild(textn);
    let graphdiv = document.createElement("div")
    graphdiv.className = "graph"
    graphdiv.style.width=count[i] + "px"
    div2.appendChild(para)
    div2.appendChild(graphdiv)
    mainDiv.appendChild(div2)
    }
}
roll();

