//Q1:
function changeImage()
{
    const  ele = document.getElementById("image");
    const newUrl="https://cdn-image.realsimple.com/sites/default/files/styles/rs_horizontal_image_4/public/books-stacked.jpg?itok=JvyeL54G";
    ele.src=newUrl;
}
 

function changeImageonce(){
    const ele = document.getElementById("image");
    const verynewUrl="http://currys.cdn.dixons.com/css/themes/buying_guide/coffee_buying_guide/img/wk25-coffee-header.jpg";
    ele.src=verynewUrl;
}
  function sameImage(){
      const ele=document.getElementById("image");
      ele.src="https://www.thespruce.com/thmb/SiO7HQpE-6kFDbwpTz6CKNGO1Rw=/2119x1415/filters:fill(auto,1)/GettyImages-971582964-ee0f28aa66b04fb1a54171fa4bdee7a6.jpg";

    
  }


function copy(){
    let input=document.getElementsByClassName("input");
    input[1].value=input[0].value;
}


let person=[
    {
        name:"Prithika",
        age:17,
        country:"India",
        hobbies:["languages","singing","reading"]
    },
    {
        name:"Angeline",
        age:18,
        country:"India",
        hobbies:["gardening","reading"]
    },
    {
        name:"Reena",
        age:35,
        country:"Russia",
        hobbies:["drawing","reading"]
    }
]


function print(){
    console.log(person);
}

print();

function age(){
    for (let i=0;i<3;i++){
        if(person[i].age<30){
        console.log(person[i]);
        }
    }
}
age();



function country(){
    for(i=0;i<3;i++){
        if(person[i].country="India"){
            console.log(person[i]);
        }
    }
}
country();