export default function () {
    class Jquery {
        constructor (selector) {
            let els = Array.from(document.querySelectorAll(selector));
            for (let i = 0; i < els.length; i++) {
                this[i] = els[i]
            }
            this.length = els.length;
        }

        text (content) {
            for(let key in this){
                console.log(key)
                this[key]['innerText'] = content;
            }
        }
    }

    window.$ = function (selector) {
        return new Jquery(selector);
    }
}

