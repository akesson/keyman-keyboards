KeymanWeb.KR(new Keyboard_dari_clra());

function Keyboard_dari_clra() {
    this.KI = "Keyboard_dari_clra";
    this.KN = "Dari (CLRA)";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("‍", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰", "-", "=", "", "", "", "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ", "\\", "", "", "", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "", "", "", "", "", "\\", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و", ".", "/", "", "", "", "", "", " ", "÷", "!", "٬", "٫", "", "٪", "×", "،", "*", ")", "(", "ـ", "+", "", "", "", "ْ", "ٌ", "ٍ", "ً", "ُ", "ِ", "َ", "ّ", "]", "[", "}", "{", "|", "", "", "", "ؤ", "ئ", "ي", "إ", "أ", "آ", "ة", "»", "«", ":", "؛", "", "", "", "", "", "|", "ك", "ٓ", "ژ", "ٰ", "‌", "ٔ", "ء", ">", "<", "؟", "", "", "", "", "", "‌", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "~", "`", "@", "#", "$", "%", "^", "&", "•", "‎", "‏", "_", "", "", "", "", "°", "", "€", "﴾", "﴿", "ٖ", "", "ٕ", "'", "\"", "ځ", "څ", "?", "", "", "", "ښ", "ۍ", "ى", "ې", "ڷ", "ٱ", "ټ", "ڼ", "ں", ";", "ګ", "", "", "", "", "", "?", "ے", "ڑ", "ږ", "ړ", "ڈ", "ډ", "ٹ", ",", "ۇ", "ۉ", "", "", "", "", "", " ")
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
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16480, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16384, 48)) {
            m = 1;
            k.KO(0, t, "۰");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16480, 48)) {
            m = 1;
            k.KO(0, t, "‏");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "۱");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16480, 49)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "۲");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "٬");
        } else if (k.KKM(e, 16480, 50)) {
            m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "۳");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "٫");
        } else if (k.KKM(e, 16480, 51)) {
            m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "۴");
        } else if (k.KKM(e, 16480, 52)) {
            m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "۵");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "٪");
        } else if (k.KKM(e, 16480, 53)) {
            m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "۶");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "×");
        } else if (k.KKM(e, 16480, 54)) {
            m = 1;
            k.KO(0, t, "^");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "۷");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "،");
        } else if (k.KKM(e, 16480, 55)) {
            m = 1;
            k.KO(0, t, "&");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "۸");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16480, 56)) {
            m = 1;
            k.KO(0, t, "•");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "۹");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16480, 57)) {
            m = 1;
            k.KO(0, t, "‎");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ش");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "ؤ");
        } else if (k.KKM(e, 16480, 65)) {
            m = 1;
            k.KO(0, t, "ښ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ذ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16480, 66)) {
            m = 1;
            k.KO(0, t, "ڈ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ز");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ژ");
        } else if (k.KKM(e, 16480, 67)) {
            m = 1;
            k.KO(0, t, "ږ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ی");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ي");
        } else if (k.KKM(e, 16480, 68)) {
            m = 1;
            k.KO(0, t, "ى");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ث");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ٍ");
        } else if (k.KKM(e, 16480, 69)) {
            m = 1;
            k.KO(0, t, "€");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ب");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "إ");
        } else if (k.KKM(e, 16480, 70)) {
            m = 1;
            k.KO(0, t, "ې");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ل");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "أ");
        } else if (k.KKM(e, 16480, 71)) {
            m = 1;
            k.KO(0, t, "ڷ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ا");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "آ");
        } else if (k.KKM(e, 16480, 72)) {
            m = 1;
            k.KO(0, t, "ٱ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ه");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ّ");
        } else if (k.KKM(e, 16480, 73)) {
            m = 1;
            k.KO(0, t, "ٕ");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ت");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ة");
        } else if (k.KKM(e, 16480, 74)) {
            m = 1;
            k.KO(0, t, "ټ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ن");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "»");
        } else if (k.KKM(e, 16480, 75)) {
            m = 1;
            k.KO(0, t, "ڼ");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "م");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "«");
        } else if (k.KKM(e, 16480, 76)) {
            m = 1;
            k.KO(0, t, "ں");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "پ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ء");
        } else if (k.KKM(e, 16480, 77)) {
            m = 1;
            k.KO(0, t, "ٹ");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "د");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "ٔ");
        } else if (k.KKM(e, 16480, 78)) {
            m = 1;
            k.KO(0, t, "ډ");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "خ");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16480, 79)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ح");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16480, 80)) {
            m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ض");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ْ");
        } else if (k.KKM(e, 16480, 81)) {
            m = 1;
            k.KO(0, t, "°");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ق");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ً");
        } else if (k.KKM(e, 16480, 82)) {
            m = 1;
            k.KO(0, t, "﴾");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "س");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ئ");
        } else if (k.KKM(e, 16480, 83)) {
            m = 1;
            k.KO(0, t, "ۍ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ف");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ُ");
        } else if (k.KKM(e, 16480, 84)) {
            m = 1;
            k.KO(0, t, "﴿");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ع");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "َ");
        } else if (k.KKM(e, 16480, 85)) {
            m = 1;
            k.KO(0, t, "");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ر");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ٰ");
        } else if (k.KKM(e, 16480, 86)) {
            m = 1;
            k.KO(0, t, "ړ");
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
            k.KO(0, t, "ٓ");
        } else if (k.KKM(e, 16480, 88)) {
            m = 1;
            k.KO(0, t, "ڑ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "غ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "ِ");
        } else if (k.KKM(e, 16480, 89)) {
            m = 1;
            k.KO(0, t, "ٖ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ظ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ك");
        } else if (k.KKM(e, 16480, 90)) {
            m = 1;
            k.KO(0, t, "ے");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ک");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16480, 186)) {
            m = 1;
            k.KO(0, t, ";");
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
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16480, 188)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ـ");
        } else if (k.KKM(e, 16480, 189)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16480, 190)) {
            m = 1;
            k.KO(0, t, "ۇ");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "؟");
        } else if (k.KKM(e, 16480, 191)) {
            m = 1;
            k.KO(0, t, "ۉ");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "÷");
        } else if (k.KKM(e, 16480, 192)) {
            m = 1;
            k.KO(0, t, "~");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ج");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16480, 219)) {
            m = 1;
            k.KO(0, t, "ځ");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16480, 220)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "چ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16480, 221)) {
            m = 1;
            k.KO(0, t, "څ");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "گ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "؛");
        } else if (k.KKM(e, 16480, 222)) {
            m = 1;
            k.KO(0, t, "ګ");
        } else if (k.KKM(e, 16480, 226)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "\\");
        }
        return m;
    };
}