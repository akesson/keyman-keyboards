KeymanWeb.KR(new Keyboard_armenian_west());

function Keyboard_armenian_west() {
    this.KI = "Keyboard_armenian_west";
    this.KN = "Armenian Western";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("՝", ":", "ձ", "յ", "՛", ",", "-", ".", "«", "»", "օ", "ռ", "ժ", "", "", "", "խ", "վ", "է", "ր", "դ", "ե", "ը", "ի", "ո", "բ", "չ", "ջ", "'", "", "", "", "ա", "ս", "տ", "ֆ", "կ", "հ", "ճ", "ք", "լ", "թ", "փ", "", "", "", "", "", "'", "զ", "ց", "գ", "ւ", "պ", "ն", "մ", "շ", "ղ", "ծ", "", "", "", "", "", " ", "՜", "1", "Ձ", "Յ", "3", "4", "9", "և", "(", ")", "Օ", "Ռ", "Ժ", "", "", "", "Խ", "Վ", "Է", "Ր", "Դ", "Ե", "Ը", "Ի", "Ո", "Բ", "Չ", "Ջ", "՞", "", "", "", "Ա", "Ս", "Տ", "Ֆ", "Կ", "Հ", "Ճ", "Ք", "Լ", "Թ", "Փ", "", "", "", "", "", "՞", "Զ", "Ց", "Գ", "Ւ", "Պ", "Ն", "Մ", "Շ", "Ղ", "Ծ", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ")
    };
    this.KH = '';
    this.KM = 0;
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
        } else if (k.KKM(e, 16416, 32)) {
            m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16384, 48)) {
            m = 1;
            k.KO(0, t, "օ");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, "Օ");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "ձ");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "Ձ");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "յ");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "Յ");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "՛");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, ",");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "և");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "«");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "»");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ա");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "Ա");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "պ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "Պ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "գ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "Գ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "տ");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "Տ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "է");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "Է");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ֆ");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "Ֆ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "կ");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "Կ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "հ");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "Հ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ի");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "Ի");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ճ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "Ճ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ք");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "Ք");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "լ");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "Լ");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "մ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "Մ");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ն");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "Ն");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ո");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "Ո");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "բ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "Բ");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "խ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "Խ");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ր");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "Ր");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ս");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "Ս");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "դ");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "Դ");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ը");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "Ը");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ւ");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "Ւ");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "վ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "Վ");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ց");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "Ց");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ե");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "Ե");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "զ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "Զ");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "թ");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "Թ");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "ժ");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "Ժ");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "շ");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "Շ");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "ռ");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "Ռ");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, "ղ");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "Ղ");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "ծ");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "Ծ");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "՝");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "՜");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "չ");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "Չ");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, "՞");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "ջ");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "Ջ");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "փ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "Փ");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, "՞");
        }
        return m;
    };
}