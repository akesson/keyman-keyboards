KeymanWeb.KR(new Keyboard_klallam2());

function Keyboard_klallam2() {
    this.KI = "Keyboard_klallam2";
    this.KN = "KlallamU";
    this.KV = {
        F: ' 1em "Tahoma"',
        K102: 0,
        BK: new Array("ƛ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "q", "w", "e", "ʷ ", "t", "y", "u", "i", "xʷ", "p", "", "", "", "", "", "", "a", "s", "’ ", "ə", "ŋ", "h", "ʔ", "kʷ", "ɬ", "◌́", "", "", "", "", "", "", "", "x̣", "x", "c", "š", "č", "n", "m", "", "", "", "", "", "", "", "", "")
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
        if (k.KKM(e, 16384, 186) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "ƛ");
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "á");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "č");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ʷ", 1)) {
            r = m = 1;
            k.KO(1, t, "̕ʷ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "̕");
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "é");
        } else if (k.KKM(e, 16384, 70) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ə́");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ə");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ŋ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "u", 1)) {
            r = m = 1;
            k.KO(1, t, "ƛ̕");
        } else if (k.KKM(e, 16384, 73) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "í");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ʔ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "kʷ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ɬ");
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ó");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "xʷ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ʷ");
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ú");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "š");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "x̣");
        }
        return r;
    };
}