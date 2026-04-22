// genera la contra
function generarPassword() {
    var l = document.getElementById('l').value;
    var s = document.getElementById('s').checked;
    var n = document.getElementById('n').checked;
    var u = document.getElementById('u').checked;
    var c = "abcdefghijklmnopqrstuvwxyz";
    
    if(s) c += "!@#$%^&*";
    if(n) c += "0123456789";
    if(u) c += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var p = "";
    for(var i = 0; i < l; i++) {
        p += c.charAt(Math.floor(Math.random() * c.length));
    }
    document.getElementById('r').innerHTML = p;
}

function copiarPassword() {
    var x = document.getElementById('r').innerHTML;
    navigator.clipboard.writeText(x);
    document.getElementById('msg').style.display = 'block';
    setTimeout(function() {
        document.getElementById('msg').style.display = 'none'
    }, 2000);
}

// calcula lo fuerte que es la contraseña 
function calcularFuerza(p) {
    var score = 0;
    if(p.length > 8) score++;
    if(p.length > 12) score++;
    if(/[A-Z]/.test(p)) score++;
    if(/[0-9]/.test(p)) score++;
    if(/[^a-zA-Z0-9]/.test(p)) score++;
    return score;
}