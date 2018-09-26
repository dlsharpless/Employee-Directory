let hideInputBar = function () {
    document.getElementById("name").style.display = "none";
    document.getElementById("officeNum").style.display = "none";
    document.getElementById("phoneNum").style.display = "none";
    document.getElementById("add").style.display = "none";
    document.getElementById("verify").style.display = "none";
    document.getElementById("update").style.display = "none";
    document.getElementById("delete").style.display = "none";
}

let view = function () {
    $("#name").val("");
    $("#officeNum").val("");
    $("#phoneNum").val("");
    hideInputBar();
    window.scrollTo(0,0);
    $(".navButton").removeClass("navActive");
    $("#content").empty();
    for (i = 0; i < employeeList.length; i++) {
        $("#content").append(`<div class='entry'><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
    }
}

let displayView = function () {
    view();
    $("#displayView").addClass("navActive");
}

let displayAdd = function () {
    view();
    $("#displayAdd").addClass("navActive");
    if (window.matchMedia("(min-width: 576px)").matches) {
        document.getElementById("name").style.display = "inline-block";
        document.getElementById("officeNum").style.display = "inline-block";
        document.getElementById("phoneNum").style.display = "inline-block";
        document.getElementById("add").style.display = "inline-block";
    } else {
        document.getElementById("name").style.display = "block";
        document.getElementById("officeNum").style.display = "block";
        document.getElementById("phoneNum").style.display = "block";
        document.getElementById("add").style.display = "block";
    }
}

let displayVerify = function () {
    view();
    $("#displayVerify").addClass("navActive");
    if (window.matchMedia("(min-width: 576px)").matches) {
        document.getElementById("name").style.display = "inline-block";
        document.getElementById("verify").style.display = "inline-block";
    } else {
        document.getElementById("name").style.display = "block";
        document.getElementById("verify").style.display = "block";
    }
}

let displayUpdate = function () {
    view();
    $("#displayUpdate").addClass("navActive");
    if (window.matchMedia("(min-width: 576px)").matches) {
        document.getElementById("name").style.display = "inline-block";
        document.getElementById("officeNum").style.display = "inline-block";
        document.getElementById("phoneNum").style.display = "inline-block";
        document.getElementById("update").style.display = "inline-block";
    } else {
        document.getElementById("name").style.display = "block";
        document.getElementById("officeNum").style.display = "block";
        document.getElementById("phoneNum").style.display = "block";
        document.getElementById("update").style.display = "block";
    }
}

let displayDelete = function () {
    view();
    $("#displayDelete").addClass("navActive");
    if (window.matchMedia("(min-width: 576px)").matches) {
        document.getElementById("name").style.display = "inline-block";
        document.getElementById("delete").style.display = "inline-block";
    } else {
        document.getElementById("name").style.display = "block";
        document.getElementById("delete").style.display = "block";
    }
}

let add = function () {
    if ($("#name").val() === "" || $("#officeNum").val() === "" || $("#phoneNum").val() === "") {
        $("#content").html("<p>All fields are required</p>");
    } else {
        for (i = 0; i < employeeList.length; i++) {
            if ($("#name").val().toLowerCase() === employeeList[i].name.toLowerCase()) {
                $("#content").html("<p>Employee name already exists</p>");
                return;
            }
        }
        employeeList.push({name: $("#name").val(),officeNum: $("#officeNum").val(),phoneNum: $("#phoneNum").val()});
        $("#name").val("");
        $("#officeNum").val("");
        $("#phoneNum").val("");
        view();
        displayAdd();
    }
}

let verify = function () {
    if ($("#name").val() === "") {
        $("#content").html("<p>Please enter a name</p>");
    } else {
        for (i = 0; i < employeeList.length; i++) {
            if ($("#name").val().toLowerCase() === employeeList[i].name.toLowerCase()) {
                $("#content").html("<p>Yes</p>");
                return;
            }
        }
        $("#content").html("<p>No</p>");
    }
}

let update = function () {
    if ($("#name").val() === "" || $("#officeNum").val() === "" || $("#phoneNum").val() === "") {
        $("#content").html("<p>All fields are required</p>");
    } else {
        for (i = 0; i < employeeList.length; i++) {
            if ($("#name").val().toLowerCase() === employeeList[i].name.toLowerCase()) {
                employeeList[i] = {name: $("#name").val(),officeNum: $("#officeNum").val(),phoneNum: $("#phoneNum").val()};
                $("#name").val("");
                $("#officeNum").val("");
                $("#phoneNum").val("");
                view();
                displayUpdate();
                return;
            }
        }
        $("#content").html("<p>Employee name not found</p>");
    }
}

let del = function () {
    if ($("#name").val() === "") {
        $("#content").html("<p>Please enter a name</p>");
    } else {
        for (i = 0; i < employeeList.length; i++) {
            if ($("#name").val().toLowerCase() === employeeList[i].name.toLowerCase()) {
                for (i; i < employeeList.length; i++) {
                    employeeList[i] = employeeList[i + 1];
                }
                employeeList.length = employeeList.length - 1;
                $("#name").val("");
                $("#officeNum").val("");
                $("#phoneNum").val("");
                view();
                displayDelete();
                return;
            }
        }
        $("#content").html("<p>Employee name not found</p>");
    }
}

function inlineOrNot() {
    if (window.matchMedia("(min-width: 576px)").matches) {
        if (document.getElementById("add").style.display === "block") {
            document.getElementById("name").style.display = "inline-block";
            document.getElementById("officeNum").style.display = "inline-block";
            document.getElementById("phoneNum").style.display = "inline-block";
            document.getElementById("add").style.display = "inline-block";
            return;
        }
        if (document.getElementById("verify").style.display === "block") {
            document.getElementById("name").style.display = "inline-block";
            document.getElementById("verify").style.display = "inline-block";
            return;
        }
        if (document.getElementById("update").style.display === "block") {
            document.getElementById("name").style.display = "inline-block";
            document.getElementById("officeNum").style.display = "inline-block";
            document.getElementById("phoneNum").style.display = "inline-block";
            document.getElementById("update").style.display = "inline-block";
            return;
        }
        if (document.getElementById("delete").style.display === "block") {
            document.getElementById("name").style.display = "inline-block";
            document.getElementById("delete").style.display = "inline-block";
            return;
        }
    } else {
        if (document.getElementById("add").style.display === "inline-block") {
            document.getElementById("name").style.display = "block";
            document.getElementById("officeNum").style.display = "block";
            document.getElementById("phoneNum").style.display = "block";
            document.getElementById("add").style.display = "block";
            return;
        }
        if (document.getElementById("verify").style.display === "inline-block") {
            document.getElementById("name").style.display = "block";
            document.getElementById("verify").style.display = "block";
            return;
        }
        if (document.getElementById("update").style.display === "inline-block") {
            document.getElementById("name").style.display = "block";
            document.getElementById("officeNum").style.display = "block";
            document.getElementById("phoneNum").style.display = "block";
            document.getElementById("update").style.display = "block";
            return;
        }
        if (document.getElementById("delete").style.display === "inline-block") {
            document.getElementById("name").style.display = "block";
            document.getElementById("delete").style.display = "block";
        }
    }
}

hideInputBar();
window.matchMedia("(min-width: 576px)").addListener(inlineOrNot);

$("#displayView").on("click",displayView);
$("#displayAdd").on("click",displayAdd);
$("#displayVerify").on("click",displayVerify);
$("#displayUpdate").on("click",displayUpdate);
$("#displayDelete").on("click",displayDelete);

$("#add").on("click",add);
$("#verify").on("click",verify);
$("#update").on("click",update);
$("#delete").on("click",del);

document.getElementById("name").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (document.getElementById("add").style.display != "none") {
            add();
        }
        if (document.getElementById("verify").style.display != "none") {
            verify();
        }
        if (document.getElementById("update").style.display != "none") {
            update();
        }
        if (document.getElementById("delete").style.display != "none") {
            del();
        }
    }
});

document.getElementById("officeNum").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (document.getElementById("add").style.display != "none") {
            add();
        }
        if (document.getElementById("update").style.display != "none") {
            update();
        }
    }
  });

  document.getElementById("phoneNum").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if (document.getElementById("add").style.display != "none") {
            add();
        }
        if (document.getElementById("update").style.display != "none") {
            update();
        }
    }
  });