KeymanWeb.KR(new Keyboard_burmese02());

function Keyboard_burmese02() {
    this.KI = "Keyboard_burmese02";
    this.KN = "Burmese";
    this.KBVER = "1.1";
    this.KV = {
        F: ' 1em "Padauk"',
        K102: 0,
        BK: new Array("", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉", "၀", "", "", "", "", "", "ဆ", "တ", "န", "မ", "အ", "ပ", "က", "င", "သ", "စ", "ဟ", "ဩ", "၏", "", "", "", "ေ", "ျ", "ိ", "္", "", "့", "ြ", "ု", "ူ", "း", "ဒ", "", "", "", "", "", "", "ဖ", "ထ", "ခ", "လ", "ဘ", "ည", "ာ", "ယ", "ဈ", "၊", "", "", "", "", "", "", "", "ဍ", "", "ဋ", "", "", "", "ရ", "ဂ", "", "ဝ", "", "", "", "", "", "", "", "ဣ", "၎", "ဤ", "၌", "ဥ", "၍", "ဉ", "ဏ", "", "ဪ", "", "", "", "", "ဗ", "ှ", "ီ", "်", "ွ", "ံ", "ဲ", "", "", "", "ဓ", "", "", "", "", "", "", "ဇ", "ဌ", "ဃ", "ဠ", "", "", "", "ဎ", "ဦ", "။", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s5 = "........";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, "ဝ");
        } else if (k.KKM(e, 16384, 48)) {
            m = 1;
            k.KO(0, t, "၀");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "ဍ");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "၁");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "၂");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "ဋ");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "၃");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "၄");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "၅");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "၆");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "ရ");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "၇");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "ဂ");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "၈");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "၉");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "ဗ");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ေ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ဘ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ခ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ဃ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ိ");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ီ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "န");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ဣ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "္");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "်");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "ွ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ံ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "့");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "င");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "၍");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ြ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ဲ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ု");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ူ");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ာ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ည");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ဉ");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "သ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "စ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "ဏ");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ဆ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "မ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "၎");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ျ");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ှ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "အ");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ဤ");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "က");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ဥ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "လ");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ဠ");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "တ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ဌ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ထ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ပ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "၌");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ဇ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ဖ");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "း");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "ဎ");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "ယ");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, "ဈ");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "ဦ");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "၊");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "။");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ဟ");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "၏");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ဩ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "ဪ");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "ဒ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "ဓ");
        }
        return m;
    };
}