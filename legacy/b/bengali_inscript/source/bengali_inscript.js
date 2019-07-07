KeymanWeb.KR(new Keyboard_bengali_inscript());

function Keyboard_bengali_inscript() {
    this.KI = "Keyboard_bengali_inscript";
    this.KN = "Bengali (Inscript)";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "০", "-", "ৃ", "", "", "", "ৌ", "ৈ", "া", "ী", "ূ", "ব", "হ", "গ", "দ", "জ", "ড", "়", "", "", "", "", "ো", "ে", "্", "ি", "ু", "প", "র", "ক", "ত", "চ", "ট", "", "", "", "", "", "", "", "ং", "ম", "ন", "ব", "ল", "স", ",", ".", "য়", "", "", "", "", "", " ", "", "!", "@", "", "র্", "জ্ঞ", "ত্র", "ক্ষ", "শ্র", "(", ")", "ঃ", "ঋ", "", "", "", "ঔ", "ঐ", "আ", "ঈ", "ঊ", "ভ", "ঙ", "ঘ", "ধ", "ঝ", "ঢ", "ঞ", "", "", "", "", "ও", "এ", "অ", "ই", "উ", "ফ", "", "খ", "থ", "ছ", "ঠ", "", "", "", "", "", "", "", "ঁ", "ণ", "", "", "", "শ", "ষ", "", "য", "", "", "", "", "", " ")
    };
    this.KH = '';
    this.KM = 0;
    this.s7 = "......";
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
        } else if (k.KKM(e, 16384, 48)) {
            m = 1;
            k.KO(0, t, "০");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "১");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "২");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "@");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "৩");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "৪");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "র্");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "৫");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "জ্ঞ");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "৬");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "ত্র");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "৭");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "ক্ষ");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "৮");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "শ্র");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "৯");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ো");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "ও");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ব");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ম");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ণ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "্");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "অ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "া");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "আ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ি");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ই");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ু");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "উ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "প");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ফ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "গ");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ঘ");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "র");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ক");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "খ");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ত");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "থ");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "স");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "শ");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ল");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "দ");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ধ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "জ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "ঝ");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ৌ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ঔ");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ী");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ঈ");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ে");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "এ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ূ");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ঊ");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "হ");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ঙ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ন");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ৈ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ঐ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ং");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ঁ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ব");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "ভ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "চ");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "ছ");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "ৃ");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "ঋ");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "ষ");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ঃ");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "য়");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "য");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ড");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "ঢ");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "়");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "ঞ");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "ট");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "ঠ");
        }
        return m;
    };
}