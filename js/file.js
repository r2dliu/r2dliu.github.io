//transition from home page -> any other page
function explodePage(button) {
    //remove center text/name
    if ($("#name").css("opacity") == 1) {
        $("#name").animate({opacity:0});
        $("#blurb").animate({opacity:0});
    }

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
    $("#start").removeClass('textHover');
    $("#start").removeClass('blackHover');
    $("#start").css("cursor", "auto");
    $("#center-button").find("span").animate({opacity:0});
    $("#center-button").css("border-top", "0");
    callback();
}

//opens the about page
function aboutPage() {
    //animate top and title
    $("#innertext").css("opacity", "0");
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1262px", marginLeft: "237px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                //page text
                document.getElementById("innertext").innerHTML = "I'm David/Zhiyuan/致远, a student at Swarthmore College in Swarthmore, Pennsylvania. <br> I'm a computer science major, set to graduate in May of 2018. <br> <br> Relevant interests include software development, building web pages, and generating creative solutions to technical problems. <br> You can check out samples of my work over in the Projects section, or download my resume to see my skillset. <br> <br> <br> Outside of academics and programming, I love keeping physically fit, practicing my Chinese, and rock climbing/bouldering. <br> <br> My biggest hobby is playing video games, but nearly all of that time is devoted toward a single game, Super Smash Bros. Melee. <br> Currently, I am a professional-level player sponsored by EndGameTV. <br> See the Melee section for more info!";
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#innertext").css({
                    "position": "fixed",
                    "text-align": "left",
                    "top": "50px",
                    "width": "1500px",
                    "height": "550px",
                    "line-height": "200%",
                    "font-size": "15pt"
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
                    $("#profile").css({"visibility": "visible"});
                    $("#resume").css({"visibility": "visible"});
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
                //page text
                document.getElementById("innertext").innerHTML = "";
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#innertext").css({
                    "top": "50px",
                    "width": "1500px",
                    "height": "550px",
                    "line-height": "200%"
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

    $("#innertext").css("opacity", "0");
    //animate top and title
    $("#center-button").animate({width: "1500px"}, 200, "linear", function() {
        $("#center-button").animate({height: "600px", top: "400.9px"}, 200, "linear", function() {
            //top slide in; marginLeft necessary for right to left
            $("#sliderleft").css({"opacity" : "1"});
            $("#sliderright").css({"opacity" : "1"});
            $("#sliderleft").animate({width: "1320px", marginLeft: "178px"}, 500);
            $("#sliderright").animate({width: "25px"}, 500, function() {
                //page text
                document.getElementById("innertext").innerHTML = "In the world of competitive Super Smash Bros. Melee, I am R2DLiu, a professional-level player sponsored by <a class='link' href='http://endgametv.esportsify.com/articles/news/gaming/21/welcome-r2dliu-to-egtv'>EndGameTV</a>. <br> I started playing competitively in 2014 as a Sheik player, and over the following year rose to the top of my region while switching to Fox, who has been my character of choice since. <br> <br> My Doc Kids article, which details my Melee biography, can be found <a class='link' href='http://peekand.co/this-week-in-e-sports/smash/doc-kids/r2dliu/'>here<a>. <br> You can also read my <a class='link' href='https://www.ssbwiki.com/Smasher:R2DLiu'>ssbwiki profile<a> for my tournament history and player card. <br> <br> Follow me on  <a class='link' href='https://twitch.tv/r2dliu'>Twitch</a> and <a class='link' href='https://twitter.com/r2_dliu'>Twitter</a> for updates!";
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $(".link").css({
                    "text-decoration": "underline",
                    "color": "#777777"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#innertext").css({
                    "position": "fixed",
                    "text-align": "left",
                    "top": "50px",
                    "width": "1500px",
                    "height": "550px",
                    "line-height": "200%",
                    "font-size": "15pt"
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
                $("#twitch-embed").css({"visibility": "visible"});
                $("#pagetitle").animate({opacity:1}, function() {
                    $("#center-button").find("span").animate({opacity:1});
                    $("#meleefox").animate({opacity:0.6});
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
                //page text
                document.getElementById("innertext").innerHTML = "";
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#innertext").css({
                    "top": "50px",
                    "width": "1500px",
                    "height": "550px",
                    "line-height": "200%"
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
                //page text
                document.getElementById("innertext").innerHTML = "";
                $("#center-button").css({
                    "overflow" : "visible"
                });
                $("#innerbox").css({
                    "margin-right" : "-23px",
                    "margin-bottom": "0px",
                    "height": "560px"
                });
                $("#innertext").css({
                    "top": "50px",
                    "width": "1500px",
                    "height": "550px",
                    "line-height": "200%"
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
        $("#innertext").animate({opacity: "0"}, 500, function() {
            $("#twitch-embed").animate({opacity: "0"});
            $("#meleefox").animate({opacity: "0"}, 500, function() {
                $("#twitch-embed").css({"visibility" : "hidden"});
                $("#meleefox").css({"visibility" : "hidden"});
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
    $("#innertext").css({
        "top": "",
        "width": "",
        "height": "",
        "line-height": "",
        "overflow-x": "",
        "font-size": "",
        "position" : ""
    });
    $("#innerbox").css({
        "margin-right" : "",
        "margin-bottom": "",
        "height": "",
        "overflow-x": ""
    });
    document.getElementById("innertext").innerHTML = "ABOUT ME";
    $("#innertext").animate({opacity:1});
    $("#start").addClass('textHover');
    $("#start").addClass('blackHover');
    $("#start").css("cursor", "pointer");
    $("#center-button").animate({height: "45px", top: "70%"}, function() {
        $("#name").animate({opacity:1});
        $("#blurb").animate({opacity:1});
    });
    $("#center-button").one('click', function() {
        currentPage = "about";
        explodePage("center");
    });
}
