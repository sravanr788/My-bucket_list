var bucketlist = []

// create variable to select the list tag
var listcontainer=document.getElementById("list-container")

function addValues(){
    //taking inout from inputfield
    var value = document.getElementById("input-field").value
    // pushing it inside the array -bucketlist
    bucketlist.push(value)
    console.log("bucketlist: ", bucketlist);
    // display the text 
    displayList()
}

function displayList(){
     //clearing the previous list
    listcontainer.innerHTML=""
    for( let i = 0 ; i<bucketlist.length; i++){
    var li = document.createElement("li")
    // inserting the array elemnents
    li.innerHTML= bucketlist[i] + `<span> <img class="check" onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt=""></span>`
    console.log("li: ", li);
    //inserting the <li> </li> tag created into the ul #list-container
    listcontainer.append(li)}
}

function reset(){
    bucketlist=[]
    displayList()
}

function remove(i){
    // delete idx element from the array
    bucketlist.splice(i,1)
    // after deleting display the array 
    displayList()
}