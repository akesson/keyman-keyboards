KeymanWeb.KR(new Keyboard_hindi_modular_kab());

function Keyboard_hindi_modular_kab() {
    this.KI = "Keyboard_hindi_modular_kab";
    this.KN = "UNICODE-Devnagari-Modular Layout";
    this.KV = null;
    this.KH = '';
    this.KM = 0;
    this.s8 = "कखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसह";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16384, 8) && k.KDM(3, t, 0) && k.KCM(3, t, "त्र", 3)) {
            m = 1;
            k.KO(3, t, "");
        } else if (k.KKM(e, 16384, 8) && k.KA(0, k.KC(3, 1, t), this.s8) && k.KCM(2, t, "्‍", 2)) {
            m = 1;
        } else if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(4, 1, t), this.s8) && k.KCM(3, t, "्", 1) && k.KA(2, k.KC(2, 1, t), this.s8) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(4, t, "‌र्");
        } else if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(3, 1, t), this.s8) && k.KCM(2, t, "्", 1) && k.KA(2, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KO(3, t, "‌र्");
        } else if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(2, 1, t), this.s8) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(2, t, "र्");
        } else if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KO(1, t, "र्");
        } else if (k.KKM(e, 16480, 48) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "फ़ि");
        } else if (k.KKM(e, 16480, 48)) {
            m = 1;
            k.KO(0, t, "फ़");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 48)) {
            m = 1;
            k.KO(0, t, "०");
        } else if (k.KKM(e, 16480, 49) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॾि");
        } else if (k.KKM(e, 16400, 49) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "!ि");
        } else if (k.KKM(e, 16480, 49)) {
            m = 1;
            k.KO(0, t, "ॾ");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "१");
        } else if (k.KKM(e, 16480, 50) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॼि");
        } else if (k.KKM(e, 16400, 50) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "'ि");
        } else if (k.KKM(e, 16480, 50)) {
            m = 1;
            k.KO(0, t, "ॼ");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "२");
        } else if (k.KKM(e, 16480, 51) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॻि");
        } else if (k.KKM(e, 16400, 51) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "'ि");
        } else if (k.KKM(e, 16480, 51)) {
            m = 1;
            k.KO(0, t, "ॻ");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "३");
        } else if (k.KKM(e, 16480, 52) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "॰ि");
        } else if (k.KKM(e, 16480, 52)) {
            m = 1;
            k.KO(0, t, "॰");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "ं");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "४");
        } else if (k.KKM(e, 16480, 53) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "॥ि");
        } else if (k.KKM(e, 16400, 53) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ँि");
        } else if (k.KKM(e, 16480, 53)) {
            m = 1;
            k.KO(0, t, "॥");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "ँ");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "५");
        } else if (k.KKM(e, 16480, 54) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॢि");
        } else if (k.KKM(e, 16400, 54) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऋि");
        } else if (k.KKM(e, 16480, 54)) {
            m = 1;
            k.KO(0, t, "ॢ");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "ऋ");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "६");
        } else if (k.KKM(e, 16480, 55) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॣि");
        } else if (k.KKM(e, 16400, 55) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॊि");
        } else if (k.KKM(e, 16480, 55)) {
            m = 1;
            k.KO(0, t, "ॣ");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "ॊ");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "७");
        } else if (k.KKM(e, 16480, 56) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॡि");
        } else if (k.KKM(e, 16480, 56)) {
            m = 1;
            k.KO(0, t, "ॡ");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "*");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "८");
        } else if (k.KKM(e, 16480, 57) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "य़ि");
        } else if (k.KKM(e, 16480, 57)) {
            m = 1;
            k.KO(0, t, "य़");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "९");
        } else if (k.KKM(e, 16480, 65) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ख़ि");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ज्ञि");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "मि");
        } else if (k.KKM(e, 16480, 65)) {
            m = 1;
            k.KO(0, t, "ख़");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "ज्ञ");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "म");
        } else if (k.KKM(e, 16400, 66) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "उि");
        } else if (k.KKM(e, 16480, 66)) {
            m = 1;
            k.KO(0, t, "़");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "उ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ु");
        } else if (k.KKM(e, 16480, 67) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ज़ि");
        } else if (k.KKM(e, 16400, 67) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "झि");
        } else if (k.KKM(e, 16384, 67) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "जि");
        } else if (k.KKM(e, 16480, 67)) {
            m = 1;
            k.KO(0, t, "ज़");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "झ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ज");
        } else if (k.KKM(e, 16480, 68) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "फ़ि");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "्ि");
        } else if (k.KKM(e, 16480, 68)) {
            m = 1;
            k.KO(0, t, "फ़");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "‌्");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "्");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "श्रि");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "नि");
        } else if (k.KKM(e, 16480, 69)) {
            m = 1;
            k.KO(0, t, "॓");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "श्र");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "न");
        } else if (k.KKM(e, 16400, 70) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "थि");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ति");
        } else if (k.KKM(e, 16480, 70)) {
            m = 1;
            k.KO(0, t, "॒");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "थ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "त");
        } else if (k.KKM(e, 16400, 71) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "त्रि");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "िि");
        } else if (k.KKM(e, 16480, 71)) {
            m = 1;
            k.KO(0, t, "ॉ");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "त्र");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ि");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KDO(0, t, 0);
            k.KO(-1, t, "त्र");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ईि");
        } else if (k.KKM(e, 16480, 72)) {
            m = 1;
            k.KO(0, t, "ॊ");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ई");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ी");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ठि");
        } else if (k.KKM(e, 16480, 73)) {
            m = 1;
            k.KO(0, t, "ॄ");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ठ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "आ");
        } else if (k.KKM(e, 16400, 74) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "णि");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "रि");
        } else if (k.KKM(e, 16480, 74)) {
            m = 1;
            k.KO(0, t, "ॅ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ण");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "र");
        } else if (k.KKM(e, 16400, 75) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "शि");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ाि");
        } else if (k.KKM(e, 16480, 75)) {
            m = 1;
            k.KO(0, t, "ृ");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "श");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ा");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ा", 1)) {
            m = 1;
            k.KO(1, t, "‌ो");
        } else if (k.KKM(e, 16400, 76) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "षि");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ेि");
        } else if (k.KKM(e, 16480, 76)) {
            m = 1;
            k.KO(0, t, "ु");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "ष");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "े");
        } else if (k.KKM(e, 16480, 77) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऴि");
        } else if (k.KKM(e, 16400, 77) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ळि");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "लि");
        } else if (k.KKM(e, 16480, 77)) {
            m = 1;
            k.KO(0, t, "ऴ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ळ");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ल");
        } else if (k.KKM(e, 16480, 78) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऱि");
        } else if (k.KKM(e, 16400, 78) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऊि");
        } else if (k.KKM(e, 16480, 78)) {
            m = 1;
            k.KO(0, t, "ऱ");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "ऊ");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ू");
        } else if (k.KKM(e, 16480, 79) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ड़ि");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "डि");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "हि");
        } else if (k.KKM(e, 16480, 79)) {
            m = 1;
            k.KO(0, t, "ड़");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ड");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ह");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ा", 1)) {
            m = 1;
            k.KO(1, t, "‌ौ");
        } else if (k.KKM(e, 16480, 80) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ढ़ि");
        } else if (k.KKM(e, 16400, 80) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ढि");
        } else if (k.KKM(e, 16480, 80)) {
            m = 1;
            k.KO(0, t, "ढ़");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "ढ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ै");
        } else if (k.KKM(e, 16384, 81) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "बि");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ो");
        } else if (k.KKM(e, 16480, 81)) {
            m = 1;
            k.KO(0, t, "ो");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ब");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "धि");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "दि");
        } else if (k.KKM(e, 16480, 82)) {
            m = 1;
            k.KO(0, t, "॔");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ध");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "द");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "कि");
        } else if (k.KKM(e, 16480, 83) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "क़ि");
        } else if (k.KKM(e, 16400, 83) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "खि");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "कि");
        } else if (k.KKM(e, 16480, 83)) {
            m = 1;
            k.KO(0, t, "क़");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ख");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "क");
        } else if (k.KKM(e, 16400, 84) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "इि");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "सि");
        } else if (k.KKM(e, 16480, 84)) {
            m = 1;
            k.KO(0, t, "े");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "इ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "स");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "टि");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "यि");
        } else if (k.KKM(e, 16480, 85)) {
            m = 1;
            k.KO(0, t, "ॆ");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ट");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "य");
        } else if (k.KKM(e, 16400, 86) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "छि");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "चि");
        } else if (k.KKM(e, 16480, 86)) {
            m = 1;
            k.KO(0, t, "ा");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "छ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "च");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "फि");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "पि");
        } else if (k.KKM(e, 16480, 87)) {
            m = 1;
            k.KO(0, t, "ौ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "फ");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "प");
        } else if (k.KKM(e, 16480, 88) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ग़ि");
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "घि");
        } else if (k.KKM(e, 16384, 88) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "गि");
        } else if (k.KKM(e, 16480, 88)) {
            m = 1;
            k.KO(0, t, "ग़");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "घ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ग");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "त्ति");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "वि");
        } else if (k.KKM(e, 16480, 89)) {
            m = 1;
            k.KO(0, t, "ै");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "त्त");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "व");
        } else if (k.KKM(e, 16464, 90) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "्‍ि");
        } else if (k.KKM(e, 16480, 90) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऄि");
        } else if (k.KKM(e, 16400, 90) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ङि");
        } else if (k.KKM(e, 16384, 90) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "भि");
        } else if (k.KKM(e, 16464, 90)) {
            m = 1;
            k.KO(0, t, "्‍");
        } else if (k.KKM(e, 16480, 90)) {
            m = 1;
            k.KO(0, t, "ऄ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ङ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "भ");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "मि", 2)) {
            m = 1;
            k.KO(2, t, "म्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "खि", 2)) {
            m = 1;
            k.KO(2, t, "ख्‍ि‍");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "कि", 2)) {
            m = 1;
            k.KO(2, t, "क्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "गि", 2)) {
            m = 1;
            k.KO(2, t, "ग्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "घि", 2)) {
            m = 1;
            k.KO(2, t, "घ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "चि", 2)) {
            m = 1;
            k.KO(2, t, "च्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "छि", 2)) {
            m = 1;
            k.KO(2, t, "छ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "जि", 2)) {
            m = 1;
            k.KO(2, t, "ज्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "झि", 2)) {
            m = 1;
            k.KO(2, t, "झ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "ञि", 2)) {
            m = 1;
            k.KO(2, t, "ञ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "टि", 2)) {
            m = 1;
            k.KO(2, t, "ट्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "णि", 2)) {
            m = 1;
            k.KO(2, t, "ण्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "ति", 2)) {
            m = 1;
            k.KO(2, t, "त्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "थि", 2)) {
            m = 1;
            k.KO(2, t, "थ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "दि", 2)) {
            m = 1;
            k.KO(2, t, "द्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "धि", 2)) {
            m = 1;
            k.KO(2, t, "ध्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "नि", 2)) {
            m = 1;
            k.KO(2, t, "न्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "ऩि", 2)) {
            m = 1;
            k.KO(2, t, "ऩ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "पि", 2)) {
            m = 1;
            k.KO(2, t, "प्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "फि", 2)) {
            m = 1;
            k.KO(2, t, "फ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "बि", 2)) {
            m = 1;
            k.KO(2, t, "ब्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "भि", 2)) {
            m = 1;
            k.KO(2, t, "भ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "मि", 2)) {
            m = 1;
            k.KO(2, t, "म्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "यि", 2)) {
            m = 1;
            k.KO(2, t, "य्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "लि", 2)) {
            m = 1;
            k.KO(2, t, "ल्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "ळि", 2)) {
            m = 1;
            k.KO(2, t, "ळ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "ऴि", 2)) {
            m = 1;
            k.KO(2, t, "ऴ्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "वि", 2)) {
            m = 1;
            k.KO(2, t, "व्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "शि", 2)) {
            m = 1;
            k.KO(2, t, "श्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "षि", 2)) {
            m = 1;
            k.KO(2, t, "ष्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "सि", 2)) {
            m = 1;
            k.KO(2, t, "स्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(2, t, "हि", 2)) {
            m = 1;
            k.KO(2, t, "ह्‍ि");
        } else if (k.KKM(e, 16384, 220) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KO(-1, t, "्‍");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "्‍");
        } else if (k.KKM(e, 16384, 68) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 186) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ःि");
        } else if (k.KKM(e, 16480, 186)) {
            m = 1;
            k.KO(0, t, "ू");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, ";");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "ः");
        } else if (k.KKM(e, 16480, 187) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "—ि");
        } else if (k.KKM(e, 16400, 187) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "+ि");
        } else if (k.KKM(e, 16384, 187) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "=ि");
        } else if (k.KKM(e, 16480, 187)) {
            m = 1;
            k.KO(0, t, "—");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16480, 188) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऩि");
        } else if (k.KKM(e, 16400, 188) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "एि");
        } else if (k.KKM(e, 16480, 188)) {
            m = 1;
            k.KO(0, t, "ऩ");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "ए");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16480, 189) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऌि");
        } else if (k.KKM(e, 16400, 189) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ौि");
        } else if (k.KKM(e, 16384, 189) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "-ि");
        } else if (k.KKM(e, 16480, 189)) {
            m = 1;
            k.KO(0, t, "ऌ");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ौ");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16480, 190) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऑि");
        } else if (k.KKM(e, 16400, 190) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "यि");
        } else if (k.KKM(e, 16480, 190)) {
            m = 1;
            k.KO(0, t, "ऑ");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "य");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16480, 191) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऒि");
        } else if (k.KKM(e, 16400, 191) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॽि");
        } else if (k.KKM(e, 16480, 191)) {
            m = 1;
            k.KO(0, t, "ऒ");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "/");
        } else if (k.KKM(e, 16480, 192) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ॿि");
        } else if (k.KKM(e, 16400, 192) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ःि");
        } else if (k.KKM(e, 16480, 192)) {
            m = 1;
            k.KO(0, t, "ॿ");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "ः");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "।");
        } else if (k.KKM(e, 16480, 219) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "औि");
        } else if (k.KKM(e, 16400, 219) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ृि");
        } else if (k.KKM(e, 16480, 219)) {
            m = 1;
            k.KO(0, t, "औ");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "ृ");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "अ");
        } else if (k.KKM(e, 16480, 220) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऎि");
        } else if (k.KKM(e, 16384, 220) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "‍ि");
        } else if (k.KKM(e, 16400, 220) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ञि");
        } else if (k.KKM(e, 16480, 220)) {
            m = 1;
            k.KO(0, t, "ऎ");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "ञ");
        } else if (k.KKM(e, 16480, 221) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऐि");
        } else if (k.KKM(e, 16400, 221) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ऽि");
        } else if (k.KKM(e, 16480, 221)) {
            m = 1;
            k.KO(0, t, "ऐ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "ऽ");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "्र");
        } else if (k.KKM(e, 16480, 222) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "ओि");
        } else if (k.KKM(e, 16384, 222) && k.KCM(1, t, "ि", 1)) {
            m = 1;
            k.KO(1, t, "र्ि");
        } else if (k.KKM(e, 16480, 222)) {
            m = 1;
            k.KO(0, t, "ओ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "ॅ");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "र्");
        }
        return m;
    };
}