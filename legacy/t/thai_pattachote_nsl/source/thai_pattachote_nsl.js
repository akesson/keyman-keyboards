KeymanWeb.KR(new Keyboard_thai_pattachote_nsl());

function Keyboard_thai_pattachote_nsl() {
    this.KI = "Keyboard_thai_pattachote_nsl";
    this.KN = "Thai Pattachote (non-ShiftLock)";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("_", "=", "๒", "๓", "๔", "๕", "ู", "๗", "๘", "๙", "๐", "๑", "๖", "", "", "", "็", "ต", "ย", "อ", "ร", "่", "ด", "ม", "ว", "แ", "ใ", "ฌ", "", "", "", "", "้", "ท", "ง", "ก", "ั", "ี", "า", "น", "เ", "ไ", "ข", "", "", "", "", "", "", "บ", "ป", "ล", "ห", "ิ", "ค", "ส", "ะ", "จ", "พ", "", "", "", "", "", " ", "฿", "+", "\"", "/", ",", "?", "ุ", "_", ".", "(", ")", "-", "%", "", "", "", "๊", "ฤ", "ๆ", "ญ", "ษ", "ึ", "ฝ", "ซ", "ถ", "ฒ", "ฯ", "ฦ", "ํ", "", "", "", "๋", "ธ", "ำ", "ณ", "์", "ื", "ผ", "ช", "โ", "ฆ", "ฑ", "", "", "", "", "", "ํ", "ฎ", "ฏ", "ฐ", "ภ", "ั", "ศ", "ฮ", "ฟ", "ฉ", "ฬ", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ")
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
            k.KO(0, t, "๐");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "๒");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "๓");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "๔");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "๕");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "ู");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "ุ");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "๗");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "๘");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "๙");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "้");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "๋");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ิ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "ั");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ล");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ฐ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ง");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ำ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ย");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ๆ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ก");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ณ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ั");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "์");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ี");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ื");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ม");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ซ");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "า");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ผ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "น");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "ช");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "เ");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "โ");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ส");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ฮ");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ค");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "ศ");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ว");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ถ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "แ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "ฒ");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "็");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "๊");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "อ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ญ");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ท");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ธ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ร");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ษ");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ด");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ฝ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ห");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ภ");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ต");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ฤ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ป");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ฏ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "่");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "ึ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "บ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ฎ");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ไ");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "ฆ");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "๖");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "%");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "ะ");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "ฟ");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "๑");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, "จ");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "ฉ");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "พ");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "ฬ");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "฿");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ใ");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "ฯ");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "ํ");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ฌ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "ฦ");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "ข");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "ฑ");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, "ํ");
        }
        return m;
    };
}