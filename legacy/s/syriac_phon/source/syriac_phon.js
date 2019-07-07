KeymanWeb.KR(new Keyboard_syriac_phon());

function Keyboard_syriac_phon() {
    this.KI = "Keyboard_syriac_phon";
    this.KN = "Syriac Phonetic";
    this.KBVER = "1.1";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("܏", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "", "", "", "ܩ", "ܘ", "ܖ", "ܪ", "ܬ", "ܝ", "ܜ", "ܥ", "ܧ", "ܦ", "]", "[", "܆", "", "", "", "ܐ", "ܣ", "ܕ", "ܔ", "ܓ", "ܗ", "ܛ", "ܟ", "ܠ", "ܚ", "ܞ", "", "", "", "", "", "܆", "ܙ", "ܨ", "ܤ", "ܫ", "ܒ", "ܢ", "ܡ", "܀", ".", "܇", "", "", "", "", "", " ", "̮", "!", "̊", "̥", "݉", "♰", "♱", "܊", "»", ")", "(", "«", "+", "", "", "", "ܰ", "ܳ", "ܶ", "ܺ", "ܽ", "݀", "݁", "̈", "̄", "̇", "̃", "݊", ":", "", "", "", "ܱ", "ܴ", "ܷ", "ܻ", "ܾ", "ܑ", "ـ", "̤", "̱", "̣", "̰", "", "", "", "", "", ":", "ܲ", "ܵ", "ܸ", "ܼ", "ܿ", "ܹ", "݂", "،", "؛", "؟", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ّ", "܁", "܂", "܃", "܄", "܅", "܈", "܉", "܋", "܌", "܍", "┌", "┐", "", "", "", "َ", "ً", "ُ", "ٌ", "ٓ", "ٔ", "݇", "݃", "݅", "̭", "", "", "", "", "", "", "ِ", "ٍ", "ٖ", "ء", "ٕ", "ٰ", "݈", "݄", "݆", "", "", "", "", "", "", "", "", "", "ْ", "", "‍", "‌", "‎", "‏", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.KRTL = 1;
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
            k.KO(0, t, "0");
        } else if (k.KKM(e, 16400, 48)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16480, 48)) {
            m = 1;
            k.KO(0, t, "܍");
        } else if (k.KKM(e, 16384, 49)) {
            m = 1;
            k.KO(0, t, "1");
        } else if (k.KKM(e, 16400, 49)) {
            m = 1;
            k.KO(0, t, "!");
        } else if (k.KKM(e, 16480, 49)) {
            m = 1;
            k.KO(0, t, "܁");
        } else if (k.KKM(e, 16384, 50)) {
            m = 1;
            k.KO(0, t, "2");
        } else if (k.KKM(e, 16400, 50)) {
            m = 1;
            k.KO(0, t, "̊");
        } else if (k.KKM(e, 16480, 50)) {
            m = 1;
            k.KO(0, t, "܂");
        } else if (k.KKM(e, 16384, 51)) {
            m = 1;
            k.KO(0, t, "3");
        } else if (k.KKM(e, 16400, 51)) {
            m = 1;
            k.KO(0, t, "̥");
        } else if (k.KKM(e, 16480, 51)) {
            m = 1;
            k.KO(0, t, "܃");
        } else if (k.KKM(e, 16384, 52)) {
            m = 1;
            k.KO(0, t, "4");
        } else if (k.KKM(e, 16400, 52)) {
            m = 1;
            k.KO(0, t, "݉");
        } else if (k.KKM(e, 16480, 52)) {
            m = 1;
            k.KO(0, t, "܄");
        } else if (k.KKM(e, 16384, 53)) {
            m = 1;
            k.KO(0, t, "5");
        } else if (k.KKM(e, 16400, 53)) {
            m = 1;
            k.KO(0, t, "♰");
        } else if (k.KKM(e, 16480, 53)) {
            m = 1;
            k.KO(0, t, "܅");
        } else if (k.KKM(e, 16384, 54)) {
            m = 1;
            k.KO(0, t, "6");
        } else if (k.KKM(e, 16400, 54)) {
            m = 1;
            k.KO(0, t, "♱");
        } else if (k.KKM(e, 16480, 54)) {
            m = 1;
            k.KO(0, t, "܈");
        } else if (k.KKM(e, 16384, 55)) {
            m = 1;
            k.KO(0, t, "7");
        } else if (k.KKM(e, 16400, 55)) {
            m = 1;
            k.KO(0, t, "܊");
        } else if (k.KKM(e, 16480, 55)) {
            m = 1;
            k.KO(0, t, "܉");
        } else if (k.KKM(e, 16384, 56)) {
            m = 1;
            k.KO(0, t, "8");
        } else if (k.KKM(e, 16400, 56)) {
            m = 1;
            k.KO(0, t, "»");
        } else if (k.KKM(e, 16480, 56)) {
            m = 1;
            k.KO(0, t, "܋");
        } else if (k.KKM(e, 16384, 57)) {
            m = 1;
            k.KO(0, t, "9");
        } else if (k.KKM(e, 16400, 57)) {
            m = 1;
            k.KO(0, t, ")");
        } else if (k.KKM(e, 16480, 57)) {
            m = 1;
            k.KO(0, t, "܌");
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ܐ");
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "ܱ");
        } else if (k.KKM(e, 16480, 65)) {
            m = 1;
            k.KO(0, t, "ِ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ܒ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "ܿ");
        } else if (k.KKM(e, 16480, 66)) {
            m = 1;
            k.KO(0, t, "‌");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ܤ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ܸ");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ܕ");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ܷ");
        } else if (k.KKM(e, 16480, 68)) {
            m = 1;
            k.KO(0, t, "ٖ");
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "ܖ");
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ܶ");
        } else if (k.KKM(e, 16480, 69)) {
            m = 1;
            k.KO(0, t, "ُ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ܔ");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ܻ");
        } else if (k.KKM(e, 16480, 70)) {
            m = 1;
            k.KO(0, t, "ء");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ܓ");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "ܾ");
        } else if (k.KKM(e, 16480, 71)) {
            m = 1;
            k.KO(0, t, "ٕ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ܗ");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ܑ");
        } else if (k.KKM(e, 16480, 72)) {
            m = 1;
            k.KO(0, t, "ٰ");
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ܥ");
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "̈");
        } else if (k.KKM(e, 16480, 73)) {
            m = 1;
            k.KO(0, t, "݃");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ܛ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ـ");
        } else if (k.KKM(e, 16480, 74)) {
            m = 1;
            k.KO(0, t, "݈");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ܟ");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "̤");
        } else if (k.KKM(e, 16480, 75)) {
            m = 1;
            k.KO(0, t, "݄");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ܠ");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "̱");
        } else if (k.KKM(e, 16480, 76)) {
            m = 1;
            k.KO(0, t, "݆");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ܡ");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "݂");
        } else if (k.KKM(e, 16480, 77)) {
            m = 1;
            k.KO(0, t, "‏");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ܢ");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "ܹ");
        } else if (k.KKM(e, 16480, 78)) {
            m = 1;
            k.KO(0, t, "‎");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ܧ");
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "̄");
        } else if (k.KKM(e, 16480, 79)) {
            m = 1;
            k.KO(0, t, "݅");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ܦ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "̇");
        } else if (k.KKM(e, 16480, 80)) {
            m = 1;
            k.KO(0, t, "̭");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ܩ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ܰ");
        } else if (k.KKM(e, 16480, 81)) {
            m = 1;
            k.KO(0, t, "َ");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ܪ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ܺ");
        } else if (k.KKM(e, 16480, 82)) {
            m = 1;
            k.KO(0, t, "ٌ");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ܣ");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ܴ");
        } else if (k.KKM(e, 16480, 83)) {
            m = 1;
            k.KO(0, t, "ٍ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ܬ");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ܽ");
        } else if (k.KKM(e, 16480, 84)) {
            m = 1;
            k.KO(0, t, "ٓ");
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ܜ");
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "݁");
        } else if (k.KKM(e, 16480, 85)) {
            m = 1;
            k.KO(0, t, "݇");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ܫ");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ܼ");
        } else if (k.KKM(e, 16480, 86)) {
            m = 1;
            k.KO(0, t, "‍");
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ܘ");
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ܳ");
        } else if (k.KKM(e, 16480, 87)) {
            m = 1;
            k.KO(0, t, "ً");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ܨ");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ܵ");
        } else if (k.KKM(e, 16480, 88)) {
            m = 1;
            k.KO(0, t, "ْ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ܝ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "݀");
        } else if (k.KKM(e, 16480, 89)) {
            m = 1;
            k.KO(0, t, "ٔ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ܙ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ܲ");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "ܚ");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "̣");
        } else if (k.KKM(e, 16384, 187)) {
            m = 1;
            k.KO(0, t, "=");
        } else if (k.KKM(e, 16400, 187)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16480, 187)) {
            m = 1;
            k.KO(0, t, "┐");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "܀");
        } else if (k.KKM(e, 16400, 188)) {
            m = 1;
            k.KO(0, t, "،");
        } else if (k.KKM(e, 16384, 189)) {
            m = 1;
            k.KO(0, t, "-");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "«");
        } else if (k.KKM(e, 16480, 189)) {
            m = 1;
            k.KO(0, t, "┌");
        } else if (k.KKM(e, 16384, 190)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16400, 190)) {
            m = 1;
            k.KO(0, t, "؛");
        } else if (k.KKM(e, 16384, 191)) {
            m = 1;
            k.KO(0, t, "܇");
        } else if (k.KKM(e, 16400, 191)) {
            m = 1;
            k.KO(0, t, "؟");
        } else if (k.KKM(e, 16384, 192)) {
            m = 1;
            k.KO(0, t, "܏");
        } else if (k.KKM(e, 16400, 192)) {
            m = 1;
            k.KO(0, t, "̮");
        } else if (k.KKM(e, 16480, 192)) {
            m = 1;
            k.KO(0, t, "ّ");
        } else if (k.KKM(e, 16384, 219)) {
            m = 1;
            k.KO(0, t, "]");
        } else if (k.KKM(e, 16400, 219)) {
            m = 1;
            k.KO(0, t, "̃");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KO(0, t, "܆");
        } else if (k.KKM(e, 16400, 220)) {
            m = 1;
            k.KO(0, t, ":");
        } else if (k.KKM(e, 16384, 221)) {
            m = 1;
            k.KO(0, t, "[");
        } else if (k.KKM(e, 16400, 221)) {
            m = 1;
            k.KO(0, t, "݊");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KO(0, t, "ܞ");
        } else if (k.KKM(e, 16400, 222)) {
            m = 1;
            k.KO(0, t, "̰");
        } else if (k.KKM(e, 16384, 226)) {
            m = 1;
            k.KO(0, t, "܆");
        } else if (k.KKM(e, 16400, 226)) {
            m = 1;
            k.KO(0, t, ":");
        }
        return m;
    };
}