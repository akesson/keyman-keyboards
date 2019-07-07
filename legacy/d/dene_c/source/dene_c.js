KeymanWeb.KR(new Keyboard_dene_c());

function Keyboard_dene_c() {
    this.KI = "Keyboard_dene_c";
    this.KN = "Dene C";
    this.KV = {
        F: ' 1em "Euphemia"',
        K102: 0,
        BK: new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ʿ", "ᐧ", "ᐁ", "ᙆ", "ᐟ", "ᐩ", "ᐤ", "ᐃ", "ᐅ", "ʿᔆ", "‘", "’", "¤", "", "", "", "ᐊ", "ᐢ", "ᐟ", "", "ᐠ", "ᑋ", "ᑋ", "ᐠ", "ᔆ", "ˋ", "ˈ", "", "", "", "", "", "", "ᐢ", "ʿ", "ᐡ", "V", "ᑊ", "ᐣ", "ᒼ", "", "", "ᐥ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ᐧ", "ᐁ", "", "", "", "", "ᐃ", "ᐅ", "", "“", "”", "\\", "", "", "", "ᐊ", "", "", "F", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "᙭", "", "V", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s4 = "ᙆᐩᐢᐟᐠᔆᑊᐣᒼᐡ";
    this.s5 = "rysdglbnmc";
    this.s6 = "ᐯᒣᕫᑌᓀᓭᕃᗯᔦᑫᖊ ";
    this.s7 = "ᐱᒥᕬᑎᓂᓯᕄᗰᔨᑭᖋ ";
    this.s8 = "ᐳᒧᕭᑐᓄᓱᕊᗱᔪᑯᖌ ";
    this.s9 = "ᐸᒪᕮᑕᓇᓴᕍᗴᔭᑲᖍ ";
    this.s10 = "ᑊᒼfᐟᐣᐢᔆᐡᐩᐠᙆ";
    this.s11 = "qtjz";
    this.s12 = "ʿᐟᑋᐢ";
    this.s13 = "ᒉᘚᕰᗀ";
    this.s14 = "ᒋᘛᕱᗁ";
    this.s15 = "ᒍᘕᕲᗂ";
    this.s16 = "ᒐᘔᕳᗃ";
    this.s17 = "ᑋᐢᐟʿ";
    this.s18 = "aeio";
    this.s19 = "ᑲᑫᑭᑯ";
    this.s20 = "x";
    this.s21 = "ʿ";
    this.s22 = ";'u/hXVvF[]{}\\|";
    this.s23 = "ˋˈᐤᐥᑋ᙭VVF‘’“”¤\\ˡ";
    this.s24 = "ᐊᐁᐃᐅᐊᐁᐃᐅ";
    this.s25 = "aeioAEIO";
    this.s26 = "QRTYUPSDGHJKLZCBNM";
    this.s27 = "ᑕᑌᑎᑐ";
    this.s28 = "ᕍᕃᕄᕊ";
    this.s29 = "ᓴᓭᓯᓱ";
    this.s30 = "ᗴᗯᗰᗱ";
    this.s31 = "ᒐᒉᒋᒍ";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 222) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "'");
        } else if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "ˈ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "/");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "ᐥ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, ";");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ˋ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ᐁ");
        } else if (k.KKM(e, 16400, 70) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "F");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "F");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 86) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "V");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "ᐧ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "X");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "᙭");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 219) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "[");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "‘");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "¤");
        } else if (k.KKM(e, 16384, 221) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "]");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KO(0, t, "’");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᐟ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑕˈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᐠ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑲˈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᑋ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᒐˈ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s17) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KIO(1, this.s16, 1, t);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐠ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(1, t, "ʿᑲ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐧ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(1, t, "aᐧ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᐟˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑕˈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᐠˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑲˈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᔆˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᕍˈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᐢˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᓴˈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᐡˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᗴˈ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ᑊ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ᐡ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ᐟ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᐟ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑌˈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᐠ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑫˈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᑋ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᒉˈ");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s17) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KIO(1, this.s13, 1, t);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐠ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(1, t, "ʿᑫ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐧ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(1, t, "eᐧ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᐟˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑌˈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᐠˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑫˈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᔆˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᕃˈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᐢˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᓭˈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ᐡˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᗯˈ");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s6, 1, t);
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ᐁ");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ᐠ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "h");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ᑋ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᐟ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑎˈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᐠ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑭˈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᑋ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᒋˈ");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s17) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KIO(1, this.s14, 1, t);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐠ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(1, t, "ʿᑭ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐧ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(1, t, "iᐧ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᐟˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑎˈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᐠˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑭˈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᔆˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᕄˈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᐢˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᓯˈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ᐡˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᗰˈ");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ᑋ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ᐠ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ᔆ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ᒼ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ᐣ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᐟ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑐˈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᐠ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᑯˈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᑋ", 1) && k.KDM(1, t, 1) && k.KCM(1, t, "ˈ", 1)) {
            r = m = 1;
            k.KO(2, t, "ᒍˈ");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s17) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KIO(1, this.s15, 1, t);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᐠ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(1, t, "ʿᑯ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᐧ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(1, t, "oᐧ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᐟˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑐˈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᐠˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑯˈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᔆˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᕊˈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᐢˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᓱˈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ᐡˈ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᗱˈ");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s10)) {
            r = m = 1;
            k.KIO(1, this.s8, 1, t);
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ʿᔆ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ʿ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ᙆ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ᐢ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ᐟ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "u");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ᐤ");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "v");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "V");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ᐧ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "ʿ");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ᐩ");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ᐢ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 219) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "{");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "“");
        } else if (k.KKM(e, 16400, 220) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "|");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 221) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "}");
        } else if (k.KKM(e, 16400, 221)) {
            r = m = 1;
            k.KO(0, t, "”");
        }
        return r;
    };
}