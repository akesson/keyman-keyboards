KeymanWeb.KR(new Keyboard_isis_malayalam());

function Keyboard_isis_malayalam() {
    this.KI = "Keyboard_isis_malayalam";
    this.KDU = 1;
    this.KN = "ISIS-Malayalam";
    this.KBVER = "1.1";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯", "൦", "", "", "", "", "", "", "", "എ", "ര", "ത", "യ", "ഉ", "ഇ", "ഒ", "പ", "", "", "്", "", "", "", "അ", "സ", "ദ", "", "ഗ", "ഹ", "ജ", "ക", "ല", "", "", "", "", "", "", "", "", "", "", "ച", "വ", "ബ", "ന", "മ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ഐ", "റ", "ട", "", "ഊ", "ഈ", "ഔ", "", "", "", "।", "", "", "", "ആ", "ഷ", "ഡ", "", "", "ഃ", "", "", "ഴ", "", "", "", "", "", "", "", "", "", "", "", "", "", "ണ", "ങ", "", "", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_malayalam\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "കചടതപഗജഡദബസ";
    this.s8 = "ഖഛഠഥഫഘഝഢധഭശ";
    this.s9 = "ആഇഈഉഊഋഎഏഐഒഓഔ";
    this.s10 = "ാിീുൂൃെേൈൊോൌ";
    this.s11 = "കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലളഴവസശഷഹ";
    this.s13 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_malayalam\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KDM(4, t, 0) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "്", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KDM(3, t, 0) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "്", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "്", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KDM(2, t, 0) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "്", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KDM(1, t, 0) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 2, t);
            k.KIO(-1, this.s10, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "്");
            k.KIO(-1, this.s11, 2, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "൦");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "൧");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "൨");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "൩");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "൪");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "൫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "൬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "൭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "൮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "൯");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ആ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ആ", 1)) {
            r = m = 1;
            k.KO(1, t, "അ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ാ");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "അ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ആ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ബ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ച");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ഡ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ദ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "എ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഏ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ഏ", 1)) {
            r = m = 1;
            k.KO(1, t, "എ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "െ", 1)) {
            r = m = 1;
            k.KO(1, t, "േ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "േ", 1)) {
            r = m = 1;
            k.KO(1, t, "െ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "എ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ഐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ഗ");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ഃ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ഹ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ഇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ഈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഇ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ി", 1)) {
            r = m = 1;
            k.KO(1, t, "ീ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ീ", 1)) {
            r = m = 1;
            k.KO(1, t, "ി");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ഇ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ഈ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ജ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ക");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ഌ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ഌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ൡ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ൡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഌ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ല", 1)) {
            r = m = 1;
            k.KO(1, t, "ള");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ള", 1)) {
            r = m = 1;
            k.KO(1, t, "ല");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ല");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ഴ");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ങ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "മ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ങ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ഞ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ന");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ണ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഓ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ഓ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഒ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ൊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ോ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ോ", 1)) {
            r = m = 1;
            k.KO(1, t, "ൊ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ഒ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ഔ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "പ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ഋ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ഋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ൠ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ൠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഋ");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "റ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ര");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "സ");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ഷ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ട");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ത");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ഉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ഊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഉ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ു", 1)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ൂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ു");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ഉ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ഊ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "വ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "യ");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "്", 1)) {
            r = m = 1;
            k.KO(1, t, "്‌");
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
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "്", 1) && k.KA(2, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "്", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "്", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "്", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "്", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "്", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "ഹ");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "ം");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ം");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ം");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(-1, t, "ം");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ം");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "്");
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KIO(-1, this.s10, 2, t);
        }
        return r;
    };
}