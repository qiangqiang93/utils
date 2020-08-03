/* 
    判断字符串语言类型，参考
    UniCode编码表 - csguo - 博客园[https://www.cnblogs.com/csguo/p/7401874.html]
*/
export const lang = {
  // 获取单个字符所属的语言类型（详情）
  getLang(s: string): string {
    if (s.length !== 1) {
      console.error("s is not a single character, please use getLangs");
      return "unknow";
    }
    let unicode = s.charCodeAt(0).toString(16).toUpperCase();
    if (unicode.length === 2) unicode = "00" + unicode;
    if (unicode.length === 3) unicode = "0" + unicode;
    if (unicode >= "0000" && unicode <= "007f") {
      return "C0 Control and Basic Latin";
    } else if (unicode >= "0080" && unicode <= "00ff") {
      return "C1 Control and Latin 1 Supplement";
    } else if (unicode >= "0100" && unicode <= "017f") {
      return "Latin Extended-A";
    } else if (unicode >= "0180" && unicode <= "024F") {
      return "Latin Extended-B";
    } else if (unicode >= "0250" && unicode <= "02AF") {
      return "IPA Extensions";
    } else if (unicode >= "02B0" && unicode <= "02FF") {
      return "Spacing Modifiers";
    } else if (unicode >= "0300" && unicode <= "036F") {
      return "Combining Diacritics Marks";
    } else if (unicode >= "0370" && unicode <= "03FF") {
      return "Greek and Coptic";
    } else if (unicode >= "0400" && unicode <= "04FF") {
      return "Cyrillic";
    } else if (unicode >= "0500" && unicode <= "052F") {
      return "Cyrillic Supplement";
    } else if (unicode >= "0530" && unicode <= "058F") {
      return "Armenian";
    } else if (unicode >= "0590" && unicode <= "05FF") {
      return "Hebrew";
    } else if (unicode >= "0600" && unicode <= "06FF") {
      return "Arabic";
    } else if (unicode >= "0700" && unicode <= "074F") {
      return "Syriac";
    } else if (unicode >= "0750" && unicode <= "077F") {
      return "Arabic Supplement";
    } else if (unicode >= "0780" && unicode <= "07BF") {
      return "Thaana";
    } else if (unicode >= "07C0" && unicode <= "077F") {
      return "N'Ko";
    } else if (unicode >= "0800" && unicode <= "085F") {
      return "Avestan and Pahlavi";
    } else if (unicode >= "0860" && unicode <= "087F") {
      return "Mandaic";
    } else if (unicode >= "0880" && unicode <= "08AF") {
      return "Samaritan";
    } else if (unicode >= "0900" && unicode <= "097F") {
      return "Devanagari";
    } else if (unicode >= "0980" && unicode <= "09FF") {
      return "Bengali";
    } else if (unicode >= "0A00" && unicode <= "0A7F") {
      return "Gurmukhi";
    } else if (unicode >= "0A80" && unicode <= "0AFF") {
      return "Gujarati";
    } else if (unicode >= "0B00" && unicode <= "0B7F") {
      return "Oriya";
    } else if (unicode >= "0B80" && unicode <= "0BFF") {
      return "Tamil";
    } else if (unicode >= "0C00" && unicode <= "0C7F") {
      return "Telugu";
    } else if (unicode >= "0C80" && unicode <= "0CFF") {
      return "Kannada";
    } else if (unicode >= "0D00" && unicode <= "0D7F") {
      return "Malayalam";
    } else if (unicode >= "0D80" && unicode <= "0DFF") {
      return "Sinhala";
    } else if (unicode >= "0E00" && unicode <= "0E7F") {
      return "Thai";
    } else if (unicode >= "0E80" && unicode <= "0EFF") {
      return "Lao";
    } else if (unicode >= "0F00" && unicode <= "0FFF") {
      return "Tibetan";
    } else if (unicode >= "1000" && unicode <= "109F") {
      return "Myanmar";
    } else if (unicode >= "10A0" && unicode <= "10FF") {
      return "Georgian";
    } else if (unicode >= "1100" && unicode <= "11FF") {
      return "Hangul Jamo";
    } else if (unicode >= "1200" && unicode <= "137F") {
      return "Ethiopic";
    } else if (unicode >= "1380" && unicode <= "139F") {
      return "Ethiopic Supplement";
    } else if (unicode >= "13A0" && unicode <= "13FF") {
      return "Cherokee";
    } else if (unicode >= "1400" && unicode <= "167F") {
      return "Unified Canadian Aboriginal Syllabics";
    } else if (unicode >= "1680" && unicode <= "169F") {
      return "Ogham";
    } else if (unicode >= "16A0" && unicode <= "16FF") {
      return "Runic";
    } else if (unicode >= "1700" && unicode <= "171F") {
      return "Tagalog";
    } else if (unicode >= "1720" && unicode <= "173F") {
      return "Hanunóo";
    } else if (unicode >= "1740" && unicode <= "175F") {
      return "Buhid";
    } else if (unicode >= "1760" && unicode <= "177F") {
      return "Tagbanwa";
    } else if (unicode >= "1780" && unicode <= "17FF") {
      return "Khmer";
    } else if (unicode >= "1800" && unicode <= "18AF") {
      return "Mongolian";
    } else if (unicode >= "18B0" && unicode <= "18FF") {
      return "Cham";
    } else if (unicode >= "1900" && unicode <= "194F") {
      return "Limbu";
    } else if (unicode >= "1950" && unicode <= "197F") {
      return "Tai Le";
    } else if (unicode >= "1980" && unicode <= "19DF") {
      return "New Tai Lue";
    } else if (unicode >= "19E0" && unicode <= "19FF") {
      return "Kmer Symbols";
    } else if (unicode >= "1A00" && unicode <= "1A1F") {
      return "Buginese";
    } else if (unicode >= "1A20" && unicode <= "1A5F") {
      return "Batak";
    } else if (unicode >= "1A80" && unicode <= "1AEF") {
      return "Lanna";
    } else if (unicode >= "1B00" && unicode <= "1B7F") {
      return "Balinese";
    } else if (unicode >= "1B80" && unicode <= "1BB0") {
      return "Sundanese";
    } else if (unicode >= "1BC0" && unicode <= "1BFF") {
      return "Pahawh Hmong";
    } else if (unicode >= "1C00" && unicode <= "1C4F") {
      return "Lepcha";
    } else if (unicode >= "1C50" && unicode <= "1C7F") {
      return "Ol Chiki";
    } else if (unicode >= "1C80" && unicode <= "1CDF") {
      return "Meithei/Manipuri";
    } else if (unicode >= "1D00" && unicode <= "1D7F") {
      return "Phonetic Extensions";
    } else if (unicode >= "1D80" && unicode <= "1DBF") {
      return "Phonetic Extensions Supplement";
    } else if (unicode >= "1DC0" && unicode <= "1DFF") {
      return "Combining Diacritics Marks Supplement";
    } else if (unicode >= "1E00" && unicode <= "1EFF") {
      return "Latin Extended Additional";
    } else if (unicode >= "1F00" && unicode <= "1FFF") {
      return "Greek Extended";
    } else if (unicode >= "2000" && unicode <= "206F") {
      return "General Punctuation";
    } else if (unicode >= "2070" && unicode <= "209F") {
      return "Superscripts and Subscripts";
    } else if (unicode >= "20A0" && unicode <= "20CF") {
      return "Currency Symbols";
    } else if (unicode >= "20D0" && unicode <= "20FF") {
      return "Combining Diacritics Marks for Symbols";
    } else if (unicode >= "2100" && unicode <= "214F") {
      return "Letterlike Symbols";
    } else if (unicode >= "2150" && unicode <= "218F") {
      return "Number Form";
    } else if (unicode >= "2190" && unicode <= "21FF") {
      return "Arrows";
    } else if (unicode >= "2200" && unicode <= "22FF") {
      return "Mathematical Operator";
    } else if (unicode >= "2300" && unicode <= "23FF") {
      return "Miscellaneous Technical";
    } else if (unicode >= "2400" && unicode <= "243F") {
      return "Control Pictures";
    } else if (unicode >= "2440" && unicode <= "245F") {
      return "Optical Character Recognition";
    } else if (unicode >= "2460" && unicode <= "24FF") {
      return "Enclosed Alphanumerics";
    } else if (unicode >= "2500" && unicode <= "257F") {
      return "Box Drawing";
    } else if (unicode >= "2580" && unicode <= "259F") {
      return "Block Element";
    } else if (unicode >= "25A0" && unicode <= "25FF") {
      return "Geometric Shapes";
    } else if (unicode >= "2600" && unicode <= "26FF") {
      return "Miscellaneous Symbols";
    } else if (unicode >= "2700" && unicode <= "27BF") {
      return "Dingbats";
    } else if (unicode >= "27C0" && unicode <= "27EF") {
      return "Miscellaneous Mathematical Symbols-A";
    } else if (unicode >= "27F0" && unicode <= "27FF") {
      return "Supplemental Arrows-A";
    } else if (unicode >= "2800" && unicode <= "28FF") {
      return "Braille Patterns";
    } else if (unicode >= "2900" && unicode <= "297F") {
      return "Supplemental Arrows-B";
    } else if (unicode >= "2980" && unicode <= "29FF") {
      return "Miscellaneous Mathematical Symbols-B";
    } else if (unicode >= "2A00" && unicode <= "2AFF") {
      return "Supplemental Mathematical Operator";
    } else if (unicode >= "2B00" && unicode <= "2BFF") {
      return "Miscellaneous Symbols and Arrows";
    } else if (unicode >= "2C00" && unicode <= "2C5F") {
      return "Glagolitic";
    } else if (unicode >= "2C60" && unicode <= "2C7F") {
      return "Latin Extended-C";
    } else if (unicode >= "2C80" && unicode <= "2CFF") {
      return "Coptic";
    } else if (unicode >= "2D00" && unicode <= "2D2F") {
      return "Georgian Supplement";
    } else if (unicode >= "2D30" && unicode <= "2D7F") {
      return "Tifinagh";
    } else if (unicode >= "2D80" && unicode <= "2DDF") {
      return "Ethiopic Extended";
    } else if (unicode >= "2E00" && unicode <= "2E7F") {
      return "Supplemental Punctuation";
    } else if (unicode >= "2E80" && unicode <= "2EFF") {
      return "CJK Radicals Supplement";
    } else if (unicode >= "2F00" && unicode <= "2FDF") {
      return "Kangxi Radicals";
    } else if (unicode >= "2FF0" && unicode <= "2FFF") {
      return "Ideographic Description Characters";
    } else if (unicode >= "3000" && unicode <= "303F") {
      return "CJK Symbols and Punctuation";
    } else if (unicode >= "3040" && unicode <= "309F") {
      return "Hiragana";
    } else if (unicode >= "30A0" && unicode <= "30FF") {
      return "Katakana";
    } else if (unicode >= "3100" && unicode <= "312F") {
      return "Bopomofo";
    } else if (unicode >= "3130" && unicode <= "318F") {
      return "Hangul Compatibility Jamo";
    } else if (unicode >= "3190" && unicode <= "319F") {
      return "Kanbun";
    } else if (unicode >= "31A0" && unicode <= "31BF") {
      return "Bopomofo Extended";
    } else if (unicode >= "31C0" && unicode <= "31EF") {
      return "CJK Strokes";
    } else if (unicode >= "31F0" && unicode <= "31FF") {
      return "Katakana Phonetic Extensions";
    } else if (unicode >= "3200" && unicode <= "32FF") {
      return "Enclosed CJK Letters and Months";
    } else if (unicode >= "3300" && unicode <= "33FF") {
      return "CJK Compatibility";
    } else if (unicode >= "3400" && unicode <= "4DBF") {
      return "CJK Unified Ideographs Extension A";
    } else if (unicode >= "4DC0" && unicode <= "4DFF") {
      return "Yijing Hexagrams Symbols";
    } else if (unicode >= "4E00" && unicode <= "9FBF") {
      return "CJK Unified Ideographs";
    } else if (unicode >= "A000" && unicode <= "A48F") {
      return "Yi Syllables";
    } else if (unicode >= "A490" && unicode <= "A4CF") {
      return "Yi Radicals";
    } else if (unicode >= "A500" && unicode <= "A61F") {
      return "Vai";
    } else if (unicode >= "A660" && unicode <= "A6FF") {
      return "Unified Canadian Aboriginal Syllabics Supplement";
    } else if (unicode >= "A700" && unicode <= "A71F") {
      return "Modifier Tone Letters";
    } else if (unicode >= "A720" && unicode <= "A7FF") {
      return "Latin Extended-D";
    } else if (unicode >= "A800" && unicode <= "A82F") {
      return "Syloti Nagri";
    } else if (unicode >= "A840" && unicode <= "A87F") {
      return "Phags-pa";
    } else if (unicode >= "A880" && unicode <= "A8DF") {
      return "Saurashtra";
    } else if (unicode >= "A900" && unicode <= "A97F") {
      return "Javanese";
    } else if (unicode >= "A980" && unicode <= "A9DF") {
      return "Chakma";
    } else if (unicode >= "AA00" && unicode <= "AA3F") {
      return "Varang Kshiti";
    } else if (unicode >= "AA40" && unicode <= "AA6F") {
      return "Sorang Sompeng";
    } else if (unicode >= "AA80" && unicode <= "AADF") {
      return "Newari";
    } else if (unicode >= "AB00" && unicode <= "AB5F") {
      return "Vi?t Thái";
    } else if (unicode >= "AB80" && unicode <= "ABA0") {
      return "Kayah Li";
    } else if (unicode >= "AC00" && unicode <= "D7AF") {
      return "Hangul Syllables";
    } else if (unicode >= "D800" && unicode <= "DBFF") {
      return "High-half zone of UTF-16";
    } else if (unicode >= "DC00" && unicode <= "DFFF") {
      return "Low-half zone of UTF-16";
    } else if (unicode >= "E000" && unicode <= "F8FF") {
      return "Private Use Zone";
    } else if (unicode >= "F900" && unicode <= "FAFF") {
      return "CJK Compatibility Ideographs";
    } else if (unicode >= "FB00" && unicode <= "FB4F") {
      return "Alphabetic Presentation Form";
    } else if (unicode >= "FB50" && unicode <= "FDFF") {
      return "Arabic Presentation Form-A";
    } else if (unicode >= "FE00" && unicode <= "FE0F") {
      return "Variation Selector";
    } else if (unicode >= "FE10" && unicode <= "FE1F") {
      return "Vertical Forms";
    } else if (unicode >= "FE20" && unicode <= "FE2F") {
      return "Combining Half Marks";
    } else if (unicode >= "FE30" && unicode <= "FE4F") {
      return "CJK Compatibility Forms";
    } else if (unicode >= "FE50" && unicode <= "FE6F") {
      return "Small Form Variants";
    } else if (unicode >= "FE70" && unicode <= "FEFF") {
      return "Arabic Presentation Form-B";
    } else if (unicode >= "FF00" && unicode <= "FFEF") {
      return "Halfwidth and Fullwidth Form";
    } else if (unicode >= "FFF0" && unicode <= "FFFF") {
      return "Specials";
    } else {
      return "unknow";
    }
  },
  // 获取字符串中包含的语言类型
  getLangs(str: string): Array<string> {
    let set: Set<string> = new Set();
    for (let p of str) {
      set.add(this.getLang(p));
    }
    return Array.from(set).map((item) => item.split(" ")[0]);
  },
  // 获取字符串中每一个字符的语言类型
  getEachLangs(str: string): Array<string> {
    let arr = [];
    for (let p of str) {
      arr.push(p);
    }
    return arr.map((item) => item.split(" ")[0]);
  },
};
