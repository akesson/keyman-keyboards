KeymanWeb.KR(new Keyboard_isis_kannada());

function Keyboard_isis_kannada() {
    this.KI = "Keyboard_isis_kannada";
    this.KDU = 1;
    this.KN = "ISIS-Kannada";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯", "೦", "", "", "", "", "", "", "", "ಎ", "ರ", "ತ", "ಯ", "ಉ", "ಇ", "ಒ", "ಪ", "", "", "್", "", "", "", "ಅ", "ಸ", "ದ", "", "ಗ", "ಹ", "ಜ", "ಕ", "ಲ", "", "", "", "", "", "", "", "", "", "", "ಚ", "ವ", "ಬ", "ನ", "ಮ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ಐ", "ಱ", "ಟ", "", "ಊ", "ಈ", "ಔ", "", "", "", "।", "", "", "", "ಆ", "ಷ", "ಡ", "", "", "ಃ", "", "", "ಳ", "", "", "", "", "", "", "", "", "", "", "", "", "", "ಣ", "ಂ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "਼", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_kannada\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "ಕಚಟತಪಗಜಡದಬಸ";
    this.s8 = "ಖಛಠಥಫಘಝಢಧಭಶ";
    this.s9 = "ಆಇಈಉಊಋೠಎಏಐಒಓಔ";
    this.s10 = "ಾಿೀುೂೃೄೆೇೈೊೋೌ";
    this.s11 = "ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲೞಳವಸಶಷಹ";
    this.s13 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_kannada\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KDM(4, t, 0) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "್", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KDM(3, t, 0) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "್", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "್", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KDM(2, t, 0) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "್", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KCM(3, t, "ಜನ", 2) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(3, t, "ಜ್ಞ");
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KDM(1, t, 0) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 2, t);
            k.KIO(-1, this.s10, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KCM(2, t, "ಜನ", 2)) {
            r = m = 1;
            k.KO(2, t, "ಜ್ಞ");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "್");
            k.KIO(-1, this.s11, 2, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "ಆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಾ");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "೦");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "೧");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "೨");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "೩");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "೪");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "೫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "೬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "೭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "೮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "೯");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ಅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಆ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ಆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಅ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ಾ");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ಅ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ಆ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ಬ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ಚ");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ಡ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ದ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ಎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಏ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ಏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಎ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ೆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೇ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ೇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೆ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ಎ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ಐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ಗ");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ಃ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ಹ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ಇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ಈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಇ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ಿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೀ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ೀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಿ");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ಇ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ಈ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ಜ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ಕ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ಌ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ಌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೡ");
        } else if (k.KKM(e, 16384, 76) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ೞ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ಲ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ಳ");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ಙ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ಮ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ಂ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ಞ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ನ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ಣ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ಒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಓ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ಓ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಒ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ೊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೋ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ೋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೊ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ಒ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ಔ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ಪ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ಋ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ಋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೠ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ೠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಋ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ೃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೄ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ೄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ೃ");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ಱ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ರ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ಸ");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ಷ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ಟ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ತ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ಉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ಊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಉ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ು", 1)) {
            r = m = 1;
            k.KO(1, t, "ೂ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ೂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ು");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ಉ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ಊ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "ವ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ಯ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ಅ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ಂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ಂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(-1, t, "ಂ");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ಂ");
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
            k.KO(1, t, "।");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "।");
        } else if (k.KKM(e, 16416, 190)) {
            r = m = 1;
            k.KO(0, t, "਼");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "್", 1) && k.KA(2, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "್", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "್", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "್", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "್", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "್", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "હ");
        } else if (k.KKM(e, 16416, 191) && k.KCM(1, t, "ಾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ಆ");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "ಂ");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "ಂ", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "್", 1)) {
            r = m = 1;
            k.KO(1, t, "್‌");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "್");
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KCM(3, t, "ಜ್ನ", 3)) {
            m = 1;
            k.KO(3, t, "ಜ್ಞ");
        } else if (k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KIO(-1, this.s10, 2, t);
        }
        return r;
    };
}