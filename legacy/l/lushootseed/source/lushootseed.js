KeymanWeb.KR(new Keyboard_lushootseed());

function Keyboard_lushootseed() {
    this.KI = "Keyboard_lushootseed";
    this.KBVER = '1.1';
    this.KN = "Lushootseed Unicode";
    this.KV = {
        F: ' 1em "LushootseedSulad"',
        K102: 0,
        BK: new Array("©", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "q", "w", "ə", "š", "t", "y", "u", "i", "ʷ", "p", "[", "]", "\\", "", "", "", "a", "s", "d", "ʔ", "g", "h", "ǰ", "k", "l", "ɬ", "'", "", "", "", "", "", "\\", "x̌", "x", "c", "č", "b", "n", "m", ",", ".", "/", "", "", "", "", "", "", "©", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "", "", "q̓", "w̓", "q̓ʷ", "√", "t̕", "y̓", "", "kʷ", "", "p̓", "{", "}", "¦", "", "", "", "qʷ", "", "dᶻ", "", "gʷ", "", "k̓ʷ", "k̓", "l̕ ", "ƛ̕ ", "\"", "", "", "", "", "", "\\", "x̌ʷ", "xʷ", "c̓", "č̓", "b̓", "n̓", "m̓", "<", ">", "?", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 8) && k.KCM(3, t, "q̓ʷ", 3)) {
            r = m = 1;
            k.KO(3, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(3, t, "k̓ʷ", 3)) {
            r = m = 1;
            k.KO(3, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(3, t, "x̌ʷ", 3)) {
            r = m = 1;
            k.KO(3, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "x̌", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "q̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "w̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "t̕", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "y̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "kʷ", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "p̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "qʷ", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "dᶻ", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "gʷ", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "k̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "l̕", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "ƛ̕", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "xʷ", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "c̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "č̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "b̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "n̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KCM(2, t, "m̓", 2)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "0");
        } else if (k.KKM(e, 16400, 48)) {
            r = m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 16400, 49)) {
            r = m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16400, 50)) {
            r = m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            r = m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            r = m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16400, 53)) {
            r = m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "^");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            r = m = 1;
            k.KO(0, t, "&");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            r = m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16400, 57)) {
            r = m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "a");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "qʷ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "b");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "b̓");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "c");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "c̓");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "d");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "dᶻ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ə");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "q̓ʷ");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ʔ");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "g");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "gʷ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "h");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "i");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "kʷ");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ǰ");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "k̓ʷ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "k");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "k̓");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "l");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "l̕");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "m");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "m̓");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "n");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "n̓");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ʷ");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "p");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "p̓");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "q");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "q̓");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "š");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "√");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "s");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "t");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "t̕");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "u");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "č");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "č̓");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "w");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "w̓");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "x");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "xʷ");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "y");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "y̓");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "x̌");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "x̌ʷ");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ɬ");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "ƛ̕");
        } else if (k.KKM(e, 16384, 187)) {
            r = m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16400, 187)) {
            r = m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16384, 188)) {
            r = m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16384, 189)) {
            r = m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16400, 191)) {
            r = m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "©");
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "©");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16400, 221)) {
            r = m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 222)) {
            r = m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16384, 226)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 226)) {
            r = m = 1;
            k.KO(0, t, "\\");
        }
        return r;
    };
}