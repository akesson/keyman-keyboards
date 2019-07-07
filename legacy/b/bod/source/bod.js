KeymanWeb.KR(new Keyboard_bod());

function Keyboard_bod() {
    this.KI = "Keyboard_bod";
    this.KN = "Bod";
    this.KV = null;
    this.KH = '';
    this.KM = 0;
    this.KBVER = "1.1";
    this.KVKD = "T_LOPT T_SPACE T_0F19 T_0F85 T_0F37 T_0F35 T_0F7E";
    this.KVKL = {
        "tablet": {
            "font": "DDC Uchen",
            "layer": [{
                "id": "default",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_Q",
                        "text": "\u0F45"
                    }, {
                        "id": "K_W",
                        "text": "\u0F46"
                    }, {
                        "id": "K_E",
                        "text": "\u0F7A"
                    }, {
                        "id": "K_R",
                        "text": "\u0F62"
                    }, {
                        "id": "K_T",
                        "text": "\u0F4F"
                    }, {
                        "id": "K_Y",
                        "text": "\u0F61"
                    }, {
                        "id": "K_U",
                        "text": "\u0F74"
                    }, {
                        "id": "K_I",
                        "text": "\u0F72"
                    }, {
                        "id": "K_O",
                        "text": "\u0F7C"
                    }, {
                        "id": "K_P",
                        "text": "\u0F55"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_A",
                        "text": "\u0F68",
                        "pad": "55"
                    }, {
                        "id": "K_S",
                        "text": "\u0F66"
                    }, {
                        "id": "K_D",
                        "text": "\u0F51"
                    }, {
                        "id": "K_F",
                        "text": "\u0F56"
                    }, {
                        "id": "K_G",
                        "text": "\u0F44"
                    }, {
                        "id": "K_H",
                        "text": "\u0F58"
                    }, {
                        "id": "K_J",
                        "text": "\u0F40"
                    }, {
                        "id": "K_K",
                        "text": "\u0F42"
                    }, {
                        "id": "K_L",
                        "text": "\u0F63"
                    }, {
                        "id": "T_new_54",
                        "text": "",
                        "width": "10",
                        "sp": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "\u0F59\u0F5A",
                        "width": "100",
                        "sp": "1",
                        "nextlayer": "shift"
                    }, {
                        "id": "K_Z",
                        "text": "\u0F5F"
                    }, {
                        "id": "K_X",
                        "text": "\u0F64"
                    }, {
                        "id": "K_C",
                        "text": "\u0F5E"
                    }, {
                        "id": "K_V",
                        "text": "\u0F41"
                    }, {
                        "id": "K_B",
                        "text": "\u0F54"
                    }, {
                        "id": "K_N",
                        "text": "\u0F53"
                    }, {
                        "id": "K_M",
                        "text": "\u0F67"
                    }, {
                        "id": "K_PERIOD",
                        "text": "\u0F47",
                        "sk": [{
                            "text": ",",
                            "id": "K_COMMA"
                        }, {
                            "text": "!",
                            "id": "K_1",
                            "layer": "shift"
                        }, {
                            "text": "?",
                            "id": "K_SLASH",
                            "layer": "shift"
                        }, {
                            "text": "'",
                            "id": "K_QUOTE"
                        }, {
                            "text": "\"",
                            "id": "K_QUOTE",
                            "layer": "shift"
                        }, {
                            "text": "\\",
                            "id": "K_BKSLASH"
                        }, {
                            "text": ":",
                            "id": "K_COLON",
                            "layer": "shift"
                        }, {
                            "text": ";",
                            "id": "K_COLON"
                        }]
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "100",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_NUMLOCK",
                        "text": "\u0F21\u0F22",
                        "width": "126",
                        "sp": "1",
                        "nextlayer": "numeric"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "sp": "1"
                    }, {
                        "id": "T_LOPT",
                        "text": "\u0F0D",
                        "width": "100"
                    }, {
                        "id": "T_SPACE",
                        "text": "\u0F0B  [\u0F56\u0F7C\u0F51]",
                        "width": "239",
                        "sp": "0"
                    }, {
                        "id": "K_COLON",
                        "text": "\u0F5D"
                    }, {
                        "id": "K_SLASH",
                        "text": "\u0F49"
                    }, {
                        "id": "K_COMMA",
                        "text": "\u0F50"
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "145",
                        "sp": "1"
                    }]
                }]
            }, {
                "id": "shift",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_Q",
                        "text": "\u0F59"
                    }, {
                        "id": "K_W",
                        "text": "\u0F5A"
                    }, {
                        "id": "K_E",
                        "text": "\u0F19"
                    }, {
                        "id": "K_R",
                        "text": "\u0F1D"
                    }, {
                        "id": "K_T",
                        "text": "\u0F4A"
                    }, {
                        "id": "K_Y",
                        "text": "\u0F1A"
                    }, {
                        "id": "K_U",
                        "text": "\u0F07"
                    }, {
                        "id": "K_I",
                        "text": "\u0F80"
                    }, {
                        "id": "K_O",
                        "text": "\u0F04"
                    }, {
                        "id": "K_P",
                        "text": "\u0F05"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_A",
                        "text": "\u0F60",
                        "pad": "55"
                    }, {
                        "id": "K_S",
                        "text": "\u0F82"
                    }, {
                        "id": "K_D",
                        "text": "\u0F4C"
                    }, {
                        "id": "K_F",
                        "text": "\u0F83"
                    }, {
                        "id": "K_G",
                        "text": "\u0F84"
                    }, {
                        "id": "K_H",
                        "text": "\u0F08"
                    }, {
                        "id": "K_J",
                        "text": "\u0F13"
                    }, {
                        "id": "K_K",
                        "text": "\u0F14"
                    }, {
                        "id": "K_L",
                        "text": "\u0F7E"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_LOWER",
                        "text": "\u0F45\u0F46",
                        "width": "100",
                        "sp": "1",
                        "nextlayer": "default"
                    }, {
                        "id": "K_Z",
                        "text": "\u0F7F"
                    }, {
                        "id": "K_X",
                        "text": "\u0F65"
                    }, {
                        "id": "K_C",
                        "text": "\u0F3C"
                    }, {
                        "id": "K_V",
                        "text": "\u0F3D"
                    }, {
                        "id": "K_B",
                        "text": "\u0F38"
                    }, {
                        "id": "K_N",
                        "text": "\u0F4E"
                    }, {
                        "id": "K_M",
                        "text": "\u0F86"
                    }, {
                        "id": "K_PERIOD",
                        "text": "\u0F5B",
                        "sk": [{
                            "text": ",",
                            "id": "K_COMMA",
                            "layer": "default"
                        }, {
                            "text": "!",
                            "id": "K_1",
                            "layer": "shift"
                        }, {
                            "text": "?",
                            "id": "K_SLASH",
                            "layer": "shift"
                        }, {
                            "text": "'",
                            "id": "K_QUOTE",
                            "layer": "default"
                        }, {
                            "text": "\"",
                            "id": "K_QUOTE",
                            "layer": "shift"
                        }, {
                            "text": "\\",
                            "id": "K_BKSLASH",
                            "layer": "default"
                        }, {
                            "text": ":",
                            "id": "K_COLON",
                            "layer": "shift"
                        }, {
                            "text": ";",
                            "id": "K_COLON",
                            "layer": "default"
                        }]
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_NUMLOCK",
                        "text": "\u0F21\u0F22",
                        "width": "126",
                        "sp": "1",
                        "nextlayer": "numeric"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "sp": "1"
                    }, {
                        "id": "T_LOPT",
                        "text": "\u0F3E",
                        "width": "100"
                    }, {
                        "id": "T_SPACE",
                        "text": "\u0F3F  [\u0F56\u0F7C\u0F51]",
                        "width": "239",
                        "sp": "0"
                    }, {
                        "id": "K_COLON",
                        "text": "\u0F16"
                    }, {
                        "id": "K_SLASH",
                        "text": "\u0F12"
                    }, {
                        "id": "K_COMMA",
                        "text": "\u0F4B"
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "145",
                        "sp": "1"
                    }]
                }]
            }, {
                "id": "numeric",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": "\u0F21",
                        "pad": ""
                    }, {
                        "id": "K_2",
                        "text": "\u0F22"
                    }, {
                        "id": "K_3",
                        "text": "\u0F23"
                    }, {
                        "id": "K_4",
                        "text": "\u0F24"
                    }, {
                        "id": "K_5",
                        "text": "\u0F25"
                    }, {
                        "id": "K_6",
                        "text": "\u0F26"
                    }, {
                        "id": "K_7",
                        "text": "\u0F27"
                    }, {
                        "id": "K_8",
                        "text": "\u0F28"
                    }, {
                        "id": "K_9",
                        "text": "\u0F29"
                    }, {
                        "id": "K_0",
                        "text": "\u0F20"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_1",
                        "text": "\u0F2A",
                        "pad": "55",
                        "layer": "shift"
                    }, {
                        "id": "K_2",
                        "text": "\u0F2B",
                        "layer": "shift"
                    }, {
                        "id": "K_3",
                        "text": "\u0F2C",
                        "layer": "shift"
                    }, {
                        "id": "K_4",
                        "text": "\u0F2A",
                        "pad": "",
                        "layer": "shift"
                    }, {
                        "id": "K_5",
                        "text": "\u0F2D",
                        "layer": "shift"
                    }, {
                        "id": "K_6",
                        "text": "\u0F2F",
                        "layer": "shift"
                    }, {
                        "id": "K_7",
                        "text": "\u0F30",
                        "layer": "shift"
                    }, {
                        "id": "K_8",
                        "text": "\u0F31",
                        "layer": "shift"
                    }, {
                        "id": "K_9",
                        "text": "\u0F32",
                        "layer": "shift"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "\u0F59\u0F5A",
                        "width": "100",
                        "sp": "1",
                        "nextlayer": "shift"
                    }, {
                        "id": "K_0",
                        "text": "\u0F33",
                        "layer": "shift"
                    }, {
                        "id": "K_EQUAL",
                        "text": "\u0F18",
                        "layer": "default"
                    }, {
                        "id": "K_LBRKT",
                        "text": "\u0F3A",
                        "pad": ""
                    }, {
                        "id": "K_RBRKT",
                        "text": "\u0F3B"
                    }, {
                        "id": "T_0F19",
                        "text": "\u0F88"
                    }, {
                        "id": "K_EQUAL",
                        "text": "\u0F89",
                        "layer": "shift"
                    }, {
                        "id": "K_HYPHEN",
                        "text": "\u0F8A"
                    }, {
                        "id": "K_BKSLASH",
                        "text": "\u0F34"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "100",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_LOWER",
                        "text": "\u0F40\u0F41",
                        "width": "126",
                        "sp": "1",
                        "nextlayer": "default"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "sp": "1"
                    }, {
                        "id": "T_0F85",
                        "text": "\u0F85",
                        "width": "100"
                    }, {
                        "id": "T_0F37",
                        "text": "\u0F37  [\u0F56\u0F7C\u0F51]",
                        "width": "239"
                    }, {
                        "id": "T_0F35",
                        "text": "\u0F35"
                    }, {
                        "id": "K_HYPHEN",
                        "text": "\u0F39",
                        "layer": "shift"
                    }, {
                        "id": "T_0F7E",
                        "text": "\u0F15"
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "145",
                        "sp": "1"
                    }]
                }]
            }],
            "fontsize": "14"
        }
    };
    this.s13 = "ཀཁགགྷངཅཆཇཉཊཋཌཌྷཎཏཐདདྷནཔཕབབྷམཙཚཛཛྷཝཞཟའཡརལཤཥསཧཨཀྵ";
    this.s14 = "ྐྑྒྒྷྔྕྖྗྙྚྛྜྜྷྞྟྠྡྡྷྣྤྥྦྦྷྨྩྪྫྫྷྭྮྯྰྱྲླྴྵྶྷྸྐྵྺྻྼ";
    this.KVER = "9.0.475.0";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 48)) {
            r = m = 1;
            k.KO(0, t, "༠");
        } else if (k.KKM(e, 16400, 48)) {
            r = m = 1;
            k.KO(0, t, "༳");
        } else if (k.KKM(e, 16384, 49)) {
            r = m = 1;
            k.KO(0, t, "༡");
        } else if (k.KKM(e, 16400, 49)) {
            r = m = 1;
            k.KO(0, t, "༪");
        } else if (k.KKM(e, 16384, 50)) {
            r = m = 1;
            k.KO(0, t, "༢");
        } else if (k.KKM(e, 16400, 50)) {
            r = m = 1;
            k.KO(0, t, "༫");
        } else if (k.KKM(e, 16384, 51)) {
            r = m = 1;
            k.KO(0, t, "༣");
        } else if (k.KKM(e, 16400, 51)) {
            r = m = 1;
            k.KO(0, t, "༬");
        } else if (k.KKM(e, 16384, 52)) {
            r = m = 1;
            k.KO(0, t, "༤");
        } else if (k.KKM(e, 16400, 52)) {
            r = m = 1;
            k.KO(0, t, "༭");
        } else if (k.KKM(e, 16384, 53)) {
            r = m = 1;
            k.KO(0, t, "༥");
        } else if (k.KKM(e, 16400, 53)) {
            r = m = 1;
            k.KO(0, t, "༮");
        } else if (k.KKM(e, 16384, 54)) {
            r = m = 1;
            k.KO(0, t, "༦");
        } else if (k.KKM(e, 16400, 54)) {
            r = m = 1;
            k.KO(0, t, "༯");
        } else if (k.KKM(e, 16384, 55)) {
            r = m = 1;
            k.KO(0, t, "༧");
        } else if (k.KKM(e, 16400, 55)) {
            r = m = 1;
            k.KO(0, t, "༰");
        } else if (k.KKM(e, 16384, 56)) {
            r = m = 1;
            k.KO(0, t, "༨");
        } else if (k.KKM(e, 16400, 56)) {
            r = m = 1;
            k.KO(0, t, "༱");
        } else if (k.KKM(e, 16384, 57)) {
            r = m = 1;
            k.KO(0, t, "༩");
        } else if (k.KKM(e, 16400, 57)) {
            r = m = 1;
            k.KO(0, t, "༲");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s13)) {
            r = m = 1;
            k.KIO(1, this.s13, 1, t);
            k.KO(-1, t, "​");
        } else if (k.KKM(e, 16384, 65) && k.KA(0, k.KC(1, 1, t), this.s14)) {
            r = m = 1;
            k.KIO(1, this.s14, 1, t);
            k.KO(-1, t, "​");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "འ");
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ཨ");
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "འ");
        } else if (k.KKM(e, 16384, 66) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྤ");
        } else if (k.KKM(e, 16384, 66) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྤ");
        } else if (k.KKM(e, 16384, 66) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "པ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "པ");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "ྋ");
        } else if (k.KKM(e, 16384, 67) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཞ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ཞ");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "༼");
        } else if (k.KKM(e, 16384, 68) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྡ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(2, t, "བླ", 2)) {
            r = m = 1;
            k.KO(2, t, "བལྡ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྡ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྡ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྡ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ད");
        } else if (k.KKM(e, 16400, 68) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཌ");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ད");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ཌ");
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ེ");
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "༙");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྦ");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྦ");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྦ");
        } else if (k.KKM(e, 16384, 70) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "བ");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KO(0, t, "བ");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KO(0, t, "ྃ");
        } else if (k.KKM(e, 16384, 71) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྔ");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྔ");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྔ");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྔ");
        } else if (k.KKM(e, 16384, 71) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ང");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ང");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "྄");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྨ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྨ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "མ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KO(0, t, "མ");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KO(0, t, "༈");
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ི");
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ྀ");
        } else if (k.KKM(e, 16384, 74) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྐ");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྐ");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྐ");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྐ");
        } else if (k.KKM(e, 16384, 74) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཀ");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ཀ");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "༓");
        } else if (k.KKM(e, 16384, 75) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྒ");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྒ");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྒ");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྒ");
        } else if (k.KKM(e, 16384, 75) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ག");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ག");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "༔");
        } else if (k.KKM(e, 16384, 76) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ཀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཀླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ག", 1)) {
            r = m = 1;
            k.KO(1, t, "གླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "བ", 1)) {
            r = m = 1;
            k.KO(1, t, "བླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ཟ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཟླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "པ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "ཤ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ླ");
        } else if (k.KKM(e, 16384, 76) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ལ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ལ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ཾ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ད", 1)) {
            r = m = 1;
            k.KO(1, t, "དྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ག", 1)) {
            r = m = 1;
            k.KO(1, t, "གྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ཌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཌྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ད", 1)) {
            r = m = 1;
            k.KO(1, t, "དྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "བ", 1)) {
            r = m = 1;
            k.KO(1, t, "བྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ཛ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཛྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "ང", 1)) {
            r = m = 1;
            k.KO(1, t, "ངྷ");
        } else if (k.KKM(e, 16384, 77) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཧ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ཧ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "྆");
        } else if (k.KKM(e, 16384, 78) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྣ");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྣ");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྣ");
        } else if (k.KKM(e, 16384, 78) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ན");
        } else if (k.KKM(e, 16400, 78) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཎ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ན");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ཎ");
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ོ");
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "༄");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཕ");
        } else if (k.KKM(e, 16384, 80) && k.KCM(1, t, "ཧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཧྥ");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ཕ");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "༅");
        } else if (k.KKM(e, 16400, 81) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྩ");
        } else if (k.KKM(e, 16400, 81) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྩ");
        } else if (k.KKM(e, 16384, 81) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྕ");
        } else if (k.KKM(e, 16400, 81) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྩ");
        } else if (k.KKM(e, 16400, 81) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཙ");
        } else if (k.KKM(e, 16384, 81) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཅ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KO(0, t, "ཅ");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KO(0, t, "ཙ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྟ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྣ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "བྷ", 2)) {
            r = m = 1;
            k.KO(2, t, "བྷྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྐ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྒ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྤ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྦ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(2, t, "སྨ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཀྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཁ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཁྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ག", 1)) {
            r = m = 1;
            k.KO(1, t, "གྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཏྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཐྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ད", 1)) {
            r = m = 1;
            k.KO(1, t, "དྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "པ", 1)) {
            r = m = 1;
            k.KO(1, t, "པྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཕྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "བ", 1)) {
            r = m = 1;
            k.KO(1, t, "བྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "མ", 1)) {
            r = m = 1;
            k.KO(1, t, "མྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཧྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "ཤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཤྲ");
        } else if (k.KKM(e, 16384, 82) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ར");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "༝", 1)) {
            r = m = 1;
            k.KO(1, t, "༞");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "༞", 1)) {
            r = m = 1;
            k.KO(1, t, "࿏");
        } else if (k.KKM(e, 16400, 82) && k.KCM(1, t, "༚", 1)) {
            r = m = 1;
            k.KO(1, t, "༟");
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ར");
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "༝");
        } else if (k.KKM(e, 16384, 83) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ས");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ས");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ྂ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྟ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(2, t, "བླ", 2)) {
            r = m = 1;
            k.KO(2, t, "བལྟ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྟ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྟ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྟ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཏ");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ཏ");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ཊ");
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ུ");
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "༇");
        } else if (k.KKM(e, 16384, 86) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཁ");
        } else if (k.KKM(e, 16384, 86)) {
            r = m = 1;
            k.KO(0, t, "ཁ");
        } else if (k.KKM(e, 16400, 86)) {
            r = m = 1;
            k.KO(0, t, "༽");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྪ");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྖ");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཚ");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཆ");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ཆ");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "ཚ");
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "ཀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཀྵ");
        } else if (k.KKM(e, 16384, 88) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཤ");
        } else if (k.KKM(e, 16400, 88) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཥ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "ཤ");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "ཥ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(3, t, "བྲཀ", 3)) {
            r = m = 1;
            k.KO(3, t, "བརྐྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(3, t, "བྲག", 3)) {
            r = m = 1;
            k.KO(3, t, "བརྒྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "རྐ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "རྒ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "རྨ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "སྐ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "སྒ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "སྤ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "སྦ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(2, t, "སྨ", 2)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ཀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཀྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ཁ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཁྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ག", 1)) {
            r = m = 1;
            k.KO(1, t, "གྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "པ", 1)) {
            r = m = 1;
            k.KO(1, t, "པྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ཕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཕྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "བ", 1)) {
            r = m = 1;
            k.KO(1, t, "བྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "མ", 1)) {
            r = m = 1;
            k.KO(1, t, "མྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ན", 1)) {
            r = m = 1;
            k.KO(1, t, "ནྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ཨ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཨྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "ཛ", 1)) {
            r = m = 1;
            k.KO(-1, t, "ྱ");
        } else if (k.KKM(e, 16384, 89) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཡ");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "༚", 1)) {
            r = m = 1;
            k.KO(1, t, "༛");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "༛", 1)) {
            r = m = 1;
            k.KO(1, t, "༜");
        } else if (k.KKM(e, 16400, 89) && k.KCM(1, t, "༝", 1)) {
            r = m = 1;
            k.KO(1, t, "࿎");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ཡ");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "༚");
        } else if (k.KKM(e, 16384, 90) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཟ");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KO(0, t, "ཟ");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KO(0, t, "ཿ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "གྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "གྲྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "རྩ", 2)) {
            r = m = 1;
            k.KO(2, t, "རྩྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "དྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "དྲྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(2, t, "ཕྱ", 2)) {
            r = m = 1;
            k.KO(2, t, "ཕྱྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཀ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཀྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཁ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཁྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ག", 1)) {
            r = m = 1;
            k.KO(1, t, "གྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཉྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཏྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ད", 1)) {
            r = m = 1;
            k.KO(1, t, "དྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཚ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཚྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཞ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཞྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཟ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཟྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཤྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ཧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཧྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྭ");
        } else if (k.KKM(e, 16384, 186) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཝ");
        } else if (k.KKM(e, 16384, 186)) {
            r = m = 1;
            k.KO(0, t, "ཝ");
        } else if (k.KKM(e, 16400, 186)) {
            r = m = 1;
            k.KO(0, t, "༖");
        } else if (k.KKM(e, 16384, 187)) {
            r = m = 1;
            k.KO(0, t, "༘");
        } else if (k.KKM(e, 16400, 187)) {
            r = m = 1;
            k.KO(0, t, "ྉ");
        } else if (k.KKM(e, 16384, 188) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཐ");
        } else if (k.KKM(e, 16400, 188) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཋ");
        } else if (k.KKM(e, 16384, 188)) {
            r = m = 1;
            k.KO(0, t, "ཐ");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, "ཋ");
        } else if (k.KKM(e, 16384, 189)) {
            r = m = 1;
            k.KO(0, t, "ྊ");
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, "༹");
        } else if (k.KKM(e, 16400, 190) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྫ");
        } else if (k.KKM(e, 16384, 190) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྗ");
        } else if (k.KKM(e, 16384, 190) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྗ");
        } else if (k.KKM(e, 16400, 190) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྫ");
        } else if (k.KKM(e, 16384, 190) && k.KCM(1, t, "ལ", 1)) {
            r = m = 1;
            k.KO(1, t, "ལྗ");
        } else if (k.KKM(e, 16384, 190) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཇ");
        } else if (k.KKM(e, 16400, 190) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཛ");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, "ཇ");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, "ཛ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(2, t, "བྲ", 2)) {
            r = m = 1;
            k.KO(2, t, "བརྙ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "ར", 1)) {
            r = m = 1;
            k.KO(1, t, "རྙ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "ས", 1)) {
            r = m = 1;
            k.KO(1, t, "སྙ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "ཛ", 1)) {
            r = m = 1;
            k.KO(1, t, "ཛྙ");
        } else if (k.KKM(e, 16384, 191) && k.KCM(1, t, "​", 1)) {
            r = m = 1;
            k.KO(1, t, "ཉ");
        } else if (k.KKM(e, 16384, 191)) {
            r = m = 1;
            k.KO(0, t, "ཉ");
        } else if (k.KKM(e, 16400, 191)) {
            r = m = 1;
            k.KO(0, t, "༒");
        } else if (k.KKM(e, 16384, 219)) {
            r = m = 1;
            k.KO(0, t, "༺");
        } else if (k.KKM(e, 16384, 220)) {
            r = m = 1;
            k.KO(0, t, "༴");
        } else if (k.KKM(e, 16384, 221)) {
            r = m = 1;
            k.KO(0, t, "༻");
        } else if (k.KKM(e, 16384, 256) && k.KCM(1, t, "།", 1)) {
            r = m = 1;
            k.KO(1, t, "༎");
        } else if (k.KKM(e, 16384, 256)) {
            r = m = 1;
            k.KO(0, t, "།");
        } else if (k.KKM(e, 16400, 256)) {
            r = m = 1;
            k.KO(0, t, "༾");
        } else if (k.KKM(e, 16384, 257)) {
            r = m = 1;
            k.KO(0, t, "་");
        } else if (k.KKM(e, 16400, 257)) {
            r = m = 1;
            k.KO(0, t, "༿");
        } else if (k.KKM(e, 16384, 258)) {
            r = m = 1;
            k.KO(0, t, "ྈ");
        } else if (k.KKM(e, 16384, 259)) {
            r = m = 1;
            k.KO(0, t, "྅");
        } else if (k.KKM(e, 16384, 260)) {
            r = m = 1;
            k.KO(0, t, "༷");
        } else if (k.KKM(e, 16384, 261)) {
            r = m = 1;
            k.KO(0, t, "༵");
        } else if (k.KKM(e, 16384, 262)) {
            r = m = 1;
            k.KO(0, t, "༕");
        }
        return r;
    };
}