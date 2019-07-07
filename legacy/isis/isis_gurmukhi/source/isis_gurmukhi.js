KeymanWeb.KR(new Keyboard_isis_gurmukhi());

function Keyboard_isis_gurmukhi() {
    this.KI = "Keyboard_isis_gurmukhi";
    this.KDU = 1;
    this.KN = "ISIS-Gurmukhi";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("ਂ", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯", "੦", "", "", "", "", "", "ਕ਼", "", "ਏ", "ਰ", "ਤ", "ਯ", "ਉ", "ਇ", "ਓ", "ਪ", "", "", "੍", "", "", "", "ਅ", "ਸ", "ਦ", "ਫ਼", "ਗ", "ਹ", "ਜ", "ਕ", "ਲ", "", "ੱ", "", "", "", "", "", "", "ਜ਼", "", "ਚ", "ਵ", "ਬ", "ਨ", "ਮ", "", "", "", "", "", "", "", "", "", "ਁ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ਐ", "ੜ", "ਟ", "", "ੳ", "ੲ", "ਔ", "", "", "", "।", "", "", "", "ਆ", "", "ਡ", "", "ਗ਼", "ਃ", "‍", "ਖ਼", "ਲ਼", "", "", "", "", "", "", "", "", "‌", "", "", "", "", "ਣ", "ੴ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "਼", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_gurmukhi\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "ਕਚਟਤਪਗਜਡਦਬਸ";
    this.s8 = "ਖਛਠਥਫਘਝਢਧਭਸ਼";
    this.s9 = "ਆਇਈਉਊਏਐਓਔ";
    this.s10 = "ਾਿੀੁੂੇੈੋੌ";
    this.s11 = "ਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹਖ਼ਗ਼ਜ਼ੜਫ਼";
    this.s12 = "ਖਗਜਫ";
    this.s13 = "ਖ਼ਗ਼ਜ਼ਫ਼";
    this.s15 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_gurmukhi\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 222) && k.KCM(1, t, "ੱ", 1)) {
            r = m = 1;
            k.KO(1, t, "'");
        } else if (k.KKM(e, 16384, 222) && k.KCM(1, t, "'", 1)) {
            r = m = 1;
            k.KO(1, t, "ੱ");
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "ੱ");
        } else if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "਼");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KDM(4, t, 0) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "੍", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KDM(3, t, 0) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "੍", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "੍", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KDM(2, t, 0) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "੍", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KDM(1, t, 0) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 2, t);
            k.KIO(-1, this.s10, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "੍");
            k.KIO(-1, this.s11, 2, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "੦");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "੧");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "੨");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "੩");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "੪");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "੫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "੬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "੭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "੮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "੯");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ਅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਆ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ਆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਅ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ਾ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "਼", 1)) {
            r = m = 1;
            k.KO(-1, t, "ਾ");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ਅ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ਆ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ਬ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ਚ");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ਡ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ਦ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ਏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਐ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ਐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਏ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ੇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ੈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੇ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ਏ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ਐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ਫ਼");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ਗ");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "ਗ਼");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ਃ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ਹ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ਇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ਈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਇ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ਿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੀ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ੀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਿ");
        } else if (k.KKM(e, 16384, 73) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ੲ");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ਇ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ੲ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ਜ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ਕ");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "ਖ਼");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ਲ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ਲ਼");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ਙ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ਮ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ੴ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ਞ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ਨ");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ਣ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ਓ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਔ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ਔ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਓ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ੋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੌ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ੌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੋ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ਓ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ਔ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ਪ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ਕ਼");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ੜ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ਰ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ਸ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ਟ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ਤ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ਉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ਊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ਉ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ੁ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੂ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ੂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੁ");
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ੳ");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ਉ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ੳ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "ਵ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ਯ");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ਜ਼");
        } else if (k.KKM(e, 16384, 106)) {
            r = m = 1;
            k.KO(0, t, "਼");
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
            k.KO(1, t, "|");
        } else if (k.KKM(e, 16400, 220) && k.KCM(1, t, "|", 1)) {
            r = m = 1;
            k.KO(1, t, "।");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "।");
        } else if (k.KKM(e, 16416, 190)) {
            r = m = 1;
            k.KO(0, t, "਼");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "੍", 1) && k.KA(2, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "੍", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "੍", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "੍", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "੍", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "੍", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "ਹ");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 192) && k.KCM(1, t, "ਁ", 1)) {
            r = m = 1;
            k.KO(1, t, "~");
        } else if (k.KKM(e, 16400, 192) && k.KCM(1, t, "~", 1)) {
            r = m = 1;
            k.KO(1, t, "ਁ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ਂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ੰ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ੰ", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "ਂ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ਅ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ਂ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "਼", 1)) {
            r = m = 1;
            k.KO(-1, t, "ਂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ਂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(-1, t, "ਂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ਂ");
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "ਁ");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "ਂ");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "਼", 1)) {
            r = m = 1;
            k.KO(-1, t, "੍");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "੍", 1)) {
            r = m = 1;
            k.KO(1, t, "੍‌");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "੍");
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
        } else if (k.KCM(2, t, "਼", 1) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KO(2, t, "਼");
            k.KIO(-1, this.s10, 2, t);
        }
        return r;
    };
}