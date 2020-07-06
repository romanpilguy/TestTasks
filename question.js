class Question {
    constructor(data){
        this.data = data
    }
    toHtml(){
        let str = `<h2>${this.data.text}</h2>`
        this.data.answers.forEach(el => {
            str += `<p><input type = ${this.data.type} name = ${this.data.id} value = ${el}>${el}</p>`
        });
        return str
    }
}