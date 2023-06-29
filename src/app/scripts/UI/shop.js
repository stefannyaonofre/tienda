import { deleteProduct, editProduct } from "../main";
import { checkUser, clearSession } from "../services/session"
import { loginBtn, nameUser, welcomeText } from "./domElements";
import { showLogin } from "./loginView";
import { btnEdtitDelete } from "./printProducts";

const btn = btnEdtitDelete();
console.log(btn)

export const verifySession = () => {
    const user = checkUser();
    if(user?.name){
        loginBtn.innerHTML = 'Cerrar Sesión';
        loginBtn.addEventListener('click', () => {
            clearSession()
            showLogin()
        })
        welcomeText.classList.remove('hidden')
        nameUser.innerHTML = user.name;
        // deleteProduct.classList.remove('hidden')
        // editProduct.classList.remove('hidden')
    }else {
        loginBtn.innerHTML = 'Iniciar Sesión';
        loginBtn.addEventListener('click', () => {
            showLogin()
        })
        welcomeText.classList.add('hidden')
        console.log(btn);
        // deleteProduct.classList.add('hidden')
        // editProduct.classList.add('hidden')
    }
}