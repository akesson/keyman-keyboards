KeymanWeb.KR(new Keyboard_dvorak());

function Keyboard_dvorak() {
    this.KI = "Keyboard_dvorak";
    this.KN = "dvorak";
    this.KV = {
        F: ' 1em "Arial Unicode MS"',
        K102: 0,
        BK: new Array("`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "'", ",", ".", "p", "y", "f", "g", "c", "r", "l", "/", "=", "\\", "", "", "", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-", "", "", "", "", "", "", ";", "q", "j", "k", "x", "b", "m", "w", "v", "z", "", "", "", "", "", " ", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "", "", "\"", "<", ">", "P", "Y", "F", "G", "C", "R", "L", "?", "+", "|", "", "", "", "A", "O", "E", "U", "I", "D", "H", "T", "N", "S", "_", "", "", "", "", "", "", ":", "Q", "J", "K", "X", "B", "M", "W", "V", "Z", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ")
    };
    this.KH = "<a href='http://help.keymanweb.com/go?Keyboard=dvorak'>Help for this keyboard</a>";
    this.s4 = "dvorak.kvk";
    this.s5 = "<a href='documentation.html'>Help for this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16384, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 0, 33)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 0, 34)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 0, 35)) {
            m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 0, 36)) {
            m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 0, 37)) {
            m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 0, 38)) {
            m = 1;
            k.KO(0, t, "&");
        } else if (k.KKM(e, 0, 40)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 0, 41)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 0, 42)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 0, 43)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 0, 44)) {
            m = 1;
            k.KO(0, t, "w");
        } else if (k.KKM(e, 0, 45)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 0, 46)) {
            m = 1;
            k.KO(0, t, "v");
        } else if (k.KKM(e, 0, 47)) {
            m = 1;
            k.KO(0, t, "z");
        } else if (k.KKM(e, 0, 47)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 0, 48)) {
            m = 1;
            k.KO(0, t, "0");
        } else if (k.KKM(e, 0, 49)) {
            m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 0, 50)) {
            m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 0, 51)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 0, 52)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 0, 53)) {
            m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 0, 54)) {
            m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 0, 55)) {
            m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 0, 56)) {
            m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 0, 57)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 0, 58)) {
            m = 1;
            k.KO(0, t, "S");
        } else if (k.KKM(e, 0, 59)) {
            m = 1;
            k.KO(0, t, "s");
        } else if (k.KKM(e, 0, 60)) {
            m = 1;
            k.KO(0, t, "W");
        } else if (k.KKM(e, 0, 61)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 0, 62)) {
            m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 0, 63)) {
            m = 1;
            k.KO(0, t, "Z");
        } else if (k.KKM(e, 0, 64)) {
            m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 0, 65)) {
            m = 1;
            k.KO(0, t, "A");
        } else if (k.KKM(e, 0, 66)) {
            m = 1;
            k.KO(0, t, "X");
        } else if (k.KKM(e, 0, 67)) {
            m = 1;
            k.KO(0, t, "J");
        } else if (k.KKM(e, 0, 68)) {
            m = 1;
            k.KO(0, t, "E");
        } else if (k.KKM(e, 0, 69)) {
            m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 0, 70)) {
            m = 1;
            k.KO(0, t, "U");
        } else if (k.KKM(e, 0, 71)) {
            m = 1;
            k.KO(0, t, "I");
        } else if (k.KKM(e, 0, 72)) {
            m = 1;
            k.KO(0, t, "D");
        } else if (k.KKM(e, 0, 73)) {
            m = 1;
            k.KO(0, t, "C");
        } else if (k.KKM(e, 0, 74)) {
            m = 1;
            k.KO(0, t, "H");
        } else if (k.KKM(e, 0, 75)) {
            m = 1;
            k.KO(0, t, "T");
        } else if (k.KKM(e, 0, 76)) {
            m = 1;
            k.KO(0, t, "N");
        } else if (k.KKM(e, 0, 77)) {
            m = 1;
            k.KO(0, t, "M");
        } else if (k.KKM(e, 0, 78)) {
            m = 1;
            k.KO(0, t, "B");
        } else if (k.KKM(e, 0, 79)) {
            m = 1;
            k.KO(0, t, "R");
        } else if (k.KKM(e, 0, 80)) {
            m = 1;
            k.KO(0, t, "L");
        } else if (k.KKM(e, 0, 81)) {
            m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 0, 82)) {
            m = 1;
            k.KO(0, t, "P");
        } else if (k.KKM(e, 0, 83)) {
            m = 1;
            k.KO(0, t, "O");
        } else if (k.KKM(e, 0, 84)) {
            m = 1;
            k.KO(0, t, "Y");
        } else if (k.KKM(e, 0, 85)) {
            m = 1;
            k.KO(0, t, "G");
        } else if (k.KKM(e, 0, 86)) {
            m = 1;
            k.KO(0, t, "K");
        } else if (k.KKM(e, 0, 87)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 0, 88)) {
            m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 0, 89)) {
            m = 1;
            k.KO(0, t, "F");
        } else if (k.KKM(e, 0, 90)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 0, 91)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 0, 93)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 0, 94)) {
            m = 1;
            k.KO(0, t, "^");
        } else if (k.KKM(e, 0, 95)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 0, 96)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 0, 96)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 0, 97)) {
            m = 1;
            k.KO(0, t, "a");
        } else if (k.KKM(e, 0, 98)) {
            m = 1;
            k.KO(0, t, "x");
        } else if (k.KKM(e, 0, 99)) {
            m = 1;
            k.KO(0, t, "j");
        } else if (k.KKM(e, 0, 100)) {
            m = 1;
            k.KO(0, t, "e");
        } else if (k.KKM(e, 0, 101)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 0, 102)) {
            m = 1;
            k.KO(0, t, "u");
        } else if (k.KKM(e, 0, 103)) {
            m = 1;
            k.KO(0, t, "i");
        } else if (k.KKM(e, 0, 104)) {
            m = 1;
            k.KO(0, t, "d");
        } else if (k.KKM(e, 0, 105)) {
            m = 1;
            k.KO(0, t, "c");
        } else if (k.KKM(e, 0, 106)) {
            m = 1;
            k.KO(0, t, "h");
        } else if (k.KKM(e, 0, 107)) {
            m = 1;
            k.KO(0, t, "t");
        } else if (k.KKM(e, 0, 108)) {
            m = 1;
            k.KO(0, t, "n");
        } else if (k.KKM(e, 0, 109)) {
            m = 1;
            k.KO(0, t, "m");
        } else if (k.KKM(e, 0, 110)) {
            m = 1;
            k.KO(0, t, "b");
        } else if (k.KKM(e, 0, 111)) {
            m = 1;
            k.KO(0, t, "r");
        } else if (k.KKM(e, 0, 112)) {
            m = 1;
            k.KO(0, t, "l");
        } else if (k.KKM(e, 0, 113)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 0, 114)) {
            m = 1;
            k.KO(0, t, "p");
        } else if (k.KKM(e, 0, 115)) {
            m = 1;
            k.KO(0, t, "o");
        } else if (k.KKM(e, 0, 116)) {
            m = 1;
            k.KO(0, t, "y");
        } else if (k.KKM(e, 0, 117)) {
            m = 1;
            k.KO(0, t, "g");
        } else if (k.KKM(e, 0, 118)) {
            m = 1;
            k.KO(0, t, "k");
        } else if (k.KKM(e, 0, 119)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 0, 120)) {
            m = 1;
            k.KO(0, t, "q");
        } else if (k.KKM(e, 0, 121)) {
            m = 1;
            k.KO(0, t, "f");
        } else if (k.KKM(e, 0, 122)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 0, 123)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 0, 124)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 0, 125)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 0, 126)) {
            m = 1;
            k.KO(0, t, "~");
        }
        return m;
    };
}