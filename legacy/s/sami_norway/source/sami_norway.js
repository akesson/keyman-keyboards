KeymanWeb.KR(new Keyboard_sami_norway());

function Keyboard_sami_norway() {
    this.KI = "Keyboard_sami_norway";
    this.KN = "Sami Extended Norway";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 1,
        BK: new Array("|", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "\\", "", "", "", "á", "š", "e", "r", "t", "ŧ", "u", "i", "o", "p", "å", "ŋ", "đ", "", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ø", "æ", "", "", "", "", "", "ž", "z", "č", "c", "v", "b", "n", "m", ",", ".", "-", "", "", "", "", "", " ", "§", "!", "\"", "#", "¤", "%", "&", "/", "(", ")", "=", "?", "`", "", "", "", "Á", "Š", "E", "R", "T", "Ŧ", "U", "I", "O", "P", "Å", "Ŋ", "Đ", "", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ø", "Æ", "", "", "", "", "", "Ž", "Z", "Č", "C", "V", "B", "N", "M", ";", ":", "_", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "@", "£", "$", "€", "", "{", "[", "]", "}", "", "´", "", "", "", "q", "w", "€", "", "", "y", "", "ï", "õ", "", "¨", "~", "'", "", "", "", "â", "", "", "", "ǧ", "ǥ", "", "ǩ", "", "ö", "ä", "", "", "", "", "", "ǯ", "ʒ", "x", "", "", "", "", "µ", "<", ">", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Q", "W", "", "", "", "Y", "", "Ï", "Õ", "", "^", "ˇ", "*", "", "", "", "Â", "", "", "", "Ǧ", "Ǥ", "", "Ǩ", "", "Ö", "Ä", "", "", "", "", "", "Ǯ", "Ʒ", "X", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s7 = " aAiInNoOuU";
    this.s8 = "~ãÃĩĨñÑõÕũŨ";
    this.s9 = " cCdDeEgGhHkKlLnNrRsStTzZʒƷ";
    this.s10 = "ˇčČďĎěĚǧǦȟȞǩǨľĽňŇřŘšŠťŤžŽǯǮ";
    this.s11 = " aAeEiIoOuUwWyY";
    this.s12 = "`àÀèÈìÌòÒùÙẁẀỳỲ";
    this.s13 = " aAcCeEiIlLnNoOrRsSuUwWyYzZøØåÅæÆ";
    this.s14 = "´áÁćĆéÉíÍĺĹńŃóÓŕŔśŚúÚẃẂýÝźŹǿǾǻǺǽǼ";
    this.s15 = " aAeEiIoOuUwWyY";
    this.s16 = "¨äÄëËïÏöÖüÜẅẄÿŸ";
    this.s17 = " aAcCeEgGhHiIjJoOsSuUwWyY";
    this.s18 = "^âÂĉĈêÊĝĜĥĤîÎĵĴôÔŝŜûÛŵŴŷŶ";
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
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16480, 48)) {
            m = 1;
            k.KO(0, t, "}");
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
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16480, 50)) {
            m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "#");
        } else if (k.KKM(e, 16480, 51)) {
            m = 1;
            k.KO(0, t, "£");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "¤");
        } else if (k.KKM(e, 16480, 52)) {
            m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16480, 53)) {
            m = 1;
            k.KO(0, t, "€");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "&");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16480, 55)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16480, 56)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16480, 57)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "a");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "A");
        } else if (k.KKM(e, 16480, 65)) {
            m = 1;
            k.KO(0, t, "â");
        } else if (k.KKM(e, 16496, 65)) {
            m = 1;
            k.KO(0, t, "Â");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "b");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "B");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "c");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "C");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "d");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "D");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "e");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "E");
        } else if (k.KKM(e, 16480, 69)) {
            m = 1;
            k.KO(0, t, "€");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "f");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "F");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "g");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "G");
        } else if (k.KKM(e, 16480, 71)) {
            m = 1;
            k.KO(0, t, "ǧ");
        } else if (k.KKM(e, 16496, 71)) {
            m = 1;
            k.KO(0, t, "Ǧ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "h");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "H");
        } else if (k.KKM(e, 16480, 72)) {
            m = 1;
            k.KO(0, t, "ǥ");
        } else if (k.KKM(e, 16496, 72)) {
            m = 1;
            k.KO(0, t, "Ǥ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "i");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "I");
        } else if (k.KKM(e, 16480, 73)) {
            m = 1;
            k.KO(0, t, "ï");
        } else if (k.KKM(e, 16496, 73)) {
            m = 1;
            k.KO(0, t, "Ï");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "j");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "J");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "k");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "K");
        } else if (k.KKM(e, 16480, 75)) {
            m = 1;
            k.KO(0, t, "ǩ");
        } else if (k.KKM(e, 16496, 75)) {
            m = 1;
            k.KO(0, t, "Ǩ");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "l");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "L");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "m");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "M");
        } else if (k.KKM(e, 16480, 77)) {
            m = 1;
            k.KO(0, t, "µ");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "n");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "N");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "o");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "O");
        } else if (k.KKM(e, 16480, 79)) {
            m = 1;
            k.KO(0, t, "õ");
        } else if (k.KKM(e, 16496, 79)) {
            m = 1;
            k.KO(0, t, "Õ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "p");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "P");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "á");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "Á");
        } else if (k.KKM(e, 16480, 81)) {
            m = 1;
            k.KO(0, t, "q");
        } else if (k.KKM(e, 16496, 81)) {
            m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "r");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "R");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "s");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "S");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "t");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "T");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "u");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "U");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "v");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "š");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "Š");
        } else if (k.KKM(e, 16480, 87)) {
            m = 1;
            k.KO(0, t, "w");
        } else if (k.KKM(e, 16496, 87)) {
            m = 1;
            k.KO(0, t, "W");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "č");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "Č");
        } else if (k.KKM(e, 16480, 88)) {
            m = 1;
            k.KO(0, t, "x");
        } else if (k.KKM(e, 16496, 88)) {
            m = 1;
            k.KO(0, t, "X");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ŧ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "Ŧ");
        } else if (k.KKM(e, 16480, 89)) {
            m = 1;
            k.KO(0, t, "y");
        } else if (k.KKM(e, 16496, 89)) {
            m = 1;
            k.KO(0, t, "Y");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "z");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "Z");
        } else if (k.KKM(e, 16480, 90)) {
            m = 1;
            k.KO(0, t, "ʒ");
        } else if (k.KKM(e, 16496, 90)) {
            m = 1;
            k.KO(0, t, "Ʒ");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ø");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "Ø");
        } else if (k.KKM(e, 16480, 186)) {
            m = 1;
            k.KO(0, t, "ö");
        } else if (k.KKM(e, 16496, 186)) {
            m = 1;
            k.KO(0, t, "Ö");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KDO(0, t, 2);
        } else if (k.KKM(e, 16480, 187)) {
            m = 1;
            k.KDO(0, t, 3);
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16480, 188)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16480, 190)) {
            m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "§");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "å");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "Å");
        } else if (k.KKM(e, 16480, 219)) {
            m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16496, 219)) {
            m = 1;
            k.KDO(0, t, 5);
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "đ");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "Đ");
        } else if (k.KKM(e, 16480, 220)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16496, 220)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ŋ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "Ŋ");
        } else if (k.KKM(e, 16480, 221)) {
            m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16496, 221)) {
            m = 1;
            k.KDO(0, t, 1);
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "æ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "Æ");
        } else if (k.KKM(e, 16480, 222)) {
            m = 1;
            k.KO(0, t, "ä");
        } else if (k.KKM(e, 16496, 222)) {
            m = 1;
            k.KO(0, t, "Ä");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "ž");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, "Ž");
        } else if (k.KKM(e, 16480, 226)) {
            m = 1;
            k.KO(0, t, "ǯ");
        } else if (k.KKM(e, 16496, 226)) {
            m = 1;
            k.KO(0, t, "Ǯ");
        }
        if (m) {
            this.g1(t, e);
        }
        return m;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KDM(1, t, 0) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KDM(1, t, 1) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KIO(1, this.s12, 1, t);
        } else if (k.KDM(1, t, 3) && k.KA(0, k.KC(1, 1, t), this.s13)) {
            m = 1;
            k.KIO(1, this.s14, 1, t);
        } else if (k.KDM(1, t, 4) && k.KA(0, k.KC(1, 1, t), this.s15)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
        } else if (k.KDM(1, t, 5) && k.KA(0, k.KC(1, 1, t), this.s17)) {
            m = 1;
            k.KIO(1, this.s18, 1, t);
        }
        return 0;
    };
}