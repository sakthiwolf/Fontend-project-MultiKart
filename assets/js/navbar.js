$(document).ready(function() {
    const menu = $(".menu");
    const menuMain = menu.find(".menu-main");
    const goBack = menu.find(".go-back");
    const menuTrigger = $(".mobile-menu-trigger");
    const closeMenu = menu.find(".mobile-menu-close");
    let subMenu;

    menuMain.on("click", function(e) {
        if (!menu.hasClass("active")) {
            return;
        }
        if ($(e.target).closest(".menu-item-has-children").length) {
            const hasChildren = $(e.target).closest(".menu-item-has-children");
            showSubMenu(hasChildren);
        }
    });

    goBack.on("click", function() {
        hideSubMenu();
    });

    menuTrigger.on("click", function() {
        toggleMenu();
    });

    closeMenu.on("click", function() {
        toggleMenu();
    });

    $(".menu-overlay").on("click", function() {
        toggleMenu();
    });

    function toggleMenu() {
        menu.toggleClass("active");
        $(".menu-overlay").toggleClass("active");
    }

    function showSubMenu(hasChildren) {
        subMenu = hasChildren.find(".sub-menu");
        subMenu.addClass("active").css("animation", "slideLeft 0.5s ease forwards");
        const menuTitle = hasChildren.find("i").parent().contents().filter(function() {
            return this.nodeType === 3;
        }).text();
        menu.find(".current-menu-title").html(menuTitle);
        menu.find(".mobile-menu-head").addClass("active");
    }

    function hideSubMenu() {
        subMenu.css("animation", "slideRight 0.5s ease forwards");
        setTimeout(function() {
            subMenu.removeClass("active");
        }, 300);
        menu.find(".current-menu-title").html("");
        menu.find(".mobile-menu-head").removeClass("active");
    }

    $(window).on("resize", function() {
        if ($(this).innerWidth() > 991) {
            if (menu.hasClass("active")) {
                toggleMenu();
            }
        }
    });
});
