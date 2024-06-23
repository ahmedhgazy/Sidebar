
const Sidebar = document.querySelector(".left-side");
function ToggleSidebar() {
    if (Sidebar.classList.contains("sidebar-hidden")) {
        Sidebar.classList.remove("sidebar-hidden");
        Sidebar.classList.add("sidebarShown");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    } else {
        Sidebar.classList.remove("sidebarShown");
        Sidebar.classList.add("sidebar-hidden");
        document.body.style.backgroundColor = "#f8fafc";


    }
}

// Hide sidebar if clicking outside of it
document.addEventListener('click', function (event) {
    const isClickInsideSidebar = Sidebar.contains(event.target);
    const isClickOnToggleButton = event.target.closest('.fa-bars');

    if (!isClickInsideSidebar && !isClickOnToggleButton) {
        Sidebar.classList.remove("sidebarShown");
        Sidebar.classList.add("sidebar-hidden");
        document.body.style.backgroundColor = "#f8fafc";

    }
});
