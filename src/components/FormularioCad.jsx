import React, { Component } from "react";

class FormularioCad extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Titulo" />
                <textarea placeholder="Escreva sua nota"></textarea>
                <button>Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCad;