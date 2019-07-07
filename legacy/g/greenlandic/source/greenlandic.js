KeymanWeb.KR(new Keyboard_greenlandic());

function Keyboard_greenlandic() {
    this.KI = "Keyboard_greenlandic";
    this.KN = "Greenlandic";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 1,
        KDU: 1,
        BK: new Array("½", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "", "", "", "", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å", "", "'", "", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", "æ", "ø", "", "", "", "", "", "<", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "", "", "", "", "", " ", "§", "!", "\"", "#", "¤", "%", "&", "/", "(", ")", "=", "?", "", "", "", "", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å", "", "*", "", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Æ", "Ø", "", "", "", "", "", ">", "Z", "X", "C", "V", "B", "N", "M", ";", ":", "_", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "@", "£", "$", "€", "", "{", "[", "]", "}", "", "|", "", "", "", "", "", "€", "", "", "", "", "", "", "þ", "", "", "", "", "", "", "", "ß", "ð", "", "", "", "", "ĸ", "", "", "", "", "", "", "", "", "\\", "", "", "", "", "", "", "µ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Þ", "", "", "", "", "", "", "", "", "Ð", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s12 = " aAeEiIoOuUwWyY";
    this.s13 = "¨äÄëËïÏöÖüÜẅẄÿŸ";
    this.s14 = " aAcCeEgGhHiIjJoOsSuUwWyY";
    this.s15 = "^âÂĉĈêÊĝĜĥĤîÎĵĴôÔŝŜûÛŵŴŷŶ";
    this.s16 = " aAiInNoOuU";
    this.s17 = "~ãÃĩĨñÑõÕũŨ";
    this.s18 = " aAcCeEiIlLnNoOrRsSuUwWyYzZæÆåÅøØ";
    this.s19 = "´áÁćĆéÉíÍĺĹńŃóÓŕŔśŚúÚẃẂýÝźŹǽǼǻǺǿǾ";
    this.s20 = " aAeEiIoOuUwWyY";
    this.s21 = "`àÀèÈìÌòÒùÙẁẀỳỲ";
    this.KVER = "9.0.424.0";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 32)) {
            r = m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16400, 32)) {
            r = m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16416, 32)) {
            r = m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "0");
        } else if (k.KKM(e, 16400, 48)) {
            r = m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16480, 48)) {
            r = m = 1;
            k.KO(0, t, "}");
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
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16480, 50)) {
            r = m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            r = m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16480, 51)) {
            r = m = 1;
            k.KO(0, t, "£");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            r = m = 1;
            k.KO(0, t, "¤");
        } else if (k.KKM(e, 16480, 52)) {
            r = m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16400, 53)) {
            r = m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16480, 53)) {
            r = m = 1;
            k.KO(0, t, "€");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "&");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            r = m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16480, 55)) {
            r = m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            r = m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16480, 56)) {
            r = m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16400, 57)) {
            r = m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16480, 57)) {
            r = m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "a");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "A");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "A");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "a");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "b");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "B");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "B");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "b");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "c");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "C");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "C");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "c");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "d");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "D");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "D");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "d");
        } else if (k.KKM(e, 16480, 68)) {
            r = m = 1;
            k.KO(0, t, "ð");
        } else if (k.KKM(e, 16480, 68)) {
            r = m = 1;
            k.KO(0, t, "Ð");
        } else if (k.KKM(e, 16496, 68)) {
            r = m = 1;
            k.KO(0, t, "Ð");
        } else if (k.KKM(e, 16496, 68)) {
            r = m = 1;
            k.KO(0, t, "ð");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "e");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "E");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "E");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "e");
        } else if (k.KKM(e, 16480, 69)) {
            r = m = 1;
            k.KO(0, t, "€");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "f");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "F");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "F");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "f");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "g");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "G");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "G");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "g");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "h");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "H");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "H");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "h");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "i");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "I");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "I");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "i");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "j");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "J");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "J");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "j");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "k");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "K");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "K");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "k");
        } else if (k.KKM(e, 16480, 75)) {
            r = m = 1;
            k.KO(0, t, "ĸ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "l");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "L");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "L");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "l");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "m");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "M");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "M");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "m");
        } else if (k.KKM(e, 16480, 77)) {
            r = m = 1;
            k.KO(0, t, "µ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "n");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "N");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "N");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "n");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "o");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "O");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "O");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "o");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "p");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "P");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "P");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "p");
        } else if (k.KKM(e, 16480, 80)) {
            r = m = 1;
            k.KO(0, t, "þ");
        } else if (k.KKM(e, 16480, 80)) {
            r = m = 1;
            k.KO(0, t, "Þ");
        } else if (k.KKM(e, 16496, 80)) {
            r = m = 1;
            k.KO(0, t, "Þ");
        } else if (k.KKM(e, 16496, 80)) {
            r = m = 1;
            k.KO(0, t, "þ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "q");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "q");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "r");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "R");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "R");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "r");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "s");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "S");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "S");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "s");
        } else if (k.KKM(e, 16480, 83)) {
            r = m = 1;
            k.KO(0, t, "ß");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "t");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "T");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "T");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "t");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "u");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "U");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "U");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "u");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "v");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "v");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "w");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "W");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "W");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "w");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "x");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "X");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "X");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "x");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "y");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "Y");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "Y");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "y");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "z");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "Z");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "Z");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "z");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "æ");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "Æ");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "Æ");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "æ");
        } else if (k.KKM(e, 16384, 187)) {
            r = m = 1;
            k.KDO(0, t, 3);
        } else if (k.KKM(e, 16400, 187)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16480, 187)) {
            r = m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16384, 188)) {
            r = m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16384, 189)) {
            r = m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 191)) {
            r = m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "½");
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "§");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "å");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "Å");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "Å");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "å");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16400, 221)) {
            r = m = 1;
            k.KDO(0, t, 1);
        } else if (k.KKM(e, 16480, 221)) {
            r = m = 1;
            k.KDO(0, t, 2);
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "ø");
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "Ø");
        } else if (k.KKM(e, 16400, 222)) {
            r = m = 1;
            k.KO(0, t, "Ø");
        } else if (k.KKM(e, 16400, 222)) {
            r = m = 1;
            k.KO(0, t, "ø");
        } else if (k.KKM(e, 16384, 226)) {
            r = m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16400, 226)) {
            r = m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16480, 226)) {
            r = m = 1;
            k.KO(0, t, "\\");
        }
        if (m) {
            r = this.g1(t, e);
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KDM(1, t, 0) && k.KA(0, k.KC(1, 1, t), this.s12)) {
            m = 1;
            k.KIO(1, this.s13, 1, t);
        } else if (k.KDM(1, t, 1) && k.KA(0, k.KC(1, 1, t), this.s14)) {
            m = 1;
            k.KIO(1, this.s15, 1, t);
        } else if (k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s17, 1, t);
        } else if (k.KDM(1, t, 3) && k.KA(0, k.KC(1, 1, t), this.s18)) {
            m = 1;
            k.KIO(1, this.s19, 1, t);
        } else if (k.KDM(1, t, 4) && k.KA(0, k.KC(1, 1, t), this.s20)) {
            m = 1;
            k.KIO(1, this.s21, 1, t);
        }
        return r;
    };
}