const members = [

{
    name:"Mohammed Azeem",
    role:"Team Leader",
    image:"azeem.jpg",
    desc:"Leads the team, manages the project and coordinates all members."
},

{
    name:"Mohammed Afzal",
    role:"Presentation Designer",
    image:"afzal.jpg",
    desc:"Creates professional presentations and attractive UI designs."
},

{
    name:"Syed Faizan",
    role:"Backup",
    image:"faizan.jpg",
    desc:"Supports every department and helps whenever required."
}

];

let current = 0;

function showCard(){

    document.getElementById("profile").src = members[current].image;

    document.getElementById("name").innerText = members[current].name;

    document.getElementById("role").innerText = members[current].role;

    document.getElementById("desc").innerText = members[current].desc;

}
    showCard();


function nextCard(){

    current++;

    if(current >= members.length){
        current = 0;
    }


}

function prevCard(){

    current--;

    if(current < 0){
        current = members.length - 1;
    }

    showCard();

}