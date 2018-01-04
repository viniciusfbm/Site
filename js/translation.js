(function ($) {
    changeLanguage("pt-br");
})(jQuery);

function changeLanguage(language) {
    $("#translation").remove();
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "translation/" + language + ".json";
    s.id = "translation";
    $("head").append(s);
    debugger;
    for (var section in i18nData) {
        sectionData = i18nData[section]
        for (var key in sectionData) {
            keyData = sectionData[key];
            domElements = $("." + section + " [i18n='" + key + "']");
            if (typeof keyData == "string") {
                domElements.each(function () { $(this).text(keyData); });
            }
            else {
                for (var attribute in keyData) {
                    domElements.each(function () { $(this).attr(attribute, keyData[attribute]); });
                }
            }
        }
    }
}