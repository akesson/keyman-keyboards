KeymanWeb.KR(new Keyboard_xaadkil());

function Keyboard_xaadkil() {
    this.KI = "Keyboard_xaadkil";
    this.KN = "X̱aad Kil";
    this.KV = {
        F: ' 1em "Aboriginal Sans"',
        K102: 0,
        BK: new Array("´", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", "_", "’", "", "", "", "", "", "", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "", "", "", "", "", "", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "", "", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "“", "”", "‘", "", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "", "", "", "", "", "", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "`", "", "", "", "", "", "", "", "", "«", "»", "_", "+", "", "", "", "", "", "", "", "", "", "", "", "", "", "[", "]", "\\", "", "", "", "", "", "", "", "", "", "", "", "", ";", "'", "", "", "", "", "", "", "", "", "", "", "", "", "", "<", ">", "/", "", "", "", "", "", "", "~", "", "", "", "", "", "", "", "", "‹", "›", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "{", "}", "|", "", "", "", "", "", "", "", "", "", "", "", "", ":", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '﻿<style type=\'text/css\'>   #kmw_help { font: 9pt Tahoma; padding: 0; margin: -1em 0 0 0; }   #kmw_help ul { margin: 0 1em 0 2em; }   #kmw_help li { margin: 0; padding: 0; }   #kmw_help span.key { font: bold 8pt Arial; background: #e0e0e0; border: solid 1px #c0c0c0; padding: 0 4px }   #kmw_help span.out { font: bold 8pt Arial; color: blue; } </style> <div id=\'kmw_help\'> <ul> <li>To type the underline accent <span class=\'out\'>_</span> use the Semicolon key <span class=\'key\'>;</span></li> <li>To type the acute accent <span class=\'out\'>´</span> use the Grave key <span class=\'key\'>`</span></li> <li>To type the grave accent <span class=\'out\'>`</span> use the Shift+Grave key <span class=\'key\'>~</span></li> <li>To type the circumflex accent <span class=\'out\'>^</span> use the Shift+6 key <span class=\'key\'>^</span></li> <li><a href=\'http://www.languagegeek.com/kmhelp/hdn.html\' target=\'_blank\'>X̱aad Kil keyboard help</a></li> </ul> </div> ';
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
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "̱");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "̂");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "́");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "̀");
        } else if (k.KKM(e, 16496, 186)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16480, 186)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16480, 187)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16480, 188)) {
            m = 1;
            k.KO(0, t, "<");
        } else if (k.KKM(e, 16480, 189)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16480, 190)) {
            m = 1;
            k.KO(0, t, ">");
        } else if (k.KKM(e, 16480, 191)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16496, 192)) {
            m = 1;
            k.KO(0, t, "~");
        } else if (k.KKM(e, 16480, 192)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16496, 219)) {
            m = 1;
            k.KO(0, t, "{");
        } else if (k.KKM(e, 16480, 219)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "“");
        } else if (k.KKM(e, 16480, 220)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16496, 220)) {
            m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "‘");
        } else if (k.KKM(e, 16496, 221)) {
            m = 1;
            k.KO(0, t, "}");
        } else if (k.KKM(e, 16480, 221)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "”");
        } else if (k.KKM(e, 16480, 222)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "’");
        }
        return m;
    };
}