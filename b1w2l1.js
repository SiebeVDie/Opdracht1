var small = prompt('hoeveel small pizzas wilt u. €8 per stuk');
var medium = prompt('hoeveel medium pizzas wilt u. €11 per stuk');
var large = prompt('hoeveel large pizzas wilt u. €13 per stuk');
var prijsSmall = 8
var prijsMedium = 11
var prijsLarge = 13
var prijs = prijsSmall * small + prijsMedium * medium + prijsLarge * large
var LossePrijsSmall = small * prijsSmall
var LossePrijsMedium = medium * prijsMedium
var LossePrijslarge = large * prijsLarge 


document.write('Hoeveelheid small:  ' + small);
document.write('<br>')
document.write('€' + LossePrijsSmall);
document.write('<br>')
document.write('<br>')
document.write('Hoeveelheid medium:  ' + medium);
document.write('<br>')
document.write('€' + LossePrijsMedium)
document.write('<br>')
document.write('<br>')
document.write('Hoeveelheid large:  ' + large);
document.write('<br>')
document.write('€' + LossePrijslarge)
document.write('<br>')
document.write('<br>')
document.write('Totaal prijs:  €' + prijs);