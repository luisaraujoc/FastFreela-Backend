// function validaCNPJ(cnpj) {
//   const b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
//   const c = String(cnpj).replace(/[^\d]/g, "");

//   if (c.length !== 14) return false;
//   if (/0{14}/.test(c)) return false;

//   for (let i = 0, n = 0; i < 12; n += c[i] * b[++i]);
//   if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

//   for (let i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
//   if (c[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

//   return true;
// }

//  function validaCPF(cpf) {
//    // Remove caracteres não numéricos
//    const strCPF = String(cpf).replace(/\D/g, "");

//    // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida
//    if (
//      strCPF.length !== 11 ||
//      /^(\d)\1+$/.test(strCPF) // Regex para detectar sequências repetidas (ex.: 00000000000)
//    ) {
//      return false;
//    }

//    // Função para calcular o dígito verificador
//    const calcularDigito = (base, pesoInicial) => {
//      const soma = base.reduce(
//        (acc, num, index) => acc + num * (pesoInicial - index),
//        0
//      );
//      const resto = (soma * 10) % 11;
//      return resto === 10 ? 0 : resto;
//    };

//    // Converte CPF para array de números
//    const cpfArray = strCPF.split("").map(Number);

//    // Verifica o primeiro dígito verificador
//    const primeiroDigito = calcularDigito(cpfArray.slice(0, 9), 10);
//    if (primeiroDigito !== cpfArray[9]) {
//      return false;
//    }

//    // Verifica o segundo dígito verificador
//    const segundoDigito = calcularDigito(cpfArray.slice(0, 10), 11);
//    return segundoDigito === cpfArray[10];
//  }



// module.exports = { validaCNPJ, validaCPF };