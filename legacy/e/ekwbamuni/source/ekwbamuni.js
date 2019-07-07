KeymanWeb.KR(new Keyboard_ekwbamuni());

function Keyboard_ekwbamuni() {
    this.KI = "Keyboard_ekwbamuni";
    this.KN = "சுரதா-பாமுனி | Suratha Bamuni";
    this.KV = {
        F: ' 1em "Latha"',
        K102: 0,
        BK: new Array("ஹ", "", "", "", "", "", "", "", "", "", "", "-", "", "", "", "", "ங", "ற", "ந", "ச", "வ", "ல", "ர", "", "ழ", "ி", "ஜ", "ஸ", "ஷ", "", "", "", "ய", "ள", "ன", "க", "ப", "ா", "த", "ம", "ட", "்", "", "", "", "", "", "", "", "ண", "ஒ", "உ", "எ", "டி", "", "அ", "இ", ".", "ஃ", "", "", "", "", "", "", "", "!", ";", "சூ", "கூ", "மூ", "டூ", "ரூ", "", "(", ")", "", "", "", "", "", "ஞ", "று", "நு", "சு", "வு", "லு", "ரு", "ஐ", "ழு", "ீ", "", "", "'", "", "", "", "யு", "ளு", "னு", "கு", "பு", "ர்", "து", "மு", "டு", ":", "", "", "", "", "", "", "", "ணு", "ஓ", "ஊ", "ஏ", "டீ", "", "ஆ", "ஈ", ",", "?", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s12 = "FRLZJEDGKAUWYSOT";
    this.s13 = "கசடணதநனபமயரறலளழவ";
    this.s14 = "mM,<cCvVIxX";
    this.s15 = "அஆஇஈஉஊஎஏஐஒஓ";
    this.s16 = "fqr[Qlzjedgkauwysot\\]`h";
    this.s17 = "கஙசஜஞடணதநனபமயரறலளழவஷஸஹா";
    this.s18 = ";hpP";
    this.s19 = "்ாிீ";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "சூ");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "கூ");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "மூ");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "ரூ");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16400, 187) && k.KA(0, k.KC(2, 1, t), this.s13) && k.KCM(1, t, "ு", 1)) {
            m = 1;
            k.KIO(2, this.s13, 1, t);
            k.KO(-1, t, "ூ");
        } else if (k.KKM(e, 16384, 188) && k.KCM(1, t, "இ", 1)) {
            m = 1;
            k.KO(1, t, "ஈ");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "இ");
        } else if (k.KKM(e, 16384, 189) && k.KCM(2, t, "ரு", 2)) {
            m = 1;
            k.KO(2, t, "ரூ");
        } else if (k.KKM(e, 16384, 189) && k.KA(0, k.KC(2, 1, t), this.s17) && k.KCM(1, t, "ு", 1)) {
            m = 1;
            k.KIO(2, this.s17, 1, t);
            k.KO(-1, t, "ூ");
        } else if (k.KKM(e, 16384, 189) && k.KA(0, k.KC(2, 1, t), this.s17) && k.KCM(1, t, "ு", 1)) {
            m = 1;
            k.KIO(2, this.s17, 1, t);
            k.KO(-1, t, "ூ");
        } else if (k.KKM(e, 16384, 189) && k.KCM(1, t, "ா", 1)) {
            m = 1;
            k.KO(1, t, "ரு");
        } else if (k.KKM(e, 16384, 189) && k.KA(0, k.KC(1, 1, t), this.s17)) {
            m = 1;
            k.KIO(1, this.s17, 1, t);
            k.KO(-1, t, "ு");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "ு");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "ஃ");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "கூ", 2)) {
            m = 1;
            k.KO(2, t, "குர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "சூ", 2)) {
            m = 1;
            k.KO(2, t, "சுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "பூ", 2)) {
            m = 1;
            k.KO(2, t, "புர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "டூ", 2)) {
            m = 1;
            k.KO(2, t, "டுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "ணூ", 2)) {
            m = 1;
            k.KO(2, t, "ணுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "தூ", 2)) {
            m = 1;
            k.KO(2, t, "துர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "நூ", 2)) {
            m = 1;
            k.KO(2, t, "நுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "னூ", 2)) {
            m = 1;
            k.KO(2, t, "னுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "மூ", 2)) {
            m = 1;
            k.KO(2, t, "முர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "யூ", 2)) {
            m = 1;
            k.KO(2, t, "யுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "ரூ", 2)) {
            m = 1;
            k.KO(2, t, "ருர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "றூ", 2)) {
            m = 1;
            k.KO(2, t, "றுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "லூ", 2)) {
            m = 1;
            k.KO(2, t, "லுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "ளூ", 2)) {
            m = 1;
            k.KO(2, t, "ளுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "ழூ", 2)) {
            m = 1;
            k.KO(2, t, "ழுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "வூ", 2)) {
            m = 1;
            k.KO(2, t, "வுர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ா", 1)) {
            m = 1;
            k.KO(1, t, "ர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ா", 1)) {
            m = 1;
            k.KO(1, t, "ர்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ஔ", 1)) {
            m = 1;
            k.KO(1, t, "ஒள்");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ௌ", 1)) {
            m = 1;
            k.KO(1, t, "ெள்");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "்");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "ஈ");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "யு");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "டீ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ஊ");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "னு");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "நு");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "கு");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "பு");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ர்");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ஐ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "து");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "மு");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "டு");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ஆ");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KDO(0, t, 1);
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ழு");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "கூ", 2)) {
            m = 1;
            k.KO(2, t, "குரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "சூ", 2)) {
            m = 1;
            k.KO(2, t, "சுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "பூ", 2)) {
            m = 1;
            k.KO(2, t, "புரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "டூ", 2)) {
            m = 1;
            k.KO(2, t, "டுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "ணூ", 2)) {
            m = 1;
            k.KO(2, t, "ணுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "தூ", 2)) {
            m = 1;
            k.KO(2, t, "துரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "நூ", 2)) {
            m = 1;
            k.KO(2, t, "நுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "னூ", 2)) {
            m = 1;
            k.KO(2, t, "னுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "மூ", 2)) {
            m = 1;
            k.KO(2, t, "முரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "யூ", 2)) {
            m = 1;
            k.KO(2, t, "யுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "ரூ", 2)) {
            m = 1;
            k.KO(2, t, "ருரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "றூ", 2)) {
            m = 1;
            k.KO(2, t, "றுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "லூ", 2)) {
            m = 1;
            k.KO(2, t, "லுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "ளூ", 2)) {
            m = 1;
            k.KO(2, t, "ளுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "ழூ", 2)) {
            m = 1;
            k.KO(2, t, "ழுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(2, t, "வூ", 2)) {
            m = 1;
            k.KO(2, t, "வுரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(1, t, "ா", 1)) {
            m = 1;
            k.KO(1, t, "ரீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(1, t, "ஔ", 1)) {
            m = 1;
            k.KO(1, t, "ஒளீ");
        } else if (k.KKM(e, 16400, 80) && k.KCM(1, t, "ௌ", 1)) {
            m = 1;
            k.KO(1, t, "ெளீ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "ீ");
        } else if (k.KKM(e, 16400, 81) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ஞை");
        } else if (k.KKM(e, 16400, 81) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ஞெ");
        } else if (k.KKM(e, 16400, 81) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ஞே");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ஞ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ஞ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "சு");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ளு");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "வு");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ரு");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ஏ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "று");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ஓ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "லு");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ணு");
        } else if (k.KKM(e, 16384, 219) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ஜை");
        } else if (k.KKM(e, 16384, 219) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ஜெ");
        } else if (k.KKM(e, 16384, 219) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ஜே");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ஜ");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "ஜ");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ஷை");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ஷெ");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ஷே");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "ஷ");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "ஷ");
        } else if (k.KKM(e, 16384, 221) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ஸை");
        } else if (k.KKM(e, 16384, 221) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ஸெ");
        } else if (k.KKM(e, 16384, 221) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ஸே");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ஸ");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ஸ");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "டூ");
        } else if (k.KKM(e, 16384, 192) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ஹை");
        } else if (k.KKM(e, 16384, 192) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ஹெ");
        } else if (k.KKM(e, 16384, 192) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ஹே");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "ஹ");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "ஹ");
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "யை");
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "யெ");
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "யே");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ய");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ய");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "டி");
        } else if (k.KKM(e, 16384, 67) && k.KCM(1, t, "உ", 1)) {
            m = 1;
            k.KO(1, t, "ஊ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "உ");
        } else if (k.KKM(e, 16384, 68) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "னை");
        } else if (k.KKM(e, 16384, 68) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "னெ");
        } else if (k.KKM(e, 16384, 68) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "னே");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ன");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ன");
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "நை");
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "நெ");
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "நே");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ந");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ந");
        } else if (k.KKM(e, 16384, 70) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "கை");
        } else if (k.KKM(e, 16384, 70) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "கெ");
        } else if (k.KKM(e, 16384, 70) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "கே");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "க");
        } else if (k.KKM(e, 16384, 71) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "பை");
        } else if (k.KKM(e, 16384, 71) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "பெ");
        } else if (k.KKM(e, 16384, 71) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "பே");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ப");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "கு", 2)) {
            m = 1;
            k.KO(2, t, "கூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "சு", 2)) {
            m = 1;
            k.KO(2, t, "சூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "பு", 2)) {
            m = 1;
            k.KO(2, t, "பூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "டு", 2)) {
            m = 1;
            k.KO(2, t, "டூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "ணு", 2)) {
            m = 1;
            k.KO(2, t, "ணூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "து", 2)) {
            m = 1;
            k.KO(2, t, "தூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "நு", 2)) {
            m = 1;
            k.KO(2, t, "நூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "னு", 2)) {
            m = 1;
            k.KO(2, t, "னூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "மு", 2)) {
            m = 1;
            k.KO(2, t, "மூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "யு", 2)) {
            m = 1;
            k.KO(2, t, "யூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "ரு", 2)) {
            m = 1;
            k.KO(2, t, "ரூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "று", 2)) {
            m = 1;
            k.KO(2, t, "றூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "லு", 2)) {
            m = 1;
            k.KO(2, t, "லூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "ளு", 2)) {
            m = 1;
            k.KO(2, t, "ளூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "ழு", 2)) {
            m = 1;
            k.KO(2, t, "ழூ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(2, t, "வு", 2)) {
            m = 1;
            k.KO(2, t, "வூ");
        } else if (k.KKM(e, 16384, 72) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ாை");
        } else if (k.KKM(e, 16384, 72) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ாெ");
        } else if (k.KKM(e, 16384, 72) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ாே");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ெ", 1)) {
            m = 1;
            k.KO(1, t, "ொ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ே", 1)) {
            m = 1;
            k.KO(1, t, "ோ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ஔ", 1)) {
            m = 1;
            k.KO(1, t, "ஒளா");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ௌ", 1)) {
            m = 1;
            k.KO(1, t, "ெளா");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ா");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ா");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ா");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 74) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "தை");
        } else if (k.KKM(e, 16384, 74) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "தெ");
        } else if (k.KKM(e, 16384, 74) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "தே");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "த");
        } else if (k.KKM(e, 16384, 75) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "மை");
        } else if (k.KKM(e, 16384, 75) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "மெ");
        } else if (k.KKM(e, 16384, 75) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "மே");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ம");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ம");
        } else if (k.KKM(e, 16384, 76) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "டை");
        } else if (k.KKM(e, 16384, 76) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "டெ");
        } else if (k.KKM(e, 16384, 76) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "டே");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ட");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "அ", 1)) {
            m = 1;
            k.KO(1, t, "ஆ");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "அ");
        } else if (k.KKM(e, 16384, 78) && k.KDM(0, t, 2)) {
            m = 1;
            k.KDO(0, t, 1);
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KDO(0, t, 2);
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ழை");
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ழெ");
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ழே");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ழ");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ழ");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "கூ", 2)) {
            m = 1;
            k.KO(2, t, "குரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "சூ", 2)) {
            m = 1;
            k.KO(2, t, "சுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "பூ", 2)) {
            m = 1;
            k.KO(2, t, "புரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "டூ", 2)) {
            m = 1;
            k.KO(2, t, "டுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ணூ", 2)) {
            m = 1;
            k.KO(2, t, "ணுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "தூ", 2)) {
            m = 1;
            k.KO(2, t, "துரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "நூ", 2)) {
            m = 1;
            k.KO(2, t, "நுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "னூ", 2)) {
            m = 1;
            k.KO(2, t, "னுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "மூ", 2)) {
            m = 1;
            k.KO(2, t, "முரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "யூ", 2)) {
            m = 1;
            k.KO(2, t, "யுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ரூ", 2)) {
            m = 1;
            k.KO(2, t, "ருரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "றூ", 2)) {
            m = 1;
            k.KO(2, t, "றுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "லூ", 2)) {
            m = 1;
            k.KO(2, t, "லுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ளூ", 2)) {
            m = 1;
            k.KO(2, t, "ளுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ழூ", 2)) {
            m = 1;
            k.KO(2, t, "ழுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "வூ", 2)) {
            m = 1;
            k.KO(2, t, "வுரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(2, t, "ரி", 2)) {
            m = 1;
            k.KO(2, t, "ரீ");
        } else if (k.KKM(e, 16384, 80) && k.KA(0, k.KC(2, 1, t), this.s17) && k.KCM(1, t, "ி", 1)) {
            m = 1;
            k.KIO(2, this.s17, 1, t);
            k.KO(-1, t, "ீ");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ா", 1)) {
            m = 1;
            k.KO(1, t, "ரி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ஔ", 1)) {
            m = 1;
            k.KO(1, t, "ஒளி");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ௌ", 1)) {
            m = 1;
            k.KO(1, t, "ெளி");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ி");
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ஙை");
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ஙெ");
        } else if (k.KKM(e, 16384, 81) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ஙே");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ங");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ங");
        } else if (k.KKM(e, 16384, 82) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "சை");
        } else if (k.KKM(e, 16384, 82) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "செ");
        } else if (k.KKM(e, 16384, 82) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "சே");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ச");
        } else if (k.KKM(e, 16384, 83) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ளை");
        } else if (k.KKM(e, 16384, 83) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ளெ");
        } else if (k.KKM(e, 16384, 83) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ளே");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ெ", 1)) {
            m = 1;
            k.KO(1, t, "ௌ");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ஒ", 1)) {
            m = 1;
            k.KO(1, t, "ஔ");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ள");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ள");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "வை");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "வெ");
        } else if (k.KKM(e, 16384, 84) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "வே");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "வ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "வ");
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ரை");
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ரெ");
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ரே");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ர");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ர");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "எ", 1)) {
            m = 1;
            k.KO(1, t, "ஏ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "எ");
        } else if (k.KKM(e, 16384, 87) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "றை");
        } else if (k.KKM(e, 16384, 87) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "றெ");
        } else if (k.KKM(e, 16384, 87) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "றே");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ற");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ற");
        } else if (k.KKM(e, 16384, 88) && k.KCM(1, t, "ஒ", 1)) {
            m = 1;
            k.KO(1, t, "ஓ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ஒ");
        } else if (k.KKM(e, 16384, 89) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "லை");
        } else if (k.KKM(e, 16384, 89) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "லெ");
        } else if (k.KKM(e, 16384, 89) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "லே");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ல");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ல");
        } else if (k.KKM(e, 16384, 90) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "ணை");
        } else if (k.KKM(e, 16384, 90) && k.KDM(0, t, 2)) {
            m = 1;
            k.KO(0, t, "ணெ");
        } else if (k.KKM(e, 16384, 90) && k.KDM(0, t, 1)) {
            m = 1;
            k.KO(0, t, "ணே");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ண");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ண");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 221) && k.KA(0, k.KC(2, 1, t), this.s13) && k.KCM(1, t, "ு", 1)) {
            m = 1;
            k.KIO(2, this.s13, 1, t);
            k.KO(-1, t, "ூ");
        }
        return m;
    };
}