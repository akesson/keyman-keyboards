KeymanWeb.KR(new Keyboard_phoneticmalayalam());

function Keyboard_phoneticmalayalam() {
    this.KI = "Keyboard_phoneticmalayalam";
    this.KBVER = "1.1";
    this.KN = "PhoneticMalayalam";
    this.KV = {
        F: ' 1em "AnjaliOldLipi"',
        K102: 0,
        KDU: 1,
        BK: new Array("‍", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "്", "വ്", "െ", "ർ", "റ്റ്", "യ്", "ു", "ി", "ൊ", "പ്", "", "", "‌", "", "", "", "ാ", "സ്", "ദ്", "ഫ്", "ഗ്", "ഹ്", "ജ്", "ൿ", "ൽ", "", "", "", "", "", "", "", "", "ഴ്", "ൃ", "ൿ", "വ്", "ബ്", "ൻ", "ം", "", "", "ം", "", "", "", "", "", " ", "‌", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ഘ്", "വ്", "എ", "റ്", "ട്", "യ്", "ഉ", "ഇ", "ഒ", "പ്പ്", "`", "'", "\\", "", "", "", "അ", "ശ്", "ഡ്", "ഫ്", "ങ്", "ഃ", "ഞ്", "ഖ്", "ൾ", "", "", "", "", "", "", "", "", "ഴ്", "ഋ", "ഛ്", "വ്", "ഭ്", "ൺ", "ം", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s15 = "ബചഛദധഫഗഹജകഖലമണനപരറശസടവയഴഭഡഢഥഠഝഘളങഞഷത";
    this.s16 = "ഫഫഹലണനരറഴഴവയയഭളങഞവഖസക";
    this.s17 = "fFhlNnrRZzvyYBLGJwKsk";
    this.s18 = "ബദഫഫഗഹജഖമപറശസടവവവവയയഴഭഡങഞ";
    this.s19 = "bdFfghjKmpRSsTVvWwYyzBDGJ";
    this.s20 = "്";
    this.s21 = " .,?\\/!&()\"'";
    this.s22 = "ലനണരളക";
    this.s23 = "ൽൻൺർൾൿ";
    this.s24 = "lnNrLk";
    this.s25 = "‍";
    this.s26 = "ൽൻൺർൾൿിീെേൈൊോൌാൃൌഇഈഉഊഎഏഐഒഓഔഋൠആഅ";
    this.s27 = "ാെിൊുൃ";
    this.s28 = "ാേീോൂൃ";
    this.s29 = "ആഏഈഓഊൠ";
    this.s30 = "അഎഇഒഉഋ";
    this.s31 = "ആഏഈഓഊൠീൂേൈോൌൃൌ";
    this.s32 = "gCdjDspSTb";
    this.s33 = "ഗഛദജഡസപശടബതധ";
    this.s34 = "ഘഝധഝഢഷഫഴഠഭഥഠ";
    this.s35 = "ീൂേൈോൌൃൌ";
    this.s36 = "aeioux";
    this.s37 = "AEIOUX";
    this.s38 = "അഎഇഒഉഋഏഐഈഓഔഊ";
    this.s39 = "ാെിൊുൃേൈീോൌൂ";
    this.s40 = "ieuoIEUOxX";
    this.s41 = "ിെുൊീേൂോൃൃ";
    this.s42 = "്‍";
    this.s43 = "..";
    this.s44 = "ഖച";
    this.s45 = "kc";
    this.s46 = "VWvw";
    this.s47 = "aA";
    this.s48 = "eE";
    this.s49 = "iI";
    this.s50 = "oO";
    this.s51 = "uU";
    this.s52 = "xX";
    this.s53 = "ീീ";
    this.s54 = "ie";
    this.s55 = "ൈൌൌേ";
    this.s56 = "iuoe";
    this.s57 = "ൂൌോ";
    this.s58 = "oue";
    this.s59 = "ൂൂ";
    this.s60 = "uo";
    this.s61 = "mM";
    this.s62 = " .";
    this.KVER = "9.0.424.0";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊ ");
        } else if (k.KKM(e, 16384, 32) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐ ");
        } else if (k.KKM(e, 16384, 32)) {
            r = m = 1;
            k.KO(0, t, " ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 222) && k.KCM(1, t, "‍", 1)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 56) && k.KCM(1, t, "ൾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഌ");
        } else if (k.KKM(e, 16400, 56) && k.KCM(1, t, "ഌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ൡ");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "ം");
        } else if (k.KKM(e, 16400, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ിയ");
            k.KDO(-1, t, 4);
        } else if (k.KKM(e, 16400, 65) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "്", 1)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ാ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ആ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "അ");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഭ്");
        } else if (k.KKM(e, 16400, 66) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഭ്");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "ഭ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഛ്");
        } else if (k.KKM(e, 16400, 67) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഛ്");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "ഛ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഡ്");
        } else if (k.KKM(e, 16400, 68) && k.KCM(1, t, "ൺ", 1)) {
            r = m = 1;
            k.KO(1, t, "ണ്ഡ്");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ഡ്");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "എ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഏ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഓ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ഇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മേ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "എ");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഫ്");
        } else if (k.KKM(e, 16400, 70) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഫ്");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "ഫ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐങ്");
        } else if (k.KKM(e, 16400, 71) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠങ്");
        } else if (k.KKM(e, 16400, 71) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ങ്");
        } else if (k.KKM(e, 16400, 71) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ങ്");
        } else if (k.KKM(e, 16400, 71) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ങ്");
        } else if (k.KKM(e, 16400, 71) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ങ്");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "ങ്");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ഃ");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "ഃ");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൈ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഐ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ഇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ഇ");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഞ്");
        } else if (k.KKM(e, 16400, 74) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഞ്");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "ഞ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഖ്");
        } else if (k.KKM(e, 16400, 75) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഖ്");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "ഖ്");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐൾ");
        } else if (k.KKM(e, 16400, 76) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠൾ");
        } else if (k.KKM(e, 16400, 76) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ൾ");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "്ള്");
        } else if (k.KKM(e, 16400, 76) && k.KCM(1, t, "ൾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ള്ള്");
        } else if (k.KKM(e, 16400, 76) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ള്");
        } else if (k.KKM(e, 16400, 76) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്ള്‍");
        } else if (k.KKM(e, 16400, 76) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ള്");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ൾ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ള്");
        } else if (k.KKM(e, 16400, 77) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ം");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്മ്");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ന്മ്");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ം");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐൺ");
        } else if (k.KKM(e, 16400, 78) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠൺ");
        } else if (k.KKM(e, 16400, 78) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ൺ");
        } else if (k.KKM(e, 16400, 78) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "്ണ്");
        } else if (k.KKM(e, 16400, 78) && k.KCM(1, t, "ൺ", 1)) {
            r = m = 1;
            k.KO(1, t, "ണ്ണ്");
        } else if (k.KKM(e, 16400, 78) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ണ്");
        } else if (k.KKM(e, 16400, 78) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്ണ്‍");
        } else if (k.KKM(e, 16400, 78) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ണ്");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ൺ");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ണ്");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ഉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ഒ");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "പ്പ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഘ്");
        } else if (k.KKM(e, 16400, 81) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഘ്");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "ഘ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐറ്");
        } else if (k.KKM(e, 16400, 82) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠറ്");
        } else if (k.KKM(e, 16400, 82) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "റ്");
        } else if (k.KKM(e, 16400, 82) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "റ്");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്റ്");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്റ്");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ന്റ്");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "റ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐശ്");
        } else if (k.KKM(e, 16400, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠശ്");
        } else if (k.KKM(e, 16400, 83) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ശ്");
        } else if (k.KKM(e, 16400, 83) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ശ്");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ശ്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐട്");
        } else if (k.KKM(e, 16400, 84) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠട്");
        } else if (k.KKM(e, 16400, 84) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ട്");
        } else if (k.KKM(e, 16400, 84) && k.KCM(1, t, "ൺ", 1)) {
            r = m = 1;
            k.KO(1, t, "ണ്ട്");
        } else if (k.KKM(e, 16400, 84) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ട്");
        } else if (k.KKM(e, 16400, 84) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ട്");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ട്");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഔ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ഉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഔ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ഉ");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐവ്");
        } else if (k.KKM(e, 16400, 86) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠവ്");
        } else if (k.KKM(e, 16400, 86) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16400, 86) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16400, 86) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്വ്");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "വ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠണ്ട്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐവ്");
        } else if (k.KKM(e, 16400, 87) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠവ്");
        } else if (k.KKM(e, 16400, 87) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്വ്");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "വ്");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "ണ്ട്");
        } else if (k.KKM(e, 16400, 88) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "ഋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ൠ");
        } else if (k.KKM(e, 16400, 88) && k.KA(0, k.KC(1, 1, t), this.s15)) {
            r = m = 1;
            k.KIO(1, this.s15, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "ഋ");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐയ്");
        } else if (k.KKM(e, 16400, 89) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠയ്");
        } else if (k.KKM(e, 16400, 89) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "യ്");
        } else if (k.KKM(e, 16400, 89) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "യ്");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്യ്");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്യ്");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "യ്");
        } else if (k.KKM(e, 16400, 90) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഴ്");
        } else if (k.KKM(e, 16400, 90) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഴ്");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "ഴ്");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "\\", 1)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 65) && k.KCM(6, t, "മ", 1) && k.KDM(5, t, 4) && k.KDM(5, t, 3) && k.KCM(5, t, "ല", 1) && k.KDM(4, t, 4) && k.KDM(4, t, 3) && k.KCM(4, t, "യ", 1) && k.KDM(3, t, 4) && k.KDM(3, t, 3) && k.KCM(3, t, "ല്‍", 3)) {
            r = m = 1;
            k.KO(6, t, "മലയാള");
        } else if (k.KKM(e, 16384, 65) && k.KCM(10, t, "ചെ", 2) && k.KDM(8, t, 3) && k.KCM(8, t, "റ്റ്റ്റ്", 8)) {
            r = m = 1;
            k.KO(10, t, "ചേട്ട");
        } else if (k.KKM(e, 16384, 65) && k.KCM(4, t, "ിയ്യ", 4) && k.KDM(0, t, 4)) {
            r = m = 1;
            k.KO(4, t, "ിയ്യാ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ാ");
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ിയ");
            k.KDO(-1, t, 4);
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ിയ", 2) && k.KDM(0, t, 4)) {
            r = m = 1;
            k.KO(2, t, "ിയാ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 4)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "്", 1)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ാ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ാ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s31) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KN(0, t)) {
            r = m = 1;
            k.KO(0, t, "ാ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ആ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ");
            k.KDO(-1, t, 4);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "അ");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐബ്");
        } else if (k.KKM(e, 16384, 66) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠബ്");
        } else if (k.KKM(e, 16384, 66) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ബ്");
        } else if (k.KKM(e, 16384, 66) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്ബ്");
        } else if (k.KKM(e, 16384, 66) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ബ്");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ബ്");
        } else if (k.KKM(e, 16384, 67) && k.KCM(4, t, "മു", 2) && k.KDM(2, t, 3) && k.KCM(2, t, "സി", 2) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(4, t, "മ്യൂസിക്");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠ");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്");
            k.KDO(-1, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 67) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ച്");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KDO(0, t, 1);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐദ്");
        } else if (k.KKM(e, 16384, 68) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠദ്");
        } else if (k.KKM(e, 16384, 68) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ദ്");
        } else if (k.KKM(e, 16384, 68) && k.KCM(2, t, "ഗൂ", 2) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(2, t, "ഗുഡ്");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ൺ", 1)) {
            r = m = 1;
            k.KO(1, t, "ണ്ട്");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ദ്");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ന്ദ്");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ദ്");
        } else if (k.KKM(e, 16384, 69) && k.KCM(8, t, "റ്റ്യ്പ്", 8)) {
            r = m = 1;
            k.KO(8, t, "ടൈപ്പ്");
        } else if (k.KKM(e, 16384, 69) && k.KCM(6, t, "ലു", 2) && k.KDM(4, t, 3) && k.KCM(4, t, "റ്റ്", 4)) {
            r = m = 1;
            k.KO(6, t, "ളുടെ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(6, t, "ളു", 2) && k.KDM(4, t, 3) && k.KCM(4, t, "റ്റ്", 4)) {
            r = m = 1;
            k.KO(6, t, "ളുടെ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(6, t, "രു", 2) && k.KDM(4, t, 3) && k.KCM(4, t, "റ്റ്", 4)) {
            r = m = 1;
            k.KO(6, t, "രുടെ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(6, t, "ലുറ്റ്", 6)) {
            r = m = 1;
            k.KO(6, t, "ളുടെ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(6, t, "ളുറ്റ്", 6)) {
            r = m = 1;
            k.KO(6, t, "ളുടെ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(3, t, "ഫി", 2) && k.KDM(1, t, 3) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(3, t, "ഫയല്‍");
        } else if (k.KKM(e, 16384, 69) && k.KCM(3, t, "ഫൊ", 2) && k.KDM(1, t, 3) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(3, t, "phone‍");
        } else if (k.KKM(e, 16384, 69) && k.KCM(4, t, "ബ്യ്", 4)) {
            r = m = 1;
            k.KO(4, t, "bye");
        } else if (k.KKM(e, 16384, 69) && k.KCM(4, t, "മൌസ്", 4)) {
            r = m = 1;
            k.KO(4, t, "mouse");
        } else if (k.KKM(e, 16384, 69) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "െ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "േ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ോ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "െ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s31) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 69) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "െ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KN(0, t)) {
            r = m = 1;
            k.KO(0, t, "െ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "എ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഏ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഓ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ഇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മെ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "എ");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്ഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഫ്");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഫ്");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "ഫ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്ഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഗ്");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ങ്ങ്");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ഗ്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(9, t, "എങ്ങ്ലി", 7) && k.KDM(2, t, 3) && k.KCM(2, t, "സ്", 2)) {
            r = m = 1;
            k.KO(9, t, "ഇം‌ഗ്ലീഷ്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(6, t, "്", 1) && k.KA(1, k.KC(5, 1, t), this.s25) && k.KCM(4, t, "റ്റ്", 4)) {
            r = m = 1;
            k.KO(6, t, "്ത്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(5, t, "ൻറ്റ്", 5)) {
            r = m = 1;
            k.KO(5, t, "ന്ത്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(4, t, "റ്റ്", 4)) {
            r = m = 1;
            k.KO(4, t, "ത്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(4, t, "ന്റ്", 4)) {
            r = m = 1;
            k.KO(4, t, "ന്ത്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(3, t, "ക്സ", 3)) {
            r = m = 1;
            k.KO(3, t, "ക്ഷ്");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(2, 1, t), this.s33) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s34, 1, t);
            k.KO(-1, t, "്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, " ", 1) && k.KDM(0, t, 2)) {
            r = m = 1;
            k.KO(1, t, " ഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KDM(1, t, 0) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഖ്");
        } else if (k.KKM(e, 16384, 72) && k.KDM(1, t, 1) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ച്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "ക്", 2)) {
            r = m = 1;
            k.KO(2, t, "ഖ്");
        } else if (k.KKM(e, 16384, 72) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഖ്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഹ്");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഹ്");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ഹ്");
        } else if (k.KKM(e, 16448, 104)) {
            r = m = 1;
            k.KO(0, t, "യുറോ");
        } else if (k.KKM(e, 16384, 73) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൈ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൈ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ി");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൈ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ൈ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ീ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ി");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s31) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 73) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ി");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KN(0, t)) {
            r = m = 1;
            k.KO(0, t, "ി");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഐ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ഇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മി");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ഇ");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐജ്");
        } else if (k.KKM(e, 16384, 74) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠജ്");
        } else if (k.KKM(e, 16384, 74) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ജ്");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ജ്");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഞ്ഞ്");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ജ്");
        } else if (k.KKM(e, 16384, 75) && k.KCM(4, t, "ങ്ങ്", 4)) {
            r = m = 1;
            k.KO(4, t, "ങ്ക്‍");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠ");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐൿ");
        } else if (k.KKM(e, 16384, 75) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠൿ");
        } else if (k.KKM(e, 16384, 75) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "്ക്");
        } else if (k.KKM(e, 16384, 75) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ക്");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്ക്‍");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്");
            k.KDO(-1, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ക്");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ക്");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ൿ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ക്");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KDO(0, t, 0);
            k.KO(-1, t, "ൿ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐൽ");
        } else if (k.KKM(e, 16384, 76) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠൽ");
        } else if (k.KKM(e, 16384, 76) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ൽ");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "്ല്");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്ല്");
        } else if (k.KKM(e, 16384, 76) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ല്");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്ല്‍");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ല്");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ൽ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ല്");
        } else if (k.KKM(e, 16384, 77) && k.KCM(10, t, "സ്യ്സ്റ്റെ", 10) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(10, t, "സിസ്റ്റം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠം");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐമ്");
        } else if (k.KKM(e, 16384, 77) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠമ്");
        } else if (k.KKM(e, 16384, 77) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "മ്");
        } else if (k.KKM(e, 16384, 77) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ം");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ൺ", 1)) {
            r = m = 1;
            k.KO(1, t, "ണ്മ്");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്മ്");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്മ്");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്മ്");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ന്മ്");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ം");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐൻ");
        } else if (k.KKM(e, 16384, 78) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠൻ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ൻ");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "്ന്");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ന്ന്");
        } else if (k.KKM(e, 16384, 78) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ന്");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്ന്‍");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ന്");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ൻ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ന്");
        } else if (k.KKM(e, 16384, 79) && k.KCM(6, t, "മി", 2) && k.KDM(4, t, 3) && k.KDM(4, t, 1) && k.KCM(4, t, "ക്ര്", 4)) {
            r = m = 1;
            k.KO(6, t, "മൈക്രൊ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(4, t, "വി", 2) && k.KDM(2, t, 3) && k.KCM(2, t, "ദെ", 2) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(4, t, "വിടിയൊ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(3, t, "ഔദി", 3) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(3, t, "ഓടിയൊ");
        } else if (k.KKM(e, 16384, 79) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ൊ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
            k.KDO(-1, t, 3);
            k.KO(-1, t, "-");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൊ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s31) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 79) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ൊ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KN(0, t)) {
            r = m = 1;
            k.KO(0, t, "ൊ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ഉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മൊ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ഒ");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐപ്");
        } else if (k.KKM(e, 16384, 80) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠപ്");
        } else if (k.KKM(e, 16384, 80) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "പ്");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്പ്");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ൽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ല്പ്");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്പ്");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "പ്");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(1, 1, t), this.s26) && k.KDM(0, t, 3)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "്");
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 5)) {
            r = m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(1, t, "്");
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 4)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "്");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐർ");
        } else if (k.KKM(e, 16384, 82) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠർ");
        } else if (k.KKM(e, 16384, 82) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ർ");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "്ര്");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ർ", 1)) {
            r = m = 1;
            k.KO(1, t, "ര്ര്");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ര്");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മ്ര്‍");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ര്");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ര്");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ർ");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ര്");
        } else if (k.KKM(e, 16384, 83) && k.KCM(8, t, "വി", 2) && k.KDM(6, t, 3) && k.KCM(6, t, "ൻ‍ദൊ", 4) && k.KDM(2, t, 3) && k.KCM(2, t, "വ്", 2)) {
            r = m = 1;
            k.KO(8, t, "വിന്‍റോസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐസ്");
        } else if (k.KKM(e, 16384, 83) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠസ്");
        } else if (k.KKM(e, 16384, 83) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "സ്");
        } else if (k.KKM(e, 16384, 83) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "സ്");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്സ്");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്സ്");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "സ്");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "സ്");
        } else if (k.KKM(e, 16384, 84) && k.KCM(4, t, "റ്റ്", 4)) {
            r = m = 1;
            k.KO(4, t, "ട്ട്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠറ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്റ്റ്");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "ൻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ന്റ്");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "റ്റ്");
        } else if (k.KKM(e, 16384, 85) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൂ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ു");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 4) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൌ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൂ");
            k.KDO(-1, t, 3);
            k.KO(-1, t, "-");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ു");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(1, 1, t), this.s31) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 85) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ു");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KN(0, t)) {
            r = m = 1;
            k.KO(0, t, "ു");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "അ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഔ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ഉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഊ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ഒ", 1)) {
            r = m = 1;
            k.KO(1, t, "ഔ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മു");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ഉ");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐവ്");
        } else if (k.KKM(e, 16384, 86) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠവ്");
        } else if (k.KKM(e, 16384, 86) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "വ്");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "വ്");
        } else if (k.KKM(e, 16384, 86) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്വ്");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്വ്");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "വ്");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "വ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐവ്");
        } else if (k.KKM(e, 16384, 87) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠവ്");
        } else if (k.KKM(e, 16384, 87) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "വ്");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "വ്");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്വ്");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്വ്");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "വ്");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "വ്");
        } else if (k.KKM(e, 16384, 88) && k.KCM(4, t, "ലി", 2) && k.KDM(2, t, 3) && k.KCM(2, t, "നു", 2) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(4, t, "ലീനക്സ്");
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(3, 1, t), this.s22) && k.KA(1, k.KC(2, 1, t), this.s20) && k.KA(2, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KIO(3, this.s22, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(1, 1, t), this.s35) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s35, 1, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(2, 1, t), this.s15) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KIO(2, this.s15, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(1, 1, t), this.s31) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 88) && k.KCM(2, t, "ക", 1) && k.KA(1, k.KC(1, 1, t), this.s20)) {
            r = m = 1;
            k.KO(2, t, "ക");
            k.KIO(-1, this.s41, 2, t);
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KN(0, t)) {
            r = m = 1;
            k.KO(0, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KCM(1, t, "ഋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ൠ");
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(1, 1, t), this.s15)) {
            r = m = 1;
            k.KIO(1, this.s15, 1, t);
            k.KO(-1, t, "ൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88) && k.KCM(1, t, "ം", 1)) {
            r = m = 1;
            k.KO(1, t, "മൃ");
            k.KDO(-1, t, 3);
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "ഋ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(5, t, "റ്റ്ര", 5)) {
            r = m = 1;
            k.KO(5, t, "ട്രേയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐയ്");
        } else if (k.KKM(e, 16384, 89) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠയ്");
        } else if (k.KKM(e, 16384, 89) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "യ്");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "യ്");
        } else if (k.KKM(e, 16384, 89) && k.KA(0, k.KC(1, 1, t), this.s23)) {
            r = m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "്യ്");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്യ്");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്യ്");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "യ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ാ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "അഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "െ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "എഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ി", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഇഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ൊ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഒഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ു", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഉഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഋഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "േ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഏഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ീ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഈഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ോ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഓഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ൌ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഔഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ൂ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഊഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ൈ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ഐഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KN(1, t) && k.KCM(1, t, "ൃ", 1) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(1, t, "ൠഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KDM(1, t, 2) && k.KA(0, k.KC(1, 1, t), this.s39) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KIO(1, this.s38, 1, t);
            k.KO(-1, t, "ഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(1, 1, t), this.s25)) {
            r = m = 1;
            k.KO(1, t, "ഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഴ്");
        } else if (k.KKM(e, 16384, 90) && k.KCM(1, t, "ൿ", 1)) {
            r = m = 1;
            k.KO(1, t, "ക്ഴ്");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ഴ്");
        } else if (k.KKM(e, 16400, 219) && k.KCM(1, t, "`", 1)) {
            r = m = 1;
            k.KO(1, t, "“");
        } else if (k.KKM(e, 16400, 219)) {
            r = m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16400, 220)) {
            r = m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16400, 221) && k.KCM(1, t, "'", 1)) {
            r = m = 1;
            k.KO(1, t, "”");
        } else if (k.KKM(e, 16400, 221)) {
            r = m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 192) && k.KCM(1, t, "‌", 1)) {
            r = m = 1;
            k.KB(t);
        } else if (k.KKM(e, 16400, 192)) {
            r = m = 1;
            k.KO(0, t, "‌");
        }
        return r;
    };
}