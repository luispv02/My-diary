export const showSidebar = () => {
    const sidebar = document.querySelector('.content-sidebar');
    console.log(sidebar)
    sidebar.style.left = 0
}

export const hiddenSidebar = (e) => {
    const sidebar = document.querySelector('.content-sidebar');
    console.log(sidebar)
    sidebar.style.left = '-100%'
}