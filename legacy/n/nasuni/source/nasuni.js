KeymanWeb.KR(new Keyboard_nasuni());

function Keyboard_nasuni() {
    this.KI = "Keyboard_nasuni";
    this.KN = "NaskapiUni (Common)";
    this.KV = {
        F: ' 1em "BJCree UNI"',
        K102: 0,
        BK: new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ᐤ", "ᐃ", "ᕐ", "ᑦ", "ᔾ", "ᐅ", "ᐃ", "ᐅ", "ᑉ", "", "", "", "", "", "", "ᐊ", "ᔅ", "ᑦ", "", "ᒃ", "", "ᒡ", "ᒃ", "ᓪ", "", "ᐟ", "", "", "", "", "", "", "", "᙭", "ᒡ", "", "ᑉ", "ᓐ", "ᒻ", "", "᙮", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", " ", "", "", "", "", "", "ᐤ", "ᐃ", "ᕐ", "ᑦ", "ᔾ", "ᐅ", "ᐃ", "ᐅ", "ᑉ", "", "", "", "", "", "", "ᐊ", "ᔅ", "ᑦ", "", "ᒃ", "", "ᒡ", "ᒃ", "ᓪ", "", "", "", "", "", "", "", "", "", "᙭", "ᒡ", "", "ᑉ", "ᓐ", "ᒻ", "‘", "’", "", "", "", "", "", "", "")
    };
    this.KDU = 0;
    this.KH = '';
    this.KM = 0;
    this.KBVER = "1.1";
    this.KVKL = {
        "tablet": {
            "font": "Tahoma",
            "layer": [{
                "id": "default",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_Q",
                        "text": "q"
                    }, {
                        "id": "K_W",
                        "text": "w"
                    }, {
                        "id": "K_E",
                        "text": "e"
                    }, {
                        "id": "K_R",
                        "text": "r"
                    }, {
                        "id": "K_T",
                        "text": "t"
                    }, {
                        "id": "K_Y",
                        "text": "y"
                    }, {
                        "id": "K_U",
                        "text": "u"
                    }, {
                        "id": "K_I",
                        "text": "i"
                    }, {
                        "id": "K_O",
                        "text": "o"
                    }, {
                        "id": "K_P",
                        "text": "p"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_A",
                        "text": "a",
                        "pad": "70"
                    }, {
                        "id": "K_S",
                        "text": "s"
                    }, {
                        "id": "K_D",
                        "text": "d"
                    }, {
                        "id": "K_F",
                        "text": "f"
                    }, {
                        "id": "K_G",
                        "text": "g"
                    }, {
                        "id": "K_H",
                        "text": "h"
                    }, {
                        "id": "K_J",
                        "text": "j"
                    }, {
                        "id": "K_K",
                        "text": "k"
                    }, {
                        "id": "K_L",
                        "text": "l"
                    }, {
                        "id": "T_new_20",
                        "text": "",
                        "width": "10",
                        "sp": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": "110",
                        "sp": "1",
                        "nextlayer": "shift"
                    }, {
                        "id": "K_Z",
                        "text": "z"
                    }, {
                        "id": "K_X",
                        "text": "x"
                    }, {
                        "id": "K_C",
                        "text": "c"
                    }, {
                        "id": "K_V",
                        "text": "v"
                    }, {
                        "id": "K_B",
                        "text": "b"
                    }, {
                        "id": "K_N",
                        "text": "n"
                    }, {
                        "id": "K_M",
                        "text": "m"
                    }, {
                        "id": "K_PERIOD",
                        "text": ".",
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
                        "width": "90",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_NUMLOCK",
                        "text": "*123*",
                        "width": "140",
                        "sp": "1",
                        "nextlayer": "numeric"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "120",
                        "sp": "1"
                    }, {
                        "id": "K_SPACE",
                        "text": "",
                        "width": "630",
                        "sp": "0"
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "140",
                        "sp": "1"
                    }]
                }]
            }, {
                "id": "shift",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_Q",
                        "text": "Q"
                    }, {
                        "id": "K_W",
                        "text": "W"
                    }, {
                        "id": "K_E",
                        "text": "E"
                    }, {
                        "id": "K_R",
                        "text": "R"
                    }, {
                        "id": "K_T",
                        "text": "T"
                    }, {
                        "id": "K_Y",
                        "text": "Y"
                    }, {
                        "id": "K_U",
                        "text": "U"
                    }, {
                        "id": "K_I",
                        "text": "I"
                    }, {
                        "id": "K_O",
                        "text": "O"
                    }, {
                        "id": "K_P",
                        "text": "P"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_A",
                        "pad": "70",
                        "text": "A"
                    }, {
                        "id": "K_S",
                        "text": "S"
                    }, {
                        "id": "K_D",
                        "text": "D"
                    }, {
                        "id": "K_F",
                        "text": "F"
                    }, {
                        "id": "K_G",
                        "text": "G"
                    }, {
                        "id": "K_H",
                        "text": "H"
                    }, {
                        "id": "K_J",
                        "text": "J"
                    }, {
                        "id": "K_K",
                        "text": "K"
                    }, {
                        "id": "K_L",
                        "text": "L"
                    }, {
                        "sp": "10",
                        "width": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "width": "110",
                        "sp": "2",
                        "nextlayer": "default",
                        "text": "*Shift*"
                    }, {
                        "id": "K_Z",
                        "text": "Z"
                    }, {
                        "id": "K_X",
                        "text": "X"
                    }, {
                        "id": "K_C",
                        "text": "C"
                    }, {
                        "id": "K_V",
                        "text": "V"
                    }, {
                        "id": "K_B",
                        "text": "B"
                    }, {
                        "id": "K_N",
                        "text": "N"
                    }, {
                        "id": "K_M",
                        "text": "M"
                    }, {
                        "id": "K_PERIOD",
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
                        }],
                        "text": "."
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "90",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_NUMLOCK",
                        "text": "*123*",
                        "width": "140",
                        "sp": "1",
                        "nextlayer": "numeric"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "120",
                        "sp": "1"
                    }, {
                        "id": "K_SPACE",
                        "width": "630",
                        "sp": "0",
                        "text": ""
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "140",
                        "sp": "1"
                    }]
                }]
            }, {
                "id": "numeric",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": "1"
                    }, {
                        "id": "K_2",
                        "text": "2"
                    }, {
                        "id": "K_3",
                        "text": "3"
                    }, {
                        "id": "K_4",
                        "text": "4"
                    }, {
                        "id": "K_5",
                        "text": "5"
                    }, {
                        "id": "K_6",
                        "text": "6"
                    }, {
                        "id": "K_7",
                        "text": "7"
                    }, {
                        "id": "K_8",
                        "text": "8"
                    }, {
                        "id": "K_9",
                        "text": "9"
                    }, {
                        "id": "K_0",
                        "text": "0"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_4",
                        "layer": "shift",
                        "pad": "70",
                        "text": "$"
                    }, {
                        "id": "K_2",
                        "layer": "shift",
                        "text": "@"
                    }, {
                        "id": "K_3",
                        "layer": "shift",
                        "text": "#"
                    }, {
                        "id": "K_5",
                        "layer": "shift",
                        "text": "%"
                    }, {
                        "id": "K_7",
                        "layer": "shift",
                        "text": "&"
                    }, {
                        "id": "K_HYPHEN",
                        "layer": "shift",
                        "text": "_"
                    }, {
                        "id": "K_EQUAL",
                        "layer": "default",
                        "text": "="
                    }, {
                        "id": "K_BKSLASH",
                        "layer": "shift",
                        "text": "|"
                    }, {
                        "id": "K_BKSLASH",
                        "layer": "default",
                        "text": "\\"
                    }, {
                        "text": "",
                        "width": "10",
                        "sp": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "width": "110",
                        "sp": "1"
                    }, {
                        "id": "K_LBRKT",
                        "sk": [{
                            "id": "U_00AB",
                            "text": "\u00AB"
                        }, {
                            "id": "K_COMMA",
                            "text": "<",
                            "layer": "shift"
                        }, {
                            "id": "K_LBRKT",
                            "text": "{",
                            "layer": "shift"
                        }],
                        "text": "["
                    }, {
                        "id": "K_9",
                        "layer": "shift",
                        "text": "("
                    }, {
                        "id": "K_0",
                        "layer": "shift",
                        "text": ")"
                    }, {
                        "id": "K_RBRKT",
                        "sk": [{
                            "id": "U_00BB",
                            "text": "\u00BB"
                        }, {
                            "id": "K_PERIOD",
                            "text": ">",
                            "layer": "shift"
                        }, {
                            "id": "K_RBRKT",
                            "text": "}",
                            "layer": "shift"
                        }],
                        "text": "]"
                    }, {
                        "id": "K_EQUAL",
                        "layer": "shift",
                        "text": "+"
                    }, {
                        "id": "K_HYPHEN",
                        "layer": "default",
                        "text": "-"
                    }, {
                        "id": "K_8",
                        "layer": "shift",
                        "text": "*"
                    }, {
                        "id": "K_SLASH",
                        "layer": "default",
                        "text": "\/"
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "width": "90",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_LOWER",
                        "text": "*abc*",
                        "width": "140",
                        "sp": "1",
                        "nextlayer": "default"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "120",
                        "sp": "1"
                    }, {
                        "id": "K_SPACE",
                        "width": "630",
                        "sp": "0",
                        "text": ""
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "140",
                        "sp": "1"
                    }]
                }]
            }]
        },
        "phone": {
            "font": "Tahoma",
            "layer": [{
                "id": "default",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_Q",
                        "text": "q"
                    }, {
                        "id": "K_W",
                        "text": "w"
                    }, {
                        "id": "K_E",
                        "text": "e"
                    }, {
                        "id": "K_R",
                        "text": "r"
                    }, {
                        "id": "K_T",
                        "text": "t"
                    }, {
                        "id": "K_Y",
                        "text": "y"
                    }, {
                        "id": "K_U",
                        "text": "u"
                    }, {
                        "id": "K_I",
                        "text": "i"
                    }, {
                        "id": "K_O",
                        "text": "o"
                    }, {
                        "id": "K_P",
                        "text": "p"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_A",
                        "pad": "50",
                        "text": "a"
                    }, {
                        "id": "K_S",
                        "text": "s"
                    }, {
                        "id": "K_D",
                        "text": "d"
                    }, {
                        "id": "K_F",
                        "text": "f"
                    }, {
                        "id": "K_G",
                        "text": "g"
                    }, {
                        "id": "K_H",
                        "text": "h"
                    }, {
                        "id": "K_J",
                        "text": "j"
                    }, {
                        "id": "K_K",
                        "text": "k"
                    }, {
                        "id": "K_L",
                        "text": "l"
                    }, {
                        "text": "",
                        "width": "10",
                        "sp": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "text": "*Shift*",
                        "sp": "1",
                        "nextlayer": "shift"
                    }, {
                        "id": "K_Z",
                        "text": "z"
                    }, {
                        "id": "K_X",
                        "text": "x"
                    }, {
                        "id": "K_C",
                        "text": "c"
                    }, {
                        "id": "K_V",
                        "text": "v"
                    }, {
                        "id": "K_B",
                        "text": "b"
                    }, {
                        "id": "K_N",
                        "text": "n"
                    }, {
                        "id": "K_M",
                        "text": "m"
                    }, {
                        "id": "K_PERIOD",
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
                        }],
                        "text": "."
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
                        "text": "*123*",
                        "width": "150",
                        "sp": "1",
                        "nextlayer": "numeric"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "120",
                        "sp": "1"
                    }, {
                        "id": "K_SPACE",
                        "width": "610",
                        "sp": "0",
                        "text": ""
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "150",
                        "sp": "1"
                    }]
                }]
            }, {
                "id": "shift",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_Q",
                        "text": "Q"
                    }, {
                        "id": "K_W",
                        "text": "W"
                    }, {
                        "id": "K_E",
                        "text": "E"
                    }, {
                        "id": "K_R",
                        "text": "R"
                    }, {
                        "id": "K_T",
                        "text": "T"
                    }, {
                        "id": "K_Y",
                        "text": "Y"
                    }, {
                        "id": "K_U",
                        "text": "U"
                    }, {
                        "id": "K_I",
                        "text": "I"
                    }, {
                        "id": "K_O",
                        "text": "O"
                    }, {
                        "id": "K_P",
                        "text": "P"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_A",
                        "pad": "50",
                        "text": "A"
                    }, {
                        "id": "K_S",
                        "text": "S"
                    }, {
                        "id": "K_D",
                        "text": "D"
                    }, {
                        "id": "K_F",
                        "text": "F"
                    }, {
                        "id": "K_G",
                        "text": "G"
                    }, {
                        "id": "K_H",
                        "text": "H"
                    }, {
                        "id": "K_J",
                        "text": "J"
                    }, {
                        "id": "K_K",
                        "text": "K"
                    }, {
                        "id": "K_L",
                        "text": "L"
                    }, {
                        "text": "",
                        "width": "10",
                        "sp": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_SHIFT",
                        "sp": "2",
                        "nextlayer": "default",
                        "text": "*Shift*"
                    }, {
                        "id": "K_Z",
                        "text": "Z"
                    }, {
                        "id": "K_X",
                        "text": "X"
                    }, {
                        "id": "K_C",
                        "text": "C"
                    }, {
                        "id": "K_V",
                        "text": "V"
                    }, {
                        "id": "K_B",
                        "text": "B"
                    }, {
                        "id": "K_N",
                        "text": "N"
                    }, {
                        "id": "K_M",
                        "text": "M"
                    }, {
                        "id": "K_PERIOD",
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
                        }],
                        "text": "."
                    }, {
                        "id": "K_BKSP",
                        "text": "*BkSp*",
                        "sp": "1"
                    }]
                }, {
                    "id": 4,
                    "key": [{
                        "id": "K_NUMLOCK",
                        "text": "*123*",
                        "width": "150",
                        "sp": "1",
                        "nextlayer": "numeric"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "120",
                        "sp": "1"
                    }, {
                        "id": "K_SPACE",
                        "width": "610",
                        "sp": "0",
                        "text": ""
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "150",
                        "sp": "1"
                    }]
                }]
            }, {
                "id": "numeric",
                "row": [{
                    "id": 1,
                    "key": [{
                        "id": "K_1",
                        "text": "1"
                    }, {
                        "id": "K_2",
                        "text": "2"
                    }, {
                        "id": "K_3",
                        "text": "3"
                    }, {
                        "id": "K_4",
                        "text": "4"
                    }, {
                        "id": "K_5",
                        "text": "5"
                    }, {
                        "id": "K_6",
                        "text": "6"
                    }, {
                        "id": "K_7",
                        "text": "7"
                    }, {
                        "id": "K_8",
                        "text": "8"
                    }, {
                        "id": "K_9",
                        "text": "9"
                    }, {
                        "id": "K_0",
                        "text": "0"
                    }]
                }, {
                    "id": 2,
                    "key": [{
                        "id": "K_4",
                        "layer": "shift",
                        "pad": "50",
                        "text": "$"
                    }, {
                        "id": "K_2",
                        "layer": "shift",
                        "text": "@"
                    }, {
                        "id": "K_3",
                        "layer": "shift",
                        "text": "#"
                    }, {
                        "id": "K_5",
                        "layer": "shift",
                        "text": "%"
                    }, {
                        "id": "K_6",
                        "layer": "shift",
                        "text": "&"
                    }, {
                        "id": "K_HYPHEN",
                        "layer": "shift",
                        "text": "_"
                    }, {
                        "id": "K_EQUAL",
                        "layer": "default",
                        "text": "="
                    }, {
                        "id": "K_BKSLASH",
                        "layer": "shift",
                        "text": "|"
                    }, {
                        "id": "K_BKSLASH",
                        "layer": "default",
                        "text": "\\"
                    }, {
                        "text": "",
                        "width": "10",
                        "sp": "10"
                    }]
                }, {
                    "id": 3,
                    "key": [{
                        "id": "K_LBRKT",
                        "pad": "110",
                        "sk": [{
                            "id": "U_00AB",
                            "text": "\u00AB"
                        }, {
                            "id": "K_COMMA",
                            "text": "<",
                            "layer": "shift"
                        }, {
                            "id": "K_LBRKT",
                            "text": "{",
                            "layer": "shift"
                        }],
                        "text": "["
                    }, {
                        "id": "K_9",
                        "layer": "shift",
                        "text": "("
                    }, {
                        "id": "K_0",
                        "layer": "shift",
                        "text": ")"
                    }, {
                        "id": "K_RBRKT",
                        "sk": [{
                            "id": "U_00BB",
                            "text": "\u00BB"
                        }, {
                            "id": "K_PERIOD",
                            "text": ">",
                            "layer": "shift"
                        }, {
                            "id": "K_RBRKT",
                            "text": "}",
                            "layer": "shift"
                        }],
                        "text": "]"
                    }, {
                        "id": "K_EQUAL",
                        "layer": "shift",
                        "text": "+"
                    }, {
                        "id": "K_HYPHEN",
                        "text": "-"
                    }, {
                        "id": "K_8",
                        "layer": "shift",
                        "text": "*"
                    }, {
                        "id": "K_SLASH",
                        "text": "\/"
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
                        "text": "*abc*",
                        "width": "150",
                        "sp": "1",
                        "nextlayer": "default"
                    }, {
                        "id": "K_LOPT",
                        "text": "*Menu*",
                        "width": "120",
                        "sp": "1"
                    }, {
                        "id": "K_SPACE",
                        "width": "610",
                        "sp": "0",
                        "text": ""
                    }, {
                        "id": "K_ENTER",
                        "text": "*Enter*",
                        "width": "150",
                        "sp": "1"
                    }]
                }]
            }]
        }
    };
    this.s10 = "iIeE";
    this.s11 = "uUoO";
    this.s12 = "aA";
    this.s13 = "wW";
    this.s14 = "pPbB";
    this.s15 = "tTdD";
    this.s16 = "kKgG";
    this.s17 = "cCjJ";
    this.s18 = "mM";
    this.s19 = "nN";
    this.s20 = "sS";
    this.s21 = "yY";
    this.s22 = "lL";
    this.s23 = "rR";
    this.KVER = "9.0.477.0";
    this.gs = function(t, e) {
        return this.g0(t, e);
    };
    this.g0 = function(t, e) {
        var k = KeymanWeb,
            r = 0,
            m = 0;
        if (k.KKM(e, 16384, 222)) {
            r = m = 1;
            k.KO(0, t, "ᐟ");
        } else if (k.KKM(e, 16384, 190)) {
            r = m = 1;
            k.KO(0, t, "᙮");
        } else if (k.KKM(e, 16400, 188) && k.KCM(1, t, "‘", 1)) {
            r = m = 1;
            k.KO(1, t, "“");
        } else if (k.KKM(e, 16400, 188)) {
            r = m = 1;
            k.KO(0, t, "‘");
        } else if (k.KKM(e, 16384, 187) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ᐦ");
        } else if (k.KKM(e, 16384, 187)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16400, 190) && k.KCM(1, t, "’", 1)) {
            r = m = 1;
            k.KO(1, t, "”");
        } else if (k.KKM(e, 16400, 190)) {
            r = m = 1;
            k.KO(0, t, "’");
        } else if (k.KKM(e, 16400, 65) && k.KCM(3, t, "ᔅᑉᐤ", 3)) {
            r = m = 1;
            k.KO(3, t, "ᔌ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(3, t, "ᔅᑦᐤ", 3)) {
            r = m = 1;
            k.KO(3, t, "ᔍ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(3, t, "ᔅᒡᐤ", 3)) {
            r = m = 1;
            k.KO(3, t, "ᔏ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᑉᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑈ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᑦᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑥ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᒡᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᒠ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᓐᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᓏ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᔅᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᔄ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᔾᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᔽ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᓪᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᐧᓚ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᕐᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᐧᕋ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(2, t, "ᔅᒄ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᔎ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᐊ", 1) && k.KDM(0, t, 2)) {
            r = m = 1;
            k.KO(-1, t, "ᐊ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᐊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐊ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KDM(0, t, 2)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᐤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐛ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᐛ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐛ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐸ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᐸ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐸ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᑈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑈ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑕ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᑕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑕ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᑥ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑥ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑲ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᑲ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑲ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒂ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒂ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒐ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒐ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒠ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒪ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒪ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᒽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒺ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔄ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓇ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᓇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓇ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᓏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓏ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓴ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᓴ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓴ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔄ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔭ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔭ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔭ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔽ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓚ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᓚ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓚ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕋ");
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᕋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕋ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔌ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔍ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔍ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔎ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65) && k.KCM(1, t, "ᔏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔏ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16400, 65)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16400, 66)) {
            r = m = 1;
            k.KO(0, t, "ᑉ");
        } else if (k.KKM(e, 16400, 67)) {
            r = m = 1;
            k.KO(0, t, "ᒡ");
        } else if (k.KKM(e, 16400, 68) && k.KCM(3, t, "ᒡᕆᔅ", 3)) {
            r = m = 1;
            k.KO(3, t, "᙭");
        } else if (k.KKM(e, 16400, 68)) {
            r = m = 1;
            k.KO(0, t, "ᑦ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᐃ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(-1, t, "ᐃ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᐃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐃ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᐤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᐎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᐱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᑎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᑭ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᒋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᒥ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᓂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᓯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᔨ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᓕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
        } else if (k.KKM(e, 16400, 69) && k.KCM(1, t, "ᕆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 69)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16400, 70)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16400, 71) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ᐧᒃ");
        } else if (k.KKM(e, 16400, 71)) {
            r = m = 1;
            k.KO(0, t, "ᒃ");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒡ");
        } else if (k.KKM(e, 16400, 72) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔅ");
        } else if (k.KKM(e, 16400, 72)) {
            r = m = 1;
            k.KDO(0, t, 3);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᐃ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(-1, t, "ᐃ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᐃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐃ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᐤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᐎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᐱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᑎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᑭ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᒋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᒥ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᓂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᓯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᔨ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᓕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
        } else if (k.KKM(e, 16400, 73) && k.KCM(1, t, "ᕆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16400, 73)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16400, 74)) {
            r = m = 1;
            k.KO(0, t, "ᒡ");
        } else if (k.KKM(e, 16400, 75) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ᐧᒃ");
        } else if (k.KKM(e, 16400, 75)) {
            r = m = 1;
            k.KO(0, t, "ᒃ");
        } else if (k.KKM(e, 16400, 76)) {
            r = m = 1;
            k.KO(0, t, "ᓪ");
        } else if (k.KKM(e, 16400, 77)) {
            r = m = 1;
            k.KO(0, t, "ᒻ");
        } else if (k.KKM(e, 16400, 78)) {
            r = m = 1;
            k.KO(0, t, "ᓐ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᐅ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(-1, t, "ᐅ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᐅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐅ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᐳ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᑐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᑯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᒍ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᒧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᓄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᓱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᔪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᓗ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
        } else if (k.KKM(e, 16400, 79) && k.KCM(1, t, "ᕈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 79)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16400, 80)) {
            r = m = 1;
            k.KO(0, t, "ᑉ");
        } else if (k.KKM(e, 16400, 81)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16400, 82)) {
            r = m = 1;
            k.KO(0, t, "ᕐ");
        } else if (k.KKM(e, 16400, 83)) {
            r = m = 1;
            k.KO(0, t, "ᔅ");
        } else if (k.KKM(e, 16400, 84) && k.KCM(3, t, "ᒡᕆᔅ", 3)) {
            r = m = 1;
            k.KO(3, t, "᙭");
        } else if (k.KKM(e, 16400, 84)) {
            r = m = 1;
            k.KO(0, t, "ᑦ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᐅ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(-1, t, "ᐅ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᐅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐅ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᐳ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᑐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᑯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᒍ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᒧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᓄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᓱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᔪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᓗ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
        } else if (k.KKM(e, 16400, 85) && k.KCM(1, t, "ᕈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16400, 85)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒄ");
        } else if (k.KKM(e, 16400, 87) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒽ");
        } else if (k.KKM(e, 16400, 87)) {
            r = m = 1;
            k.KO(0, t, "ᐤ");
        } else if (k.KKM(e, 16400, 88)) {
            r = m = 1;
            k.KO(0, t, "᙭");
        } else if (k.KKM(e, 16400, 89)) {
            r = m = 1;
            k.KO(0, t, "ᔾ");
        } else if (k.KKM(e, 16400, 90)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16400, 189)) {
            r = m = 1;
            k.KO(0, t, " ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(3, t, "ᔅᑉᐤ", 3)) {
            r = m = 1;
            k.KO(3, t, "ᔌ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(3, t, "ᔅᑦᐤ", 3)) {
            r = m = 1;
            k.KO(3, t, "ᔍ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(3, t, "ᔅᒡᐤ", 3)) {
            r = m = 1;
            k.KO(3, t, "ᔏ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᑉᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑈ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᑦᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᑥ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᒡᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᒠ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᓐᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᓏ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᔅᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᔄ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᔾᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᔽ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᓪᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᐧᓚ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᕐᐤ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᐧᕋ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(2, t, "ᔅᒄ", 2)) {
            r = m = 1;
            k.KO(2, t, "ᔎ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐊ", 1) && k.KDM(0, t, 2)) {
            r = m = 1;
            k.KO(-1, t, "ᐊ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐊ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐊ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KDM(0, t, 2)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐛ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐛ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐛ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐸ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᐸ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐸ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᑈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑈ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑕ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᑕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑕ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᑥ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑥ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑲ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᑲ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑲ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒂ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒂ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒐ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒐ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒠ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒠ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒪ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒪ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᒽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒺ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔄ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓇ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᓇ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓇ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᓏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓏ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓴ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᓴ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓴ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔄ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔭ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔭ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔭ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔽ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔽ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓚ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᓚ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓚ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕋ");
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᕋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕋ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔌ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔌ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔍ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔍ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔎ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65) && k.KCM(1, t, "ᔏ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔏ");
            k.KDO(-1, t, 2);
        } else if (k.KKM(e, 16384, 65)) {
            r = m = 1;
            k.KO(0, t, "ᐊ");
        } else if (k.KKM(e, 16384, 66)) {
            r = m = 1;
            k.KO(0, t, "ᑉ");
        } else if (k.KKM(e, 16384, 67)) {
            r = m = 1;
            k.KO(0, t, "ᒡ");
        } else if (k.KKM(e, 16384, 68) && k.KCM(3, t, "ᒡᕆᔅ", 3)) {
            r = m = 1;
            k.KO(3, t, "᙭");
        } else if (k.KKM(e, 16384, 68)) {
            r = m = 1;
            k.KO(0, t, "ᑦ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐃ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(-1, t, "ᐃ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐃ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᐱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᑎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᑭ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᒋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᒥ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᓂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᓯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᔨ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᓕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
        } else if (k.KKM(e, 16384, 69) && k.KCM(1, t, "ᕆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 69)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16384, 70)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16384, 71) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ᐧᒃ");
        } else if (k.KKM(e, 16384, 71)) {
            r = m = 1;
            k.KO(0, t, "ᒃ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒡ");
        } else if (k.KKM(e, 16384, 72) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔅ");
        } else if (k.KKM(e, 16384, 72)) {
            r = m = 1;
            k.KDO(0, t, 3);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐃ", 1) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(-1, t, "ᐃ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐃ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KDM(0, t, 0)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐤ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᐱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐱ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᑎ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑎ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᑭ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑭ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᒋ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒋ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᒥ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒥ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᓂ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓂ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᓯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓯ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᔨ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔨ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᓕ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓕ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
        } else if (k.KKM(e, 16384, 73) && k.KCM(1, t, "ᕆ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕆ");
            k.KDO(-1, t, 0);
        } else if (k.KKM(e, 16384, 73)) {
            r = m = 1;
            k.KO(0, t, "ᐃ");
        } else if (k.KKM(e, 16384, 74)) {
            r = m = 1;
            k.KO(0, t, "ᒡ");
        } else if (k.KKM(e, 16384, 75) && k.KDM(0, t, 3)) {
            r = m = 1;
            k.KO(0, t, "ᐧᒃ");
        } else if (k.KKM(e, 16384, 75)) {
            r = m = 1;
            k.KO(0, t, "ᒃ");
        } else if (k.KKM(e, 16384, 76)) {
            r = m = 1;
            k.KO(0, t, "ᓪ");
        } else if (k.KKM(e, 16384, 77)) {
            r = m = 1;
            k.KO(0, t, "ᒻ");
        } else if (k.KKM(e, 16384, 78)) {
            r = m = 1;
            k.KO(0, t, "ᓐ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᐅ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(-1, t, "ᐅ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᐅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐅ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᐳ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᑐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᑯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᒍ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᒧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᓄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᓱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᔪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᓗ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
        } else if (k.KKM(e, 16384, 79) && k.KCM(1, t, "ᕈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 79)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16384, 80)) {
            r = m = 1;
            k.KO(0, t, "ᑉ");
        } else if (k.KKM(e, 16384, 81)) {
            r = m = 1;
            k.KDO(0, t, 4);
        } else if (k.KKM(e, 16384, 82)) {
            r = m = 1;
            k.KO(0, t, "ᕐ");
        } else if (k.KKM(e, 16384, 83)) {
            r = m = 1;
            k.KO(0, t, "ᔅ");
        } else if (k.KKM(e, 16384, 84) && k.KCM(3, t, "ᒡᕆᔅ", 3)) {
            r = m = 1;
            k.KO(3, t, "᙭");
        } else if (k.KKM(e, 16384, 84)) {
            r = m = 1;
            k.KO(0, t, "ᑦ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᐅ", 1) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(-1, t, "ᐅ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᐅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐅ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KDM(0, t, 1)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᑉ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᐳ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᐳ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᑦ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᑐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑐ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᑯ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᑯ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᒡ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᒍ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒍ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᒧ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒧ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᓐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᓄ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓄ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᔅ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᓱ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓱ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᔾ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᔪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᔪ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᓪ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᓗ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᓗ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᕐ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
        } else if (k.KKM(e, 16384, 85) && k.KCM(1, t, "ᕈ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᕈ");
            k.KDO(-1, t, 1);
        } else if (k.KKM(e, 16384, 85)) {
            r = m = 1;
            k.KO(0, t, "ᐅ");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "ᒃ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒄ");
        } else if (k.KKM(e, 16384, 87) && k.KCM(1, t, "ᒻ", 1)) {
            r = m = 1;
            k.KO(1, t, "ᒽ");
        } else if (k.KKM(e, 16384, 87)) {
            r = m = 1;
            k.KO(0, t, "ᐤ");
        } else if (k.KKM(e, 16384, 88)) {
            r = m = 1;
            k.KO(0, t, "᙭");
        } else if (k.KKM(e, 16384, 89)) {
            r = m = 1;
            k.KO(0, t, "ᔾ");
        } else if (k.KKM(e, 16384, 90)) {
            r = m = 1;
            k.KDO(0, t, 4);
        }
        return r;
    };
}