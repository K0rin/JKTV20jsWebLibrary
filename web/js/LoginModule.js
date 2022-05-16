/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class LoginModule{
    login(){
        const userLogin = document.getElementById('login').value;
        const userPassword = document.getElementById('password').value;
        const credential = {
          "login": userLogin, "password": userPassword
        };
        let promiseLogin  = fetch('login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            credentials: 'include',
            body: JSON.stringify(credential)
        });
        promiseLogin.then(response => response.json()).then(response => {
            if(response.status){
                document.getElementById('info').innerHTML=response.info;
                alert("Привет!");
            }else{
                document.getElementById('info').innerHTML=response.info;
            }
        }).catch(error => {
            document.getElementById('info').innerHTML="Ошибка логина"+error;
        })
    }
}

const loginModule = new LoginModule();
export {loginModule};

