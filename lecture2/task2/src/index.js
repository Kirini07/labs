const form = document.getElementById('authentication');

const authenticationData = {
    firstName: null,
    lastName: null,
    login: null,
    password: null
};
const deleteWarning = () => {
    document.querySelectorAll('.warning').forEach(e => e.remove())
}
form.addEventListener('submit', e =>{
    e.preventDefault();
    deleteWarning();
    let flag = false;
    const child = [e.target.firstName, e.target.lastName, e.target.login, e.target.password ];
    child.forEach(e => {
        if(e.value === undefined || e.value === null || e.value === ''){
            let warn = document.createElement('div');
            warn.classList.add('warning');
            warn.textContent = `Please type you'r ${e.name}`;
            form.insertBefore(warn, e);
            setTimeout(deleteWarning, 5000);
            return;
        }else{
            authenticationData[e.name] = e.value;
            flag = true;
        }
    });
    flag && console.log(authenticationData);
});

