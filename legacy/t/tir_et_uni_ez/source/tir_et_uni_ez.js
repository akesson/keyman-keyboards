KeymanWeb.KR(new Keyboard_tir_et_uni_ez());

function Keyboard_tir_et_uni_ez() {
    this.KI = "Keyboard_tir_et_uni_ez";
    this.KN = "Tigrigna.ET EZ";
    this.KV = {
        F: ' 1em "GF Zemen Unicode"',
        K102: 0,
        BK: new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ቅ", "ው", "እ", "ር", "ት", "ይ", "ኡ", "ኢ", "ኦ", "ፕ", "", "", "", "", "", "", "ኣ", "ስ", "ድ", "ፍ", "ግ", "ህ", "ጅ", "ክ", "ል", "፤", "", "", "", "", "", "", "", "ዝ", "ሽ", "ች", "ቭ", "ብ", "ን", "ም", "፣", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "_", "", "", "", "", "ቕ", "ው", "ኤ", "ር", "ጥ", "ይ", "ኡ", "ኢ", "ኦ", "ጵ", "", "", "", "", "", "", "አ", "ጽ", "ዽ", "ፍ", "ጝ", "ሕ", "ጅ", "ኽ", "ል", "፡", "", "", "", "", "", "", "", "ዥ", "ሽ", "ጭ", "ቭ", "ብ", "ኝ", "ም", "", "", "", "", "", "", "", "", "፡")
    };
    this.KH = '';
    this.KM = 0;
    this.s14 = "ሀለሐመሠረሰሸቀቐበቨተቸኀነኘከኸወዐዘዠየደጀገጘጠጨጰጸፀፈፐዸ";
    this.s15 = "ሁሉሑሙሡሩሱሹቁቑቡቩቱቹኁኑኙኩኹዉዑዙዡዩዱጁጉጙጡጩጱጹፁፉፑዹ";
    this.s16 = "ሂሊሒሚሢሪሲሺቂቒቢቪቲቺኂኒኚኪኺዊዒዚዢዪዲጂጊጚጢጪጲጺፂፊፒዺ";
    this.s17 = "ሃላሓማሣራሳሻቃቓባቫታቻኃናኛካኻዋዓዛዣያዳጃጋጛጣጫጳጻፃፋፓዻ";
    this.s18 = "ሄሌሔሜሤሬሴሼቄቔቤቬቴቼኄኔኜኬኼዌዔዜዤዬዴጄጌጜጤጬጴጼፄፌፔዼ";
    this.s19 = "ህልሕምሥርስሽቅቕብቭትችኅንኝክኽውዐዝዥይድጅግጝጥጭጵጽፅፍፕዽ";
    this.s20 = "ሆሎሖሞሦሮሶሾቆቖቦቮቶቾኆኖኞኮኾዎዖዞዦዮዶጆጎጞጦጮጶጾፆፎፖዾ";
    this.s21 = "hlHm_rsxqQbvtc_nNkKw_zZydjgGTCPS_fpD";
    this.s22 = "LMRXBVWYJF";
    this.s23 = "ልምርሽብቭውይጅፍ";
    this.s24 = "AuUiIaEeoO";
    this.s25 = "አኡኡኢኢኣኤእኦኦ";
    this.s26 = "ህልሕምሥርስሽቅቕብቭትችኅንኝክኽዝዥድዽጅግጥጭጽጵፍፕዽ";
    this.s27 = "ኋሏሗሟሧሯሷሿቋቛቧቯቷቿኋኗኟኳዃዟዧዷዿጇጓጧጯጿጷፏፗዿ";
    this.s28 = "ኈኰቈቘጐዀ";
    this.s29 = "ኍኵቍቝጕዅ";
    this.s30 = "ኊኲቊቚጒዂ";
    this.s31 = "ኋኳቋቛጓዃ";
    this.s32 = "ኌኴቌቜጔዄ";
    this.s33 = "23456789";
    this.s34 = "፪፫፬፭፮፯፰፱";
    this.s35 = "፳፴፵፶፷፸፹፺";
    this.s36 = "eE";
    this.s37 = "uU";
    this.s38 = "iI";
    this.s39 = "aA";
    this.s40 = "oO";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            m = 0;
        if (k.KKM(e, 16400, 32)) {
            m = 1;
            k.KO(0, t, "፡");
        } else if (k.KKM(e, 16384, 222) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s29, 1, t);
        } else if (k.KKM(e, 16384, 222) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "'");
        } else if (k.KKM(e, 16384, 222)) {
            m = 1;
            k.KDO(0, t, 0);
        } else if (k.KKM(e, 16384, 188) && k.KCM(1, t, "፣", 1)) {
            m = 1;
            k.KO(1, t, "፥");
        } else if (k.KKM(e, 16384, 188) && k.KCM(1, t, "፥", 1)) {
            m = 1;
            k.KO(1, t, ",");
        } else if (k.KKM(e, 16384, 188) && k.KCM(1, t, ",", 1)) {
            m = 1;
            k.KO(1, t, "፣");
        } else if (k.KKM(e, 16384, 188)) {
            m = 1;
            k.KO(0, t, "፣");
        } else if (k.KKM(e, 16384, 189) && k.KCM(1, t, "፡", 1)) {
            m = 1;
            k.KO(1, t, "፦");
        } else if (k.KKM(e, 16384, 48) && k.KA(0, k.KC(3, 1, t), this.s34) && k.KCM(2, t, "፻ ", 2)) {
            m = 1;
            k.KIO(3, this.s35, 1, t);
            k.KO(-1, t, "፻");
        } else if (k.KKM(e, 16384, 48) && k.KCM(2, t, "፲፻", 2)) {
            m = 1;
            k.KO(2, t, "፼");
        } else if (k.KKM(e, 16384, 48) && k.KA(0, k.KC(2, 1, t), this.s35) && k.KCM(1, t, "፻", 1)) {
            m = 1;
            k.KIO(2, this.s34, 1, t);
            k.KO(-1, t, "፼");
        } else if (k.KKM(e, 16384, 48) && k.KCM(1, t, "፩", 1)) {
            m = 1;
            k.KO(1, t, "፲");
        } else if (k.KKM(e, 16384, 48) && k.KCM(1, t, "፲", 1)) {
            m = 1;
            k.KO(1, t, "፻");
        } else if (k.KKM(e, 16384, 48) && k.KCM(1, t, "፻", 1)) {
            m = 1;
            k.KO(1, t, "፲፻");
        } else if (k.KKM(e, 16384, 48) && k.KA(0, k.KC(1, 1, t), this.s34)) {
            m = 1;
            k.KIO(1, this.s35, 1, t);
        } else if (k.KKM(e, 16384, 48) && k.KA(0, k.KC(1, 1, t), this.s35)) {
            m = 1;
            k.KIO(1, this.s34, 1, t);
            k.KO(-1, t, "፻");
        } else if (k.KKM(e, 16384, 49) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፩");
        } else if (k.KKM(e, 16384, 50) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፪");
        } else if (k.KKM(e, 16384, 51) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፫");
        } else if (k.KKM(e, 16384, 52) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፬");
        } else if (k.KKM(e, 16384, 53) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፭");
        } else if (k.KKM(e, 16384, 54) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፮");
        } else if (k.KKM(e, 16384, 55) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፯");
        } else if (k.KKM(e, 16384, 56) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፰");
        } else if (k.KKM(e, 16384, 57) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፱");
        } else if (k.KKM(e, 16400, 186) && k.KCM(1, t, "፡", 1)) {
            m = 1;
            k.KO(1, t, "።");
        } else if (k.KKM(e, 16400, 186) && k.KCM(1, t, "።", 1)) {
            m = 1;
            k.KO(1, t, ":");
        } else if (k.KKM(e, 16400, 186) && k.KCM(1, t, ":", 1)) {
            m = 1;
            k.KO(1, t, "፡");
        } else if (k.KKM(e, 16400, 186) && k.KCM(1, t, "-", 1)) {
            m = 1;
            k.KO(1, t, "፥");
        } else if (k.KKM(e, 16400, 186) && k.KCM(1, t, "፨", 1)) {
            m = 1;
            k.KO(1, t, "፨");
        } else if (k.KKM(e, 16400, 186)) {
            m = 1;
            k.KO(0, t, "፡");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "፤", 1)) {
            m = 1;
            k.KO(1, t, ";");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, ";", 1)) {
            m = 1;
            k.KO(1, t, "፤");
        } else if (k.KKM(e, 16384, 186)) {
            m = 1;
            k.KO(0, t, "፤");
        } else if (k.KKM(e, 16400, 191) && k.KDM(0, t, 0)) {
            m = 1;
            k.KO(0, t, "፧");
        } else if (k.KKM(e, 16400, 191) && k.KCM(1, t, "፧", 1)) {
            m = 1;
            k.KO(1, t, "?");
        } else if (k.KKM(e, 16400, 191) && k.KCM(1, t, "?", 1)) {
            m = 1;
            k.KO(1, t, "፧");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኣ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "አ", 1)) {
            m = 1;
            k.KO(1, t, "ዐ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ኣ", 1)) {
            m = 1;
            k.KO(1, t, "ዓ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ዓ", 1)) {
            m = 1;
            k.KO(1, t, "ኣ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዓ");
        } else if (k.KKM(e, 16400, 65) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s17, 1, t);
        } else if (k.KKM(e, 16400, 65) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16400, 65)) {
            m = 1;
            k.KO(0, t, "አ");
        } else if (k.KKM(e, 16400, 66)) {
            m = 1;
            k.KO(0, t, "ብ");
        } else if (k.KKM(e, 16400, 67)) {
            m = 1;
            k.KO(0, t, "ጭ");
        } else if (k.KKM(e, 16400, 68)) {
            m = 1;
            k.KO(0, t, "ዽ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኤ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ኤ", 1)) {
            m = 1;
            k.KO(1, t, "ዔ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ዔ", 1)) {
            m = 1;
            k.KO(1, t, "ኤ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዔ");
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s14, 1, t);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(1, 1, t), this.s14)) {
            m = 1;
            k.KIO(1, this.s18, 1, t);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s28, 1, t);
        } else if (k.KKM(e, 16400, 69) && k.KA(0, k.KC(1, 1, t), this.s28)) {
            m = 1;
            k.KIO(1, this.s32, 1, t);
        } else if (k.KKM(e, 16400, 69)) {
            m = 1;
            k.KO(0, t, "ኤ");
        } else if (k.KKM(e, 16400, 70)) {
            m = 1;
            k.KO(0, t, "ፍ");
        } else if (k.KKM(e, 16400, 71)) {
            m = 1;
            k.KO(0, t, "ጝ");
        } else if (k.KKM(e, 16400, 72)) {
            m = 1;
            k.KO(0, t, "ሕ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኢ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ኢ", 1)) {
            m = 1;
            k.KO(1, t, "ዒ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ዒ", 1)) {
            m = 1;
            k.KO(1, t, "ኢ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዒ");
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
        } else if (k.KKM(e, 16400, 73) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s30, 1, t);
        } else if (k.KKM(e, 16400, 73)) {
            m = 1;
            k.KO(0, t, "ኢ");
        } else if (k.KKM(e, 16400, 74)) {
            m = 1;
            k.KO(0, t, "ጅ");
        } else if (k.KKM(e, 16400, 75)) {
            m = 1;
            k.KO(0, t, "ኽ");
        } else if (k.KKM(e, 16400, 76)) {
            m = 1;
            k.KO(0, t, "ል");
        } else if (k.KKM(e, 16400, 77)) {
            m = 1;
            k.KO(0, t, "ም");
        } else if (k.KKM(e, 16400, 78)) {
            m = 1;
            k.KO(0, t, "ኝ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኦ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ኦ", 1)) {
            m = 1;
            k.KO(1, t, "ዖ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ዖ", 1)) {
            m = 1;
            k.KO(1, t, "ኦ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዖ");
        } else if (k.KKM(e, 16400, 79) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s20, 1, t);
        } else if (k.KKM(e, 16400, 79)) {
            m = 1;
            k.KO(0, t, "ኦ");
        } else if (k.KKM(e, 16400, 80)) {
            m = 1;
            k.KO(0, t, "ጵ");
        } else if (k.KKM(e, 16400, 81)) {
            m = 1;
            k.KO(0, t, "ቕ");
        } else if (k.KKM(e, 16400, 82)) {
            m = 1;
            k.KO(0, t, "ር");
        } else if (k.KKM(e, 16400, 83) && k.KCM(1, t, "ጽ", 1)) {
            m = 1;
            k.KO(1, t, "ፅ");
        } else if (k.KKM(e, 16400, 83)) {
            m = 1;
            k.KO(0, t, "ጽ");
        } else if (k.KKM(e, 16400, 84)) {
            m = 1;
            k.KO(0, t, "ጥ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኡ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ኡ", 1)) {
            m = 1;
            k.KO(1, t, "ዑ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ዑ", 1)) {
            m = 1;
            k.KO(1, t, "ኡ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዑ");
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s15, 1, t);
        } else if (k.KKM(e, 16400, 85) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s29, 1, t);
        } else if (k.KKM(e, 16400, 85)) {
            m = 1;
            k.KO(0, t, "ኡ");
        } else if (k.KKM(e, 16400, 86)) {
            m = 1;
            k.KO(0, t, "ቭ");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኧ");
        } else if (k.KKM(e, 16400, 87) && k.KA(0, k.KC(1, 1, t), this.s26)) {
            m = 1;
            k.KIO(1, this.s27, 1, t);
        } else if (k.KKM(e, 16400, 87)) {
            m = 1;
            k.KO(0, t, "ው");
        } else if (k.KKM(e, 16400, 88)) {
            m = 1;
            k.KO(0, t, "ሽ");
        } else if (k.KKM(e, 16400, 89)) {
            m = 1;
            k.KO(0, t, "ይ");
        } else if (k.KKM(e, 16400, 90)) {
            m = 1;
            k.KO(0, t, "ዥ");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "_");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ፅ");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ኅ");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ሥ");
        } else if (k.KKM(e, 16400, 189)) {
            m = 1;
            k.KO(0, t, "ዐ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ዐ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኣ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ዓ", 1)) {
            m = 1;
            k.KO(1, t, "ዐ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ኣ", 1)) {
            m = 1;
            k.KO(1, t, "ዓ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ዓ", 1)) {
            m = 1;
            k.KO(1, t, "ኣ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ዐ", 1)) {
            m = 1;
            k.KO(1, t, "አ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "አ", 1)) {
            m = 1;
            k.KO(1, t, "ኣ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዓ");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s17, 1, t);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s27)) {
            m = 1;
            k.KIO(1, this.s27, 1, t);
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s31, 1, t);
        } else if (k.KKM(e, 16384, 65)) {
            m = 1;
            k.KO(0, t, "ኣ");
        } else if (k.KKM(e, 16384, 66)) {
            m = 1;
            k.KO(0, t, "ብ");
        } else if (k.KKM(e, 16384, 67)) {
            m = 1;
            k.KO(0, t, "ች");
        } else if (k.KKM(e, 16384, 68)) {
            m = 1;
            k.KO(0, t, "ድ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ዕ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "አ", 1)) {
            m = 1;
            k.KO(1, t, "ዐ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ዐ", 1)) {
            m = 1;
            k.KO(1, t, "ዔ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ዔ", 1)) {
            m = 1;
            k.KO(1, t, "ኤ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ኤ", 1)) {
            m = 1;
            k.KO(1, t, "እ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ኣ", 1)) {
            m = 1;
            k.KO(1, t, "ዐ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዐ");
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s14, 1, t);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s14)) {
            m = 1;
            k.KIO(1, this.s18, 1, t);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s28, 1, t);
        } else if (k.KKM(e, 16384, 69) && k.KA(0, k.KC(1, 1, t), this.s28)) {
            m = 1;
            k.KIO(1, this.s32, 1, t);
        } else if (k.KKM(e, 16384, 69)) {
            m = 1;
            k.KO(0, t, "እ");
        } else if (k.KKM(e, 16384, 70)) {
            m = 1;
            k.KO(0, t, "ፍ");
        } else if (k.KKM(e, 16384, 71)) {
            m = 1;
            k.KO(0, t, "ግ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ህ", 1)) {
            m = 1;
            k.KO(1, t, "ኅ");
        } else if (k.KKM(e, 16384, 72)) {
            m = 1;
            k.KO(0, t, "ህ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኢ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ኢ", 1)) {
            m = 1;
            k.KO(1, t, "ዒ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ዒ", 1)) {
            m = 1;
            k.KO(1, t, "ኢ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዒ");
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s16, 1, t);
        } else if (k.KKM(e, 16384, 73) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s30, 1, t);
        } else if (k.KKM(e, 16384, 73)) {
            m = 1;
            k.KO(0, t, "ኢ");
        } else if (k.KKM(e, 16384, 74)) {
            m = 1;
            k.KO(0, t, "ጅ");
        } else if (k.KKM(e, 16384, 75)) {
            m = 1;
            k.KO(0, t, "ክ");
        } else if (k.KKM(e, 16384, 76)) {
            m = 1;
            k.KO(0, t, "ል");
        } else if (k.KKM(e, 16384, 77)) {
            m = 1;
            k.KO(0, t, "ም");
        } else if (k.KKM(e, 16384, 78)) {
            m = 1;
            k.KO(0, t, "ን");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኦ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ኦ", 1)) {
            m = 1;
            k.KO(1, t, "ዖ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ዖ", 1)) {
            m = 1;
            k.KO(1, t, "ኦ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዖ");
        } else if (k.KKM(e, 16384, 79) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s20, 1, t);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ኮ", 1)) {
            m = 1;
            k.KO(1, t, "ኰ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ጎ", 1)) {
            m = 1;
            k.KO(1, t, "ጐ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ኰ", 1)) {
            m = 1;
            k.KO(1, t, "ኮ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ጐ", 1)) {
            m = 1;
            k.KO(1, t, "ጎ");
        } else if (k.KKM(e, 16384, 79)) {
            m = 1;
            k.KO(0, t, "ኦ");
        } else if (k.KKM(e, 16384, 80)) {
            m = 1;
            k.KO(0, t, "ፕ");
        } else if (k.KKM(e, 16384, 81)) {
            m = 1;
            k.KO(0, t, "ቅ");
        } else if (k.KKM(e, 16384, 82)) {
            m = 1;
            k.KO(0, t, "ር");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "ስ", 1)) {
            m = 1;
            k.KO(1, t, "ሥ");
        } else if (k.KKM(e, 16384, 83)) {
            m = 1;
            k.KO(0, t, "ስ");
        } else if (k.KKM(e, 16384, 84)) {
            m = 1;
            k.KO(0, t, "ት");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "እ", 1)) {
            m = 1;
            k.KO(1, t, "ኡ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ኡ", 1)) {
            m = 1;
            k.KO(1, t, "ዑ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ዑ", 1)) {
            m = 1;
            k.KO(1, t, "ኡ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ዕ", 1)) {
            m = 1;
            k.KO(1, t, "ዑ");
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(1, 1, t), this.s19)) {
            m = 1;
            k.KIO(1, this.s15, 1, t);
        } else if (k.KKM(e, 16384, 85) && k.KA(0, k.KC(1, 1, t), this.s31)) {
            m = 1;
            k.KIO(1, this.s29, 1, t);
        } else if (k.KKM(e, 16384, 85)) {
            m = 1;
            k.KO(0, t, "ኡ");
        } else if (k.KKM(e, 16384, 86)) {
            m = 1;
            k.KO(0, t, "ቭ");
        } else if (k.KKM(e, 16384, 87) && k.KCM(2, t, "እው", 2)) {
            m = 1;
            k.KO(2, t, "ኧ");
        } else if (k.KKM(e, 16384, 87) && k.KA(0, k.KC(2, 1, t), this.s26) && k.KCM(1, t, "ው", 1)) {
            m = 1;
            k.KIO(2, this.s27, 1, t);
        } else if (k.KKM(e, 16384, 87)) {
            m = 1;
            k.KO(0, t, "ው");
        } else if (k.KKM(e, 16384, 88)) {
            m = 1;
            k.KO(0, t, "ሽ");
        } else if (k.KKM(e, 16384, 89)) {
            m = 1;
            k.KO(0, t, "ይ");
        } else if (k.KKM(e, 16384, 90)) {
            m = 1;
            k.KO(0, t, "ዝ");
        } else if (k.KKM(e, 16400, 220) && k.KCM(1, t, "፡", 1)) {
            m = 1;
            k.KO(1, t, "፨");
        }
        return m;
    };
}