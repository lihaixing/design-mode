class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            alert('已经是show了');
            return;
        }
        this.state = 'show'
        console.log('====>show')
    }
    hide() {
        if (this.state === 'hide') {
            alert('已经是hide了');
            return;
        }
        this.state = 'hide'
        console.log('====>hide')
    }
}

LoginForm.getInstance = (() => {
    let form;
    return function () {
        if (!form) {
            form = new LoginForm()
        }
        return form
    }
})();

const page1login = LoginForm.getInstance();
page1login.show();
const page2login = LoginForm.getInstance();
page1login.hide();