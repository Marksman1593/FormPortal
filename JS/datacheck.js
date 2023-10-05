function checker(input_field){
    if(input_field.value != ""){
        input_field.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
    }else{
        input_field.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
    }

    checkall();
}

function checkall(){
    var inputs = document.getElementsByTagName("input");
    var test = 0;
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            test = 1;
        }
    }
    // inputs.forEach(input => {
    //     if(input.value == ""){
    //         test = 1;
    //     }
    // });
    if(test != 0){
        var submit = document.getElementById("submit");
        submit.disabled = false;
        submit.style.backgroundColor = "rgba(0, 255, 0, 0.25)";
        submit.style.cursor = "pointer";
    }
}

function updateContainerCount(){
    var count  = document.getElementById('noOfContainers');
    var counter = document.getElementById('noOfContainer');
    counter.innerHTML = count.value;

    return count.value;
}