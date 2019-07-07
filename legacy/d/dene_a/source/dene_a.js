KeymanWeb.KR(new Keyboard_dene_a());

function Keyboard_dene_a() {
    this.KI = "Keyboard_dene_a";
    this.KN = "Dene A";
    this.KV = {
        F: ' 1em "Euphemia"',
        K102: 0,
        BK: new Array("́", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ᐊ̇ ", "ᐧ", "ᐁ", "ᐡ", "ᒡ", "ᐩ", "ᐅ̇ ", "ᐃ", "ᐅ", "", "‘", "’", "¤", "", "", "", "ᐊ", "ᐢ", "ᐨ", "", "ᑊ", "ᐦ", "ᒢ", "ᐠ", "ᐟ", "", "", "", "", "", "", "", "", "", "", "", "", "ᑉ", "ᐣ", "ᒼ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "‍", "", "", "", "", "‌", "", "", "", "", "ᐊ̇ ", "ᐤ", "ᐁ", "", "", "ᕁ", "ᐅ̇ ", "ᐃ", "ᐅ", "", "“", "”", "\\", "", "", "", "ᐊ", "", "", "", "", "", "", "", "ˡ", "", "", "", "", "", "", "", "", "", "᙭", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s4 = "ᐸᒪᕮᒐᑕᕦᓇᘔᓴᖉᕍᗴᖚᔭᑲᗃ";
    this.s5 = "ᐯᒣᕫᒉᑌᕞᓀᘛᓭᖆᕃᗯᖗᔦᑫᗀ";
    this.s6 = "ᐱᒥᕬᒋᑎᕠᓂᘚᓯᖇᕄᗰᖘᔨᑭᗁ";
    this.s7 = "ᐳᒧᕭᒍᑐᕤᓄᘕᓱᖈᕊᗱᖙᔪᑯᗂ";
    this.s8 = "ᑉᒼfᒢᐨᒡᐣzᐢpᐟcxᐩᐠᑊ";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16400, 65)) {
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
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
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
        } else if (k.KKM(e, 16400, 76) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "L");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ˡ");
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
            k.KO(0, t, "ᐊ̇");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ᐅ̇");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "W");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "ᐤ");
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "X");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "᙭");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "Y");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "ᕁ");
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
        } else if (k.KKM(e, 16400, 54) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "^");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16400, 189) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "_");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 192) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "`");
        } else if (k.KKM(e, 16384, 192)) {
            r = m = 1;
            k.KO(0, t, "́");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s4, 1, t);
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ᑉ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "c");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ᐨ");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s5, 1, t);
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ᐁ");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "f");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ᑊ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "ᐦ");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s6, 1, t);
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ᒢ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ᐠ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ᐟ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ᒼ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ᐣ");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "p");
        } else if (k.KKM(e, 16384, 81) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s4, 1, t);
            k.KO(-1, t, "̇");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ᐊ̇");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ᐡ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ᐢ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ᒡ");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            r = m = 1;
            k.KIO(1, this.s7, 1, t);
            k.KO(-1, t, "̇");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ᐅ̇");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "¤", 1)) {
            r = m = 1;
            k.KO(1, t, "w");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ᐧ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "x");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ᐩ");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "z");
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