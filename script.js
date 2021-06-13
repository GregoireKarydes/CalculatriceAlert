function calculatrice() {

do {
    var number1 = Number(prompt("Merci d'indiquer votre premier nombre"));
} while (isNaN(number1));

do {
    var choixOpp = Number(prompt("1 - Multiplication \n2 - Addition \n3 - Soustraction \n4 - Division "));
} while (choixOpp !==1 & choixOpp !==2 & choixOpp !==3 & choixOpp!==4);


do {
        var number2 = Number(prompt("Merci d'indiquer votre second nombre"));
        if(number2==0 & choixOpp ==4) {
        alert("Impossible de diviser par zéro");
        calculatrice();
        }

} while (isNaN(number2));


switch(choixOpp) {
    case 1 : {
        alert( "Resultat \n" + number1*number2);
        calculatrice();
    }
    break;

    case 2 : {
        alert("Resultat \n" + number1+number2);
        calculatrice();
    }
    break;

    case 3 : {
        alert( "Resultat \n" +number1-number2);
        calculatrice();
    }
    break;

    case 4 : {
        alert( "Resultat \n" +number1/number2);
        calculatrice();
    }
    break;
}

}

calculatrice();