function myFunction() {
      var input = document.getElementById("nom").value;
      var nomeCompleto = input.split(" ");
      document.getElementById("nom").value = "";
      document.getElementById("primeiro").innerHTML = nomeCompleto[0];
      document.getElementById("sobrenome").innerHTML = nomeCompleto[1];
    }