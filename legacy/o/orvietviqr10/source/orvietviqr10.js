KeymanWeb.KR(new Keyboard_orvietviqr10());

function Keyboard_orvietviqr10() {
    this.KI = "Keyboard_orvietviqr10";
    this.KN = "OR Vietnamese (VIQR)";
    this.KV = {
        F: ' 1em "Arial"',
        K102: 0,
        BK: new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "")
    };
    this.KH = '';
    this.KM = 0;
    this.s8 = "aâăeêioôơuưyAÂĂEÊIOÔƠUƯY";
    this.s9 = "áấắéếíóốớúứýÁẤẮÉẾÍÓỐỚÚỨÝ";
    this.s10 = "àầằèềìòồờùừỳÀẦẰÈỀÌÒỒỜÙỪỲ";
    this.s11 = "ãẫẵẽễĩõỗỡũữỹÃẪẴẼỄĨÕỖỠŨỮỸ";
    this.s12 = "ảẩẳẻểỉỏổởủửỷẢẨẲẺỂỈỎỔỞỦỬỶ";
    this.s13 = "ạậặẹệịọộợụựỵẠẬẶẸỆỊỌỘỢỤỰỴ";
    this.s14 = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXzZ,<.>/?///[{]}-_\\|;:'\"";
    this.s15 = "aA";
    this.s16 = "ăĂ";
    this.s17 = "aeoAEO";
    this.s18 = "âêôÂÊÔ";
    this.s19 = "ouOU";
    this.s20 = "ơưƠƯ";
    this.s21 = "dD";
    this.s22 = "đĐ";
    this.s23 = "(";
    this.s24 = "^";
    this.s25 = "+";
    this.s26 = "-";
    this.s27 = "`'?~.";
    this.s28 = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXzZ,<.>/?///[{]}-_\\|;:'eEiIoOuUyY\"âêôÂÊÔơưƠƯđĐ";
    this.s29 = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXzZ,<.>/?///[{]}-_\\|;:'iIuUyY\"âêôÂÊÔơưƠƯđĐ";
    this.s30 = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXzZ,<.>/?///[{]}-_\\|;:'aAeEiIyY\"âêôÂÊÔđĐ";
    this.s31 = "bBcCfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXzZ,<.>/?///[{]}-_\\|;:'aAeEiIoOuUyY\"âêôÂÊÔơưƠƯđĐ";
    this.s32 = "bBcCdDfFgGhHjJkKlLmMnNpPqQrRsStTuUvVwWxXzZ,<.>/?///[{]}-_\\|;:'\"đĐ";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KIO(1, this.s9, 1, t);
        } else if (k.KKM(e, 16384, 222) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(1, 1, t), this.s32)) {
            m = 1;
        } else if (k.KKM(e, 16400, 57) && k.KA(0, k.KC(1, 1, t), this.s15)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
        } else if (k.KKM(e, 16400, 57) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "(");
        } else if (k.KKM(e, 16400, 57) && k.KA(0, k.KC(1, 1, t), this.s28)) {
            m = 1;
        } else if (k.KKM(e, 16400, 187) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s20, 1, t);
        } else if (k.KKM(e, 16400, 187) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "+");
        } else if (k.KKM(e, 16400, 187) && k.KA(0, k.KC(1, 1, t), this.s30)) {
            m = 1;
        } else if (k.KKM(e, 16384, 189) && k.KA(0, k.KC(1, 1, t), this.s21)) {
            m = 1;
            k.KIO(1, this.s22, 1, t);
        } else if (k.KKM(e, 16384, 189) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
        } else if (k.KKM(e, 16384, 190) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KIO(1, this.s13, 1, t);
        } else if (k.KKM(e, 16384, 190) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, ".");
        } else if (k.KKM(e, 16384, 190) && k.KA(0, k.KC(1, 1, t), this.s32)) {
            m = 1;
        } else if (k.KKM(e, 16400, 191) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KIO(1, this.s12, 1, t);
        } else if (k.KKM(e, 16400, 191) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "?");
        } else if (k.KKM(e, 16400, 191) && k.KA(0, k.KC(1, 1, t), this.s32)) {
            m = 1;
        } else if (k.KKM(e, 16400, 68) && k.KCM(1, t, "D", 1)) {
            m = 1;
            k.KO(1, t, "Đ");
        } else if (k.KKM(e, 16400, 68) && k.KCM(1, t, "d", 1)) {
            m = 1;
            k.KO(1, t, "Đ");
        } else if (k.KKM(e, 16384, 220) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "\\");
        } else if (k.KKM(e, 16384, 220)) {
            m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16400, 54) && k.KA(0, k.KC(1, 1, t), this.s17)) {
            m = 1;
            k.KIO(1, this.s18, 1, t);
        } else if (k.KKM(e, 16400, 54) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "^");
        } else if (k.KKM(e, 16400, 54) && k.KA(0, k.KC(1, 1, t), this.s29)) {
            m = 1;
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KIO(1, this.s10, 1, t);
        } else if (k.KKM(e, 16384, 192) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "`");
        } else if (k.KKM(e, 16384, 192) && k.KA(0, k.KC(1, 1, t), this.s32)) {
            m = 1;
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "d", 1)) {
            m = 1;
            k.KO(1, t, "đ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "D", 1)) {
            m = 1;
            k.KO(1, t, "Đ");
        } else if (k.KKM(e, 16400, 192) && k.KA(0, k.KC(1, 1, t), this.s8)) {
            m = 1;
            k.KIO(1, this.s11, 1, t);
        } else if (k.KKM(e, 16400, 192) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "~");
        } else if (k.KKM(e, 16400, 192) && k.KA(0, k.KC(1, 1, t), this.s32)) {
            m = 1;
        }
        return m;
    };
}