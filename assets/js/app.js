const cl = console.log;


const sideBarToggle = document.getElementById('sideBarToggle');
const sidebar = document.getElementById('sidebar');
const backDrop = document.getElementById('backDrop');

const onSideBarToggle = (eve) => {
    sidebar.classList.toggle('show')
    backDrop.classList.toggle('d-none')

    sideBarToggle.classList.toggle('active')


}




sideBarToggle.addEventListener('click', onSideBarToggle)
backDrop.addEventListener('click', onSideBarToggle)