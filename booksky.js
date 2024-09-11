 // select overlayout,popup,plusbutton
        var layout = document.getElementById("overlayout")
        var popup = document.getElementById("popup")
        var add_content = document.getElementById("plus-button")
        add_content.addEventListener("click",function(){
            layout.style.display = "block"
            popup.style.display = "block"
        })

// select cancelbutton
var cancel = document.getElementById("cancel-button")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    layout.style.display = "none"
    popup.style.display = "none"

}) 

// select container,addbutton,booktitle,bookauthor,bookdescription
var containe = document.querySelector(".container")
var ad = document.getElementById("add-button")
var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var textarea = document.getElementById("book-description")

function addbook(event) {
    event.preventDefault()
    var a = document.createElement("div")
    a.setAttribute("class", "sub-container")
    a.innerHTML = `<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
    <p>${textarea.value}</p> 
    <button onclick="deletebook(event)" class="btn-delete" id="delete-button">Delete</button>`
    containe.append(a)
    layout.style.display = "none"
    popup.style.display = "none"

    }  


function deletebook(event){
    event.target.parentElement.remove()
}
        
   

