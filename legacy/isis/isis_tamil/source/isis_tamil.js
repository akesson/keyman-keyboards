KeymanWeb.KR(new Keyboard_isis_tamil());

function Keyboard_isis_tamil() {
    this.KI = "Keyboard_isis_tamil";
    this.KN = "ISIS-Tamil";
    this.KDU = 1;
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯", "", "", "", "", "", "", "", "", "எ", "ர", "த", "ய", "உ", "இ", "ஒ", "ப", "", "", "்", "", "", "", "அ", "ஸ", "", "", "", "ஹ", "ஜ", "க", "ல", "", "", "", "", "", "", "", "", "", "", "ச", "வ", "", "ந", "ம", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ஐ", "ற", "ட", "", "ஊ", "ஈ", "ஔ", "", "", "", "।", "", "", "", "ஆ", "ஷ", "", "", "", "ஃ", "", "", "ழ", "", "", "", "", "", "", "", "", "", "௰", "௱", "", "", "ண", "௲", "", "", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_tamil\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "ஆஇஈஉஊஎஏஐஒஓஔ";
    this.s8 = "ாிீுூெேைொோௌ";
    this.s9 = "கசடதபஜஙஞணநனமயரறலளழவஸஷஹ";
    this.s14 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_tamil\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s9) && k.KA(1, k.KC(2, 1, t), this.s9) && k.KA(2, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(3, this.s9, 1, t);
            k.KO(-1, t, "்");
            k.KIO(-1, this.s9, 2, t);
            k.KIO(-1, this.s8, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s9) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(2, this.s9, 1, t);
            k.KO(-1, t, "்");
            k.KIO(-1, this.s9, 2, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "௧");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "௨");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "௩");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "௪");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "௫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "௬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "௭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "௮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "௯");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "அ", 1)) {
            r = m = 1;
            k.KO(1, t, "ஆ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ஆ", 1)) {
            r = m = 1;
            k.KO(1, t, "அ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ா");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "அ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ஆ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "௱");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "எ", 1)) {
            r = m = 1;
            k.KO(1, t, "ஏ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ஏ", 1)) {
            r = m = 1;
            k.KO(1, t, "எ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ெ", 1)) {
            r = m = 1;
            k.KO(1, t, "ே");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ே", 1)) {
            r = m = 1;
            k.KO(1, t, "ெ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "எ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ஐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ஃ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ஹ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "இ", 1)) {
            r = m = 1;
            k.KO(1, t, "ஈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ஈ", 1)) {
            r = m = 1;
            k.KO(1, t, "இ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ி", 1)) {
            r = m = 1;
            k.KO(1, t, "ீ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ீ", 1)) {
            r = m = 1;
            k.KO(1, t, "ி");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "இ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ஈ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ஜ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ல", 1)) {
            r = m = 1;
            k.KO(1, t, "ள");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ள", 1)) {
            r = m = 1;
            k.KO(1, t, "ல");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ல");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ழ");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ங");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ம");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "௲");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ன");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ஞ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ந");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ண");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ஒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ஓ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ஓ", 1)) {
            r = m = 1;
            k.KO(1, t, "ஒ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ொ", 1)) {
            r = m = 1;
            k.KO(1, t, "ோ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ோ", 1)) {
            r = m = 1;
            k.KO(1, t, "ொ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ஒ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ஔ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ற");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ர");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ஸ");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ஷ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "உ", 1)) {
            r = m = 1;
            k.KO(1, t, "ஊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ஊ", 1)) {
            r = m = 1;
            k.KO(1, t, "உ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ு", 1)) {
            r = m = 1;
            k.KO(1, t, "ூ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ூ", 1)) {
            r = m = 1;
            k.KO(1, t, "ு");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "உ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ஊ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "வ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "௰");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ய");
        } else if (k.KKM(e, 16384, 107)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 109)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16400, 220) && k.KCM(1, t, "।", 1)) {
            r = m = 1;
            k.KO(1, t, "॥");
        } else if (k.KKM(e, 16400, 220) && k.KCM(1, t, "॥", 1)) {
            r = m = 1;
            k.KO(1, t, "।");
        } else if (k.KKM(e, 16400, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "|");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "।");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s9) && k.KCM(3, t, "்", 1) && k.KA(2, k.KC(2, 1, t), this.s9) && k.KA(3, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(4, this.s9, 1, t);
            k.KIO(-1, this.s9, 3, t);
            k.KIO(-1, this.s8, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s9) && k.KCM(2, t, "்", 1) && k.KA(2, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(3, this.s9, 1, t);
            k.KIO(-1, this.s9, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "ஂ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ஂ", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "அ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ஂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KO(-1, t, "ஂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ஂ");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "்", 1)) {
            r = m = 1;
            k.KO(1, t, "\\");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "\\", 1)) {
            r = m = 1;
            k.KO(1, t, "்");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "்");
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KA(0, k.KC(2, 1, t), this.s9) && k.KA(1, k.KC(1, 1, t), this.s7)) {
            m = 1;
            k.KIO(2, this.s9, 1, t);
            k.KIO(-1, this.s8, 2, t);
        } else if (k.KCM(2, t, "઼", 1) && k.KA(1, k.KC(1, 1, t), this.s7)) {
            m = 1;
            k.KO(2, t, "઼");
            k.KIO(-1, this.s8, 2, t);
        }
        return r;
    };
}