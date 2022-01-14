export const showSidebar = () => {
    const sidebar = document.querySelector('.content-sidebar');
    sidebar.style.top = 0
}

export const hiddenSidebar = (e) => {
    const sidebar = document.querySelector('.content-sidebar');
    sidebar.style.top = '-100%'
}