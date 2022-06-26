
showNotes();
//To add notes
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notes_Obj = [];
    }
    else{
        notes_Obj = JSON.parse(notes);
    }
    notes_Obj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notes_Obj));
    addTxt.value = " ";
    showNotes();
});

//to show Notes
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notes_Obj = [];
    }
    else{
        notes_Obj = JSON.parse(notes);
    }
    let html = "";
    notes_Obj.forEach((element, index) => {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-success">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-success">Delete Note</button>
                    </div>
                </div>`;
    });
    let disp_Notes = document.getElementById('notes');
    if(notes_Obj.length != 0){
        disp_Notes.innerHTML = html;
    }
    else{
        disp_Notes.innerHTML = `Balla talla fix garey HAHAHA!!`;
    }
}

//to delete notes
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notes_Obj = [];
    }
    else{
        notes_Obj = JSON.parse(notes);
    }
    notes_Obj.splice(index , 1);
    localStorage.setItem("notes", JSON.stringify(notes_Obj));
    showNotes();
}

//to search notes

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function(){
    let input = searchTxt.value.toLowerCase();
    let notesCards = document.getElementsByClassName('noteCard');
    Array.from(notesCards).forEach((element)=>{
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if(cardText.includes(input)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
});





    





