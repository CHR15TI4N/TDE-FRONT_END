import { useState } from "react";

const Input = () => {

    const [name, setName] = useState()

    const MudaH4 = () => {

    }

    return (
        <div>
            <form>
                <label>Digite um nome: 
                    <input
                    type="text"
                    />
                </label>
                <button onClick={MudaH4}>Muda a tag para H4</button>
            </form>
        </div>
    );
}

export default Input;