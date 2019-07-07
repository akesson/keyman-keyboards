KeymanWeb.KR(new Keyboard_deneunicode());

function Keyboard_deneunicode() {
    this.KI = "Keyboard_deneunicode";
    this.KN = "Dene Unicode";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("q ", "", "Ë ", "ë ", "◌́ ", "◌̀ ", "◌̨ ", "◌̨́ ", "◌̨̀ ", "", "", "", "", "", "", "", "ǝ ", "", "", "", "", "", "", "ı ", "", "", "ɂ ", "; ", "", "", "", "", "", "", "", "", "", "", "", "", "", "ł  ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Q ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Ǝ ", "", "", "", "", "", "", "", "", "", "Ɂ ", ":", "", "", "", "", "", "", "", "", "", "", "", "", "", "Ł ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "2", "3", "4", "5", "6", "7", "8", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
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
        if (k.KKM(e, 16416, 50)) {
            r = m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "Ë");
        } else if (k.KKM(e, 16416, 51)) {
            r = m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "ë");
        } else if (k.KKM(e, 16416, 52)) {
            r = m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "́");
        } else if (k.KKM(e, 16416, 53)) {
            r = m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "̀");
        } else if (k.KKM(e, 16416, 54)) {
            r = m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "̨");
        } else if (k.KKM(e, 16416, 55)) {
            r = m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "̨́");
        } else if (k.KKM(e, 16416, 56)) {
            r = m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "̨̀");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "Ǝ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ǝ");
        } else if (k.KKM(e, 16384, 98)) {
            r = m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16384, 99)) {
            r = m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16384, 100)) {
            r = m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16384, 101)) {
            r = m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16384, 102)) {
            r = m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16384, 103)) {
            r = m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16384, 104)) {
            r = m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ı");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "Ł");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ł");
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "Q");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "q");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "Ɂ");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "ɂ");
        } else if (k.KKM(e, 16400, 221)) {
            r = m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KO(0, t, ";");
        }
        return r;
    };
}