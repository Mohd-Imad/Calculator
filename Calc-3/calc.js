function input(a){
    document.getElementById('display').value = document.getElementById('display').value + a
}

function solve(){
    let x = document.getElementById('display').value    
    let y = eval(x)
    document.getElementById('display').value = y
}

function del(){
    let m = document.getElementById('display').value
    let n = m.slice(0,-1)
    document.getElementById('display').value = n
}

function allClear(){
    document.getElementById('display').value = ""
}