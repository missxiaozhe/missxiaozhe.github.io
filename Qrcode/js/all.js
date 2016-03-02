jQuery(document).ready(function (a) {
    a("ul.sf-menu").superfish({
        animation: {
            height: "show"
        },
        delay: 400,
        autoArrows: false,
        speed: "normal"
    });
    a(document).mousemove(function (b) {
        if ((b.pageY) < 200) {
            a("#headernav").fadeIn()
        } else {
            a("#headernav").fadeOut()
        }
    })
});

(function (a) {
    a.fn.qrcode = function (p) {
        if (typeof p === "string") {
            p = {
                text: p
            }
        }
        p = a.extend({},
        {
            text: "",
            width: 250,
            height: 250,
            typeNumber: -1,
            correctLevel: QRErrorCorrectLevel.H,
            background: "#ffffff",
            foreground: "#000000",
            jbcol: "#000000",
            jbtype: "x",
            dr: 1,
            old_dr: "no"
        },p);
        var m = function (q) {
            var u = p.foreground;
            var t = p.jbcol;
            var r = p.jbtype;
            q.globalCompositeOperation = "source-in";
            switch (r) {
                case "r":
                    var s = p.width / 2;
                    var v = p.height / 2;
                    var w = s * 0.05;
                    var x = q.createRadialGradient(s, v, w, s, v, s * 1.5);
                    break;
                case "h":
                    var x = q.createLinearGradient(0, 0, 0, p.height);
                    break;
                case "w":
                    var x = q.createLinearGradient(0, 0, p.width, 0);
                    break;
                case "x":
                    var x = q.createLinearGradient(0, 0, p.width, p.height);
                    break;
                case "rx":
                    var x = q.createLinearGradient(p.width, 0, 0, p.height);
                    break
            }
            x.addColorStop(0, u);
            x.addColorStop(1, t);
            q.fillStyle = x;
            q.rect(0, 0, p.width, p.height);
            q.fill()
        };
        var o = function (q) {
            q.globalCompositeOperation = "destination-over";
            q.fillStyle = p.background;
            q.rect(0, 0, p.width, p.height);
            q.fill()
        };
        CanvasRenderingContext2D.prototype.roundRect = function (q, v, s, t, u) {
            this.beginPath();
            if (a.browser.opera) {
                if (p.dr == 0) {
                    this.rect(q, v, s, t);
                    return this
                }
                this.arcTo(q + s, v + u[0], q + s - u[0], v, u[0]);
                this.arcTo(q + u[3], v, q, v + u[3], u[3]);
                this.arcTo(q, v + t - u[2], q + u[2], v + t, u[2]);
                this.arcTo(q + s - u[1], v + t, q + s, v + t - u[1], u[1])
            } else {
                this.moveTo(q + u[0], v);
                this.arcTo(q + s, v, q + s, v + t, u[0]);
                this.arcTo(q + s, v + t, q, v + t, u[1]);
                this.arcTo(q, v + t, q, v, u[2]);
                this.arcTo(q, v, q + s, v, u[3])
            }
            this.closePath();
            return this
        };
        CanvasRenderingContext2D.prototype.droundRectd = function (q, v, s, t, u) {
            this.beginPath();
            if (a.browser.opera) {
                this.moveTo(q + s, v);
                this.arcTo(q + s, v + u[0], q + s - u[0], v, u[0]);
                this.lineTo(q + s, v);
                this.moveTo(q, v);
                this.arcTo(q + u[3], v, q, v + u[3], u[3]);
                this.lineTo(q, v);
                this.moveTo(q, v + t);
                this.arcTo(q, v + t - u[2], q + u[2], v + t, u[2]);
                this.lineTo(q, v + t);
                this.moveTo(q + s, v + t);
                this.arcTo(q + s - u[1], v + t, q + s, v + t - u[1], u[1]);
                this.lineTo(q + s, v + t)
            } else {
                this.moveTo(q + u[0], v);
                this.arcTo(q + s, v, q + s, v + t, u[0]);
                this.lineTo(q + s, v);
                this.moveTo(q + s, v + t - u[1]);
                this.arcTo(q + s, v + t, q, v + t, u[1]);
                this.lineTo(q + s, v + t);
                this.moveTo(q + u[2], v + t);
                this.arcTo(q, v + t, q, v, u[2]);
                this.lineTo(q, v + t);
                this.moveTo(q, v + u[3]);
                this.arcTo(q, v, q + s, v, u[3]);
                this.lineTo(q, v)
            }
            this.closePath();
            return this
        };
        var e = function (t, q, s, u) {
            by_arr = new Array(t, t, t, t);
            if (a.browser.opera) {
                nr = 0.01
            } else {
                nr = 0
            }
            if (q.MyisDark(u - 1, s) || q.MyisDark(u - 1, s - 1) || q.MyisDark(u, s - 1)) {
                by_arr[3] = nr
            }
            if (q.MyisDark(u, s + 1) || q.MyisDark(u - 1, s + 1) || q.MyisDark(u - 1, s)) {
                by_arr[0] = nr
            }
            if (q.MyisDark(u, s + 1) || q.MyisDark(u + 1, s + 1) || q.MyisDark(u + 1, s)) {
                by_arr[1] = nr
            }
            if (q.MyisDark(u + 1, s) || q.MyisDark(u + 1, s - 1) || q.MyisDark(u, s - 1)) {
                by_arr[2] = nr
            }
            return by_arr
        };
        var f = function (t, q, s, u) {
            if (a.browser.opera) {
                nr = 0.01
            } else {
                nr = 0
            }
            by_arr = new Array(nr, nr, nr, nr);
            if (q.MyisDark(u - 1, s) && q.MyisDark(u, s - 1)) {
                by_arr[3] = t
            }
            if (q.MyisDark(u, s + 1) && q.MyisDark(u - 1, s)) {
                by_arr[0] = t
            }
            if (q.MyisDark(u, s + 1) && q.MyisDark(u + 1, s)) {
                by_arr[1] = t
            }
            if (q.MyisDark(u + 1, s) && q.MyisDark(u, s - 1)) {
                by_arr[2] = t
            }
            return by_arr
        };
        var d = function (H, C, z, q, s, G) {
            var E = Array(q, q, q, q);
            var A = C.getModuleCount();
            var J = [[3, 3], [3, A - 4], [A - 4, 3]];
            arr = Array();
            for (D in J) {
                if (z == 1) {
                    arr.push(J[D])
                }
                if (z == 2) {
                    arr.push([J[D][0] - z, J[D][1] - z]);
                    arr.push([J[D][0] + z, J[D][1] + z]);
                    arr.push([J[D][0] - z, J[D][1] + z]);
                    arr.push([J[D][0] + z, J[D][1] - z]);
                    continue
                }
                for (var u = J[D][0] - z; u <= J[D][0] + z; u++) {
                    arr.push([u, J[D][1] - z], [u, J[D][1] + z])
                }
                for (var u = J[D][0] - z + 1; u <= J[D][0] + z - 1; u++) {
                    arr.push([J[D][1] - z, u], [J[D][1] + z, u])
                }
            }
            for (xy in arr) {
                var t = arr[xy][0];
                var I = arr[xy][1];
                var F = (t + 1) * s - (t * s);
                var v = (I + 1) * s - (I * s);
                var D = G + t * s;
                var B = G + I * s;
                if (z == 2) {
                    var E = f(q, C, t, I);
                    H.droundRectd(D, B, F, v, E).fill()
                } else {
                    aaaaa = 10;
                    if (p.dr < 0) {
                        E = e(q, C, t, I)
                    }
                    H.roundRect(D, B, F, v, E).fill()
                }
            }
        };
        var b = function (I, s) {
            var C = Math.floor((p.width) / (s.getModuleCount() + 2));
            var M = Math.floor((p.height) / (s.getModuleCount() + 2));
            var q = Math.round((p.width - C * s.getModuleCount()) / 2);
            var E = Math.round((p.height - M * s.getModuleCount()) / 2);
            if (p.dr < 0) {
                var H = 0 - p.dr
            } else {
                var H = p.dr
            }
            var F = Math.round(C / 2 * H);
            if (F > C / 2) {
                F = Math.round(C / 2)
            }
            if (p.old_dr == "no" && qr_old_dr == F) {
                return
            }
            qr_old_dr = F;
            qr_old_canvas_w = p.width;
            qr_old_qr_w = C * s.getModuleCount();
            var D = Array(F, F, F, F);
            if (validateColor(p.foreground)) {
                I.fillStyle = p.foreground
            } else {
                I.fillStyle = "#000000"
            }
            for (var u = 0; u < s.getModuleCount(); u++) {
                for (var t = 0; t < s.getModuleCount(); t++) {
                    var B = (t + 1) * C - (t * C);
                    var L = (u + 1) * C - (u * C);
                    var A = q + t * C;
                    var z = E + u * M;
                    if (s.isDark(u, t)) {
                        if (p.dr < 0) {
                            D = e(F, s, t, u);
                            I.roundRect(A, z, B, L, D).fill()
                        } else {
                            I.roundRect(A, z, B, L, D).fill()
                        }
                    } else {
                        if (p.dr < 0) {
                            D = f(F, s, t, u);
                            I.droundRectd(A, z, B, L, D).fill()
                        }
                    }
                }
            }
            if (validateColor(p.jbcol) && p.jbtype != "no") {
                m(I)
            }
            if (validateColor(p.dan_w)) {
                I.globalCompositeOperation = "source-over";
                I.fillStyle = p.dan_w;
                d(I, s, 3, F, C, q);
                if (p.dr < 0) {
                    d(I, s, 2, F, C, q)
                }
            }
            if (validateColor(p.dan_l)) {
                I.globalCompositeOperation = "source-over";
                I.fillStyle = p.dan_l;
                d(I, s, 1, F, C, q)
            }
            if (p.icon_src) {
                I.globalCompositeOperation = "source-over";
                var O = new Image();
                O.src = p.icon_src;
                var G = p.width * 0.3;
                var N = p.height * 0.3;
                var v = clacImgZoomParam(G, N, O.width, O.height);
                var K = (p.width - v.width) / 2;
                var J = (p.height - v.height) / 2;
                I.drawImage(O, K, J, v.width, v.height)
            }
        };
        var c = function (t) {
            var r, s, q, u;
            r = "";
            q = t.length;
            for (s = 0; s < q; s++) {
                u = t.charCodeAt(s);
                if ((u >= 1) && (u <= 127)) {
                    r += t.charAt(s)
                } else {
                    if (u > 2047) {
                        r += String.fromCharCode(224 | ((u >> 12) & 15));
                        r += String.fromCharCode(128 | ((u >> 6) & 63));
                        r += String.fromCharCode(128 | ((u >> 0) & 63))
                    } else {
                        r += String.fromCharCode(192 | ((u >> 6) & 31));
                        r += String.fromCharCode(128 | ((u >> 0) & 63))
                    }
                }
            }
            return r
        };
        var h = function () {
            var s = new QRCode(p.typeNumber, p.correctLevel);
            p.text = c(p.text);
            s.addData(p.text);
            s.make();
            var r = document.getElementById("canvas");
            r.width = p.width;
            r.height = p.height;
            var q = r.getContext("2d");
            b(q, s);
            if (validateColor(p.background)) {
                o(q)
            }
        };
        var g = function (q, s, t, u) {
            var r = "http://chart.apis.google.com/chart?chs=" + s + "x" + s + "&cht=qr&choe=UTF-8&chld=" + t + "|" + u + "&chl=" + q + '" alt="QR code" widthHeight="' + s + '" widthHeight="' + s + '"';
            return r
        };
        var n = function () {
            var x = new QRCode(p.typeNumber, p.correctLevel);
            x.addData(p.text);
            x.make();
            var r = document.getElementById("canvas");
            var y = r.getContext("2d");
            y.clearRect(0, 0, p.width, p.height);
            var q = p.width / x.getModuleCount();
            var u = p.height / x.getModuleCount();
            for (var z = 0; z < x.getModuleCount(); z++) {
                for (var s = 0; s < x.getModuleCount(); s++) {
                    y.fillStyle = p.foreground;
                    var v = (Math.ceil((s + 1) * q) - Math.floor(s * q));
                    var t = (Math.ceil((z + 1) * q) - Math.floor(z * q));
                    if (x.isDark(z, s)) {
                        y.fillRect(Math.round(s * q), Math.round(z * u), v, t)
                    }
                }
            }
        };
        var l = function () {
            p.text = c(p.text);
            var q = g(p.text, 500, "H", 1);
            a("#canvas").hide();
            a("#canvas_img").remove();
            a(".qr_300_300").html('<img id="canvas_img" src="' + q + '" width="250" height="250">')
        };
        if (is_no_canvas == "yes") {
            l()
        } else {
            h()
        }
    }
})(jQuery);
var isIE = !!window.ActiveXObject;
var isIE10 = isIE && document.documentMode == 10;
var isIE9 = isIE && document.documentMode == 9;
//var isIE6 = isIE && !window.XMLHttpRequest;
//var isIE8 = isIE && !!document.documentMode;
//var isIE7 = isIE && !isIE6 && !isIE8;
if (isIE) {
    if (isIE9) {
        var is_no_canvas = "no"
    }
    else {
        if (isIE10) {
            var is_no_canvas = "no"
        }
        else {
            var is_no_canvas = "yes"
        }
    }
}
var autoplay = true;
var slideshowSpeed = 9000;
var photos = [{
    image: "App_Themes/Default/Image/bg/grunge.jpg",
    color: "#ffffff"
},
{
    image: "App_Themes/Default/Image/bg/blue.jpg",
    color: "#ffffff"
},
{
    image: "App_Themes/Default/Image/bg/spaces.jpg",
    color: "#000000"
},
{
    image: "App_Themes/Default/Image/bg/twilight.jpg",
    color: "#000000"
},
{
    image: "App_Themes/Default/Image/bg/rainbow.jpg",
    color: "#ffffff"
}];
var imageUrl = "./img/color.png";
var iColorShow_old_col = "";
var iColorShow_old_id = "";
function iColorShow(h, a) {
    iColorShow_old_id = h;
    iColorShow_old_col = jQuery("#" + iColorShow_old_id).val();
    var g = jQuery("#" + a).offset();
    if (($(document).scrollTop() + $(window).height()) < (g.top + 150)) {
        eicp_top = g.top - 210
    } else {
        eicp_top = g.top
    }
    jQuery("#iColorPicker").css({
        top: eicp_top + (jQuery("#" + iColorShow_old_id).outerHeight()) + "px",
        left: (g.left - 200) + "px",
        position: "absolute"
    }).fadeIn("fast");
    jQuery("#iColorPickerBg").css({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }).fadeIn("fast");
    var e = jQuery("#" + iColorShow_old_id).val();
    jQuery("#colorPreview span").text(e);
    jQuery("#colorPreview").css("background", e);
    jQuery("#color").val(e);
    var c = jQuery("#iColorPicker");
    for (i = 0; i < c.length; i++) {
        var f = document.getElementById("hexSection" + i);
        var d = f.childNodes;
        for (j = 0; j < d.length; j++) {
            var b = d[j].childNodes;
            for (k = 0; k < b.length; k++) {
                jQuery(d[j].childNodes[k]).unbind().mouseover(function (l) {
                    var m = "#" + jQuery(this).attr("hx");
                    jQuery("#" + iColorShow_old_id).val(m).css("background", m);
                    jQuery("#colorPreview").css("background", m);
                    jQuery("#colorPreview span").text(m);
                    aotu_darw("")
                }).click(function () {
                    var l = "#" + jQuery(this).attr("hx");
                    jQuery("#" + iColorShow_old_id).val(l).css("background", l);
                    iColorShow_old_id = "";
                    aotu_darw("");
                    jQuery("#iColorPickerBg").hide();
                    jQuery("#iColorPicker").fadeOut();
                    jQuery(this)
                })
            }
        }
    }
}
this.iColorPicker = function () {
    jQuery("input.iColorPicker").each(function (a) {
        if (a == 0) {
            jQuery(document.createElement("div")).attr("id", "iColorPicker").css("display", "none").html('<table class="pickerTable" id="pickerTable0"><thead id="hexSection0"><tr><td style="background:#f00;" hx="f00"></td><td style="background:#ff0" hx="ff0"></td><td style="background:#0f0" hx="0f0"></td><td style="background:#0ff" hx="0ff"></td><td style="background:#00f" hx="00f"></td><td style="background:#f0f" hx="f0f"></td><td style="background:#fff" hx="fff"></td><td style="background:#ebebeb" hx="ebebeb"></td><td style="background:#e1e1e1" hx="e1e1e1"></td><td style="background:#d7d7d7" hx="d7d7d7"></td><td style="background:#cccccc" hx="cccccc"></td><td style="background:#c2c2c2" hx="c2c2c2"></td><td style="background:#b7b7b7" hx="b7b7b7"></td><td style="background:#acacac" hx="acacac"></td><td style="background:#a0a0a0" hx="a0a0a0"></td><td style="background:#959595" hx="959595"></td></tr><tr><td style="background:#ee1d24" hx="ee1d24"></td><td style="background:#fff100" hx="fff100"></td><td style="background:#00a650" hx="00a650"></td><td style="background:#00aeef" hx="00aeef"></td><td style="background:#2f3192" hx="2f3192"></td><td style="background:#ed008c" hx="ed008c"></td><td style="background:#898989" hx="898989"></td><td style="background:#7d7d7d" hx="7d7d7d"></td><td style="background:#707070" hx="707070"></td><td style="background:#626262" hx="626262"></td><td style="background:#555" hx="555"></td><td style="background:#464646" hx="464646"></td><td style="background:#363636" hx="363636"></td><td style="background:#262626" hx="262626"></td><td style="background:#111" hx="111"></td><td style="background:#000" hx="000"></td></tr><tr><td style="background:#f7977a" hx="f7977a"></td><td style="background:#fbad82" hx="fbad82"></td><td style="background:#fdc68c" hx="fdc68c"></td><td style="background:#fff799" hx="fff799"></td><td style="background:#c6df9c" hx="c6df9c"></td><td style="background:#a4d49d" hx="a4d49d"></td><td style="background:#81ca9d" hx="81ca9d"></td><td style="background:#7bcdc9" hx="7bcdc9"></td><td style="background:#6ccff7" hx="6ccff7"></td><td style="background:#7ca6d8" hx="7ca6d8"></td><td style="background:#8293ca" hx="8293ca"></td><td style="background:#8881be" hx="8881be"></td><td style="background:#a286bd" hx="a286bd"></td><td style="background:#bc8cbf" hx="bc8cbf"></td><td style="background:#f49bc1" hx="f49bc1"></td><td style="background:#f5999d" hx="f5999d"></td></tr><tr><td style="background:#f16c4d" hx="f16c4d"></td><td style="background:#f68e54" hx="f68e54"></td><td style="background:#fbaf5a" hx="fbaf5a"></td><td style="background:#fff467" hx="fff467"></td><td style="background:#acd372" hx="acd372"></td><td style="background:#7dc473" hx="7dc473"></td><td style="background:#39b778" hx="39b778"></td><td style="background:#16bcb4" hx="16bcb4"></td><td style="background:#00bff3" hx="00bff3"></td><td style="background:#438ccb" hx="438ccb"></td><td style="background:#5573b7" hx="5573b7"></td><td style="background:#5e5ca7" hx="5e5ca7"></td><td style="background:#855fa8" hx="855fa8"></td><td style="background:#a763a9" hx="a763a9"></td><td style="background:#ef6ea8" hx="ef6ea8"></td><td style="background:#f16d7e" hx="f16d7e"></td></tr><tr><td style="background:#ee1d24" hx="ee1d24"></td><td style="background:#f16522" hx="f16522"></td><td style="background:#f7941d" hx="f7941d"></td><td style="background:#fff100" hx="fff100"></td><td style="background:#8fc63d" hx="8fc63d"></td><td style="background:#37b44a" hx="37b44a"></td><td style="background:#00a650" hx="00a650"></td><td style="background:#00a99e" hx="00a99e"></td><td style="background:#00aeef" hx="00aeef"></td><td style="background:#0072bc" hx="0072bc"></td><td style="background:#0054a5" hx="0054a5"></td><td style="background:#2f3192" hx="2f3192"></td><td style="background:#652c91" hx="652c91"></td><td style="background:#91278f" hx="91278f"></td><td style="background:#ed008c" hx="ed008c"></td><td style="background:#ee105a" hx="ee105a"></td></tr><tr><td style="background:#9d0a0f" hx="9d0a0f"></td><td style="background:#a1410d" hx="a1410d"></td><td style="background:#a36209" hx="a36209"></td><td style="background:#aba000" hx="aba000"></td><td style="background:#588528" hx="588528"></td><td style="background:#197b30" hx="197b30"></td><td style="background:#007236" hx="007236"></td><td style="background:#00736a" hx="00736a"></td><td style="background:#0076a4" hx="0076a4"></td><td style="background:#004a80" hx="004a80"></td><td style="background:#003370" hx="003370"></td><td style="background:#1d1363" hx="1d1363"></td><td style="background:#450e61" hx="450e61"></td><td style="background:#62055f" hx="62055f"></td><td style="background:#9e005c" hx="9e005c"></td><td style="background:#9d0039" hx="9d0039"></td></tr><tr><td style="background:#790000" hx="790000"></td><td style="background:#7b3000" hx="7b3000"></td><td style="background:#7c4900" hx="7c4900"></td><td style="background:#827a00" hx="827a00"></td><td style="background:#3e6617" hx="3e6617"></td><td style="background:#045f20" hx="045f20"></td><td style="background:#005824" hx="005824"></td><td style="background:#005951" hx="005951"></td><td style="background:#005b7e" hx="005b7e"></td><td style="background:#003562" hx="003562"></td><td style="background:#002056" hx="002056"></td><td style="background:#0c004b" hx="0c004b"></td><td style="background:#30004a" hx="30004a"></td><td style="background:#4b0048" hx="4b0048"></td><td style="background:#7a0045" hx="7a0045"></td><td style="background:#7a0026" hx="7a0026"></td></tr></thead><tbody><tr><td style="padding:5px;border:1px solid #000;background:#fff;cursor:pointer;height:60px;-moz-background-clip:-moz-initial;-moz-background-origin:-moz-initial;-moz-background-inline-policy:-moz-initial;" colspan="16" align="center" id="colorPreview"><span style="color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;"></span><a href="javascript:void(null)" style="color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;"> 清除 </a></td></tr></tbody></table><style>#iColorPicker input{margin:2px}</style>').appendTo("body");
            jQuery(document.createElement("div")).attr("id", "iColorPickerBg").click(function () {
                jQuery("#" + iColorShow_old_id).val(iColorShow_old_col).css("background", iColorShow_old_col);
                aotu_darw("");
                jQuery("#iColorPickerBg").hide();
                jQuery("#iColorPicker").fadeOut()
            }).appendTo("body");
            jQuery("#colorPreview a").click(function () {
                jQuery("#" + iColorShow_old_id).val("").css("background", "");
                aotu_darw("");
                iColorShow_old_id = "";
                id = "";
                jQuery("#iColorPickerBg").hide();
                jQuery("#iColorPicker").hide()
            });
            jQuery("table.pickerTable td").css({
                width: "12px",
                height: "14px",
                border: "1px solid #000",
                cursor: "pointer"
            });
            jQuery("#iColorPicker table.pickerTable").css({
                "border-collapse": "collapse"
            });
            jQuery("#iColorPicker").css({
                border: "1px solid #ccc",
                background: "#333",
                padding: "5px",
                color: "#fff",
                "z-index": 9999
            })
        }
        jQuery("#colorPreview").css({
            height: "50px"
        });
        jQuery(this).css("backgroundColor", jQuery(this).val()).after('<a href="javascript:void(null)" id="icp_' + this.id + '" onclick="iColorShow(\'' + this.id + "','icp_" + this.id + '\')"><img src="' + imageUrl + '" style="border:0;margin:0 0 0 3px" align="absmiddle" ></a>')
    })
};
jQuery(function () {
    iColorPicker()
});
jQuery(document).ready(function (f) {
    f("#back").click(function () {
        a();
        d("back")
    });
    f("#next").click(function () {
        a();
        d("next")
    });
    var b;
    f("#control").toggle(function () {
        a()
    },
    function () {
        f(this).css({
            "background-image": "url(App_Themes/Default/Image/slider/btn_pause.png)"
        });
        d("next");
        b = setInterval(function () {
            d("next")
        },
        slideshowSpeed)
    });
    var e = 1;
    var c = 0;
    var l = false;
    var d = function (n) {
        if (l) {
            return
        }
        if (n == "next") {
            c++;
            if (c == photos.length + 1) {
                c = 1
            }
        } else {
            c--;
            if (c == 0) {
                c = photos.length
            }
        }
        var m = e;
        if (e == 1) {
            e = 2
        } else {
            e = 1
        }
        h(photos[c - 1], m, e)
    };
    var g = -1;
    var h = function (n, m, o) {
        l = true;
        g--;
        f("#headerimg" + o).css({
            "background-image": "url(" + n.image + ")",
            display: "block",
            "z-index": g
        });
        f("body").css({
            "background-color": n.color
        });
        f("#headerimg" + m).fadeOut(function () {
            setTimeout(function () {
                l = false
            },
            500)
        })
    };
    var a = function () {
        f("#control").css({
            "background-image": "url(App_Themes/Default/Image/slider/btn_play.png)"
        });
        clearInterval(b)
    };
    d("next");
    if (autoplay) {
        b = setInterval(function () {
            d("next")
        },
        slideshowSpeed)
    }
}); (function (a) {
    a.fn.slides = function (b) {
        b = a.extend({},
        a.fn.slides.option, b);
        return this.each(function () {
            a("." + b.container, a(this)).children().wrapAll('<div class="slides_control"/>');
            var g = a(this),
            v = a(".slides_control", g),
            c = v.children().size(),
            o = v.children().outerWidth(),
            s = v.children().outerHeight(),
            B = b.start - 1,
            t = b.effect.indexOf(",") < 0 ? b.effect : b.effect.replace(" ", "").split(",")[0],
            m = b.effect.indexOf(",") < 0 ? t : b.effect.replace(" ", "").split(",")[1],
            q = 0,
            r = 0,
            aa = 0,
            p = 0,
            h,
            x,
            w,
            e,
            f,
            l,
            u,
            z;
            function A(E, C, D) {
                if (!x && h) {
                    x = true;
                    b.animationStart(p + 1);
                    switch (E) {
                        case "next":
                            r = p;
                            q = p + 1;
                            q = c === q ? 0 : q;
                            e = o * 2;
                            E = -o * 2;
                            p = q;
                            break;
                        case "prev":
                            r = p;
                            q = p - 1;
                            q = q === -1 ? c - 1 : q;
                            e = 0;
                            E = 0;
                            p = q;
                            break;
                        case "pagination":
                            q = parseInt(D, 10);
                            r = a("." + b.paginationClass + " li." + b.currentClass + " a", g).attr("href").match("[^#/]+$");
                            if (q > r) {
                                e = o * 2;
                                E = -o * 2
                            } else {
                                e = 0;
                                E = 0
                            }
                            p = q;
                            break
                    }
                    if (C === "fade") {
                        if (b.crossfade) {
                            v.children(":eq(" + q + ")", g).css({
                                zIndex: 10
                            }).fadeIn(b.fadeSpeed, b.fadeEasing,
                            function () {
                                if (b.autoHeight) {
                                    v.animate({
                                        height: v.children(":eq(" + q + ")", g).outerHeight()
                                    },
                                    b.autoHeightSpeed,
                                    function () {
                                        v.children(":eq(" + r + ")", g).css({
                                            display: "none",
                                            zIndex: 0
                                        });
                                        v.children(":eq(" + q + ")", g).css({
                                            zIndex: 0
                                        });
                                        b.animationComplete(q + 1);
                                        x = false
                                    })
                                } else {
                                    v.children(":eq(" + r + ")", g).css({
                                        display: "none",
                                        zIndex: 0
                                    });
                                    v.children(":eq(" + q + ")", g).css({
                                        zIndex: 0
                                    });
                                    b.animationComplete(q + 1);
                                    x = false
                                }
                            })
                        } else {
                            v.children(":eq(" + r + ")", g).fadeOut(b.fadeSpeed, b.fadeEasing,
                            function () {
                                if (b.autoHeight) {
                                    v.animate({
                                        height: v.children(":eq(" + q + ")", g).outerHeight()
                                    },
                                    b.autoHeightSpeed,
                                    function () {
                                        v.children(":eq(" + q + ")", g).fadeIn(b.fadeSpeed, b.fadeEasing)
                                    })
                                } else {
                                    v.children(":eq(" + q + ")", g).fadeIn(b.fadeSpeed, b.fadeEasing,
                                    function () {
                                        if (a.browser.msie) {
                                            a(this).get(0).style.removeAttribute("filter")
                                        }
                                    })
                                }
                                b.animationComplete(q + 1);
                                x = false
                            })
                        }
                    } else {
                        v.children(":eq(" + q + ")").css({
                            left: e,
                            display: "block"
                        });
                        if (b.autoHeight) {
                            v.animate({
                                left: E,
                                height: v.children(":eq(" + q + ")").outerHeight()
                            },
                            b.slideSpeed, b.slideEasing,
                            function () {
                                v.css({
                                    left: -o
                                });
                                v.children(":eq(" + q + ")").css({
                                    left: o,
                                    zIndex: 5
                                });
                                v.children(":eq(" + r + ")").css({
                                    left: o,
                                    display: "none",
                                    zIndex: 0
                                });
                                b.animationComplete(q + 1);
                                x = false
                            })
                        } else {
                            v.animate({
                                left: E
                            },
                            b.slideSpeed, b.slideEasing,
                            function () {
                                v.css({
                                    left: -o
                                });
                                v.children(":eq(" + q + ")").css({
                                    left: o,
                                    zIndex: 5
                                });
                                v.children(":eq(" + r + ")").css({
                                    left: o,
                                    display: "none",
                                    zIndex: 0
                                });
                                b.animationComplete(q + 1);
                                x = false
                            })
                        }
                    }
                    if (b.pagination) {
                        a("." + b.paginationClass + " li." + b.currentClass, g).removeClass(b.currentClass);
                        a("." + b.paginationClass + " li:eq(" + q + ")", g).addClass(b.currentClass)
                    }
                }
            }
            function n() {
                clearInterval(g.data("interval"))
            }
            function y() {
                if (b.pause) {
                    clearTimeout(g.data("pause"));
                    clearInterval(g.data("interval"));
                    u = setTimeout(function () {
                        clearTimeout(g.data("pause"));
                        z = setInterval(function () {
                            A("next", t)
                        },
                        b.play);
                        g.data("interval", z)
                    },
                    b.pause);
                    g.data("pause", u)
                } else {
                    n()
                }
            }
            if (c < 2) {
                return
            }
            if (B < 0) {
                B = 0
            }
            if (B > c) {
                B = c - 1
            }
            if (b.start) {
                p = B
            }
            if (b.randomize) {
                v.randomize()
            }
            a("." + b.container, g).css({
                overflow: "hidden",
                position: "relative"
            });
            v.children().css({
                position: "absolute",
                top: 0,
                left: v.children().outerWidth(),
                zIndex: 0,
                display: "none"
            });
            v.css({
                position: "relative",
                width: (o * 3),
                height: s,
                left: -o
            });
            a("." + b.container, g).css({
                display: "block"
            });
            if (b.autoHeight) {
                v.children().css({
                    height: "auto"
                });
                v.animate({
                    height: v.children(":eq(" + B + ")").outerHeight()
                },
                b.autoHeightSpeed)
            }
            if (b.preload && v.find("img:eq(" + B + ")").length) {
                a("." + b.container, g).css({
                    background: "url(" + b.preloadImage + ") no-repeat 50% 50%"
                });
                var d = v.find("img:eq(" + B + ")").attr("src") + "?" + (new Date()).getTime();
                if (a("img", g).parent().attr("class") != "slides_control") {
                    l = v.children(":eq(0)")[0].tagName.toLowerCase()
                } else {
                    l = v.find("img:eq(" + B + ")")
                }
                v.find("img:eq(" + B + ")").attr("src", d).load(function () {
                    v.find(l + ":eq(" + B + ")").fadeIn(b.fadeSpeed, b.fadeEasing,
                    function () {
                        a(this).css({
                            zIndex: 5
                        });
                        a("." + b.container, g).css({
                            background: ""
                        });
                        h = true;
                        b.slidesLoaded()
                    })
                })
            } else {
                v.children(":eq(" + B + ")").fadeIn(b.fadeSpeed, b.fadeEasing,
                function () {
                    h = true;
                    b.slidesLoaded()
                })
            }
            if (b.bigTarget) {
                v.children().css({
                    cursor: "pointer"
                });
                v.children().click(function () {
                    A("next", t);
                    return false
                })
            }
            if (b.hoverPause && b.play) {
                v.bind("mouseover",
                function () {
                    n()
                });
                v.bind("mouseleave",
                function () {
                    y()
                })
            }
            if (b.generateNextPrev) {
                a("." + b.container, g).after('<a href="#" class="' + b.prev + '">Prev</a>');
                a("." + b.prev, g).after('<a href="#" class="' + b.next + '">Next</a>')
            }
            a("." + b.next, g).click(function (C) {
                C.preventDefault();
                if (b.play) {
                    y()
                }
                A("next", t)
            });
            a("." + b.prev, g).click(function (C) {
                C.preventDefault();
                if (b.play) {
                    y()
                }
                A("prev", t)
            });
            if (b.generatePagination) {
                if (b.prependPagination) {
                    g.prepend("<ul class=" + b.paginationClass + "></ul>")
                } else {
                    g.append("<ul class=" + b.paginationClass + "></ul>")
                }
                v.children().each(function () {
                    a("." + b.paginationClass, g).append('<li><a href="#' + aa + '">' + (aa + 1) + "</a></li>");
                    aa++
                })
            } else {
                a("." + b.paginationClass + " li a", g).each(function () {
                    a(this).attr("href", "#" + aa);
                    aa++
                })
            }
            a("." + b.paginationClass + " li:eq(" + B + ")", g).addClass(b.currentClass);
            a("." + b.paginationClass + " li a", g).click(function () {
                if (b.play) {
                    y()
                }
                w = a(this).attr("href").match("[^#/]+$");
                if (p != w) {
                    A("pagination", m, w)
                }
                return false
            });
            a("a.link", g).click(function () {
                if (b.play) {
                    y()
                }
                w = a(this).attr("href").match("[^#/]+$") - 1;
                if (p != w) {
                    A("pagination", m, w)
                }
                return false
            });
            if (b.play) {
                z = setInterval(function () {
                    A("next", t)
                },
                b.play);
                g.data("interval", z)
            }
        })
    };
    a.fn.slides.option = {
        preload: false,
        preloadImage: "App_Themes/Default/Image/loading.gif",
        container: "slides_container",
        generateNextPrev: false,
        next: "next",
        prev: "prev",
        pagination: true,
        generatePagination: true,
        prependPagination: false,
        paginationClass: "pagination",
        currentClass: "current",
        fadeSpeed: 350,
        fadeEasing: "",
        slideSpeed: 350,
        slideEasing: "",
        start: 1,
        effect: "slide",
        crossfade: false,
        randomize: false,
        play: 0,
        pause: 0,
        hoverPause: false,
        autoHeight: false,
        autoHeightSpeed: 350,
        bigTarget: false,
        animationStart: function () { },
        animationComplete: function () { },
        slidesLoaded: function () { }
    };
    a.fn.randomize = function (b) {
        function c() {
            return (Math.round(Math.random()) - 0.5)
        }
        return (a(this).each(function () {
            var e = a(this);
            var f = e.children();
            var g = f.length;
            if (g > 1) {
                f.hide();
                var d = [];
                for (i = 0; i < g; i++) {
                    d[d.length] = i
                }
                d = d.sort(c);
                a.each(d,
                function (m, n) {
                    var h = f.eq(n);
                    var l = h.clone(true);
                    l.show().appendTo(e);
                    if (b !== undefined) {
                        b(h, l)
                    }
                    h.remove()
                })
            }
        }))
    }
})(jQuery); (function (a) {
    a.fn.hoverIntent = function (n, m) {
        var o = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        o = a.extend(o, m ? {
            over: n,
            out: m
        } : n);
        var q, p, h, d;
        var e = function (f) {
            q = f.pageX;
            p = f.pageY
        };
        var c = function (g, f) {
            f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
            if ((Math.abs(h - q) + Math.abs(d - p)) < o.sensitivity) {
                a(f).unbind("mousemove", e);
                f.hoverIntent_s = 1;
                return o.over.apply(f, [g])
            } else {
                h = q;
                d = p;
                f.hoverIntent_t = setTimeout(function () {
                    c(g, f)
                },
                o.interval)
            }
        };
        var l = function (g, f) {
            f.hoverIntent_t = clearTimeout(f.hoverIntent_t);
            f.hoverIntent_s = 0;
            return o.out.apply(f, [g])
        };
        var b = function (s) {
            var r = (s.type == "mouseover" ? s.fromElement : s.toElement) || s.relatedTarget;
            while (r && r != this) {
                try {
                    r = r.parentNode
                } catch (s) {
                    r = this
                }
            }
            if (r == this) {
                return false
            }
            var g = jQuery.extend({},
            s);
            var f = this;
            if (f.hoverIntent_t) {
                f.hoverIntent_t = clearTimeout(f.hoverIntent_t)
            }
            if (s.type == "mouseover") {
                h = g.pageX;
                d = g.pageY;
                a(f).bind("mousemove", e);
                if (f.hoverIntent_s != 1) {
                    f.hoverIntent_t = setTimeout(function () {
                        c(g, f)
                    },
                    o.interval)
                }
            } else {
                a(f).unbind("mousemove", e);
                if (f.hoverIntent_s == 1) {
                    f.hoverIntent_t = setTimeout(function () {
                        l(g, f)
                    },
                    o.timeout)
                }
            }
        };
        return this.mouseover(b).mouseout(b)
    }
})(jQuery); (function (b) {
    b.fn.superfish = function (n) {
        var g = b.fn.superfish,
        m = g.c,
        f = b(['<span class="', m.arrowClass, '"> &#187;</span>'].join("")),
        l = function () {
            var c = b(this),
            o = d(c);
            clearTimeout(o.sfTimer);
            c.showSuperfishUl().siblings().hideSuperfishUl()
        },
        e = function () {
            var c = b(this),
            q = d(c),
            p = g.op;
            clearTimeout(q.sfTimer);
            q.sfTimer = setTimeout(function () {
                p.retainPath = (b.inArray(c[0], p.$path) > -1);
                c.hideSuperfishUl();
                if (p.$path.length && c.parents(["li.", p.hoverClass].join("")).length < 1) {
                    l.call(p.$path)
                }
            },
            p.delay)
        },
        d = function (c) {
            var o = c.parents(["ul.", m.menuClass, ":first"].join(""))[0];
            g.op = g.o[o.serial];
            return o
        },
        h = function (c) {
            c.addClass(m.anchorClass).append(f.clone())
        };
        return this.each(function () {
            var c = this.serial = g.o.length;
            var q = b.extend({},
            g.defaults, n);
            q.$path = b("li." + q.pathClass, this).slice(0, q.pathLevels).each(function () {
                b(this).addClass([q.hoverClass, m.bcClass].join(" ")).filter("li:has(ul)").removeClass(q.pathClass)
            });
            g.o[c] = g.op = q;
            b("li:has(ul)", this)[(b.fn.hoverIntent && !q.disableHI) ? "hoverIntent" : "hover"](l, e).each(function () {
                if (q.autoArrows) {
                    h(b(">a:first-child", this))
                }
            }).not("." + m.bcClass).hideSuperfishUl();
            var p = b("a", this);
            p.each(function (o) {
                var r = p.eq(o).parents("li");
                p.eq(o).focus(function () {
                    l.call(r)
                }).blur(function () {
                    e.call(r)
                })
            });
            q.onInit.call(this)
        }).each(function () {
            var c = [m.menuClass];
            if (g.op.dropShadows && !(b.browser.msie && b.browser.version < 7)) {
                c.push(m.shadowClass)
            }
            b(this).addClass(c.join(" "))
        })
    };
    var a = b.fn.superfish;
    a.o = [];
    a.op = {};
    a.IE7fix = function () {
        var c = a.op;
        if (b.browser.msie && b.browser.version > 6 && c.dropShadows && c.animation.opacity != undefined) {
            this.toggleClass(a.c.shadowClass + "-off")
        }
    };
    a.c = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        arrowClass: "sf-sub-indicator",
        shadowClass: "sf-shadow"
    };
    a.defaults = {
        hoverClass: "sfHover",
        pathClass: "overideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        speed: "normal",
        autoArrows: true,
        dropShadows: true,
        disableHI: false,
        onInit: function () { },
        onBeforeShow: function () { },
        onShow: function () { },
        onHide: function () { }
    };
    b.fn.extend({
        hideSuperfishUl: function () {
            var e = a.op,
            d = (e.retainPath === true) ? e.$path : "";
            e.retainPath = false;
            var c = b(["li.", e.hoverClass].join(""), this).add(this).not(d).removeClass(e.hoverClass).find(">ul").hide().css("visibility", "hidden");
            e.onHide.call(c);
            return this
        },
        showSuperfishUl: function () {
            var e = a.op,
            d = a.c.shadowClass + "-off",
            c = this.addClass(e.hoverClass).find(">ul:hidden").css("visibility", "visible");
            a.IE7fix.call(c);
            e.onBeforeShow.call(c);
            c.animate(e.animation, e.speed,
            function () {
                a.IE7fix.call(c);
                e.onShow.call(c)
            });
            return this
        }
    })
})(jQuery); (function (a) {
    a.fn.supersubs = function (b) {
        var c = a.extend({},
        a.fn.supersubs.defaults, b);
        return this.each(function () {
            var d = a(this);
            var e = a.meta ? a.extend({},
            c, d.data()) : c;
            var f = a('<li id="menu-fontsize">&#8212;</li>').css({
                padding: 0,
                position: "absolute",
                top: "-999em",
                width: "auto"
            }).appendTo(d).width();
            a("#menu-fontsize").remove();
            $ULs = d.find("ul");
            $ULs.each(function (n) {
                var m = $ULs.eq(n);
                var l = m.children();
                var g = l.children("a");
                var o = l.css("white-space", "nowrap").css("float");
                var h = m.add(l).add(g).css({
                    "float": "none",
                    width: "auto"
                }).end().end()[0].clientWidth / f;
                h += e.extraWidth;
                if (h > e.maxWidth) {
                    h = e.maxWidth
                } else {
                    if (h < e.minWidth) {
                        h = e.minWidth
                    }
                }
                h += "em";
                m.css("width", h);
                l.css({
                    "float": o,
                    width: "100%",
                    "white-space": "normal"
                }).each(function () {
                    var q = a(">ul", this);
                    var p = q.css("left") !== undefined ? "left" : "right";
                    q.css(p, h)
                })
            })
        })
    };
    a.fn.supersubs.defaults = {
        minWidth: 9,
        maxWidth: 25,
        extraWidth: 0
    }
})(jQuery);
function QR8bitByte(a) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = a
}
QR8bitByte.prototype = {
    getLength: function (a) {
        return this.data.length
    },
    write: function (a) {
        for (var b = 0; b < this.data.length; b++) {
            a.put(this.data.charCodeAt(b), 8)
        }
    }
};
function QRCode(b, a) {
    this.typeNumber = b;
    this.errorCorrectLevel = a;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = new Array()
}
QRCode.prototype = {
    addData: function (b) {
        var a = new QR8bitByte(b);
        this.dataList.push(a);
        this.dataCache = null
    },
    isDark: function (b, a) {
        if (b < 0 || this.moduleCount <= b || a < 0 || this.moduleCount <= a) {
            throw new Error(b + "," + a)
        }
        return this.modules[b][a]
    },
    MyisDark: function (b, a) {
        if (b < 0 || this.moduleCount <= b || a < 0 || this.moduleCount <= a) {
            return false
        }
        return this.modules[b][a]
    },
    getModuleCount: function () {
        return this.moduleCount
    },
    make: function () {
        if (this.typeNumber < 1) {
            var f = 1;
            for (f = 1; f < 40; f++) {
                var b = QRRSBlock.getRSBlocks(f, this.errorCorrectLevel);
                var a = new QRBitBuffer();
                var d = 0;
                for (var c = 0; c < b.length; c++) {
                    d += b[c].dataCount
                }
                for (var c = 0; c < this.dataList.length; c++) {
                    var e = this.dataList[c];
                    a.put(e.mode, 4);
                    a.put(e.getLength(), QRUtil.getLengthInBits(e.mode, f));
                    e.write(a)
                }
                if (a.getLengthInBits() <= d * 8) {
                    break
                }
            }
            this.typeNumber = f
        }
        this.makeImpl(false, this.getBestMaskPattern())
    },
    makeImpl: function (d, c) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for (var b = 0; b < this.moduleCount; b++) {
            this.modules[b] = new Array(this.moduleCount);
            for (var a = 0; a < this.moduleCount; a++) {
                this.modules[b][a] = null
            }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(d, c);
        if (this.typeNumber >= 7) {
            this.setupTypeNumber(d)
        }
        if (this.dataCache == null) {
            this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)
        }
        this.mapData(this.dataCache, c)
    },
    setupPositionProbePattern: function (d, a) {
        for (var b = -1; b <= 7; b++) {
            if (d + b <= -1 || this.moduleCount <= d + b) {
                continue
            }
            for (var e = -1; e <= 7; e++) {
                if (a + e <= -1 || this.moduleCount <= a + e) {
                    continue
                }
                if ((0 <= b && b <= 6 && (e == 0 || e == 6)) || (0 <= e && e <= 6 && (b == 0 || b == 6)) || (2 <= b && b <= 4 && 2 <= e && e <= 4)) {
                    this.modules[d + b][a + e] = true
                } else {
                    this.modules[d + b][a + e] = false
                }
            }
        }
    },
    getBestMaskPattern: function () {
        var d = 0;
        var c = 0;
        for (var b = 0; b < 8; b++) {
            this.makeImpl(true, b);
            var a = QRUtil.getLostPoint(this);
            if (b == 0 || d > a) {
                d = a;
                c = b
            }
        }
        return c
    },
    createMovieClip: function (e, a, c) {
        var l = e.createEmptyMovieClip(a, c);
        var d = 1;
        this.make();
        for (var m = 0; m < this.modules.length; m++) {
            var g = m * d;
            for (var b = 0; b < this.modules[m].length; b++) {
                var h = b * d;
                var f = this.modules[m][b];
                if (f) {
                    l.beginFill(0, 100);
                    l.moveTo(h, g);
                    l.lineTo(h + d, g);
                    l.lineTo(h + d, g + d);
                    l.lineTo(h, g + d);
                    l.endFill()
                }
            }
        }
        return l
    },
    setupTimingPattern: function () {
        for (var a = 8; a < this.moduleCount - 8; a++) {
            if (this.modules[a][6] != null) {
                continue
            }
            this.modules[a][6] = (a % 2 == 0)
        }
        for (var b = 8; b < this.moduleCount - 8; b++) {
            if (this.modules[6][b] != null) {
                continue
            }
            this.modules[6][b] = (b % 2 == 0)
        }
    },
    setupPositionAdjustPattern: function () {
        var h = QRUtil.getPatternPosition(this.typeNumber);
        for (var d = 0; d < h.length; d++) {
            for (var b = 0; b < h.length; b++) {
                var f = h[d];
                var a = h[b];
                if (this.modules[f][a] != null) {
                    continue
                }
                for (var e = -2; e <= 2; e++) {
                    for (var g = -2; g <= 2; g++) {
                        if (e == -2 || e == 2 || g == -2 || g == 2 || (e == 0 && g == 0)) {
                            this.modules[f + e][a + g] = true
                        } else {
                            this.modules[f + e][a + g] = false
                        }
                    }
                }
            }
        }
    },
    setupTypeNumber: function (d) {
        var c = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (var b = 0; b < 18; b++) {
            var a = (!d && ((c >> b) & 1) == 1);
            this.modules[Math.floor(b / 3)][b % 3 + this.moduleCount - 8 - 3] = a
        }
        for (var b = 0; b < 18; b++) {
            var a = (!d && ((c >> b) & 1) == 1);
            this.modules[b % 3 + this.moduleCount - 8 - 3][Math.floor(b / 3)] = a
        }
    },
    setupTypeInfo: function (f, e) {
        var d = (this.errorCorrectLevel << 3) | e;
        var c = QRUtil.getBCHTypeInfo(d);
        for (var b = 0; b < 15; b++) {
            var a = (!f && ((c >> b) & 1) == 1);
            if (b < 6) {
                this.modules[b][8] = a
            } else {
                if (b < 8) {
                    this.modules[b + 1][8] = a
                } else {
                    this.modules[this.moduleCount - 15 + b][8] = a
                }
            }
        }
        for (var b = 0; b < 15; b++) {
            var a = (!f && ((c >> b) & 1) == 1);
            if (b < 8) {
                this.modules[8][this.moduleCount - b - 1] = a
            } else {
                if (b < 9) {
                    this.modules[8][15 - b - 1 + 1] = a
                } else {
                    this.modules[8][15 - b - 1] = a
                }
            }
        }
        this.modules[this.moduleCount - 8][8] = (!f)
    },
    mapData: function (g, b) {
        var e = -1;
        var n = this.moduleCount - 1;
        var f = 7;
        var a = 0;
        for (var d = this.moduleCount - 1; d > 0; d -= 2) {
            if (d == 6) {
                d--
            }
            while (true) {
                for (var l = 0; l < 2; l++) {
                    if (this.modules[n][d - l] == null) {
                        var h = false;
                        if (a < g.length) {
                            h = (((g[a] >>> f) & 1) == 1)
                        }
                        var m = QRUtil.getMask(b, n, d - l);
                        if (m) {
                            h = !h
                        }
                        this.modules[n][d - l] = h;
                        f--;
                        if (f == -1) {
                            a++;
                            f = 7
                        }
                    }
                }
                n += e;
                if (n < 0 || this.moduleCount <= n) {
                    n -= e;
                    e = -e;
                    break
                }
            }
        }
    }
};
QRCode.PAD0 = 236;
QRCode.PAD1 = 17;
QRCode.createData = function (h, g, d) {
    var b = QRRSBlock.getRSBlocks(h, g);
    var a = new QRBitBuffer();
    for (var c = 0; c < d.length; c++) {
        var f = d[c];
        a.put(f.mode, 4);
        a.put(f.getLength(), QRUtil.getLengthInBits(f.mode, h));
        f.write(a)
    }
    var e = 0;
    for (var c = 0; c < b.length; c++) {
        e += b[c].dataCount
    }
    if (a.getLengthInBits() > e * 8) {
        throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + e * 8 + ")")
    }
    if (a.getLengthInBits() + 4 <= e * 8) {
        a.put(0, 4)
    }
    while (a.getLengthInBits() % 8 != 0) {
        a.putBit(false)
    }
    while (true) {
        if (a.getLengthInBits() >= e * 8) {
            break
        }
        a.put(QRCode.PAD0, 8);
        if (a.getLengthInBits() >= e * 8) {
            break
        }
        a.put(QRCode.PAD1, 8)
    }
    return QRCode.createBytes(a, b)
};
QRCode.createBytes = function (n, q) {
    var c = 0;
    var u = 0;
    var s = 0;
    var b = new Array(q.length);
    var f = new Array(q.length);
    for (var l = 0; l < q.length; l++) {
        var m = q[l].dataCount;
        var a = q[l].totalCount - m;
        u = Math.max(u, m);
        s = Math.max(s, a);
        b[l] = new Array(m);
        for (var o = 0; o < b[l].length; o++) {
            b[l][o] = 255 & n.buffer[o + c]
        }
        c += m;
        var g = QRUtil.getErrorCorrectPolynomial(a);
        var t = new QRPolynomial(b[l], g.getLength() - 1);
        var d = t.mod(g);
        f[l] = new Array(g.getLength() - 1);
        for (var o = 0; o < f[l].length; o++) {
            var h = o + d.getLength() - f[l].length;
            f[l][o] = (h >= 0) ? d.get(h) : 0
        }
    }
    var p = 0;
    for (var o = 0; o < q.length; o++) {
        p += q[o].totalCount
    }
    var v = new Array(p);
    var e = 0;
    for (var o = 0; o < u; o++) {
        for (var l = 0; l < q.length; l++) {
            if (o < b[l].length) {
                v[e++] = b[l][o]
            }
        }
    }
    for (var o = 0; o < s; o++) {
        for (var l = 0; l < q.length; l++) {
            if (o < f[l].length) {
                v[e++] = f[l][o]
            }
        }
    }
    return v
};
var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
};
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
var QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
    getBCHTypeInfo: function (a) {
        var b = a << 10;
        while (QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            b ^= (QRUtil.G15 << (QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15)))
        }
        return ((a << 10) | b) ^ QRUtil.G15_MASK
    },
    getBCHTypeNumber: function (a) {
        var b = a << 12;
        while (QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            b ^= (QRUtil.G18 << (QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18)))
        }
        return (a << 12) | b
    },
    getBCHDigit: function (a) {
        var b = 0;
        while (a != 0) {
            b++;
            a >>>= 1
        }
        return b
    },
    getPatternPosition: function (a) {
        return QRUtil.PATTERN_POSITION_TABLE[a - 1]
    },
    getMask: function (c, b, a) {
        switch (c) {
            case QRMaskPattern.PATTERN000:
                return (b + a) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return b % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return a % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (b + a) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(b / 2) + Math.floor(a / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return (b * a) % 2 + (b * a) % 3 == 0;
            case QRMaskPattern.PATTERN110:
                return ((b * a) % 2 + (b * a) % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return ((b * a) % 3 + (b + a) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + c)
        }
    },
    getErrorCorrectPolynomial: function (c) {
        var b = new QRPolynomial([1], 0);
        for (var d = 0; d < c; d++) {
            b = b.multiply(new QRPolynomial([1, QRMath.gexp(d)], 0))
        }
        return b
    },
    getLengthInBits: function (b, a) {
        if (1 <= a && a < 10) {
            switch (b) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + b)
            }
        } else {
            if (a < 27) {
                switch (b) {
                    case QRMode.MODE_NUMBER:
                        return 12;
                    case QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + b)
                }
            } else {
                if (a < 41) {
                    switch (b) {
                        case QRMode.MODE_NUMBER:
                            return 14;
                        case QRMode.MODE_ALPHA_NUM:
                            return 13;
                        case QRMode.MODE_8BIT_BYTE:
                            return 16;
                        case QRMode.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + b)
                    }
                } else {
                    throw new Error("type:" + a)
                }
            }
        }
    },
    getLostPoint: function (b) {
        var e = b.getModuleCount();
        var f = 0;
        for (var p = 0; p < e; p++) {
            for (var d = 0; d < e; d++) {
                var n = 0;
                var m = b.isDark(p, d);
                for (var a = -1; a <= 1; a++) {
                    if (p + a < 0 || e <= p + a) {
                        continue
                    }
                    for (var l = -1; l <= 1; l++) {
                        if (d + l < 0 || e <= d + l) {
                            continue
                        }
                        if (a == 0 && l == 0) {
                            continue
                        }
                        if (m == b.isDark(p + a, d + l)) {
                            n++
                        }
                    }
                }
                if (n > 5) {
                    f += (3 + n - 5)
                }
            }
        }
        for (var p = 0; p < e - 1; p++) {
            for (var d = 0; d < e - 1; d++) {
                var g = 0;
                if (b.isDark(p, d)) {
                    g++
                }
                if (b.isDark(p + 1, d)) {
                    g++
                }
                if (b.isDark(p, d + 1)) {
                    g++
                }
                if (b.isDark(p + 1, d + 1)) {
                    g++
                }
                if (g == 0 || g == 4) {
                    f += 3
                }
            }
        }
        for (var p = 0; p < e; p++) {
            for (var d = 0; d < e - 6; d++) {
                if (b.isDark(p, d) && !b.isDark(p, d + 1) && b.isDark(p, d + 2) && b.isDark(p, d + 3) && b.isDark(p, d + 4) && !b.isDark(p, d + 5) && b.isDark(p, d + 6)) {
                    f += 40
                }
            }
        }
        for (var d = 0; d < e; d++) {
            for (var p = 0; p < e - 6; p++) {
                if (b.isDark(p, d) && !b.isDark(p + 1, d) && b.isDark(p + 2, d) && b.isDark(p + 3, d) && b.isDark(p + 4, d) && !b.isDark(p + 5, d) && b.isDark(p + 6, d)) {
                    f += 40
                }
            }
        }
        var o = 0;
        for (var d = 0; d < e; d++) {
            for (var p = 0; p < e; p++) {
                if (b.isDark(p, d)) {
                    o++
                }
            }
        }
        var h = Math.abs(100 * o / e / e - 50) / 5;
        f += h * 10;
        return f
    }
};
var QRMath = {
    glog: function (a) {
        if (a < 1) {
            throw new Error("glog(" + a + ")")
        }
        return QRMath.LOG_TABLE[a]
    },
    gexp: function (a) {
        while (a < 0) {
            a += 255
        }
        while (a >= 256) {
            a -= 255
        }
        return QRMath.EXP_TABLE[a]
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i
}
for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8]
}
for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i
}
function QRPolynomial(b, a) {
    if (b.length == undefined) {
        throw new Error(b.length + "/" + a)
    }
    var d = 0;
    while (d < b.length && b[d] == 0) {
        d++
    }
    this.num = new Array(b.length - d + a);
    for (var c = 0; c < b.length - d; c++) {
        this.num[c] = b[c + d]
    }
}
QRPolynomial.prototype = {
    get: function (a) {
        return this.num[a]
    },
    getLength: function () {
        return this.num.length
    },
    multiply: function (d) {
        var b = new Array(this.getLength() + d.getLength() - 1);
        for (var c = 0; c < this.getLength(); c++) {
            for (var a = 0; a < d.getLength(); a++) {
                b[c + a] ^= QRMath.gexp(QRMath.glog(this.get(c)) + QRMath.glog(d.get(a)))
            }
        }
        return new QRPolynomial(b, 0)
    },
    mod: function (d) {
        if (this.getLength() - d.getLength() < 0) {
            return this
        }
        var c = QRMath.glog(this.get(0)) - QRMath.glog(d.get(0));
        var a = new Array(this.getLength());
        for (var b = 0; b < this.getLength(); b++) {
            a[b] = this.get(b)
        }
        for (var b = 0; b < d.getLength(); b++) {
            a[b] ^= QRMath.gexp(QRMath.glog(d.get(b)) + c)
        }
        return new QRPolynomial(a, 0).mod(d)
    }
};
function QRRSBlock(a, b) {
    this.totalCount = a;
    this.dataCount = b
}
QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
QRRSBlock.getRSBlocks = function (c, l) {
    var b = QRRSBlock.getRsBlockTable(c, l);
    if (b == undefined) {
        throw new Error("bad rs block @ typeNumber:" + c + "/errorCorrectLevel:" + l)
    }
    var a = b.length / 3;
    var g = new Array();
    for (var e = 0; e < a; e++) {
        var f = b[e * 3 + 0];
        var m = b[e * 3 + 1];
        var h = b[e * 3 + 2];
        for (var d = 0; d < f; d++) {
            g.push(new QRRSBlock(m, h))
        }
    }
    return g
};
QRRSBlock.getRsBlockTable = function (b, a) {
    switch (a) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(b - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(b - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(b - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(b - 1) * 4 + 3];
        default:
            return undefined
    }
};
function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0
}
QRBitBuffer.prototype = {
    get: function (a) {
        var b = Math.floor(a / 8);
        return ((this.buffer[b] >>> (7 - a % 8)) & 1) == 1
    },
    put: function (a, c) {
        for (var b = 0; b < c; b++) {
            this.putBit(((a >>> (c - b - 1)) & 1) == 1)
        }
    },
    getLengthInBits: function () {
        return this.length
    },
    putBit: function (b) {
        var a = Math.floor(this.length / 8);
        if (this.buffer.length <= a) {
            this.buffer.push(0)
        }
        if (b) {
            this.buffer[a] |= (128 >>> (this.length % 8))
        }
        this.length++
    }
}; (function (m) {
    var h = [],
    n = /^url\(["']?([^"'\)]*)["']?\);?$/i,
    o = /\.png$/i,
    g = m.browser.msie && m.browser.version == 6;
    function l() {
        m.each(h,
        function () {
            this.refresh(true)
        })
    }
    m(window).resize(l);
    m.Poshytip = function (a, b) {
        this.$elm = m(a);
        this.opts = m.extend({},
        m.fn.poshytip.defaults, b);
        this.$tip = m(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join(""));
        this.$arrow = this.$tip.find("div.tip-arrow");
        this.$inner = this.$tip.find("div.tip-inner");
        this.disabled = false;
        this.init()
    };
    m.Poshytip.prototype = {
        init: function () {
            h.push(this);
            this.$elm.data("title.poshytip", this.$elm.attr("title")).data("poshytip", this);
            switch (this.opts.showOn) {
                case "hover":
                    this.$elm.bind({
                        "mouseenter.poshytip":
                    m.proxy(this.mouseenter, this),
                        "mouseleave.poshytip": m.proxy(this.mouseleave, this)
                    });
                    if (this.opts.alignTo == "cursor") {
                        this.$elm.bind("mousemove.poshytip", m.proxy(this.mousemove, this))
                    }
                    if (this.opts.allowTipHover) {
                        this.$tip.hover(m.proxy(this.clearTimeouts, this), m.proxy(this.hide, this))
                    }
                    break;
                case "focus":
                    this.$elm.bind({
                        "focus.poshytip":
                    m.proxy(this.show, this),
                        "blur.poshytip": m.proxy(this.hide, this)
                    });
                    break
            }
        },
        mouseenter: function (a) {
            if (this.disabled) {
                return true
            }
            this.clearTimeouts();
            this.$elm.attr("title", "");
            this.showTimeout = setTimeout(m.proxy(this.show, this), this.opts.showTimeout)
        },
        mouseleave: function () {
            if (this.disabled) {
                return true
            }
            this.clearTimeouts();
            this.$elm.attr("title", this.$elm.data("title.poshytip"));
            this.hideTimeout = setTimeout(m.proxy(this.hide, this), this.opts.hideTimeout)
        },
        mousemove: function (a) {
            if (this.disabled) {
                return true
            }
            this.eventX = a.pageX;
            this.eventY = a.pageY;
            if (this.opts.followCursor && this.$tip.data("active")) {
                this.calcPos();
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                });
                if (this.pos.arrow) {
                    this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow
                }
            }
        },
        show: function () {
            if (this.disabled || this.$tip.data("active")) {
                return
            }
            this.reset();
            this.update();
            this.display()
        },
        hide: function () {
            if (this.disabled || !this.$tip.data("active")) {
                return
            }
            this.display(true)
        },
        reset: function () {
            this.$tip.queue([]).detach().css("visibility", "hidden").data("active", false);
            this.$inner.find("*").poshytip("hide");
            if (this.opts.fade) {
                this.$tip.css("opacity", this.opacity)
            }
            this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"
        },
        update: function (a) {
            if (this.disabled) {
                return
            }
            var b = a !== undefined;
            if (b) {
                if (!this.$tip.data("active")) {
                    return
                }
            } else {
                a = this.opts.content
            }
            this.$inner.contents().detach();
            var c = this;
            this.$inner.append(typeof a == "function" ? a.call(this.$elm[0],
            function (d) {
                c.update(d)
            }) : a == "[title]" ? this.$elm.data("title.poshytip") : a);
            this.refresh(b)
        },
        refresh: function (q) {
            if (this.disabled) {
                return
            }
            if (q) {
                if (!this.$tip.data("active")) {
                    return
                }
                var e = {
                    left: this.$tip.css("left"),
                    top: this.$tip.css("top")
                }
            }
            this.$tip.css({
                left: 0,
                top: 0
            }).appendTo(document.body);
            if (this.opacity === undefined) {
                this.opacity = this.$tip.css("opacity")
            }
            var d = this.$tip.css("background-image").match(n),
            c = this.$arrow.css("background-image").match(n);
            if (d) {
                var p = o.test(d[1]);
                if (g && p) {
                    this.$tip.css("background-image", "none");
                    this.$inner.css({
                        margin: 0,
                        border: 0,
                        padding: 0
                    });
                    d = p = false
                } else {
                    this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                        border: 0,
                        padding: 0,
                        "background-image": "none",
                        "background-color": "transparent"
                    }).find(".tip-bg-image").css("background-image", 'url("' + d[1] + '")').end().find("td").eq(3).append(this.$inner)
                }
                if (p && !m.support.opacity) {
                    this.opts.fade = false
                }
            }
            if (c && !m.support.opacity) {
                if (g && o.test(c[1])) {
                    c = false;
                    this.$arrow.css("background-image", "none")
                }
                this.opts.fade = false
            }
            var a = this.$tip.find("table");
            if (g) {
                this.$tip[0].style.width = "";
                a.width("auto").find("td").eq(3).width("auto");
                var b = this.$tip.width(),
                f = parseInt(this.$tip.css("min-width")),
                r = parseInt(this.$tip.css("max-width"));
                if (!isNaN(f) && b < f) {
                    b = f
                } else {
                    if (!isNaN(r) && b > r) {
                        b = r
                    }
                }
                this.$tip.add(a).width(b).eq(0).find("td").eq(3).width("100%")
            } else {
                if (a[0]) {
                    a.width("auto").find("td").eq(3).width("auto").end().end().width(this.$tip.width()).find("td").eq(3).width("100%")
                }
            }
            this.tipOuterW = this.$tip.outerWidth();
            this.tipOuterH = this.$tip.outerHeight();
            this.calcPos();
            if (c && this.pos.arrow) {
                this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow;
                this.$arrow.css("visibility", "inherit")
            }
            if (q) {
                this.$tip.css(e).animate({
                    left: this.pos.l,
                    top: this.pos.t
                },
                200)
            } else {
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                })
            }
        },
        display: function (f) {
            var e = this.$tip.data("active");
            if (e && !f || !e && f) {
                return
            }
            this.$tip.stop();
            if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (f && this.opts.hideAniDuration || !f && this.opts.showAniDuration)) {
                var a = {},
                b = {};
                if (this.opts.slide && this.pos.arrow) {
                    var c, p;
                    if (this.pos.arrow == "bottom" || this.pos.arrow == "top") {
                        c = "top";
                        p = "bottom"
                    } else {
                        c = "left";
                        p = "right"
                    }
                    var d = parseInt(this.$tip.css(c));
                    a[c] = d + (f ? 0 : this.opts.slideOffset * (this.pos.arrow == p ? -1 : 1));
                    b[c] = d + (f ? this.opts.slideOffset * (this.pos.arrow == p ? 1 : -1) : 0)
                }
                if (this.opts.fade) {
                    a.opacity = f ? this.$tip.css("opacity") : 0;
                    b.opacity = f ? 0 : this.opacity
                }
                this.$tip.css(a).animate(b, this.opts[f ? "hideAniDuration" : "showAniDuration"])
            }
            f ? this.$tip.queue(m.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit");
            this.$tip.data("active", !e)
        },
        disable: function () {
            this.reset();
            this.disabled = true
        },
        enable: function () {
            this.disabled = false
        },
        destroy: function () {
            this.reset();
            this.$tip.remove();
            this.$elm.unbind("poshytip").removeData("title.poshytip").removeData("poshytip");
            h.splice(m.inArray(this, h), 1)
        },
        clearTimeouts: function () {
            if (this.showTimeout) {
                clearTimeout(this.showTimeout);
                this.showTimeout = 0
            }
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = 0
            }
        },
        calcPos: function () {
            var d = {
                l: 0,
                t: 0,
                arrow: ""
            },
            u = m(window),
            r = {
                l: u.scrollLeft(),
                t: u.scrollTop(),
                w: u.width(),
                h: u.height()
            },
            b,
            s,
            e,
            t,
            a,
            v;
            if (this.opts.alignTo == "cursor") {
                b = s = e = this.eventX;
                t = a = v = this.eventY
            } else {
                var c = this.$elm.offset(),
                f = {
                    l: c.left,
                    t: c.top,
                    w: this.$elm.outerWidth(),
                    h: this.$elm.outerHeight()
                };
                b = f.l + (this.opts.alignX != "inner-right" ? 0 : f.w);
                s = b + Math.floor(f.w / 2);
                e = b + (this.opts.alignX != "inner-left" ? f.w : 0);
                t = f.t + (this.opts.alignY != "inner-bottom" ? 0 : f.h);
                a = t + Math.floor(f.h / 2);
                v = t + (this.opts.alignY != "inner-top" ? f.h : 0)
            }
            switch (this.opts.alignX) {
                case "right":
                case "inner-left":
                    d.l = e + this.opts.offsetX;
                    if (d.l + this.tipOuterW > r.l + r.w) {
                        d.l = r.l + r.w - this.tipOuterW
                    }
                    if (this.opts.alignX == "right" || this.opts.alignY == "center") {
                        d.arrow = "left"
                    }
                    break;
                case "center":
                    d.l = s - Math.floor(this.tipOuterW / 2);
                    if (d.l + this.tipOuterW > r.l + r.w) {
                        d.l = r.l + r.w - this.tipOuterW
                    } else {
                        if (d.l < r.l) {
                            d.l = r.l
                        }
                    }
                    break;
                default:
                    d.l = b - this.tipOuterW - this.opts.offsetX;
                    if (d.l < r.l) {
                        d.l = r.l
                    }
                    if (this.opts.alignX == "left" || this.opts.alignY == "center") {
                        d.arrow = "right"
                    }
            }
            switch (this.opts.alignY) {
                case "bottom":
                case "inner-top":
                    d.t = v + this.opts.offsetY;
                    if (!d.arrow || this.opts.alignTo == "cursor") {
                        d.arrow = "top"
                    }
                    if (d.t + this.tipOuterH > r.t + r.h) {
                        d.t = t - this.tipOuterH - this.opts.offsetY;
                        if (d.arrow == "top") {
                            d.arrow = "bottom"
                        }
                    }
                    break;
                case "center":
                    d.t = a - Math.floor(this.tipOuterH / 2);
                    if (d.t + this.tipOuterH > r.t + r.h) {
                        d.t = r.t + r.h - this.tipOuterH
                    } else {
                        if (d.t < r.t) {
                            d.t = r.t
                        }
                    }
                    break;
                default:
                    d.t = t - this.tipOuterH - this.opts.offsetY;
                    if (!d.arrow || this.opts.alignTo == "cursor") {
                        d.arrow = "bottom"
                    }
                    if (d.t < r.t) {
                        d.t = v + this.opts.offsetY;
                        if (d.arrow == "bottom") {
                            d.arrow = "top"
                        }
                    }
            }
            this.pos = d
        }
    };
    m.fn.poshytip = function (b) {
        if (typeof b == "string") {
            return this.each(function () {
                var c = m(this).data("poshytip");
                if (c && c[b]) {
                    c[b]()
                }
            })
        }
        var a = m.extend({},
        m.fn.poshytip.defaults, b);
        if (!m("#poshytip-css-" + a.className)[0]) {
            m(['<style id="poshytip-css-', a.className, '" type="text/css">', "div.", a.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", a.className, " table, div.", a.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", a.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", a.bgImageFrameSize, "px;width:", a.bgImageFrameSize, "px;overflow:hidden;}", "div.", a.className, " td.tip-right{background-position:100% 0;}", "div.", a.className, " td.tip-bottom{background-position:100% 100%;}", "div.", a.className, " td.tip-left{background-position:0 100%;}", "div.", a.className, " div.tip-inner{background-position:-", a.bgImageFrameSize, "px -", a.bgImageFrameSize, "px;}", "div.", a.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head")
        }
        return this.each(function () {
            new m.Poshytip(this, a)
        })
    };
    m.fn.poshytip.defaults = {
        content: "[title]",
        className: "tip-yellow",
        bgImageFrameSize: 10,
        showTimeout: 500,
        hideTimeout: 100,
        showOn: "hover",
        alignTo: "cursor",
        alignX: "right",
        alignY: "top",
        offsetX: -22,
        offsetY: 18,
        allowTipHover: true,
        followCursor: false,
        fade: true,
        slide: true,
        slideOffset: 8,
        showAniDuration: 300,
        hideAniDuration: 300
    }
})(jQuery);
var qr_txt = "http://315demo.xmesm.net";
var qr_make_time = "";
var qr_old_dr = "";
var qr_old_canvas_w = "";
var qr_old_qr_w = "";
function qr_form_tab() {
    //切换Tab
    $(".js_qr_tab a").click(function (a) {
        a.preventDefault();
        if ($(this).hasClass("qr_txt_tab_s")) {
            return
        }
        $(".js_qr_tab a").removeClass("qr_txt_tab_s");
        $(this).addClass("qr_txt_tab_s");
        var b = $(this).attr("rel");
        $(".qr_form").hide();
        $(".js_qr_form" + b).show()
    });
    $(".qr_set_tab a").click(function (a) {
        a.preventDefault();
        if ($(this).hasClass("qr_txt_tab_s")) {
            return
        }
        $(".qr_set_tab a").removeClass("qr_txt_tab_s");
        $(this).addClass("qr_txt_tab_s");
        var b = $(this).attr("rel");
        $(".qr_set_ul").hide();
        $(".js_set_ul" + b).show()
    })
}
function qr_set_dot() {
    $(".qr_set_x_warp span").click(function () {
        var g = $(this).attr("rel");
        $(e).css("left", g + "px");
        $("#qr_set_type_num").val(g);
        aotu_darw("no")
    });
    $("#qr_set_x_dot").hover(function () {
        $(this).addClass("cursor_pointer")
    },
    function () {
        $(this).removeClass("cursor_pointer")
    });
    var f = "#qr_set_x_dot";
    var e = "#qr_set_x_dot";
    var a = ".qr_set_x_warp";
    var c = false,
    b, d;
    var e = typeof e == "undefined" ? f : e;
    $(f).mousedown(function (g) {
        b = g.pageX;
        d = $(this).position().left;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        c = true
    }).mousemove(function (l) {
        $(a).mouseout(function () {
            c = false;
            aotu_darw("no")
        });
        $(document).mouseup(function () {
            c = false;
            aotu_darw("no")
        });
        if (c) {
            var g = l.pageX - b;
            var h = d + g;
            if (h >= 0 && h <= 250) {
                $(e).css("left", h + "px");
                $("#qr_set_type_num").val(h);
                aotu_darw("no")
            }
        }
    })
}
function qr_darw(b) {
    var a = $("#qr_set_jbtype").find("option:selected").val();
    var e = "yes";
    var d = false;
    var f = parseInt($("#qr_set_type_num").val());
    var c = Math.round((f - 125) / 125 * 100) / 100;
    if ($("#qr_set_iocn_box").attr("checked")) {
        if ($("#imghead").attr("src")) {
            d = $("#imghead").attr("src")
        }
    }
    if (b == "no") {
        old_dr = "no"
    }
    $("#canvas").qrcode({
        text: qr_txt,
        background: $("#qr_set_background").val(),
        foreground: $("#qr_set_foreground").val(),
        jbcol: $("#qr_set_jbcol").val(),
        jbtype: a,
        dr: c,
        old_dr: e,
        dan_w: $("#qr_set_dan_w").val(),
        dan_l: $("#qr_set_dan_l").val(),
        icon_src: d
    })
}
function qr_set_bind() {
    $(".js_qr_set").poshytip({
        content: $("#qr_set_tiptxt").val(),
        className: "tip-twitter",
        showOn: "focus",
        alignTo: "target",
        alignX: "left",
        alignY: "center",
        offsetX: 5
    });
    $(".js_qr_set").bind("input propertychange",
    function () {
        $(this).css("background", $(this).val());
        if (!validateColor($(this).val())) {
            if ($(this).val()) {
                return
            }
        }
        aotu_darw("")
    });
    $(".js_set_iocn_box").click(function () {
        aotu_darw("")
    });
    $("#qr_set_jbtype").bind("change",
    function () {
        aotu_darw("")
    })
}
function aotu_darw(a) {
    clearTimeout(qr_make_time);
    qr_make_time = setTimeout('qr_darw("")', 300)
}
function qr_data_bind() {
    $(".js_qr_data").bind("input propertychange",
    function () {
        qr_data_txt($(this).attr("reg"))
    });
    $("#js_qr_wifi_type").bind("change",
    function () {
        var a = $("#js_qr_wifi_type").find("option:selected").val();
        if (a == "nopass") {
            $("#js_qr_wifi_pass").attr("readonly", true).css("background", "#ccc").val("选择无加密，不需输入密码")
        } else {
            $("#js_qr_wifi_pass").val("").css("background", "").attr("readonly", false)
        }
        qr_data_txt($(this).attr("reg"))
    })
}
function qr_data_txt(b) {
    switch (b) {
        case "js_qr_txt":
            qr_txt = $("#js_qr_txt").val();
            break;
        case "js_qr_url":
            qr_txt = $("#js_qr_url").val();
            break;
        case "js_qr_weibo":
            qr_txt = $("#js_qr_weibo").val();
            break;
        case "js_qr_mail":
            qr_txt = $("#js_qr_mail").val();
            break;
        case "js_qr_wifi":
            var a = $("#js_qr_wifi_type").find("option:selected").val();
            var c = "";
            if (a != "nopass") {
                c = ";P:" + $("#js_qr_wifi_pass").val() + ";"
            }
            qr_txt = "WIFI:T:" + a + ";S:" + $("#js_qr_wifi_ssid").val() + c;
            break;
        case "js_qr_gps":
            qr_txt = "geo:" + $("#js_qr_gps_a").val() + "," + $("#js_qr_gps_b").val();
            break;
        case "js_qr_file":
            qr_txt = $("#uploads").val();
            break;
        case "js_qr_vcard":
            qr_txt = "MECARD:";
            if ($("#js_qr_vcard_n").val() != "") {
                qr_txt += "N:" + $("#js_qr_vcard_n").val() + ";"
            }
            if ($("#js_qr_vcard_email").val() != "") {
                qr_txt += "EMAIL:" + $("#js_qr_vcard_email").val() + ";"
            }
            if ($("#js_qr_vcard_url").val() != "") {
                qr_txt += "URL:" + $("#js_qr_vcard_url").val() + ";"
            }
            if ($("#js_qr_vcard_word").val() != "") {
                qr_txt += "ORG:" + $("#js_qr_vcard_word").val() + ";"
            }
            if ($("#js_qr_vcard_add").val() != "") {
                qr_txt += "ADR:" + $("#js_qr_vcard_add").val() + ";"
            }
            if ($("#js_qr_vcard_tel_num").val() != "") {
                qr_txt += "TEL:" + $("#js_qr_vcard_tel_num").val() + ";"
            }
            break
    }
    aotu_darw("")
}
function validateColor(c) {
    var a = /^#[0-9a-fA-F]{6}$/;
    var b = /^#[0-9a-fA-F]{3}$/;
    if (a.test(c) || b.test(c)) {
        return true
    } else {
        return false
    }
}
function previewImage(e) {
    var d = qr_old_canvas_w;
    var c = qr_old_canvas_w;
    var b = document.getElementById("preview");
    $("#qr_set_iocn_box").attr("checked", "checked");
    if (e.files && e.files[0]) {
        b.innerHTML = "<img id=imghead>";
        var f = document.getElementById("imghead");
        f.onload = function () {
            var m = clacImgZoomParam(d, c, f.offsetWidth, f.offsetHeight);
            f.width = m.width;
            f.height = m.height
        };
        var g = new FileReader();
        g.onload = function (m) {
            f.src = m.target.result
        };
        g.readAsDataURL(e.files[0])
    } else {
        var h = 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
        e.select();
        var a = document.selection.createRange().text;
        b.innerHTML = "<img id=imghead>";
        var f = document.getElementById("imghead");
        f.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = a;
        var l = clacImgZoomParam(d, c, f.offsetWidth, f.offsetHeight);
        status = ("rect:" + l.top + "," + l.left + "," + l.width + "," + l.height);
        b.innerHTML = "<div id=divhead style='width:" + l.width + "px;height:" + l.height + "px;margin-top:" + l.top + "px;margin-left:" + l.left + "px;" + h + a + "\"'></div>"
    }
    aotu_darw("")
}
function clacImgZoomParam(d, c, b, a) {
    var e = {
        top: 0,
        left: 0,
        width: b,
        height: a
    };
    if (b > d || a > c) {
        rateWidth = b / d;
        rateHeight = a / c;
        if (rateWidth > rateHeight) {
            e.width = d;
            e.height = Math.round(a / rateWidth)
        } else {
            e.width = Math.round(b / rateHeight);
            e.height = c
        }
    }
    e.left = Math.round((d - e.width) / 2);
    e.top = Math.round((c - e.height) / 2);
    return e
}
function qr_img_svae() {
    $(".button").click(function (n) {
        n.preventDefault();
        if (is_no_canvas == "yes") {
            alert("请右击二维码图片，然后选择“图片另存为”！")
        } else {
            var d = parseInt($("#qr_set_type_num").val());
            var h = Math.round((d - 125) / 125 * 100) / 100;
            var f = $("#qr_set_jbtype").find("option:selected").val();
            var a = $("#qr_set_background").val();
            var p = $("#qr_set_foreground").val();
            var g = $("#qr_set_jbcol").val();
            var q = f;
            var d = h;
            var o = $("#qr_set_dan_w").val();
            var c = $("#qr_set_dan_l").val();
            var l = a + "_" + p + "_" + g + "_" + q + "_" + d + "_" + o + "_" + c;
            var b = document.getElementsByTagName("canvas")[0];
            var m = b.toDataURL();
            $("#save_img_date").val(m.substring(22));
            $("#save_img_set").val(l);
            $("#save_form").submit()
        }
    })
}
function is_ies() {
    if (is_no_canvas == "yes") {
        $(".qr_set_form").append('<div class="qr_set_isie" ></div><div class="qr_set_isie_by"></div>')
    }
}
$(function () {
    is_ies();
    qr_form_tab();
    qr_data_bind();
    qr_set_dot();
    qr_set_bind();
    qr_img_svae();
    $("#canvas").qrcode({
        dr: 0,
        old_dr: 0.0001
    })
});