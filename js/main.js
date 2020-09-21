var bookMarkName = document.getElementById("bookMarkName");
var bookMarkUrl = document.getElementById("bookMarkUrl ");
var ContainList = document.getElementById("ContainList");
var markSubmit = document.getElementById("markSubmit");
var group = document.getElementById("group");
var group2 = document.getElementById("group2");
var contentList = [];
markSubmit.addEventListener("click", function() {

    if (bookMarkName.value != "" && bookMarkUrl.value != "") {
        create();
        displayContent();
        clearInputs();
    } else {
        group.innerHTML = `<div id='txtarea' class="form-control w-75 m-auto " cols=" 30 " rows="1 ">this field is required !</div>`;
        group2.innerHTML = `<div  id='txtarea2' class="form-control w-75 m-auto " cols=" 30 " rows="1 ">this field is required !</div>`;

    }


})

function create() {
    var webSite = {
        name: bookMarkName.value,
        WebUrl: bookMarkUrl.value
    };

    contentList.push(webSite);
    localStorage.setItem("ourWebsites", JSON.stringify(contentList));
}
if (localStorage.getItem("ourWebsites") == null) {
    contentList = []
} else {
    contentList = JSON.parse(localStorage.getItem("ourWebsites"));
    displayContent();
}

function displayContent() {
    var container = "";
    for (var i = 0; i < contentList.length; i++) {

        container += ` <div class = "mt-3" >
                             <div class = "row mb-4 colr py-4" >
                             <h4 class = "ml-5" > ${contentList[i].name} </h4> <div class = 'w-50 m-auto' >
                             <a class="btn btn-primary" href="${contentList[i].WebUrl}"  target="_blank">visit</a>
                             <button onclick = 'DeleteWebsiteName(${i})'class = "btn btn-danger ml-3" > Delete </button> 
                             </div> 
                       </div > `

    }
    document.getElementById("ContainList").innerHTML = container;
}

function clearInputs() {
    bookMarkName.value = "";
    bookMarkUrl.value = "";
}

function DeleteWebsiteName(index) {
    contentList.splice(index, 1);
    localStorage.setItem("ourWebsites", JSON.stringify(contentList));
    displayContent();
}