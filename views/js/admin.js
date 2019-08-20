function Item(title, desc, price, image, cat) {
    this.title=title;
    this.description=desc;
    this.price=price;
    this.image=image;
    this.category =cat;
    this.user = "Adam";
}

function saveItem(){
    var title = $("#txtTitle").val();
    var desc =  $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var cat = $("#txtselCategory").val();
    var theItem = new Item(title, desc, price, image, cat);
    console.log(theItem);

console.log("The title", theItem.title);

    
var serverURL = "http://127.0.0.1:8080/api/products";

$.ajax({
    url: serverURL,
    type: "POST",
    data: JSON.stringify(theItem) ,
    contentType: "application/json",
    success: function(res){
        console.log("Req success", res);
    },
    error: function(error){
        console.error("error req", error);
    }
});


}



function testAjax(){
  

    $.ajax({
        url: "http://127.0.0.1:8080/api/products",
        type: "POST",
        success: function(res){
            console.log("Req success", res);
            for(var i=0; i< res.length; i++){
                var item = res[i];
                if(item.user == "Adam"){
                    catalog.push(item);
                    displayItem(item);
                }
            }
        },
        error: function(error){
            console.error("error req", error);
        }
    });
}
      
function init(){
    console.log("init admin page");

    $("#btnSave").click(saveItem);
}

window.onload = init;
// http://restclass.azurewebsites.net/API/points