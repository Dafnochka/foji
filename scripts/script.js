$(document).ready(() => {
    $('button').on('click', (event) => {
        event.preventDefault();
        fetch('https://foji-ddc49.firebaseio.com/json', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body:  JSON.stringify({
                role:"Заказчик",
                UserName:"Postks",
                PhoneNumber:"+16774521547",
                Password:"ssss",
                PasswordConfirm:"ssss*",
            })
        })

    });
});