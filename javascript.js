let usuarios = [];
let email = [];

function Cadastrar() {
  resetar_campos();
  document.getElementById("button").disabled = true;

  let usuario_atual = document.getElementById("username").value;
  let email_atual = document.getElementById("email").value;

  for (let i in usuarios) {
    let usuariolista = usuarios[i];
    if (usuariolista == usuario_atual) {
      document.getElementById("username").classList.add("button-vermelho");
      document.getElementById("usernameerror").style.display = "block";
      document.getElementById("button").disabled = false;
      return;
    }
  }

  for (let i in email) {
    let emaillista = email[i];
    if (emaillista == email_atual) {
      document.getElementById("email").classList.toggle("button-vermelho");
      document.getElementById("emailerror").style.display = "block";
      document.getElementById("button").disabled = false;
      return;
    }
  }

  usuarios.push(usuario_atual);
  email.push(email_atual);
  resetar_campos();

  document.getElementById("form").reset();
  setTimeout(() => {
    document.getElementById("button").disabled = false;
  }, 1000);
}

function resetar_campos() {
  document.getElementById("username").classList.remove("button-vermelho");
  document.getElementById("usernameerror").style.display = "none";

  document.getElementById("email").classList.remove("button-vermelho");
  document.getElementById("emailerror").style.display = "none";
}

function confirmarSenha() {
  let senha = document.getElementById("senha").value;
  let senha2 = document.getElementById("senha2").value;

  if (senha == senha2 && senha != '') {
    document.getElementById("passworderror2").style.display = "none";
    document.getElementById("button").disabled = false;
    document.getElementById("senha").classList.add("input-sucesso");
    document.getElementById("senha2").classList.add("input-sucesso");
} else {
    document.getElementById("passworderror2").style.display = "block";
    document.getElementById("button").disabled = true;
    document.getElementById("senha").classList.add("button-vermelho");
    document.getElementById("senha2").classList.add("button-vermelho");
}
}

function confirmarTamanhoUsuario() {
    let usuario = document.getElementById("username").value;
    
    if (usuario.length >= 3 && usuario.length <= 25) {
        document.getElementById("button").disabled = false;
        document.getElementById("usernameerror2").style.display = "none";
    document.getElementById("username").classList.add("input-sucesso");
} else {
    document.getElementById("username").classList.add("button-vermelho");
    document.getElementById("button").disabled = true;
    document.getElementById("usernameerror2").style.display = "block";
}
}

function validarEmail() {
    let email = document.getElementById("email").value;
    let compare = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    
    if (email.match(compare)) {
        document.getElementById("email").classList.add("input-sucesso");
        document.getElementById("button").disabled = false;
        document.getElementById("emailerror2").style.display = "none";
    } else {
        document.getElementById("email").classList.add("button-vermelho");
        document.getElementById("button").disabled = true;
        document.getElementById("emailerror2").style.display = "block";
    }
}


function confirmarTamanhoSenha() {
    let senha = document.getElementById("senha").value;
    
    if(senha.length < 8){
        document.getElementById("passworderror1").style.display = "block";
        document.getElementById("button").disabled = true;
        document.getElementById("senha").classList.add("button-vermelho");
    } else {
        document.getElementById("passworderror1").style.display = "none";
        document.getElementById("button").disabled = false;
        document.getElementById("senha").classList.add("input-sucesso");
    }
    
}