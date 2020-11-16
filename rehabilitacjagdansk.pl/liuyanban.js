document.write("   <div class=\"contact-us container mt60 mb60\" id=\"liuyan\">");
document.write("        <div class=\"contact-msg\">");
document.write("            <img src=\"\/sixteen\/img\/image-1.jpg\" alt=\"image-1\"\/>");
document.write("            <p>Don’t hesitate to contact us, We’d love to help you. Our customer support team will work 24\/7.<\/p>");
document.write("        <\/div>");
document.write("        <div class=\"contact-form\">");
document.write("            <strong>Get In Touch<\/strong>");
document.write("            <form class=\"send\" id=\"Inquiry\" name=\"Inquiry\" method=\"post\" action=\"https:\/\/q.kssbchina.com\/information\/\" onsubmit=\"return doSubmits()\">");
document.write("                <div class=\"input-panel\">");
document.write("                    <div class=\"me one\">");
document.write("                        <input id=\"productname\" name=\"productname\" class=\"txt icon-text-pro\" placeholder=\"Product Name\" type=\"text\">");
document.write("                    <\/div>");
document.write("                    <div class=\"me two\">");
document.write("                        <input id=\"name\" name=\"name\" class=\"txt icon-text-user\" placeholder=\"Your Name\" type=\"text\">");
document.write("                    <\/div>");
document.write("                    <div class=\"me three\">");
document.write("                        <input id=\"email\" name=\"email\" class=\"txt icon-text-email\" placeholder=\"Your email(*)\" type=\"text\">");
document.write("                    <\/div>");
document.write("                    <div class=\"me four\">");
document.write("                        <input id=\"telephone\" name=\"telephone\" class=\"txt icon-text-tel\" placeholder=\"Your Phone or Whatsapp\" type=\"text\">");
document.write("                    <\/div>");
document.write("                <\/div>");
document.write("                <div class=\"me five\">");
document.write("                    <textarea id=\"message\" class=\"textarea icon-text-message\" name=\"message\" placeholder=\"Equipment name, model, related issues(*)\"><\/textarea>");
document.write("                <\/div>");
document.write("                <input id=\"site_feedback\" type=\"hidden\" name=\"site_feedback\">");
document.write("                <input id=\"from_way\" type=\"hidden\" name=\"from_way\">");
document.write("                <input id=\"refer\" type=\"hidden\" name=\"refer\">");
document.write("                <div class=\"clearfix\"><\/div>");
document.write("                <div class=\"PorConSixXX\">");
document.write("                    <p>");
document.write("                        <input type=\"checkbox\" class=\"choose_input\"><label><\/label><\/p>");
document.write("                    I accept the Data Protection Declaration<\/div>");
document.write("                <input id=\"button_sub\" name=\"button_sub\" class=\"btn-primary\" type=\"submit\" value=\"Send Now!\">");
document.write("            <\/form>");
document.write("        <\/div>");
document.write("    <\/div>");
document.write("    <div class=\"choose-us mt60\">");
document.write("        <div class=\"container\">");
document.write("            <h2>Sharing Expertise. Building Relationships.<\/h2>");
document.write("            <span class=\"swt title-btn\">Let’s Start<\/span>");
document.write("        <\/div>");
document.write("    <\/div>");

function doSubmits() {
    var stremail = document.getElementById("email");
    if (stremail.value == "") {
        alert('Please write down your correct Email');
        stremail.focus();
        return false;
    } else {
        var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        isok = reg.test(stremail.value);
        if (!isok) {
            alert("The format of the e-mail is incorrect, please re-enter the e-mail！");
            stremail.focus();
            return false;
        }
    }

    var smessage = document.getElementById("message");
    if (smessage.value == "") {
        smessage.style.backgroundColor = "#bbc0c6";
        alert('Please fill in the message');
        smessage.focus();
        return false;
    }
    var phone = document.getElementById("telephone");
    if (phone.value !== "") {
        var regs = /^[0-9]*$/;
        isok = regs.test(phone.value);
        leng = phone.value.length;
        if (!isok || leng>20) {
            alert("Please fill in the correct mobile number or Whatsapp;");
            phone.focus();
            return false;
        }
    }
    // 1.客户端浏览器时间
    var myDate = new Date();
    var datenow = myDate.toLocaleDateString() + "-" + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    //2. 随即字符串
    var str = '';
    var length = 10;
    for (; str.length < length; str += Math.random().toString(36).substr(2));
    str = str.substr(0, length);

    //3.移动版
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito",
        "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase();
    var isMobile = "pc";
    for (var i = 0; i < mobileAgent.length; i++) {
        if (browser.indexOf(mobileAgent[i]) != -1) {
            isMobile = "m";
            break;
        }
    }

    window.document.Inquiry.site_feedback.value = str;
    window.document.Inquiry.from_way.value = "|" + isMobile + "|";
    window.document.Inquiry.refer.value = window.location.href + "?data=" + datenow + "&rnd=" + str + "&sys=" +
        isMobile;
    window.document.Inquiry.action = window.document.Inquiry.action + "?data=" + datenow + "&rnd=" + str + "&sys=" +
        isMobile;
    document.getElementById("button_sub").disabled = true;
    window.document.Inquiry.submit();

}
