KeymanWeb.KR(new Keyboard_ekwtamil99uniext());

function Keyboard_ekwtamil99uniext() {
    this.KI = "Keyboard_ekwtamil99uniext";
    this.KN = "த99-விரிவு | ta99-ext";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ஆ", "ஈ", "ஊ", "ஐ", "ஏ", "ள", "ற", "ன", "ட", "ண", "ச", "ஞ", "", "", "", "", "அ", "இ", "உ", "ஃ", "எ", "க", "ப", "ம", "த", "ந", "ய", "", "", "", "", "", "", "ஔ", "ஓ", "ஒ", "வ", "ங", "ல", "ர", "", "", "ழ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ஸ", "ஷ", "ஜ", "ஹ", "ஸ்ரீ", "க்ஷ", "ஶ", "ஶ்ரீ", "[", "]", "", "", "", "", "", "", "௹", "௺", "௸", "ஃ", "", "", "", "\"", ":", ";", "'", "", "", "", "", "", "", "௳", "௴", "௵", "௶", "௷", "", "/", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s12 = "aqswdegtrcxz";
    this.s13 = "qswdegtrcxz";
    this.s14 = "hb[]opl;jk'mnv/yui";
    this.s15 = "அஆஇஈஉஊஎஏஐஒஓஔ";
    this.s16 = "கஙசஞடணதநபமயரலவழளறன";
    this.s17 = "ாிீுூெேைொோௌ";
    this.s18 = "ஸ்ரீ";
    this.s19 = "ஶ்ரீ";
    this.s20 = "க்ஷ";
    this.s21 = "QWERU";
    this.s22 = "ஸஷஜஹஶ";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16384, 32) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "் ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 222) && k.KCM(3, t, "ய்ய", 3)) {
            m = 1;
            k.KO(-1, t, "ய");
        } else if (k.KKM(e, 16384, 222) && k.KCM(1, t, "ய", 1)) {
            m = 1;
            k.KO(1, t, "ய்ய");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "ய");
        } else if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "•");
        } else if (k.KKM(e, 16384, 191) && k.KCM(3, t, "ழ்ழ", 3)) {
            m = 1;
            k.KO(-1, t, "ழ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "ழ", 1)) {
            m = 1;
            k.KO(1, t, "ழ்ழ");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "ழ");
        } else if (k.KKM(e, 16384, 48) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "”");
        } else if (k.KKM(e, 16384, 55) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "‘");
        } else if (k.KKM(e, 16384, 56) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "’");
        } else if (k.KKM(e, 16384, 57) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "“");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16384, 186) && k.KCM(3, t, "ந்ந", 3)) {
            m = 1;
            k.KO(-1, t, "ந");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ந", 1)) {
            m = 1;
            k.KO(1, t, "ந்ந");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ந");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "௹");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "௷");
        } else if (k.KKM(e, 16400, 67) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "©");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "௵");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "௸");
        } else if (k.KKM(e, 16400, 69) && k.KCM(3, t, "ஜ்ஜ", 3)) {
            m = 1;
            k.KO(-1, t, "ஜ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ஜ", 1)) {
            m = 1;
            k.KO(1, t, "ஜ்ஜ");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ஜ");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ஃ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(3, t, "ஶ்ஶ", 3)) {
            m = 1;
            k.KO(-1, t, "ஶ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ஶ", 1)) {
            m = 1;
            k.KO(1, t, "ஶ்ஶ");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ஶ்ரீ");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "\"");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16400, 81) && k.KCM(3, t, "ஸ்ஸ", 3)) {
            m = 1;
            k.KO(-1, t, "ஸ");
        } else if (k.KKM(e, 16400, 81) && k.KCM(1, t, "ஸ", 1)) {
            m = 1;
            k.KO(1, t, "ஸ்ஸ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ஸ");
        } else if (k.KKM(e, 16400, 82) && k.KCM(3, t, "ஹ்ஹ", 3)) {
            m = 1;
            k.KO(-1, t, "ஹ");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "ஹ", 1)) {
            m = 1;
            k.KO(1, t, "ஹ்ஹ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ஹ");
        } else if (k.KKM(e, 16400, 83) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "௺");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ஸ்ரீ");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ஶ");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "௶");
        } else if (k.KKM(e, 16400, 87) && k.KCM(3, t, "ஷ்ஷ", 3)) {
            m = 1;
            k.KO(-1, t, "ஷ");
        } else if (k.KKM(e, 16400, 87) && k.KCM(2, t, "க்", 2)) {
            m = 1;
            k.KO(2, t, "க்‌ஷ");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "ஷ", 1)) {
            m = 1;
            k.KO(1, t, "ஷ்ஷ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ஷ");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "௴");
        } else if (k.KKM(e, 16400, 89) && k.KCM(7, t, "க்ஷ்க்ஷ", 7)) {
            m = 1;
            k.KO(-1, t, "க்ஷ");
        } else if (k.KKM(e, 16400, 89) && k.KCM(3, t, "க்ஷ", 3)) {
            m = 1;
            k.KO(3, t, "க்ஷ்க்ஷ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "க்ஷ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "௳");
        } else if (k.KKM(e, 16384, 219) && k.KCM(3, t, "ச்ச", 3)) {
            m = 1;
            k.KO(-1, t, "ச");
        } else if (k.KKM(e, 16384, 219) && k.KCM(3, t, "ஞ்ச", 3)) {
            m = 1;
            k.KO(-1, t, "ச");
        } else if (k.KKM(e, 16384, 219) && k.KCM(1, t, "ச", 1)) {
            m = 1;
            k.KO(1, t, "ச்ச");
        } else if (k.KKM(e, 16384, 219) && k.KCM(1, t, "ஞ", 1)) {
            m = 1;
            k.KO(1, t, "ஞ்ச");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16384, 221) && k.KCM(3, t, "ஞ்ஞ", 3)) {
            m = 1;
            k.KO(-1, t, "ஞ");
        } else if (k.KKM(e, 16384, 221) && k.KCM(1, t, "ஞ", 1)) {
            m = 1;
            k.KO(1, t, "ஞ்ஞ");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ஞ");
        } else if (k.KKM(e, 16400, 54) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "^");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KO(-1, t, "‍");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KO(-1, t, "‍");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "அ");
        } else if (k.KKM(e, 16384, 66) && k.KCM(3, t, "ங்ங", 3)) {
            m = 1;
            k.KO(-1, t, "ங");
        } else if (k.KKM(e, 16384, 66) && k.KCM(1, t, "ங", 1)) {
            m = 1;
            k.KO(1, t, "ங்ங");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ங");
        } else if (k.KKM(e, 16384, 67) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ொ");
        } else if (k.KKM(e, 16384, 67) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ொ");
        } else if (k.KKM(e, 16384, 67) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ொ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ஒ");
        } else if (k.KKM(e, 16384, 68) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ு");
        } else if (k.KKM(e, 16384, 68) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ு");
        } else if (k.KKM(e, 16384, 68) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ு");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "உ");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ூ");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ூ");
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ூ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ஊ");
        } else if (k.KKM(e, 16384, 70) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "்");
        } else if (k.KKM(e, 16384, 70) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "்");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ஃ");
        } else if (k.KKM(e, 16384, 71) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ெ");
        } else if (k.KKM(e, 16384, 71) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ெ");
        } else if (k.KKM(e, 16384, 71) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ெ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "எ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(3, t, "க்க", 3)) {
            m = 1;
            k.KO(-1, t, "க");
        } else if (k.KKM(e, 16384, 72) && k.KCM(3, t, "ங்க", 3)) {
            m = 1;
            k.KO(-1, t, "க");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "க", 1)) {
            m = 1;
            k.KO(1, t, "க்க");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ங", 1)) {
            m = 1;
            k.KO(1, t, "ங்க");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16384, 73) && k.KCM(3, t, "ன்ன", 3)) {
            m = 1;
            k.KO(-1, t, "ன");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ன", 1)) {
            m = 1;
            k.KO(1, t, "ன்ன");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ன");
        } else if (k.KKM(e, 16384, 74) && k.KCM(3, t, "ப்ப", 3)) {
            m = 1;
            k.KO(-1, t, "ப");
        } else if (k.KKM(e, 16384, 74) && k.KCM(3, t, "ம்ப", 3)) {
            m = 1;
            k.KO(-1, t, "ப");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ப", 1)) {
            m = 1;
            k.KO(1, t, "ப்ப");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ம", 1)) {
            m = 1;
            k.KO(1, t, "ம்ப");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16384, 75) && k.KCM(3, t, "ம்ம", 3)) {
            m = 1;
            k.KO(-1, t, "ம");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ம", 1)) {
            m = 1;
            k.KO(1, t, "ம்ம");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ம");
        } else if (k.KKM(e, 16384, 76) && k.KCM(3, t, "த்த", 3)) {
            m = 1;
            k.KO(-1, t, "த");
        } else if (k.KKM(e, 16384, 76) && k.KCM(3, t, "ந்த", 3)) {
            m = 1;
            k.KO(-1, t, "த");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "த", 1)) {
            m = 1;
            k.KO(1, t, "த்த");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ந", 1)) {
            m = 1;
            k.KO(1, t, "ந்த");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16384, 77) && k.KCM(3, t, "ர்ர", 3)) {
            m = 1;
            k.KO(-1, t, "ர");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ர", 1)) {
            m = 1;
            k.KO(1, t, "ர்ர");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ர");
        } else if (k.KKM(e, 16384, 78) && k.KCM(3, t, "ர்ல", 3)) {
            m = 1;
            k.KO(-1, t, "ல");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "ல", 1)) {
            m = 1;
            k.KO(1, t, "ல்ல");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ல");
        } else if (k.KKM(e, 16384, 79) && k.KCM(3, t, "ட்ட", 3)) {
            m = 1;
            k.KO(-1, t, "ட");
        } else if (k.KKM(e, 16384, 79) && k.KCM(3, t, "ண்ட", 3)) {
            m = 1;
            k.KO(-1, t, "ட");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ட", 1)) {
            m = 1;
            k.KO(1, t, "ட்ட");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ண", 1)) {
            m = 1;
            k.KO(1, t, "ண்ட");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16384, 80) && k.KCM(3, t, "ண்ண", 3)) {
            m = 1;
            k.KO(-1, t, "ண");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ண", 1)) {
            m = 1;
            k.KO(1, t, "ண்ண");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ண");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ா");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ா");
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ா");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ஆ");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ை");
        } else if (k.KKM(e, 16384, 82) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ை");
        } else if (k.KKM(e, 16384, 82) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ை");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ஐ");
        } else if (k.KKM(e, 16384, 83) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ி");
        } else if (k.KKM(e, 16384, 83) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ி");
        } else if (k.KKM(e, 16384, 83) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ி");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "இ");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ே");
        } else if (k.KKM(e, 16384, 84) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ே");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ே");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ஏ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(3, t, "ற்ற", 3)) {
            m = 1;
            k.KO(-1, t, "ற");
        } else if (k.KKM(e, 16384, 85) && k.KCM(3, t, "ன்ற", 3)) {
            m = 1;
            k.KO(-1, t, "ற");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ற", 1)) {
            m = 1;
            k.KO(1, t, "ற்ற");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ன", 1)) {
            m = 1;
            k.KO(1, t, "ன்ற");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ற");
        } else if (k.KKM(e, 16384, 86) && k.KCM(3, t, "வ்வ", 3)) {
            m = 1;
            k.KO(-1, t, "வ");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "வ", 1)) {
            m = 1;
            k.KO(1, t, "வ்வ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "வ");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ீ");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ீ");
        } else if (k.KKM(e, 16384, 87) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ீ");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ஈ");
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ோ");
        } else if (k.KKM(e, 16384, 88) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ோ");
        } else if (k.KKM(e, 16384, 88) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ோ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ஓ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(3, t, "ள்ள", 3)) {
            m = 1;
            k.KO(-1, t, "ள");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ள", 1)) {
            m = 1;
            k.KO(1, t, "ள்ள");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ள");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(1, 1, t), this.s16)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
            k.KO(-1, t, "ௌ");
        } else if (k.KKM(e, 16384, 90) && k.KA(0, k.KC(1, 1, t), this.s22)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
            k.KO(-1, t, "ௌ");
        } else if (k.KKM(e, 16384, 90) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ௌ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ஔ");
        }
        return m;
    };
}