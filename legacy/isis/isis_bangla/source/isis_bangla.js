KeymanWeb.KR(new Keyboard_isis_bangla());

function Keyboard_isis_bangla() {
    this.KI = "Keyboard_isis_bangla";
    this.KDU = 1;
    this.KN = "ISIS-Bangla";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("৺", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "০", "", "", "", "", "", "ক়", "ৱ", "এ", "র", "ত", "য", "উ", "ই", "ও", "প", "", "", "্", "", "", "", "অ", "স", "দ", "ফ়", "গ", "হ", "জ", "ক", "ল", "", "", "", "", "", "", "", "", "জ়", "", "চ", "", "ব", "ন", "ম", "", "", "", "", "", "", "", "", "", "", "", "", "", "৲", "", "", "", "", "", "", "", "", "", "", "", "", "", "ঐ", "ড়", "ট", "্য", "ঊ", "ঈ", "ঔ", "", "", "", "।", "", "", "", "আ", "ষ", "ড", "", "গ়", "ঃ", "‍", "খ়", "", "", "", "", "", "", "", "", "", "‌", "", "", "", "", "ণ", "ং", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "়", "", "", "", "", "", "", "")
    };
    this.KH = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_bangla\" target=\"_blank\">Help on this keyboard</a>";
    this.KM = 0;
    this.s7 = "কচটতপগজডদবস";
    this.s8 = "খছঠথফঘঝঢধভশ";
    this.s9 = "আইঈউঊঋৠঌৡএঐওঔ";
    this.s10 = "ািীুূৃৄৢৣেৈোৌ";
    this.s11 = "়কখগঘঙচছজঝঞটঠডড়ঢঢ়ণতথদধনপফবভমযয়রৰলৱসশষহ";
    this.s12 = "কখগঘ";
    this.s13 = "চছজঝ";
    this.s14 = "টঠডঢ";
    this.s15 = "বডঢয";
    this.s16 = "রড়ঢ়য়";
    this.s17 = "১২৩৪";
    this.s18 = "৴৵৶৷";
    this.s19 = "৲৴৵৶৷৸";
    this.s21 = "Created by Prof. Gautam Sengupta. | <a href=\"http://help.keymanweb.com/go?keyboard=Keyboard_isis_bangla\" target=\"_blank\">Help on this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16400, 52) && k.KCM(1, t, "৲", 1)) {
            r = m = 1;
            k.KO(1, t, "৹");
        } else if (k.KKM(e, 16400, 52) && k.KCM(1, t, "৹", 1)) {
            r = m = 1;
            k.KO(1, t, "৳");
        } else if (k.KKM(e, 16400, 52) && k.KCM(1, t, "৳", 1)) {
            r = m = 1;
            k.KO(1, t, "৲");
        } else if (k.KKM(e, 16400, 52) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "$");
        } else if (k.KKM(e, 16400, 52)) {
            r = m = 1;
            k.KO(0, t, "৲");
        } else if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "়");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KA(1, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "্", 1) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "়", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "়", 1) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "়্");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "়্", 2) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "়", 1)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "়");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s7) && k.KDM(2, t, 0) && k.KCM(2, t, "হ", 1) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s8, 1, t);
            k.KO(-1, t, "হ");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "্", 1) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 4, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KA(1, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "়", 1) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "়", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "়", 1)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "়্");
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "়");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "়", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "়্");
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s7) && k.KDM(1, t, 0) && k.KCM(1, t, "হ", 1)) {
            r = m = 1;
            k.KIO(2, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s7) && k.KCM(2, t, "হ", 1) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s8, 1, t);
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KCM(3, t, "জন", 2) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(3, t, "জ্ঞ");
            k.KIO(-1, this.s10, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KA(2, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 2, t);
            k.KIO(-1, this.s10, 3, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KA(1, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "়", 1)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 2, t);
            k.KO(-1, t, "়");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "়", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KO(-1, t, "়্");
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s7) && k.KCM(1, t, "হ", 1)) {
            r = m = 1;
            k.KIO(2, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 191) && k.KCM(2, t, "জন", 2)) {
            r = m = 1;
            k.KO(2, t, "জ্ঞ");
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 2, t);
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 191) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "০");
        } else if (k.KKM(e, 16384, 49) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "৴");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "১");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 50) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "৵");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "২");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 51) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "৶");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "৩");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 52) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "৷");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "৪");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "৫");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "৬");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "৭");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "৮");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "৯");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "অ", 1)) {
            r = m = 1;
            k.KO(1, t, "আ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "আ", 1)) {
            r = m = 1;
            k.KO(1, t, "অ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "া");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "়", 1)) {
            r = m = 1;
            k.KO(-1, t, "া");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "অ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "আ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ব");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "চ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ড");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "দ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "এ", 1)) {
            r = m = 1;
            k.KO(1, t, "ঐ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ঐ", 1)) {
            r = m = 1;
            k.KO(1, t, "এ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ে", 1)) {
            r = m = 1;
            k.KO(1, t, "ৈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ৈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ে");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "এ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ঐ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ফ়");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "গ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "গ়");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "ড়", 2)) {
            r = m = 1;
            k.KO(2, t, "ঢ়");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ঃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ঽ");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ঽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ঃ");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s7)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ঃ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "হ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ই", 1)) {
            r = m = 1;
            k.KO(1, t, "ঈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ঈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ই");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ি", 1)) {
            r = m = 1;
            k.KO(1, t, "ী");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ী", 1)) {
            r = m = 1;
            k.KO(1, t, "ি");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ই");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ঈ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "জ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ক");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "খ়");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ঌ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ঌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ৡ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ৡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ঌ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ৢ", 1)) {
            r = m = 1;
            k.KO(1, t, "ৣ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ৣ", 1)) {
            r = m = 1;
            k.KO(1, t, "ৢ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ল");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "অ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ং");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(1, 1, t), this.s9)) {
            r = m = 1;
            k.KO(-1, t, "ং");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KO(-1, t, "ং");
        } else if (k.KKM(e, 16400, 77) && k.KA(0, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KO(-1, t, "ং");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "়", 1)) {
            r = m = 1;
            k.KO(-1, t, "ং");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ং", 1)) {
            r = m = 1;
            k.KO(1, t, "ঁ");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ঁ", 1)) {
            r = m = 1;
            k.KO(1, t, "ং");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ঙ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ম");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ং");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ঞ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ন");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ণ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ও", 1)) {
            r = m = 1;
            k.KO(1, t, "ঔ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ঔ", 1)) {
            r = m = 1;
            k.KO(1, t, "ও");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ো", 1)) {
            r = m = 1;
            k.KO(1, t, "ৌ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ৌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ো");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ও");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ঔ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ন্", 2)) {
            r = m = 1;
            k.KO(2, t, "ম্প");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "প");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ক়");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, ";", 1)) {
            r = m = 1;
            k.KO(1, t, "ঋ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ঋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ৠ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ৠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ঋ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ৃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ৄ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ৄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ৃ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "র", 1)) {
            r = m = 1;
            k.KO(1, t, "ৰ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ৰ", 1)) {
            r = m = 1;
            k.KO(1, t, "র");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ড়");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "র");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "স");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ষ");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ৎ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ট");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ত");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "উ", 1)) {
            r = m = 1;
            k.KO(1, t, "ঊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ঊ", 1)) {
            r = m = 1;
            k.KO(1, t, "উ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ু", 1)) {
            r = m = 1;
            k.KO(1, t, "ূ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ূ", 1)) {
            r = m = 1;
            k.KO(1, t, "ু");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "উ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ঊ");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ৱ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "য", 1)) {
            r = m = 1;
            k.KO(1, t, "য়");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "য়", 1)) {
            r = m = 1;
            k.KO(1, t, "য");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "র", 1)) {
            r = m = 1;
            k.KO(1, t, "র‌্য");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "্", 1)) {
            r = m = 1;
            k.KO(1, t, "্য");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "য");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "্য");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "জ়");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "্", 1)) {
            r = m = 1;
            k.KO(1, t, "্‌");
        } else if (k.KKM(e, 16384, 106)) {
            r = m = 1;
            k.KO(0, t, "়");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16384, 107)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 109)) {
            r = m = 1;
            k.KO(0, t, "‌");
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
            k.KO(0, t, "়");
            r = this.g1(t, e);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "্", 1) && k.KA(2, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "্", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(6, 1, t), this.s11) && k.KCM(5, t, "়্", 2) && k.KA(3, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "়", 1) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(6, this.s11, 1, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s11, 4, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "্", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "্", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "্", 1) && k.KA(2, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "়", 1) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(5, 1, t), this.s11) && k.KCM(4, t, "়্", 2) && k.KA(3, k.KC(2, 1, t), this.s11) && k.KA(4, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(5, this.s11, 1, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s11, 4, t);
            k.KIO(-1, this.s10, 5, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "্", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "্", 1) && k.KA(2, k.KC(2, 1, t), this.s11) && k.KCM(1, t, "়", 1)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
            k.KO(-1, t, "়");
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(4, 1, t), this.s11) && k.KCM(3, t, "়্", 2) && k.KA(3, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(4, this.s11, 1, t);
            k.KO(-1, t, "়");
            k.KIO(-1, this.s11, 4, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(3, 1, t), this.s11) && k.KCM(2, t, "্", 1) && k.KA(2, k.KC(1, 1, t), this.s11)) {
            r = m = 1;
            k.KIO(3, this.s11, 1, t);
            k.KIO(-1, this.s11, 3, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(2, 1, t), this.s8) && k.KA(1, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(2, this.s7, 1, t);
            k.KO(-1, t, "হ");
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16416, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "হ");
        } else if (k.KKM(e, 16416, 191)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "৺", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "৺");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "৺");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "্");
        }
        return r;
    };
    this.g1 = function(t, e) {
        var k = KeymanWeb,
            r = 1,
            m = 0;
        if (k.KCM(6, t, "ন্", 2) && k.KA(2, k.KC(4, 1, t), this.s12) && k.KCM(3, t, "্", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ঙ্");
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(6, t, "ন্", 2) && k.KA(2, k.KC(4, 1, t), this.s13) && k.KCM(3, t, "্", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ঞ্");
            k.KIO(-1, this.s13, 3, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(6, t, "ন্", 2) && k.KA(2, k.KC(4, 1, t), this.s14) && k.KCM(3, t, "্", 1) && k.KA(4, k.KC(2, 1, t), this.s11) && k.KA(5, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(6, t, "ণ্");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 5, t);
            k.KIO(-1, this.s10, 6, t);
        } else if (k.KCM(5, t, "ন্", 2) && k.KA(2, k.KC(3, 1, t), this.s12) && k.KCM(2, t, "্", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ঙ্");
            k.KIO(-1, this.s12, 3, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(5, t, "ন্", 2) && k.KA(2, k.KC(3, 1, t), this.s13) && k.KCM(2, t, "্", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ঞ্");
            k.KIO(-1, this.s13, 3, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(5, t, "ন্", 2) && k.KA(2, k.KC(3, 1, t), this.s14) && k.KCM(2, t, "্", 1) && k.KA(4, k.KC(1, 1, t), this.s11)) {
            m = 1;
            k.KO(5, t, "ণ্");
            k.KIO(-1, this.s14, 3, t);
            k.KO(-1, t, "্");
            k.KIO(-1, this.s11, 5, t);
        } else if (k.KCM(4, t, "ন্", 2) && k.KA(2, k.KC(2, 1, t), this.s12) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ঙ্");
            k.KIO(-1, this.s12, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(4, t, "ন্", 2) && k.KA(2, k.KC(2, 1, t), this.s13) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ঞ্");
            k.KIO(-1, this.s13, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(4, t, "ন্", 2) && k.KA(2, k.KC(2, 1, t), this.s14) && k.KA(3, k.KC(1, 1, t), this.s10)) {
            m = 1;
            k.KO(4, t, "ণ্");
            k.KIO(-1, this.s14, 3, t);
            k.KIO(-1, this.s10, 4, t);
        } else if (k.KCM(3, t, "জ্ন", 3)) {
            m = 1;
            k.KO(3, t, "জ্ঞ");
        } else if (k.KCM(3, t, "ন্", 2) && k.KA(2, k.KC(1, 1, t), this.s12)) {
            m = 1;
            k.KO(3, t, "ঙ্");
            k.KIO(-1, this.s12, 3, t);
        } else if (k.KCM(3, t, "ন্", 2) && k.KA(2, k.KC(1, 1, t), this.s13)) {
            m = 1;
            k.KO(3, t, "ঞ্");
            k.KIO(-1, this.s13, 3, t);
        } else if (k.KCM(3, t, "ন্", 2) && k.KA(2, k.KC(1, 1, t), this.s14)) {
            m = 1;
            k.KO(3, t, "ণ্");
            k.KIO(-1, this.s14, 3, t);
        } else if (k.KCM(3, t, "৷৷৷", 3)) {
            m = 1;
            k.KO(3, t, "৸");
        } else if (k.KCM(3, t, "৷৷৪", 3)) {
            m = 1;
            k.KO(3, t, "৸");
        } else if (k.KA(0, k.KC(2, 1, t), this.s11) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(2, this.s11, 1, t);
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KCM(2, t, "়", 1) && k.KA(1, k.KC(1, 1, t), this.s9)) {
            m = 1;
            k.KIO(-1, this.s10, 2, t);
        } else if (k.KA(0, k.KC(2, 1, t), this.s19) && k.KA(1, k.KC(1, 1, t), this.s17)) {
            m = 1;
            k.KIO(2, this.s19, 1, t);
            k.KIO(-1, this.s18, 2, t);
        }
        return r;
    };
}