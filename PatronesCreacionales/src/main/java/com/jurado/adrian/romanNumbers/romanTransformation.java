package com.jurado.adrian.romanNumbers;

public class romanTransformation {
    public static void romanNumbers (int number) {
        int thousandths, hundreds, dozens, units;
        String romanNum = " ";

        //value for thousandths , hundreds, dozens and units
        thousandths = number/1000;
        hundreds = (number/100) % 10;
        dozens = (number/10) % 10;
        units = number % 10;

        for(int i = 0; i < thousandths; i++){
            romanNum = romanNum + "M";
        }

        if (hundreds == 9  ) {
            romanNum = romanNum + "CM";
        } else if ( hundreds >= 5) {
            romanNum = romanNum + "D";
            for (int i = 6; i <= hundreds; i++) {
                romanNum = romanNum + "C";
            }
        } else if ( hundreds == 4 ) {
            romanNum = romanNum + "CD";
        } else {
            for (int i = 1; i <= hundreds; i++) {
                romanNum = romanNum + "C";
            }
        }

        if (dozens == 9) {
            romanNum = romanNum + "XC";
        } else if (dozens >= 5) {
            romanNum = romanNum + "L";
            for (int i = 6; i <= dozens; i++) {
                romanNum = romanNum + "X";
            }
        } else if (dozens == 4) {
            romanNum = romanNum + "XL";
        } else {
            for (int i = 1; i <= dozens; i++) {
                romanNum = romanNum + "X";
            }
        }

        if (units == 9) {
            romanNum = romanNum + "IX";
        } else if (units >= 5) {
            romanNum = romanNum + "V";
            for (int i = 6; i <= units; i++) {
                romanNum = romanNum + "I";
            }
        } else if (units == 4) {
            romanNum = romanNum + "IV";
        } else {
            for (int i = 1; i <= units; i++) {
                romanNum = romanNum + "I";
            }
        }

        System.out.println("El numero romanos es: " + romanNum);
    }
}
