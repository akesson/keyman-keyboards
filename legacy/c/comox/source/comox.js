KeymanWeb.KR(new Keyboard_comox());

function Keyboard_comox() {
    this.KI = "Keyboard_comox";
    this.KN = "Klahoose";
    this.KV = {
        F: ' 1em "Aboriginal Sans"',
        K102: 0,
        BK: new Array("´", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "ƛ", "θ", "\\", "", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ə", "’", "", "", "", "", "", "", "z", "x", "c", "v", "b", "n", "m", ",", ".", "ʔ", "", "", "", "", "", "", "‘", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "“", "”", "", "", "", "Q", "ʷ", "ɛ", "R", "ᶿ", "ʸ", "ʊ", "ɩ", "ɔ", "P", "{", "}", "|", "", "", "", "æ", "š", "D", "F", "G", "H", "ǰ", "K", "ɬ", ":", "\"", "", "", "", "", "", "", "Z", "χ", "č", "w̥", "B", "N", "M", "’", ">", "?", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "`", "", "", "", "", "", "", "", "", "«", "»", "_", "+", "", "", "", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "", "", "", "", "", "", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "/", "", "", "", "", "", "", "~", "", "", "", "", "", "", "", "", "‹", "›", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "{", "}", "|", "", "", "", "", "", "", "", "", "", "", "", "", ":", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '﻿<style type=\'text/css\'>   #kmw_help { font: 9pt Tahoma; padding: 0; margin: -1em 0 0 0; }   #kmw_help ul { margin: 0 1em 0 2em; }   #kmw_help li { margin: 0; padding: 0; }   #kmw_help span.key { font: bold 8pt Arial; background: #e0e0e0; border: solid 1px #c0c0c0; padding: 0 4px }   #kmw_help span.out { font: bold 8pt Arial; color: blue; } </style> <div id=\'kmw_help\'> <ul>                                         <li>To type the glottal accent <span class=\'out\'>’</span> use the Apostrophe key <span class=\'key\'>\'</span></li> <li>To type the acute accent <span class=\'out\'>´</span> use the Grave key <span class=\'key\'>`</span></li> <li><a href=\'http://www.languagegeek.com/kmhelp/coo-k.html\' target=\'_blank\'>Klahoose keyboard help</a></li> </ul> </div> ';
    this.KM = 0;
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16496, 48)) {
            m = 1;
            k.KO(0, t, "›");
        } else if (k.KKM(e, 16480, 48)) {
            m = 1;
            k.KO(0, t, "»");
        } else if (k.KKM(e, 16496, 57)) {
            m = 1;
            k.KO(0, t, "‹");
        } else if (k.KKM(e, 16480, 57)) {
            m = 1;
            k.KO(0, t, "«");
        } else if (k.KKM(e, 16480, 65)) {
            m = 1;
            k.KO(0, t, "A");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "æ");
        } else if (k.KKM(e, 16480, 66)) {
            m = 1;
            k.KO(0, t, "B");
        } else if (k.KKM(e, 16480, 67)) {
            m = 1;
            k.KO(0, t, "C");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "č");
        } else if (k.KKM(e, 16480, 68)) {
            m = 1;
            k.KO(0, t, "D");
        } else if (k.KKM(e, 16480, 69)) {
            m = 1;
            k.KO(0, t, "E");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ɛ");
        } else if (k.KKM(e, 16480, 70)) {
            m = 1;
            k.KO(0, t, "F");
        } else if (k.KKM(e, 16480, 71)) {
            m = 1;
            k.KO(0, t, "G");
        } else if (k.KKM(e, 16480, 72)) {
            m = 1;
            k.KO(0, t, "H");
        } else if (k.KKM(e, 16480, 73)) {
            m = 1;
            k.KO(0, t, "I");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ɩ");
        } else if (k.KKM(e, 16480, 74)) {
            m = 1;
            k.KO(0, t, "J");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ǰ");
        } else if (k.KKM(e, 16480, 75)) {
            m = 1;
            k.KO(0, t, "K");
        } else if (k.KKM(e, 16480, 76)) {
            m = 1;
            k.KO(0, t, "L");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "ɬ");
        } else if (k.KKM(e, 16480, 77)) {
            m = 1;
            k.KO(0, t, "M");
        } else if (k.KKM(e, 16480, 78)) {
            m = 1;
            k.KO(0, t, "N");
        } else if (k.KKM(e, 16480, 79)) {
            m = 1;
            k.KO(0, t, "O");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ɔ");
        } else if (k.KKM(e, 16480, 80)) {
            m = 1;
            k.KO(0, t, "P");
        } else if (k.KKM(e, 16480, 81)) {
            m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 16480, 82)) {
            m = 1;
            k.KO(0, t, "R");
        } else if (k.KKM(e, 16480, 83)) {
            m = 1;
            k.KO(0, t, "S");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "š");
        } else if (k.KKM(e, 16480, 84)) {
            m = 1;
            k.KO(0, t, "T");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ᶿ");
        } else if (k.KKM(e, 16480, 85)) {
            m = 1;
            k.KO(0, t, "U");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ʊ");
        } else if (k.KKM(e, 16480, 86)) {
            m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "w̥");
        } else if (k.KKM(e, 16480, 87)) {
            m = 1;
            k.KO(0, t, "W");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ʷ");
        } else if (k.KKM(e, 16480, 88)) {
            m = 1;
            k.KO(0, t, "X");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "χ");
        } else if (k.KKM(e, 16480, 89)) {
            m = 1;
            k.KO(0, t, "Y");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "ʸ");
        } else if (k.KKM(e, 16480, 90)) {
            m = 1;
            k.KO(0, t, "Z");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ə");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16496, 186)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16480, 186)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16480, 187)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "”");
        } else if (k.KKM(e, 16480, 188)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "’");
        } else if (k.KKM(e, 16480, 189)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "“");
        } else if (k.KKM(e, 16480, 190)) {
            m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "ʔ");
        } else if (k.KKM(e, 16480, 191)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "́");
        } else if (k.KKM(e, 16496, 192)) {
            m = 1;
            k.KO(0, t, "~");
        } else if (k.KKM(e, 16480, 192)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "‘");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ƛ");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16496, 219)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16480, 219)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16480, 220)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16496, 220)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "θ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16496, 221)) {
            m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16480, 221)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "̓");
        } else if (k.KKM(e, 16480, 222)) {
            m = 1;
            k.KO(0, t, "'");
        }
        return m;
    };
}