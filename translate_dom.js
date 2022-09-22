// blocks categories
var categoryMenuItems = document.getElementsByClassName("scratchCategoryMenuItem");

for (var i = 0; i < categoryMenuItems.length; i++) {
    var translation = null;

    var splitIndex = categoryMenuItems[i].innerHTML.indexOf("<");

    var menuTitle = categoryMenuItems[i].innerHTML.substring(0, splitIndex);
    var menuDot = categoryMenuItems[i].innerHTML.substring(splitIndex);

    switch (menuTitle) {
        case "Drive":
            translation = "Pohyb";
            break;
        case "LEDs":
            translation = "Světla";
            break;
        case "Sound":
            translation = "Zvuk";
            break;
        case "Data":
            translation = "Proměnné";
            break;
        case "Events":
            translation = "Události";
            break;
        case "Control":
            translation = "Ovládání";
            break;
        case "Sensing":
            translation = "Vnímání";
            break;
        case "Operators":
            translation = "Operátory";
            break;
        case "Comment":
            translation = "Komentář";
            break;
    }

    if (translation != null) {
        categoryMenuItems[i].innerHTML = translation + menuDot;
    }
}