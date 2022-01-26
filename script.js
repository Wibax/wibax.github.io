function solvePromblem(r1,r2,r3) {
    //console.log("This is my log");
    if (r1 >= r2 + r3) {
        console.log("YES");
    }
    else {
        console.log("NO");
    }
}

function buttonClicked() {
    let r1 = parseInt(document.getElementById("r1-input").value);
    let r2 = parseInt(document.getElementById("r2-input").value);
    let r3 = parseInt(document.getElementById("r3-input").value);
    solvePromblem(r1, r2, r3);
}