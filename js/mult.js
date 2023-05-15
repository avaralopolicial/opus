var i = parseInt(prompt("Escreva o número de linhas da 1º matriz: "));
var j = parseInt(prompt("Escreva o número de colunas da 1º matriz: "));
var k = parseInt(prompt("Escreva o número de linhas da 2º matriz: "));
var l = parseInt(prompt("Escreva o número de colunas da 2º matriz: "));

if (j != k) {
  alert("As matrizes não podem ser multiplicadas.");
  location.reload();
} else {
  alert("Matriz 1: \n" + i + " x " + j);
  alert("Matriz 2: \n" + k + " x " + l);

  var matA = [];
  var matB = [];

  // criando a matriz
  for (var c = 0; c < i; c++) {
    matA[c] = [];
    // cria uma matriz
    for (var d = 0; d < j; d++) {
      matA[c][d] = Math.floor(Math.random() * 100);
      // adiciona valores aleatórios inteiros de 0 a 100 para as coordenadas ditas por d e c
    }
  }
  // criando a matriz

  // cria a segunda matriz
  for (var c = 0; c < k; c++) {
    matB[c] = [];
    // cria uma matriz
    for (var d = 0; d < l; d++) {
      matB[c][d] = Math.floor(Math.random() * 100);
      // adiciona valores aleatórios inteiros de 0 a 100 para as coordenadas ditas por d e c
    }
  }
  // cria a segunda matriz

  // imprime no console
  for (var h = 0; h < matA.length; h++) {
    for (var g = 0; g < matA[h].length; g++) {
      console.log(matA[h][g]);
    }
  }

  // segunda

  for (var h = 0; h < matB.length; h++) {
    for (var g = 0; g < matB[h].length; g++) {
      console.log(matB[h][g]);
    }
  }
  // cria a segunda matriz
  for (var c = 0; c < k; c++) {
    matB[c] = [];
    // cria uma matriz
    for (var d = 0; d < l; d++) {
      matB[c][d] = Math.floor(Math.random() * 100);
      // adiciona valores aleatórios inteiros de 0 a 100 para as coordenadas ditas por d e c
    }
  }
  // cria a segunda matriz

  // imprime no console
  for (var h = 0; h < matA.length; h++) {
    for (var g = 0; g < matA[h].length; g++) {
      console.log(matA[h][g]);
    }
  }

  // segunda

  for (var h = 0; h < matB.length; h++) {
    for (var g = 0; g < matB[h].length; g++) {
      console.log(matB[h][g]);
    }
  }
  // imprime no console

  // deixa visivel na página
  
  document.write("Matrizes geradas: ");

  document.write("<br><br>");

  document.write("<div class='row'>");
  document.write("<div class='col-md-3'>");

  document.write("<div class='sh'>");
  document.write("<div class='en'>");

  for (var h = 0; h < i; h++) {
    for (var g = 0; g < matA[h].length; g++) {
      document.write(matA[h][g] + " ");
    }
    document.write("<br>");
  }
  document.write("<br>");
  document.write("</div>");
  document.write("</div>");

  document.write("</div>");

  // segunda
  document.write("<div class='col-md-1'>");
  document.write("*");
  document.write(" </div> ");

  document.write("<div class='col-md-3'>");

  document.write("<div class='sh'>");
  document.write("<div class='en'>");

  for (var h = 0; h < k; h++) {
    for (var g = 0; g < matB[h].length; g++) {
      document.write(matB[h][g] + " ");
    }
    document.write("<br>");
  }
  document.write("<br>");
  document.write("</div>");
  document.write("</div>");

  document.write("</div>");

  document.write("<div class='col-md-1'>");
  document.write("=");
  document.write(" </div> ");
  // deixa visivel na página

  document.write("<br>");

  // faz o cálculo

  var matC = [];

  for (var c = 0; c < i; c++) {
    matC[c] = [];
    // cria a matriz resposta
    for (var d = 0; d < l; d++) {
      var sum = 0;
      for (var e = 0; e < j; e++) {
        sum += matA[c][e] * matB[e][d];
      }
      matC[c][d] = sum;
    }
  }

  // faz o cálculo

  // imprime o resultado
  document.write(" <div class='col-md-4'> ");
  document.write("<div class='sh'>");
  document.write("<div class='en'>");

  for (var h = 0; h < i; h++) {
    for (var g = 0; g < matC[h].length; g++) {
      document.write(matC[h][g] + " ");
    }
    document.write("<br>");
  }
  
  document.write("</div>");
  document.write("</div>");

  document.write(" </div> ");
  document.write("</div>");
  // imprime o resultado
}
