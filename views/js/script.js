
var catalog = [];

/**

     * 1 

     *    A ) print the name of the females

     *    B ) print the name of the males

     *

     * 2 print the fiend names of the females

     *

     */

function homeWork(){
    var data = [

        {

            "id": "5d5847889d6013c57eceb33b",

            "name": "Mai David",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Alford Fisher"

                },

                {

                    "id": 1,

                    "name": "Irma Serrano"

                },

                {

                    "id": 2,

                    "name": "Cooley Guzman"

                }

            ]

        },

        {

            "id": "5d58478887dcb823af142aaa",

            "name": "Ruiz Lucas",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Deana Santos"

                },

                {

                    "id": 1,

                    "name": "Macdonald Fischer"

                },

                {

                    "id": 2,

                    "name": "Carly Mcintyre"

                }

            ]

        },

        {

            "id": "5d584788eb0202e69a992ff5",

            "name": "Beverly Hutchinson",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Debora Vargas"

                },

                {

                    "id": 1,

                    "name": "Snow Hays"

                },

                {

                    "id": 2,

                    "name": "Leon Obrien"

                }

            ]

        },

        {

            "id": "5d58478831d9cfdede67749b",

            "name": "Meagan Ferguson",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Mooney Dyer"

                },

                {

                    "id": 1,

                    "name": "Roxanne Ross"

                },

                {

                    "id": 2,

                    "name": "Banks Kramer"

                }

            ]

        },

        {

            "id": "5d584788331ae655cd5415cf",

            "name": "Shannon Shepard",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Vicki Joyner"

                },

                {

                    "id": 1,

                    "name": "Hanson Evans"

                },

                {

                    "id": 2,

                    "name": "Sylvia Salinas"

                }

            ]

        },

        {

            "id": "5d584788cd32d81c3e6c9988",

            "name": "Alba Acevedo",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Lindsay Tate"

                },

                {

                    "id": 1,

                    "name": "Hodges Hinton"

                },

                {

                    "id": 2,

                    "name": "Knox Dominguez"

                }

            ]

        },

        {

            "id": "5d58478848247a725136b0a9",

            "name": "Lee Bullock",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Gates Underwood"

                },

                {

                    "id": 1,

                    "name": "Olga Valenzuela"

                },

                {

                    "id": 2,

                    "name": "Jillian Griffin"

                }

            ]

        },

        {

            "id": "5d5847888054f64fa4f29b00",

            "name": "Reyna Bradshaw",

            "gender": "female",

            "friends": [

                {

                    "id": 0,

                    "name": "Rosalie Salazar"

                },

                {

                    "id": 1,

                    "name": "Rosella Reed"

                },

                {

                    "id": 2,

                    "name": "Herring Stevenson"

                }

            ]

        },

        {

            "id": "5d5847880905dfc8e17b38b8",

            "name": "Hunt Andrews",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Bauer Palmer"

                },

                {

                    "id": 1,

                    "name": "Lenore Wall"

                },

                {

                    "id": 2,

                    "name": "Schmidt Greer"

                }

            ]

        },

        {

            "id": "5d584788a6471c91d2defb0d",

            "name": "Craft Pena",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Paige Giles"

                },

                {

                    "id": 1,

                    "name": "Letha Chandler"

                },

                {

                    "id": 2,

                    "name": "Jordan Browning"

                }

            ]

        },

        {

            "id": "5d5847880e38b3dd61e690e1",

            "name": "Wiley England",

            "gender": "male",

            "friends": [

                {

                    "id": 0,

                    "name": "Marianne Baker"

                },

                {

                    "id": 1,

                    "name": "Kramer Rush"

                },

                {

                    "id": 2,

                    "name": "Frieda Winters"

                }

            ]

        }
    ];

    
    var females = [];
    var males = [];
    var arrFriend =[];
    var persFriends;
    var person;

    //select the first object.
   for(let i = 0; i < data.length;i++){
       person = data[i];
      
       if(person.gender === 'female'){
        females.push(person.name);

        for(var h =0; h < person.friends.length; h++){
            persFriends = person.friends[h].name;
            arrFriend.push(persFriends);
            
            if(h === person.friends.length-1){
                console.log(`${person.name} friend's are ${arrFriend}`);
                arrFriend =[];
            }
        
       }
    }
       else{
           males.push(person.name);
       }
   }
   

   // The names of the females
   console.log(`the names of the females are ${females}`); 
   //The name of males
   console.log(`the name of the males are ${males}`);
   //female friend names
    
}


function displayCatalog(){
    
    for(let i = 0; i < catalog.length; i++){
        var item = catalog[i];
        
         // create an LI
        displayItem(item);
        
    }
}

function displayItem(item) {
    // get the reference to UL
    var ul = $("#catalog");

    // create an LI
    var li =
        `
<div class="card" style="width: 18rem;">
<img src="${item.image}" class="card-img-top">
<div class="card-body">
<h5 class="card-title">${item.title}</h5>
<p class="card-text">${item.description}</p>
<h6>${item.price}</h6>
<a href="#" class="btn btn-primary">Add to cart</a>
<p>${item.category}</p>
</div>
</div>`;

    // add the li to ul
    ul.append(li);
} 

function search() {
    var text = $("#txtSearch").val().toLowerCase();
    
    console.log("this work?", text)

$("#catalog").html('');

for (let i = 0;i <catalog.length; i++){
    var item = catalog[i];

    if(item.title.toLowerCase().indexOf(text) >= 0 || item.description.toLowerCase().indexOf(text) >= 0){
        displayItem(item);
    }
 }
}


// function homeWork(){
//     console.log("started solving HW");
    

//     var data = [
//         {
//             name: "Sergio",
//             age: 97,
//             color: "black"
//         },
//         {
//             name: "Carl",
//             age: 17,
//             color: "pink"
//         },
//         {
//             name: "Joseph",
//             age: 23,
//             color: "red"
//         },
//         {
//             name: "Joan",
//             age: 34,
//             color: "blue"
//         }
//         ,
//         {
//             name: "Terese",
//             age: 29,
//             color: "pink"
//         },
//         {
//             name: "Paul",
//             age: 47,
//             color: "black"
//         },
//         {
//             name: "Tyler",
//             age: 36,
//             color: "red"
//         }
//         ,
//         {
//             name: "Marian",
//             age: 31,
//             color: "orange"
//         }
//         ,
//         {
//             name: "Michael",
//             age: 35,
//             color: "green"
//         },
//         {
//             name: "Jay",
//             age: 51,
//             color: "pink"
//         }
//     ];


//     console.log("-------------");

// /* the neame of the oldest user

// solveOldes(data)

// the name of teh younger

// the list of diff colors

// most repeated colors*/

// }

function getCatalog(){
    this.catalog = [
        {
            title: "first item",
            description: "this is the long desc",
            price: 19.99,
            image: "https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153",
            category: "cat 1"
        },
        {
            title: "second item",
            description: "this is another long desc",
            price: 9.99,
            image: "https://image.freepik.com/free-vector/black-tablet-mockup_23-2147504827.jpg?1",
            category: "cat 2"
        }
    ];
    console.log("started getCatalog fn");
    var serverUrl = "http://127.0.0.1:8080/api/products"
    $.ajax({
        url: serverUrl,
        type: "GET",
        success: function (res){
            console.log("response from server", res);

            for(let i = 0; i<res.length; i++){
                var item = res[i];
                if(item.user == "Adam") {
                    catalog.push(item); //append to catalog
                    
                }
            }
            displayCatalog();
            
        },
        error: function (err) {
            console.log("error getting data", err);
        }
        
    })
}

function init() {

    console.log("initial page");

    getCatalog();
    homeWork();

$('#btnSearch').click(search);
$('#txtSearch').keypress(function (args){
    if (args.keyCode == 13) {
        search();
        args.preventDefault(); //stop page refresh inside a form
    }
});




}

window.onload = init;




//HW what are the http methods

// create items by making objects

// https methods http 

