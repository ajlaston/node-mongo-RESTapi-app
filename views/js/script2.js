function homeWork(){
    console.log("started solving HW");
    

    var data = [
        {
            name: "Sergio",
            age: 97,
            color: "black"
        },
        {
            name: "Carl",
            age: 17,
            color: "pink"
        },
        {
            name: "Joseph",
            age: 23,
            color: "red"
        },
        {
            name: "Joan",
            age: 34,
            color: "blue"
        }
        ,
        {
            name: "Terese",
            age: 29,
            color: "pink"
        },
        {
            name: "Paul",
            age: 47,
            color: "black"
        },
        {
            name: "Tyler",
            age: 36,
            color: "red"
        }
        ,
        {
            name: "Marian",
            age: 31,
            color: "orange"
        }
        ,
        {
            name: "Michael",
            age: 35,
            color: "green"
        },
        {
            name: "Jay",
            age: 51,
            color: "pink"
        }
    ];
//the name of the oldest user
     function oldestUser(){

        for(let i = 0; i < data.length; i++){
            var oldest;
            if (data[i].age > 51  ){
                oldest = data[i].name;
            }
        }
        console.log("The oldest user is:",oldest);
    }

    //name of the youngest
    function youngestUser(){

        for(let i = 0; i < data.length; i++){
            var youngest;
            if (data[i].age < 29  ){
                youngest = data[i].name;
            }
        }
        console.log("The youngest user is:",youngest);
    }

    //the different colors
    

    function difColors(){
        var colorList = [];

        for(let i = 0; i < data.length; i++){
            if(colorList.includes(data[i].color)){
               null
            }
            else{
                colorList.push(data[i].color);
                
            }
            
        } 
        console.log('The different colors are ', colorList.toString())
      
    }

    function repeatColors(){
        console.log(data[1].color);

        

        
       
       
    }
   
    const arr = [{a: 'b', color: 'black'}];
    console.log(arr.some(item => item.color === 'black'));

   repeatColors(); 
    difColors();
    oldestUser();
    youngestUser();
    console.log("-------------");

///the name of the oldest user


// solveOldes(data)

// the name of teh younger

// 

// most repeated colors

}

function init(){
    homeWork();
    

    // homeWork.oldestUser();

}

window.onload = init;