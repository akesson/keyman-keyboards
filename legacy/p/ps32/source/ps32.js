KeymanWeb.KR(new Keyboard_ps32());

function Keyboard_ps32() {
    this.KI = "Keyboard_ps32";
    this.KN = "pan-Sahelian (v. 3.2)";
    this.KV = {
        F: ' 1em "Charis SIL"',
        K102: 0,
        BK: new Array("`", "à", "á", "ä", "ã", "ă", "ǎ", "ȧ", "ạ", "a̩", "0", "-", "=", "", "", "", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "", "", "", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "", "", "", "", "", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "", "", "", "", "", " ", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "", "", "", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "", "", "", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "", "", "", "", "", "|", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ")
    };
    this.KH = '';
    this.KM = 0;
    this.s8 = "weryioszWEYIOSZdDfFgGhkK'xXvVbB./nNmMjJ";
    this.s9 = "qQRtTuUpP[{]}|aAHlL;:cC<>,?\"`1234567890-=~!@#$%^&*()_+";
    this.s10 = "ǝɛɾƴɩɔʃʒƎƐƳƖƆƩƷɗƊƒƑɠƓɦƙƘʼɣƔʋƲɓƁʕʔɲƝŋŊɖƉ";
    this.s11 = "aeiouAEIOUɛƐɔƆ";
    this.s12 = "̀́̈̃̆̌̇";
    this.s13 = "̣̩";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16400, 49) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 222) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 51) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 52) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 53) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 55) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 222) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ʼ");
        } else if (k.KKM(e, 16400, 57) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 48) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 56) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 187) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 188) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 189) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ʕ");
        } else if (k.KKM(e, 16384, 191) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ʔ");
        } else if (k.KKM(e, 16384, 48) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 49) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 49) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 49) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 49) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "̀");
        } else if (k.KKM(e, 16384, 50) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "́");
        } else if (k.KKM(e, 16384, 50) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "́");
        } else if (k.KKM(e, 16384, 50) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 50) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "́");
        } else if (k.KKM(e, 16384, 51) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "̈");
        } else if (k.KKM(e, 16384, 51) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "̈");
        } else if (k.KKM(e, 16384, 51) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 51) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "̈");
        } else if (k.KKM(e, 16384, 52) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "̃");
        } else if (k.KKM(e, 16384, 52) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "̃");
        } else if (k.KKM(e, 16384, 52) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 52) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "̃");
        } else if (k.KKM(e, 16384, 53) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "̆");
        } else if (k.KKM(e, 16384, 53) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "̆");
        } else if (k.KKM(e, 16384, 53) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 53) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "̆");
        } else if (k.KKM(e, 16384, 54) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "̌");
        } else if (k.KKM(e, 16384, 54) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "̌");
        } else if (k.KKM(e, 16384, 54) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 54) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "̌");
        } else if (k.KKM(e, 16384, 55) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s12, 2, t);
            k.KO(-1, t, "̇");
        } else if (k.KKM(e, 16384, 55) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s13) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s13, 2, t);
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "̇");
        } else if (k.KKM(e, 16384, 55) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KO(-1, t, "̀");
        } else if (k.KKM(e, 16384, 55) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "̇");
        } else if (k.KKM(e, 16384, 56) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "̣");
            k.KIO(-1, this.s12, 2, t);
            k.KIO(-1, this.s12, 3, t);
        } else if (k.KKM(e, 16384, 56) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "̣");
            k.KIO(-1, this.s12, 2, t);
        } else if (k.KKM(e, 16384, 56) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "̣");
        } else if (k.KKM(e, 16384, 57) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s12) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "̩");
            k.KIO(-1, this.s12, 2, t);
            k.KIO(-1, this.s12, 3, t);
        } else if (k.KKM(e, 16384, 57) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s12)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "̩");
            k.KIO(-1, this.s12, 2, t);
        } else if (k.KKM(e, 16384, 57) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "̩");
        } else if (k.KKM(e, 16400, 186) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 186) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 188) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 187) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 190) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 191) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 50) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 65) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 66) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɓ");
        } else if (k.KKM(e, 16400, 67) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 68) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɗ");
        } else if (k.KKM(e, 16400, 69) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɛ");
        } else if (k.KKM(e, 16400, 70) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ƒ");
        } else if (k.KKM(e, 16400, 71) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɠ");
        } else if (k.KKM(e, 16400, 72) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 73) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɩ");
        } else if (k.KKM(e, 16400, 74) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɖ");
        } else if (k.KKM(e, 16400, 75) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ƙ");
        } else if (k.KKM(e, 16400, 76) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ŋ");
        } else if (k.KKM(e, 16400, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɲ");
        } else if (k.KKM(e, 16400, 79) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɔ");
        } else if (k.KKM(e, 16400, 80) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 81) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 82) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 83) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ʃ");
        } else if (k.KKM(e, 16400, 84) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 85) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 86) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ʋ");
        } else if (k.KKM(e, 16400, 87) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ǝ");
        } else if (k.KKM(e, 16400, 88) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ɣ");
        } else if (k.KKM(e, 16400, 89) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ƴ");
        } else if (k.KKM(e, 16400, 90) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "Ʒ");
        } else if (k.KKM(e, 16384, 219) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 221) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 54) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 189) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 66) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɓ");
        } else if (k.KKM(e, 16384, 67) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 68) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɗ");
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɛ");
        } else if (k.KKM(e, 16384, 70) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ƒ");
        } else if (k.KKM(e, 16384, 71) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɠ");
        } else if (k.KKM(e, 16384, 72) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɦ");
        } else if (k.KKM(e, 16384, 73) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɩ");
        } else if (k.KKM(e, 16384, 74) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɖ");
        } else if (k.KKM(e, 16384, 75) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ƙ");
        } else if (k.KKM(e, 16384, 76) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ŋ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɲ");
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɔ");
        } else if (k.KKM(e, 16384, 80) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 82) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɾ");
        } else if (k.KKM(e, 16384, 83) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ʃ");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 86) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ʋ");
        } else if (k.KKM(e, 16384, 87) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ǝ");
        } else if (k.KKM(e, 16384, 88) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ɣ");
        } else if (k.KKM(e, 16384, 89) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ƴ");
        } else if (k.KKM(e, 16384, 90) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ʒ");
        } else if (k.KKM(e, 16400, 219) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 221) && k.KDM(0, t, 0)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 192) && k.KDM(0, t, 0)) {
            r = m = 1;
        }
        return r;
    };
}