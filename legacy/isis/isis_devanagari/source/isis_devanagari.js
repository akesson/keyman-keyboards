KeymanWeb.KR(new Keyboard_isis_devanagari());

function Keyboard_isis_devanagari() {
    this.KI = "Keyboard_isis_devanagari";
    this.KDU = 1;
    this.KN = "ISIS-Devanagari";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("ॐ", "१", "२", "३", "४", "५", "६", "७", "८", "९", "०", "", "", "", "", "", "क़", "", "ए", "र", "त", "य", "उ", "इ", "ओ", "प", "", "", "्", "", "", "", "अ", "स", "द", "फ़", "ग", "ह", "ज", "क", "ल", "", "", "", "", "", "", "", "", "ज़", "", "च", "व", "ब", "न", "म", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ॅ", "", "", "", "", "", "", "", "", "", "", "", "ऐ", "ड़", "ट", "य़", "ऊ", "ई", "औ", "", "", "", "।", "", "", "", "आ", "ष", "ड", "", "ग़", "ः", "‍", "ख़", "ळ", "", "", "", "", "", "", "", "", "‌", "", "", "", "", "ण", "ं", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "॰", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_devanagari\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "कचटतपगजडदबसड़";
    this.s8 = "खछठथफघझढधभशढ़";
    this.s9 = "आइईउऊऋॠऌॡएऍऎऐओऑऒऔ";
    this.s10 = "ािीुूृॄॢॣेॅॆैोॉॊौ";
    this.s11 = "कखगघङचछजझञटठडढणतथदधनऩपफबभमयय़रऱलळऴवसशषहक़ख़ग़ड़ढ़फ़य़ज़";
    this.s12 = "नयरळकखगजडढफ";
    this.s13 = "ऩय़ऱऴक़ख़ग़ज़ड़ढ़फ़";
    this.s14 = "कखगघ";
    this.s15 = "चछजझ";
    this.s16 = "टठडढ";
    this.s18 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_devanagari\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 222) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "॑");
        } else if (k.KKM(e, 16384, 189) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "॒");
        } else if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "़");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(9, 1, t), this.s11) && k.KA(1, k.KC(8, 1, t), this.s11) && k.KCM(7, t, "्", 1) && k.KA(3, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "्", 1) && k.KA(5, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(7, k.KC(2, 1, t), this.s11) && k.KA(8, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(9, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 6, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 8, t);
            k.KIO(-1, this.s10, 9, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(8, 1, t), this.s11) && k.KA(1, k.KC(7, 1, t), this.s11) && k.KCM(6, t, "्", 1) && k.KA(3, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "्", 1) && k.KA(5, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(7, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(8, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 6, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 8, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(7, 1, t), this.s11) && k.KA(1, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "्", 1) && k.KA(3, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(5, k.KC(2, 1, t), this.s11) && k.KA(6, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(7, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 6, t);
            k.KIO(-1, this.s10, 7, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KA(1, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "्", 1) && k.KA(3, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(5, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 6, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "़", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "़", 1) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "़्");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s7) && k.KDM(2, t, 0) && k.KCM(2, t, "ह", 1) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s8, 1, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "़", 1) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "़", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "़", 1)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "़्");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "़");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "़", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "़्");
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s7) && k.KDM(1, t, 0) && k.KCM(1, t, "ह", 1)) {
            r = m = 1;
            k.KIO(2, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s7) && k.KCM(2, t, "ह", 1) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s8, 1, t);
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KCM(3, t, "जन", 2) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(3, t, "ज्ञ");
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "़", 1)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "़");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "़", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "़्");
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s7) && k.KCM(1, t, "ह", 1)) {
            r = m = 1;
            k.KIO(2, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KCM(2, t, "जन", 2)) {
            r = m = 1;
            k.KO(2, t, "ज्ञ");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 2, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16416, 48)) {
            r = m = 1;
            k.KO(0, t, "॰");
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "०");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "१");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "२");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "३");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "४");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "५");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "६");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "७");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "८");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "९");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "आ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ड");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ऐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "ग़");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ः", 1)) {
            r = m = 1;
            k.KO(1, t, "ऽ");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ऽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ः");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ः");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ई");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "ख़");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ळ");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ं", 1)) {
            r = m = 1;
            k.KO(1, t, "ँ");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ँ", 1)) {
            r = m = 1;
            k.KO(1, t, "ं");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ं");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ण");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "औ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ड़");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ष");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ट");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ऊ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "य़");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "्", 1)) {
            r = m = 1;
            k.KO(-1, t, "‌");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "्");
        } else if (k.KKM(e, 16400, 54) && k.KCM(1, t, "ॅ", 1)) {
            r = m = 1;
            k.KO(1, t, "^");
        } else if (k.KKM(e, 16400, 54) && k.KCM(1, t, "ए", 1)) {
            r = m = 1;
            k.KO(1, t, "ऍ");
        } else if (k.KKM(e, 16400, 54) && k.KCM(1, t, "आ", 1)) {
            r = m = 1;
            k.KO(1, t, "ऑ");
        } else if (k.KKM(e, 16400, 54) && k.KCM(1, t, "ा", 1)) {
            r = m = 1;
            k.KO(1, t, "ॉ");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "ॅ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ॐ", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "ॐ");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "ॐ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "अ", 1)) {
            r = m = 1;
            k.KO(1, t, "आ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "आ", 1)) {
            r = m = 1;
            k.KO(1, t, "अ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ा");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "़", 1)) {
            r = m = 1;
            k.KO(-1, t, "ा");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "अ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ब");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "च");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "द");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ए", 1)) {
            r = m = 1;
            k.KO(1, t, "ऎ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ऎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ए");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "े", 1)) {
            r = m = 1;
            k.KO(1, t, "ॆ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ॆ", 1)) {
            r = m = 1;
            k.KO(1, t, "े");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ए");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "फ़");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ग");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ह");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "इ", 1)) {
            r = m = 1;
            k.KO(1, t, "ई");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ई", 1)) {
            r = m = 1;
            k.KO(1, t, "इ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ि", 1)) {
            r = m = 1;
            k.KO(1, t, "ी");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ी", 1)) {
            r = m = 1;
            k.KO(1, t, "ि");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "इ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ज");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 106)) {
            r = m = 1;
            k.KO(0, t, "़");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "क");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 107)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ऌ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ऌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ॡ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ॡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ऌ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ॢ", 1)) {
            r = m = 1;
            k.KO(1, t, "ॣ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ॣ", 1)) {
            r = m = 1;
            k.KO(1, t, "ॢ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ल");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ङ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "म");
        } else if (k.KKM(e, 16384, 109)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ञ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "न");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ओ", 1)) {
            r = m = 1;
            k.KO(1, t, "ऒ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ऒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ओ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ो", 1)) {
            r = m = 1;
            k.KO(1, t, "ॊ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ॊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ो");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ओ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "प");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "क़");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "क़");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ऋ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ऋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ॠ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ॠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ऋ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ृ", 1)) {
            r = m = 1;
            k.KO(1, t, "ॄ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ॄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ृ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "र");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "स");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "त");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "उ", 1)) {
            r = m = 1;
            k.KO(1, t, "ऊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ऊ", 1)) {
            r = m = 1;
            k.KO(1, t, "उ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ु", 1)) {
            r = m = 1;
            k.KO(1, t, "ू");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ू", 1)) {
            r = m = 1;
            k.KO(1, t, "ु");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "उ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "व");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "य");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ज़");
        } else if (k.KKM(e, 16400, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "|");
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
            k.KO(0, t, "़");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(10, 1, t), this.s11) && k.KCM(9, t, "्", 1) && k.KA(2, k.KC(8, 1, t), this.s11) && k.KCM(7, t, "्", 1) && k.KA(4, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "्", 1) && k.KA(6, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(8, k.KC(2, 1, t), this.s11) && k.KA(9, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(10, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 7, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 9, t);
            k.KIO(-1, this.s10, 10, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(9, 1, t), this.s11) && k.KCM(8, t, "्", 1) && k.KA(2, k.KC(7, 1, t), this.s11) && k.KCM(6, t, "्", 1) && k.KA(4, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "्", 1) && k.KA(6, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(8, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(9, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 7, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 9, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(8, 1, t), this.s11) && k.KCM(7, t, "्", 1) && k.KA(2, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "्", 1) && k.KA(4, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(6, k.KC(2, 1, t), this.s11) && k.KA(7, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(8, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 7, t);
            k.KIO(-1, this.s10, 8, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(7, 1, t), this.s11) && k.KCM(6, t, "्", 1) && k.KA(2, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "्", 1) && k.KA(4, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(6, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(7, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 7, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "्", 1) && k.KA(2, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "़्", 2) && k.KA(3, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "़", 1) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "्", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "़्", 2) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "़", 1)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "़");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "्", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "़", 1) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "़्", 2) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "्", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "़", 1)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "़");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "़्", 2) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "़");
            k.KIO(-1, this.s11, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "्", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(2, 1, t), this.s8) && k.KA(1, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(2, this.s7, 1, t);
            k.KO(-1, t, "ह");
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "ह");
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16416, 192)) {
            r = m = 1;
            k.KO(0, t, "॓");
        } else if (k.KKM(e, 16416, 222)) {
            r = m = 1;
            k.KO(0, t, "॔");
        } else if (k.KKM(e, 16432, 222)) {
            r = m = 1;
            k.KO(0, t, "॓");
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KCM(6, t, "न्", 2) && k.KA(2, k.KC(4, 1, t), this.s15) && k.KCM(3, t, "्", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ञ्");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(5, t, "न्", 2) && k.KA(2, k.KC(3, 1, t), this.s15) && k.KCM(2, t, "्", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ञ्");
            k.KIO(-1, this.s15, 3, t);
            k.KO(-1, t, "्");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(4, t, "न्", 2) && k.KA(2, k.KC(2, 1, t), this.s15) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ञ्");
            k.KIO(-1, this.s15, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(3, t, "ज्न", 3)) {
            m = 1;
            k.KO(3, t, "ज्ञ");
        } else if (k.KCM(3, t, "न्", 2) && k.KA(2, k.KC(1, 1, t), this.s15)) {
            m = 1;
            k.KO(3, t, "ञ्");
            k.KIO(-1, this.s15, 3, t);
        } else if (k.KCM(2, t, "़", 1) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KO(2, t, "़");
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s12) && k.KCM(1, t, "़", 1)) {
            m = 1;
            k.KIO(2, this.s13, 1, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s13) && k.KCM(1, t, "़", 1)) {
            m = 1;
            k.KIO(2, this.s12, 1, t);
        }
        return r;
    };
}