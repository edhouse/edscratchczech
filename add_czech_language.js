function setTopBarFlag() {
    document.getElementById("eb-menu-flag").style.backgroundImage = `url(${chrome.runtime.getURL("plugin_images/cs-flag.png")})`;
}

// if czech language is set in local storage, change the flag in top bar
function setTopBarFlagWhenReady() {
    setTimeout(() => {
        const lang = localStorage.getItem("mbaLanguage");
        console.log(lang);
        if (lang == "cs") {
            setTopBarFlag();
        }
    }, 1000);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setTopBarFlagWhenReady);
} else {
    setTopBarFlagWhenReady();
}

// get modal window for language selection
var languageModal = document.getElementById("modalLanguage");

// get containers inside the modal window - only 1 should be there
var containers = languageModal.getElementsByClassName("container");

if (containers.length > 0) {

    // get the first (and only one) container in modal window
    var flagsContainer = containers[0];

    // get rows in the container
    var rows = flagsContainer.getElementsByClassName("row");

    for (var i = 0; i < rows.length; i++) {

        // get colums in the row
        var columns = rows[i].getElementsByClassName("col-4");

        for (var j = 0; j < columns.length; j++) {

            // get a div containing flag - only 1 should be there
            var flagDivs = columns[j].getElementsByClassName("flag");

            if (flagDivs.length > 0) {

                // get the firts (and only one) flag div in column
                var flag = flagDivs[0];

                // if it's Portuguese flag, replace it with Czech one :-)
                if (flag.dataset.id == "pt-br") {

                    flag.dataset.id = "cs";
                    flag.alt = "Čeština";
                    flag.style.backgroundImage = `url(${chrome.runtime.getURL("plugin_images/cs-flag.png")})`;

                    flag.onclick = setTopBarFlag;

                    // get a div containing language title - only 1 should be there
                    var titleDivs = columns[j].getElementsByClassName("mt-2");

                    if (titleDivs.length > 0) {

                        // get the first (and only one) title div in column
                        var title = titleDivs[0];

                        // and finally replace the Portuguese title with Czech one :-)
                        title.innerHTML = "Čeština";
                    }
                }
            }
        }
    }
}