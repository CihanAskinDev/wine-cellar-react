import { useState } from "react";

export default function Drinks() {
    const [drinkType, setDrinkType] = useState("reds");
    const [drinkList, setDrinkList] = useState([]);

    const getDrink = async (drinkType) => {
        const res = await fetch(`https://api.sampleapis.com/wines/${drinkType}`);
        const data = await res.json();
        setDrinkList(data);
    }
    return (
        <section>
            <nav>
                <button onClick={() => setDrinkType("reds")}>Red</button>
                <button onClick={() => setDrinkType("Whites")}>white</button>
                <button onClick={() => setDrinkType("sparkling")}>sparkling</button>
                <button onClick={() => setDrinkType("rose")}>rose</button>
                <button onClick={() => setDrinkType("dessert")}>dessert</button>
                <button onClick={() => setDrinkType("port")}>port</button>
            </nav>

            <button onClick={() => getDrink(drinkType)}>Get Drink</button>

            <h2>Title</h2>
            <h2>{drinkType}</h2>
            <div className="drink-list">
                {
                    !drinkList
                        ? <p>No List</p>
                        : drinkList.map((element, index) => {
                            return (
                                <div key={index}>
                                    <img src={element.image} alt="cover" />
                                    <h3>{element.wine}</h3>
                                    <p>Location: {element.location}</p>
                                    <p>Rating: {element.rating.average}</p>
                                    <p>Reviews: {element.rating.reviews}</p>
                                </div>
                            )
                })
                    }

            </div>
        </section >
    )
}