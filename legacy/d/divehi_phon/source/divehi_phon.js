KeymanWeb.KR(new Keyboard_divehi_phon());

function Keyboard_divehi_phon() {
    this.KI = "Keyboard_divehi_phon";
    this.KBVER = '1.1';
    this.KN = "Divehi Phonetic";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "ް", "އ", "ެ", "ރ", "ތ", "ޔ", "ު", "ި", "ޮ", "ޕ", "]", "[", "\\", "", "", "", "ަ", "ސ", "ދ", "ފ", "ގ", "ހ", "ޖ", "ކ", "ލ", "؛", "'", "", "", "", "", "", "\\", "ޒ", "×", "ޗ", "ވ", "ބ", "ނ", "މ", "،", ".", "/", "", "", "", "", "", " ", "~", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "_", "+", "", "", "", "ޤ", "ޢ", "ޭ", "ޜ", "ޓ", "ޠ", "ޫ", "ީ", "ޯ", "÷", "}", "{", "|", "", "", "", "ާ", "ށ", "ޑ", "ﷲ", "ޣ", "ޙ", "ޛ", "ޚ", "ޅ", ":", "\"", "", "", "", "", "", "|", "ޡ", "ޘ", "ޝ", "ޥ", "ޞ", "ޏ", "ޟ", ">", "<", "؟", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ";", "", "", "", "", "", "", "", "", "", "", "‍", "‌", "‎", "‏", ",", "", "", "", "", "", "", "", "")
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
            k.KO(0, t, "(");
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
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "$");
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
            k.KO(0, t, "ަ");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "ާ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ބ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "ޞ");
        } else if (k.KKM(e, 16480, 66)) {
            m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ޗ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ޝ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ދ");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ޑ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ެ");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ޭ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ފ");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ﷲ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ގ");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "ޣ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ހ");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ޙ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ި");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ީ");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ޖ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ޛ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ކ");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "ޚ");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ލ");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "ޅ");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "މ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ޟ");
        } else if (k.KKM(e, 16480, 77)) {
            m = 1;
            k.KO(0, t, "‏");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ނ");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "ޏ");
        } else if (k.KKM(e, 16480, 78)) {
            m = 1;
            k.KO(0, t, "‎");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ޮ");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ޯ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ޕ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "÷");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ް");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ޤ");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ރ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ޜ");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ސ");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ށ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ތ");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ޓ");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ު");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ޫ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ވ");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ޥ");
        } else if (k.KKM(e, 16480, 86)) {
            m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "އ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ޢ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "×");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ޘ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ޔ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "ޠ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ޒ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ޡ");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "؛");
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
            k.KO(0, t, "،");
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
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "؟");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "~");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "\"");
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