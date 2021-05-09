//Redone using jQuery
loadList()
$(".task-input").keypress((event) => {
    if(event.which == 13) {
        let task = $(".task-input").val()
        if(task == "")
            alert("Error: Adding Empty task")
        else {
            let allToDos = localStorage.getItem("allToDos")
            if(allToDos == null)
                localStorage.setItem("allToDos", JSON.stringify([`${task}`]))
            else {
                let data = JSON.parse(allToDos)
                data.unshift(`${task}`)
                localStorage.setItem("allToDos", JSON.stringify(data))
            }
        }
        loadList()
        $(".task-input").val("")
    }
})
function loadList() {
    let allToDos = localStorage.getItem("allToDos")
    if(allToDos != null) {
        let data = JSON.parse(allToDos)
        $(".task-list").empty()
        for(let i = 0; i < data.length; i++)
            $(".task-list").append(`<li class="tasklist-item">${data[i]}</li>`)
        $("li").dblclick((data) => {
            let allToDos = JSON.parse(localStorage.getItem("allToDos"))
            allToDos = allToDos.filter((e) => {
                return e != data.currentTarget.innerText
            })
            localStorage.setItem("allToDos", JSON.stringify(allToDos))
            loadList()
        })
    }
}