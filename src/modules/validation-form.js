const validationForm = () => {
    const telInputs = document.querySelectorAll('input[type=tel]');
    const emailInputs = document.querySelectorAll('input[type=email]');
    const namelInputs = document.querySelectorAll('input[name="user_name"]');
    const userMessage = document.getElementById("form2-message");
    // const userForms = document.querySelectorAll('form[name="user_form"]');

    let telInputText;
    let emailInputText;
    let userNameText;
    let userMessageText;

    userMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ -]/ig,""); // Дифис, пробел и кириллица
        userMessageText = userMessage.value;
    });

    namelInputs.forEach((userName) => {
        userName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ -]/ig,""); // Дифис, пробел и кириллица
            userNameText = userName.value;
            // console.log(userNameText);
        });
    });
    
    telInputs.forEach((telInput) => {
        telInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d\(\)\-]/g,""); // Разрешен ввод только цифр 0-9 и символов => ()-
            telInputText = telInput.value;
            // console.log(telInputText);
        });
    });
    emailInputs.forEach((emailInput) => {
        emailInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']/g,""); //блок любых символов кроие латинских букв A-Za-z и символов => @  -  _  . ! ~ * '
            emailInputText = emailInput.value;
            // console.log(emailInputText);
        });
    });
} 

export default validationForm;