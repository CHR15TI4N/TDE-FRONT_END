import { useState } from "react";
import './Numbers.css';

const Numbers = ({fontColor}) => {

    const listNumbers = [2, 5, 1, 8, 6, 40, 9, 2, 19, 2];

    const [order, setOrder] = useState();

    const sortNumber = (a, b) => {
        return (a - b)
    }

    const orderNumbers = () => {
        const newOrder = listNumbers.sort(sortNumber)
        setOrder(newOrder)
    }

    return (
        <div className="numberContainer" style={{color: fontColor}}>
            <button onClick={orderNumbers}>Clique para ordernar os números</button>
            <h3>Números: {listNumbers} {order}</h3>
        </div>
    );
}

export default Numbers;