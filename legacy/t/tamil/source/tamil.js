KeymanWeb.KR(new Keyboard_tamil());

function Keyboard_tamil() {
    this.KI = "Keyboard_tamil";
    this.KN = "Tamil";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("ொ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "", "", "", "", "ௌ", "ை", "ா", "ீ", "ூ", "ப", "ஹ", "க", "த", "ஜ", "ட", "ஞ", "", "", "", "", "ோ", "ே", "்", "ி", "ு", "ப", "ர", "க", "த", "ச", "ட", "", "", "", "", "", "", "ெ", "", "ம", "ந", "வ", "ல", "ஸ", ",", ".", "ய", "", "", "", "", "", " ", "ஒ", "", "", "", "₹", "", "த்ர", "க்ஷ", "ஷ்ர", "", "", "ஃ", "", "", "", "", "ஔ", "ஐ", "ஆ", "ஈ", "ஊ", "ப", "ங", "க", "த", "ச", "ட", "", "", "", "", "", "ஓ", "ஏ", "அ", "இ", "உ", "ப", "ற", "க", "த", "ச", "ட", "", "", "", "", "", "", "எ", "", "ண", "ன", "ழ", "ள", "ஷ", "ஷ", "ஸ்ரீ", "ய", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "‍", "‌", "", "$", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯", "௰", "௱", "௲", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
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
        } else if (k.KKM(e, 16480, 48)) {
            r = m = 1;
            k.KO(0, t, "௰");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 16432, 49)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16480, 49)) {
            r = m = 1;
            k.KO(0, t, "௧");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16432, 50)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16480, 50)) {
            r = m = 1;
            k.KO(0, t, "௨");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16480, 51)) {
            r = m = 1;
            k.KO(0, t, "௩");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            r = m = 1;
            k.KO(0, t, "₹");
        } else if (k.KKM(e, 16432, 52)) {
            r = m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16480, 52)) {
            r = m = 1;
            k.KO(0, t, "௪");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16480, 53)) {
            r = m = 1;
            k.KO(0, t, "௫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "த்ர");
        } else if (k.KKM(e, 16480, 54)) {
            r = m = 1;
            k.KO(0, t, "௬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            r = m = 1;
            k.KO(0, t, "க்ஷ");
        } else if (k.KKM(e, 16480, 55)) {
            r = m = 1;
            k.KO(0, t, "௭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            r = m = 1;
            k.KO(0, t, "ஷ்ர");
        } else if (k.KKM(e, 16480, 56)) {
            r = m = 1;
            k.KO(0, t, "௮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16480, 57)) {
            r = m = 1;
            k.KO(0, t, "௯");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ோ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ஓ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "வ");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "ழ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ம");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "ண");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "்");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "அ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ா");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ஆ");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ி");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "இ");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ு");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "உ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ர");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "ற");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ஸ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ஷ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ல");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ள");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ஜ");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ௌ");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "ஔ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ீ");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ஈ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ே");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ஏ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ூ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ஊ");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ஹ");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ங");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "ந");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "ன");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ை");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "ஐ");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ெ");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "எ");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16480, 187)) {
            r = m = 1;
            k.KO(0, t, "௲");
        } else if (k.KKM(e, 16384, 188)) {
            r = m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, "ஷ");
        } else if (k.KKM(e, 16384, 189)) {
            r = m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "ஃ");
        } else if (k.KKM(e, 16480, 189)) {
            r = m = 1;
            k.KO(0, t, "௱");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, "ஸ்ரீ");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "ய");
        } else if (k.KKM(e, 16400, 191)) {
            r = m = 1;
            k.KO(0, t, "ய");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "ொ");
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "ஒ");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KO(0, t, "ஞ");
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16400, 222)) {
            r = m = 1;
            k.KO(0, t, "ட");
        }
        return r;
    };
}