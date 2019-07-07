KeymanWeb.KR(new Keyboard_armenian());

function Keyboard_armenian() {
    this.KI = "Keyboard_armenian";
    this.KN = "armenian";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("՝", ":", "ձ", "յ", "՛", ",", "-", ".", "«", "»", "օ", "ռ", "ժ", "", "", "", "խ", "ւ", "է", "ր", "տ", "ե", "ը", "ի", "ո", "պ", "չ", "ջ", "'", "", "", "", "ա", "ս", "դ", "ֆ", "ք", "հ", "ճ", "կ", "լ", "թ", "փ", "", "", "", "", "", "", "զ", "ց", "գ", "վ", "բ", "ն", "մ", "շ", "ղ", "ծ", "", "", "", "", "", " ", "Փ", "1", "Ձ", "Յ", "3", "4", "9", "և", "(", ")", "Օ", "Ռ", "Ժ", "", "", "", "Խ", "Ւ", "Է", "Ր", "Տ", "Ե", "Ը", "Ի", "Ո", "Պ", "Չ", "Ջ", "՞", "", "", "", "Ա", "Ս", "Դ", "Ֆ", "Ք", "Հ", "Ճ", "Կ", "Լ", "Թ", "Փ", "", "", "", "", "", "", "Զ", "Ց", "Գ", "Վ", "Բ", "Ն", "Մ", "Շ", "Ղ", "Ծ", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ")
    };
    this.KH = "<a href='http://help.keymanweb.com/go?Keyboard=armenian'>Help for this keyboard</a>";
    this.s4 = "armenian.kvk";
    this.s5 = "<a href='documentation.html'>Help for this keyboard</a>";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16384, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 0, 33)) {
            m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 0, 34)) {
            m = 1;
            k.KO(0, t, "Փ");
        } else if (k.KKM(e, 0, 35)) {
            m = 1;
            k.KO(0, t, "Յ");
        } else if (k.KKM(e, 0, 36)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 0, 37)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 0, 38)) {
            m = 1;
            k.KO(0, t, "և");
        } else if (k.KKM(e, 0, 39)) {
            m = 1;
            k.KO(0, t, "փ");
        } else if (k.KKM(e, 0, 40)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 0, 41)) {
            m = 1;
            k.KO(0, t, "Օ");
        } else if (k.KKM(e, 0, 42)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 0, 43)) {
            m = 1;
            k.KO(0, t, "Ժ");
        } else if (k.KKM(e, 0, 44)) {
            m = 1;
            k.KO(0, t, "շ");
        } else if (k.KKM(e, 0, 45)) {
            m = 1;
            k.KO(0, t, "ժ");
        } else if (k.KKM(e, 0, 45)) {
            m = 1;
            k.KO(0, t, "ռ");
        } else if (k.KKM(e, 0, 46)) {
            m = 1;
            k.KO(0, t, "ղ");
        } else if (k.KKM(e, 0, 47)) {
            m = 1;
            k.KO(0, t, "ծ");
        } else if (k.KKM(e, 0, 48)) {
            m = 1;
            k.KO(0, t, "օ");
        } else if (k.KKM(e, 0, 49)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 0, 50)) {
            m = 1;
            k.KO(0, t, "ձ");
        } else if (k.KKM(e, 0, 51)) {
            m = 1;
            k.KO(0, t, "յ");
        } else if (k.KKM(e, 0, 52)) {
            m = 1;
            k.KO(0, t, "՛");
        } else if (k.KKM(e, 0, 53)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 0, 54)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 0, 55)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 0, 56)) {
            m = 1;
            k.KO(0, t, "«");
        } else if (k.KKM(e, 0, 57)) {
            m = 1;
            k.KO(0, t, "»");
        } else if (k.KKM(e, 0, 58)) {
            m = 1;
            k.KO(0, t, "Թ");
        } else if (k.KKM(e, 0, 59)) {
            m = 1;
            k.KO(0, t, "թ");
        } else if (k.KKM(e, 0, 60)) {
            m = 1;
            k.KO(0, t, "Շ");
        } else if (k.KKM(e, 0, 62)) {
            m = 1;
            k.KO(0, t, "Ղ");
        } else if (k.KKM(e, 0, 63)) {
            m = 1;
            k.KO(0, t, "Ծ");
        } else if (k.KKM(e, 0, 64)) {
            m = 1;
            k.KO(0, t, "Ձ");
        } else if (k.KKM(e, 0, 65)) {
            m = 1;
            k.KO(0, t, "Ա");
        } else if (k.KKM(e, 0, 66)) {
            m = 1;
            k.KO(0, t, "Բ");
        } else if (k.KKM(e, 0, 67)) {
            m = 1;
            k.KO(0, t, "Գ");
        } else if (k.KKM(e, 0, 68)) {
            m = 1;
            k.KO(0, t, "Դ");
        } else if (k.KKM(e, 0, 69)) {
            m = 1;
            k.KO(0, t, "Է");
        } else if (k.KKM(e, 0, 70)) {
            m = 1;
            k.KO(0, t, "Ֆ");
        } else if (k.KKM(e, 0, 71)) {
            m = 1;
            k.KO(0, t, "Ք");
        } else if (k.KKM(e, 0, 72)) {
            m = 1;
            k.KO(0, t, "Հ");
        } else if (k.KKM(e, 0, 73)) {
            m = 1;
            k.KO(0, t, "Ի");
        } else if (k.KKM(e, 0, 74)) {
            m = 1;
            k.KO(0, t, "Ճ");
        } else if (k.KKM(e, 0, 75)) {
            m = 1;
            k.KO(0, t, "Կ");
        } else if (k.KKM(e, 0, 76)) {
            m = 1;
            k.KO(0, t, "Լ");
        } else if (k.KKM(e, 0, 77)) {
            m = 1;
            k.KO(0, t, "Մ");
        } else if (k.KKM(e, 0, 78)) {
            m = 1;
            k.KO(0, t, "Ն");
        } else if (k.KKM(e, 0, 79)) {
            m = 1;
            k.KO(0, t, "Ո");
        } else if (k.KKM(e, 0, 80)) {
            m = 1;
            k.KO(0, t, "Պ");
        } else if (k.KKM(e, 0, 81)) {
            m = 1;
            k.KO(0, t, "Խ");
        } else if (k.KKM(e, 0, 82)) {
            m = 1;
            k.KO(0, t, "Ր");
        } else if (k.KKM(e, 0, 83)) {
            m = 1;
            k.KO(0, t, "Ս");
        } else if (k.KKM(e, 0, 84)) {
            m = 1;
            k.KO(0, t, "Տ");
        } else if (k.KKM(e, 0, 85)) {
            m = 1;
            k.KO(0, t, "Ը");
        } else if (k.KKM(e, 0, 86)) {
            m = 1;
            k.KO(0, t, "Վ");
        } else if (k.KKM(e, 0, 87)) {
            m = 1;
            k.KO(0, t, "Ւ");
        } else if (k.KKM(e, 0, 88)) {
            m = 1;
            k.KO(0, t, "Ց");
        } else if (k.KKM(e, 0, 89)) {
            m = 1;
            k.KO(0, t, "Ե");
        } else if (k.KKM(e, 0, 90)) {
            m = 1;
            k.KO(0, t, "Զ");
        } else if (k.KKM(e, 0, 91)) {
            m = 1;
            k.KO(0, t, "չ");
        } else if (k.KKM(e, 0, 92)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 0, 93)) {
            m = 1;
            k.KO(0, t, "ջ");
        } else if (k.KKM(e, 0, 94)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 0, 95)) {
            m = 1;
            k.KO(0, t, "Ռ");
        } else if (k.KKM(e, 0, 96)) {
            m = 1;
            k.KO(0, t, "՝");
        } else if (k.KKM(e, 0, 97)) {
            m = 1;
            k.KO(0, t, "ա");
        } else if (k.KKM(e, 0, 98)) {
            m = 1;
            k.KO(0, t, "բ");
        } else if (k.KKM(e, 0, 99)) {
            m = 1;
            k.KO(0, t, "գ");
        } else if (k.KKM(e, 0, 100)) {
            m = 1;
            k.KO(0, t, "դ");
        } else if (k.KKM(e, 0, 101)) {
            m = 1;
            k.KO(0, t, "է");
        } else if (k.KKM(e, 0, 102)) {
            m = 1;
            k.KO(0, t, "ֆ");
        } else if (k.KKM(e, 0, 103)) {
            m = 1;
            k.KO(0, t, "ք");
        } else if (k.KKM(e, 0, 104)) {
            m = 1;
            k.KO(0, t, "հ");
        } else if (k.KKM(e, 0, 105)) {
            m = 1;
            k.KO(0, t, "ի");
        } else if (k.KKM(e, 0, 106)) {
            m = 1;
            k.KO(0, t, "ճ");
        } else if (k.KKM(e, 0, 107)) {
            m = 1;
            k.KO(0, t, "կ");
        } else if (k.KKM(e, 0, 108)) {
            m = 1;
            k.KO(0, t, "լ");
        } else if (k.KKM(e, 0, 109)) {
            m = 1;
            k.KO(0, t, "մ");
        } else if (k.KKM(e, 0, 110)) {
            m = 1;
            k.KO(0, t, "ն");
        } else if (k.KKM(e, 0, 111)) {
            m = 1;
            k.KO(0, t, "ո");
        } else if (k.KKM(e, 0, 112)) {
            m = 1;
            k.KO(0, t, "պ");
        } else if (k.KKM(e, 0, 113)) {
            m = 1;
            k.KO(0, t, "խ");
        } else if (k.KKM(e, 0, 114)) {
            m = 1;
            k.KO(0, t, "ր");
        } else if (k.KKM(e, 0, 115)) {
            m = 1;
            k.KO(0, t, "ս");
        } else if (k.KKM(e, 0, 116)) {
            m = 1;
            k.KO(0, t, "տ");
        } else if (k.KKM(e, 0, 117)) {
            m = 1;
            k.KO(0, t, "ը");
        } else if (k.KKM(e, 0, 118)) {
            m = 1;
            k.KO(0, t, "վ");
        } else if (k.KKM(e, 0, 119)) {
            m = 1;
            k.KO(0, t, "ւ");
        } else if (k.KKM(e, 0, 120)) {
            m = 1;
            k.KO(0, t, "ց");
        } else if (k.KKM(e, 0, 121)) {
            m = 1;
            k.KO(0, t, "ե");
        } else if (k.KKM(e, 0, 122)) {
            m = 1;
            k.KO(0, t, "զ");
        } else if (k.KKM(e, 0, 123)) {
            m = 1;
            k.KO(0, t, "Չ");
        } else if (k.KKM(e, 0, 124)) {
            m = 1;
            k.KO(0, t, "՞");
        } else if (k.KKM(e, 0, 125)) {
            m = 1;
            k.KO(0, t, "Ջ");
        } else if (k.KKM(e, 0, 126)) {
            m = 1;
            k.KO(0, t, "Փ");
        }
        return m;
    };
}