const $hrSection = document.getElementById('human-resources');
const $employeeSection = document.getElementById('employee');

const $emButton = document.getElementById('btn-employee');
const $hrButton = document.getElementById('btn-hr');

$hrButton.addEventListener ('click', () => {
    $hrSection.style.zIndex ="1"
    $employeeSection.style.zIndex ="-1"

});

$emButton.addEventListener ('click', () =>{
    $hrSection.style.zIndex = "-1"
    $employeeSection.style.zIndex = "1"
})







