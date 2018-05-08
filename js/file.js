//transition from home page -> any other page
function explodePage(button) {
    //remove center text/name
    if ($("#name").css("opacity") == 1) {
        $("#name").animate({opacity:0});
        $("#blurb").animate({opacity:0});
    }
    $("#launcher").animate({opacity:0}, function() {
        $("#launcher").css({visibility: "hidden"})  ;
    });
    //adjust highlighting
    $("#home").removeClass('currentlyActive');
    //open corresponding page
    if (button == "center" || button == "about") {
        rectangle(function() {
            aboutPage();
        });
    }
    else if (button == "melee") {
        rectangle(function() {
            meleePage();
        });
    }
    else if (button == "projects") {
        rectangle(function() {
            projectsPage();
        });
    }
    else if (button == "articles") {
        rectangle(function() {
            articlesPage();
        });
    }
    else if (button == "contact") {
        rectangle(function() {
            contactPage();
        });
    }
}

//expansion sequence for the rectangle
function rectangle(callback) {
    $("#center-button").animate({height: "0px", top: "700px"});
    $("#center-button").removeClass('textHover');
    $("#center-button").removeClass('blackHover');
    $("#center-button").css("cursor", "auto");
    $("#center-button").find("span").animate({opacity:0});
    $("#center-button").css("border-top", "0");
    callback();
}

//opens the about page
function aboutPage() {
    //animate top and title
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1262px", marginLeft: "237px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#pagetitle").text("About Me");
                $("#pagetitle").css({
                    "font-family": "bebasbold",
                    "font-size": "40pt",
                    "top": "-27px",
                    "left": "50px",
                    "color": "white",
                    "position": "absolute",
                    "opacity": "0",
                    "letter-spacing": "1px"
                });
                $("#pagetitle").animate({opacity:1}, function() {
                    $("#center-button").find("span").animate({opacity:1});
                    $("#innertext").css({"visibility": "visible"});
                    $("#profile").css({"visibility": "visible"});
                    $("#resume").css({"visibility": "visible"});
                    $("#innertext").animate({opacity:1});
                    $("#profile").animate({opacity:1});
                    $("#resume").animate({opacity:1});
                });

            });
        });
    });

    $("#center-button").off("click");
}


//opens the projects page
function projectsPage() {

    //animate top and title
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1270px", marginLeft: "230px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#pagetitle").text("Projects");
                $("#pagetitle").css({
                    "font-family": "bebasbold",
                    "font-size": "40pt",
                    "top": "-27px",
                    "left": "50px",
                    "color": "white",
                    "position": "absolute",
                    "opacity": "0",
                    "letter-spacing": "1px"
                });
                $("#pagetitle").animate({opacity:1}, function() {
                    $("#center-button").find("span").animate({opacity:1});
                    $("#tableone").css({
                        "visibility": "visible",
                        "left": "50px",
                        "top": "50px"
                    });
                    $("#tableone").animate({opacity: 0.6});
                    $("#scoreboard").css({
                        "visibility": "visible",
                        "left": "50px",
                        "top": "230px"
                    });
                    $("#scoreboard").animate({opacity: 0.6});
                    $("#website").css({
                        "visibility": "visible",
                        "left": "50px",
                        "top": "410px"
                    });
                    $("#website").animate({opacity: 0.6});
                    $("#hangman").css({
                        "visibility": "visible",
                        "left": "800px",
                        "top": "50px"
                    });
                    $("#hangman").animate({opacity: 0.6});
                });

            });
        });
    });

    $("#center-button").off("click");
}

//opens the melee page
function meleePage() {
    //animate top and title
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1320px", marginLeft: "178px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $(".link").css({
                    "text-decoration": "underline",
                    "color": "#777777"
                });
                $("#pagetitle").text("Melee");
                $("#pagetitle").css({
                    "font-family": "bebasbold",
                    "font-size": "40pt",
                    "top": "-27px",
                    "left": "48px",
                    "color": "white",
                    "position": "absolute",
                    "opacity": "0",
                    "letter-spacing": "1px"
                });
                $("#meleefox").css({"visibility": "visible"});
                $("#meleetext").css({"visibility": "visible"});
                $("#twitch-embed").css({"visibility": "visible"});
                $("#pagetitle").animate({opacity:1}, function() {
                    $("#center-button").find("span").animate({opacity:1});
                    $("#meleefox").animate({opacity:0.6});
                    $("#meleetext").animate({opacity:1});
                    $("#twitch-embed").animate({opacity:1});
                });
            });
        });
    });

    $("#center-button").off("click");
}

function articlesPage() {
    //animate top and title
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1270px", marginLeft: "230px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#pagetitle").text("Articles");
                $("#pagetitle").css({
                    "font-family": "bebasbold",
                    "font-size": "40pt",
                    "top": "-27px",
                    "left": "50px",
                    "color": "white",
                    "position": "absolute",
                    "opacity": "0",
                    "letter-spacing": "1px"
                });
                $("#pagetitle").animate({opacity:1}, function() {
                    $("#center-button").find("span").animate({opacity:1});
                    $("#articlebox").css({
                        "visibility": "visible"
                    });
                    $("#articlebox").animate({opacity: 1}, function() {
                    });
                });

            });
        });
    });

    $("#center-button").off("click");
}

//open the contact page
function contactPage() {

    //animate top and title
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1280px", marginLeft: "220px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#pagetitle").text("Contact");
                $("#pagetitle").css({
                    "font-family": "bebasbold",
                    "font-size": "40pt",
                    "top": "-27px",
                    "left": "50px",
                    "color": "white",
                    "position": "absolute",
                    "opacity": "0",
                    "letter-spacing": "1px"
                });
                $("#pagetitle").animate({opacity:1}, function() {
                    $("#center-button").find("span").animate({opacity:1});
                });

            });
        });
    });

    $("#center-button").off("click");
}

function closePage(currentPage) {

    if (currentPage=="about") {
        $("#profile").animate({opacity: "0"});
        $("#resume").animate({opacity: "0"});
        $("#innertext").animate({opacity: "0"}, 500, function() {
            $("#resume").css({"visibility" : "hidden"});
            $("#innertext").css({"visibility" : "hidden"});
            $("#profile").css({"visibility" : "hidden"});
        });
    }

    if (currentPage=="articles") {
        $("#articlebox").animate({opacity: "0"}, 500, function() {
            $("#articlebox").css({"visibility" : "hidden"});
        });
    };

    if (currentPage=="contact") {
        $("#gmail").animate({opacity: "0"}, 500);
        $("#facebook").animate({opacity: "0"}, 500);
        $("#twitter").animate({opacity: "0"}, 500);
        $("#phone").animate({opacity: "0"}, 500);
        $("#linkedin").animate({opacity: "0"}, 500);
        $("#contactblurb").animate({opacity: "0"}, 500, function() {
            $("#gmail").css({"visibility" : "hidden"});
            $("#facebook").css({"visibility" : "hidden"});
            $("#twitter").css({"visibility" : "hidden"});
            $("#phone").css({"visibility" : "hidden"});
            $("#linkedin").css({"visibility" : "hidden"});
            $("#contactblurb").css({"visibility" : "hidden"});
        });
    };

    if (currentPage=="projects") {
        $("#tableone").animate({opacity: "0"}, 500);
        $("#scoreboard").animate({opacity: "0"}, 500);
        $("#hangman").animate({opacity: "0"}, 500);
        $("#website").animate({opacity: "0"}, 500, function() {
            $("#tableone").css({"visibility" : "hidden"});
            $("#scoreboard").css({"visibility" : "hidden"});
            $("#website").css({"visibility" : "hidden"});
            $("#hangman").css({"visibility" : "hidden"});
        });
    }

    if (currentPage=="melee") {
        $("#meleetext").animate({opacity: "0"}, 500, function() {
            $("#twitch-embed").animate({opacity: "0"});
            $("#meleefox").animate({opacity: "0"}, 500, function() {
                $("#twitch-embed").css({"visibility" : "hidden"});
                $("#meleefox").css({"visibility" : "hidden"});
                $("#meleetext").css({"visibility" : "hidden"});
            });
        });
    }

    $("#pagetitle").animate({opacity: "0"}, 500, function() {
        $("#center-button").css({
            "overflow" : "hidden"
        });
        $("#sliderleft").animate({width: "0px", marginLeft: "1500px"}, 200, "linear");
        $("#sliderright").animate({width: "0px"}, 200, "linear", function() {
            $("#sliderright").css({opacity: "0"});
            $("#sliderleft").css({opacity: "0"});
            $("#center-button").animate({height: "0px", top: "700px"}, 200, "linear", function() {
                $("#center-button").animate({width: "120px"}, 300);
            });
        });
    });
}

function homePage() {
    console.log("home");
    $("#center-button").css("border-top", "2px solid white");
    $("#center-button").find("a").css({
        "line-height": "27px",
        "top": "",
        "text-align": "center",
        "font-size": "12pt"
    });
    $("#innerbox").css({
        "margin-right" : "",
        "margin-bottom": "",
        "height": "",
        "overflow-x": ""
    });
    $("#center-button").addClass('textHover');
    $("#center-button").addClass('blackHover');
    $("#center-button").css("cursor", "pointer");
    $("#launcher").css({visibility: "visible"});
    $("#center-button").animate({height: "45px", top: "70%"}, function() {
        $("#name").animate({opacity:1});
        $("#blurb").animate({opacity:1});
        $("#launcher").animate({opacity:1});
    });
    $("#center-button").one('click', function() {
        currentPage = "about";
        explodePage("center");
    });
}
