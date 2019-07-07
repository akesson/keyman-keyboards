KeymanWeb.KR(new Keyboard_rawangu());

function Keyboard_rawangu() {
    this.KI = "Keyboard_rawangu";
    this.KN = "Rvwang Unicode";
    this.KV = {
        F: ' 1em "Tahoma"',
        K102: 0,
        BK: new Array("`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "◌́", "]", "\\", "", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ø", "'", "", "", "", "", "", "", "z", "x", "c", "v", "b", "n", "m", ",", ".", "◌̀", "", "", "", "", "", "", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "", "", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ø", "\"", "", "", "", "", "", "", "Z", "X", "C", "V", "B", "N", "M", ";", ":", "?", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "[", "]", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "<", ">", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s9 = "AEIOU";
    this.s10 = "aeiou";
    this.s11 = "ÁÉÍÓÚ";
    this.s12 = "ÀÈÌÒÙ";
    this.s13 = "áéíóú";
    this.s14 = "àèìòù";
    this.s15 = "QWRTYPLKJHGFDSZXCBNM";
    this.s16 = "qwrtyplkjhgfdszxcbnm";
    this.s17 = "vøVØ";
    this.s18 = "̀́";
    this.gs = function(t, e) {
        return this.g1(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 8) && k.KA(0, k.KC(2, 1, t), this.s17) && k.KA(1, k.KC(1, 1, t), this.s18)) {
            r = m = 1;
            k.KO(2, t, "");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s15)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s14, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(1, this.s14, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s12, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(1, this.s12, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s17)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "Ø");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ø");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s17)) {
            r = m = 1;
            k.KO(-1, t, "́");
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s15)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s13, 1, t);
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s14)) {
            r = m = 1;
            k.KIO(1, this.s13, 1, t);
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s11, 1, t);
        } else if (k.KKM(e, 16384, 219) && k.KA(0, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(1, this.s11, 1, t);
        }
        return r;
    };
}