KeymanWeb.KR(new Keyboard_bulgarian());

function Keyboard_bulgarian() {
    this.KI = "Keyboard_bulgarian";
    this.KN = "Bulgarian";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 1,
        BK: new Array("`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", ".", "", "", "", ",", "у", "е", "и", "ш", "щ", "к", "с", "д", "з", "ц", ";", "(", "", "", "", "ь", "я", "а", "о", "ж", "г", "т", "н", "в", "м", "ч", "", "", "", "", "", "\\", "ю", "й", "ъ", "э", "ф", "х", "п", "р", "л", "б", "", "", "", "", "", " ", "~", "!", "?", "+", "\"", "%", "=", ":", "/", "_", "№", "І", "V", "", "", "", "ы", "У", "Е", "И", "Ш", "Щ", "К", "С", "Д", "З", "Ц", "§", ")", "", "", "", "Ь", "Я", "А", "О", "Ж", "Г", "Т", "Н", "В", "М", "Ч", "", "", "", "", "", "|", "Ю", "Й", "Ъ", "Э", "Ф", "Х", "П", "Р", "Л", "Б", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ")
    };
    this.KH = '';
    this.KM = 0;
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16384, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16400, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16416, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16384, 48)) {
            m = 1;
            k.KO(0, t, "0");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, "№");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ь");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "Ь");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ф");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "Ф");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ъ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "Ъ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "а");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "А");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "е");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "Е");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "о");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "О");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ж");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "Ж");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "г");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "Г");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "с");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "С");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "т");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "Т");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "н");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "Н");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "в");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "В");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "п");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "П");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "х");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "Х");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "д");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "Д");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "з");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "З");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ы");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "и");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "И");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "я");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "Я");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ш");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "Ш");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "к");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "К");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "э");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "Э");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "у");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "У");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "й");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "Й");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "щ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "Щ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ю");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "Ю");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "м");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "М");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "р");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "Р");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "І");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, "л");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "Л");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "б");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "Б");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "~");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ц");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "Ц");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "§");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "ч");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "Ч");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, "|");
        }
        return m;
    };
}