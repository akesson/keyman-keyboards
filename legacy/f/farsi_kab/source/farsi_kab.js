KeymanWeb.KR(new Keyboard_farsi_kab());

function Keyboard_farsi_kab() {
    this.KI = "Keyboard_farsi_kab";
    this.KN = "KAB-Farsi-Unicode-Inscript";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 1,
        BK: new Array("÷", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ", "پ", "", "", "", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "", "", "", "", "", "پ", "ظ", "ط", "ز", "ر", "ذ", "د", "ئ", "و", ".", "/", "", "", "", "", "", " ", "×", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "_", "+", "", "", "", "ً", "ٌ", "ٍ", "ريال", "،", "؛", ",", "]", "[", "\\", "}", "{", "|", "", "", "", "َ", "ُ", "ِ", "ّ", "ۀ", "آ", "ـ", "«", "»", ":", "\"", "", "", "", "", "", "|", "ة", "ي", "ژ", "ؤ", "إ", "أ", "ء", "<", ">", "؟", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "ہ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "‍", "‌", "‎", "‏", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.KRTL = 1;
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
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16416, 48)) {
            m = 1;
            k.KO(0, t, "ہ");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16432, 49)) {
            m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16432, 50)) {
            m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16432, 51)) {
            m = 1;
            k.KO(0, t, "‎");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16432, 52)) {
            m = 1;
            k.KO(0, t, "‏");
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
            k.KO(0, t, "^");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "&");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ش");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "َ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ذ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "إ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ز");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ژ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ی");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ِ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ث");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ٍ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ب");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ّ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ل");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "ۀ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ا");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "آ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ه");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ت");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ـ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ن");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "«");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "م");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "»");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ئ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ء");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "د");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "أ");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "خ");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ح");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ض");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ً");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ق");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ريال");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "س");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ُ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ف");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "،");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ع");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ر");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ؤ");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ص");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ٌ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ط");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ي");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "غ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "؛");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ظ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ة");
        } else if (k.KKM(e, 16384, 106)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16400, 106)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16384, 107)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16400, 107)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16384, 109)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 109)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ک");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "و");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "؟");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "÷");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "×");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ج");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "پ");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "چ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "گ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "پ");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, "|");
        }
        return m;
    };
}