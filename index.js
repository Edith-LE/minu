const $hrSection = document.getElementById('human-resources');
const $employeeSection = document.getElementById('employee');

const $emButton = document.getElementById('btn-employee');
const $hrButton = document.getElementById('btn-hr');

$hrButton.addEventListener ('click', () => {
    $hrButton.blur()
    $hrSection.style.zIndex ="1"
    $employeeSection.style.zIndex ="-1"

});

$emButton.addEventListener ('click', () =>{
    $emButton.blur() // para que no quede marcada la selección 
    $hrSection.style.zIndex = "-1" //posición que tomará al darle click
    $employeeSection.style.zIndex = "1"
})







