KeymanWeb.KR(new Keyboard_isis_oriya());

function Keyboard_isis_oriya() {
    this.KI = "Keyboard_isis_oriya";
    this.KDU = 1;
    this.KBVER = '1.1';
    this.KN = "ISIS-Oriya";
    this.KV = {
        F: ' 1em "utkal"',
        K102: 0,
        BK: new Array("୰", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯", "୦", "", "", "", "", "", "", "", "ଏ", "ର", "ତ", "ଯ", "ଉ", "ଇ", "ଓ", "ପ", "", "", "୍", "", "", "", "ଅ", "ସ", "ଦ", "", "ଗ", "ହ", "ଜ", "କ", "ଲ", "", "", "", "", "", "", "", "", "", "", "ଚ", "", "ବ", "ନ", "ମ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ଐ", "ଡ଼", "ଟ", "୍ଯ", "ଊ", "ଈ", "ଔ", "", "", "", "।", "", "", "", "ଆ", "ଷ", "ଡ", "", "", "ଃ", "", "", "ଳ", "", "", "", "", "", "", "", "", "", "", "", "", "", "ଣ", "ଙ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "଼", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_oriya\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "କଚଟତପଗଜଡଦବଡ଼ସ";
    this.s8 = "ଖଛଠଥଫଘଝଢଧଭଢ଼ଶ";
    this.s9 = "ଆଇଈଉଊଋଏଐଓଔ";
    this.s10 = "ାିୀୁୂୃେୈୋୌ";
    this.s11 = "କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯୟରଲଳଶଷସହ";
    this.s12 = "କଖଗଘ";
    this.s13 = "ଚଛଜଝ";
    this.s14 = "ଟଠଡଡ଼";
    this.s15 = "ଡଢ";
    this.s16 = "ଡ଼ଢ଼";
    this.s21 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_oriya\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "଼");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "୍", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "଼", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "଼", 1) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "଼୍");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "଼୍", 2) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "଼", 1)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "଼");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s7) && k.KDM(2, t, 0) && k.KCM(2, t, "ହ", 1) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s8, 1, t);
            k.KO(-1, t, "ହ");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "୍", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "଼", 1) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "଼", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "଼", 1)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "଼୍");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "଼");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "଼", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "଼୍");
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s7) && k.KDM(1, t, 0) && k.KCM(1, t, "ହ", 1)) {
            r = m = 1;
            k.KIO(2, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s7) && k.KCM(2, t, "ହ", 1) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s8, 1, t);
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 2, t);
            k.KIO(-1, this.s10, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "଼", 1)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "଼");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "଼", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "଼୍");
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s7) && k.KCM(1, t, "ହ", 1)) {
            r = m = 1;
            k.KIO(2, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 2, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "୦");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "୧");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "୨");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "୩");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "୪");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "୫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "୬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "୭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "୮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "୯");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ଅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଆ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "আ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଅ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ା");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "଼", 1)) {
            r = m = 1;
            k.KO(-1, t, "ା");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ଅ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ଆ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ବ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ଚ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ଡ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ଦ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ଏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଐ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ଐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଏ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "େ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ୈ", 1)) {
            r = m = 1;
            k.KO(1, t, "େ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ଏ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ଐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ଗ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ଃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଽ");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ଽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଃ");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ଃ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ହ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ଇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ଈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଇ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ି", 1)) {
            r = m = 1;
            k.KO(1, t, "ୀ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ୀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ି");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ଇ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ଈ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ଜ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "କ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ଌ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ଌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୡ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ୡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଌ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ଲ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ଳ");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ଙ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ମ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ଙ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ଞ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ନ");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ଣ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ଓ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଔ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ଔ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଓ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ୋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୌ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ୌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୋ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ଓ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ଔ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ନ୍", 2)) {
            r = m = 1;
            k.KO(2, t, "ମ");
            k.KO(-1, t, "୍");
            k.KO(-1, t, " ");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ପ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ଋ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ଋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୠ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ୠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଋ");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ଡ଼");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ର");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ସ");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ଷ");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ତ୍‍‌");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ଟ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ତ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ଉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ଊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଉ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ୁ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୂ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ୂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୁ");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ଉ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ଊ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ଯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ୟ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ୟ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଯ");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "୍", 1)) {
            r = m = 1;
            k.KO(1, t, "୍ଯ");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ଯ");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "୍ଯ");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "୍", 1)) {
            r = m = 1;
            k.KO(-1, t, "‌");
        } else if (k.KKM(e, 16384, 106)) {
            r = m = 1;
            k.KO(0, t, "଼");
            r = this.g1(t, e);
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
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "।");
        } else if (k.KKM(e, 16416, 190)) {
            r = m = 1;
            k.KO(0, t, "଼");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "୍", 1) && k.KA(2, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "୍", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "଼୍", 2) && k.KA(3, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "଼", 1) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "୍", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "୍", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "୍", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "଼", 1) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "଼୍", 2) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "୍", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "୍", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "଼", 1)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "଼");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "଼୍", 2) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "଼");
            k.KIO(-1, this.s11, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "୍", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(2, 1, t), this.s8) && k.KA(1, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(2, this.s7, 1, t);
            k.KO(-1, t, "ହ");
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "ହ");
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "୰", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "ଂ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ଂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ଁ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ଁ", 1)) {
            r = m = 1;
            k.KO(1, t, "୰");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ଅ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ଂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ଂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(-1, t, "ଁ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ଂ");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "୰");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "୍");
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KCM(6, t, "ନ୍", 2) && k.KA(2, k.KC(4, 1, t), this.s12) && k.KCM(3, t, "୍", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ଙ୍");
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(6, t, "ନ୍", 2) && k.KA(2, k.KC(4, 1, t), this.s13) && k.KCM(3, t, "୍", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ଞ୍");
            k.KIO(-1, this.s13, 3, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(6, t, "ନ୍", 2) && k.KA(2, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "୍", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ଣ୍");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(5, t, "ନ୍", 2) && k.KA(2, k.KC(3, 1, t), this.s12) && k.KCM(2, t, "୍", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ଙ୍");
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(5, t, "ନ୍", 2) && k.KA(2, k.KC(3, 1, t), this.s13) && k.KCM(2, t, "୍", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ଞ୍");
            k.KIO(-1, this.s13, 3, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(5, t, "ନ୍", 2) && k.KA(2, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "୍", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ଣ୍");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "୍");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(4, t, "ନ୍", 2) && k.KA(2, k.KC(2, 1, t), this.s12) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ଙ୍");
            k.KIO(-1, this.s12, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(4, t, "ନ୍", 2) && k.KA(2, k.KC(2, 1, t), this.s13) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ଞ୍");
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(4, t, "ନ୍", 2) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ଣ୍");
            k.KIO(-1, this.s14, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(3, t, "ନ୍", 2) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            m = 1;
            k.KO(3, t, "ଙ୍");
            k.KIO(-1, this.s12, 3, t);
        } else if (k.KCM(3, t, "ନ୍", 2) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            m = 1;
            k.KO(3, t, "ଞ୍");
            k.KIO(-1, this.s13, 3, t);
        } else if (k.KCM(3, t, "ନ୍", 2) && k.KA(2, k.KC(1, 1, t), this.s14)) {
            m = 1;
            k.KO(3, t, "ଣ୍");
            k.KIO(-1, this.s14, 3, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KCM(2, t, "଼", 1) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KO(2, t, "଼");
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "଼", 1)) {
            m = 1;
            k.KIO(2, this.s16, 1, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s16) && k.KCM(1, t, "଼", 1)) {
            m = 1;
            k.KIO(2, this.s15, 1, t);
        }
        return r;
    };
}