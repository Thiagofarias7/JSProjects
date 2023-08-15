let value = parseInt(prompt("Digite o valor e o converta para Romano"));
var milhar, centena, dezena, unidade, v1, v2, v3, v4;
milhar = Math.floor(value / 1000);
centena = Math.floor((value % 1000) / 100);
dezena = Math.floor((value % 100) / 10);
unidade = value % 10;

switch (milhar) {
  case 1: v1 = "M"; break;
  case 2: v1 = "MM"; break;
  case 3: v1 = "MMM"; break;
  default: v1 = "";
}

switch (centena) {
  case 1: v2 = "C"; break;
  case 2: v2 = "CC"; break;
  case 3: v2 = "CCC"; break;
  case 4: v2 = "CD"; break;
  case 5: v2 = "D"; break;
  case 6: v2 = "DC"; break;
  case 7: v2 = "DCC"; break;
  case 8: v2 = "DCCC"; break;
  case 9: v2 = "CM"; break;
  default: v2 = "";
}

switch (dezena) {
  case 1: v3 = "X"; break;
  case 2: v3 = "XX"; break;
  case 3: v3 = "XXX"; break;
  case 4: v3 = "XL"; break;
  case 5: v3 = "L"; break;
  case 6: v3 = "LX"; break;
  case 7: v3 = "LXX"; break;
  case 8: v3 = "LXXX"; break;
  case 9: v3 = "XC"; break;
  default: v3 = "";
}

switch (unidade) {
  case 1: v4 = "I"; break;
  case 2: v4 = "II"; break;
  case 3: v4 = "III"; break;
  case 4: v4 = "IV"; break;
  case 5: v4 = "V"; break;
  case 6: v4 = "VI"; break;
  case 7: v4 = "VII"; break;
  case 8: v4 = "VIII"; break;
  case 9: v4 = "IX"; break;
  default: v4 = "";
}

console.log(v1 + v2 + v3 + v4);
console.log("-------------------");
