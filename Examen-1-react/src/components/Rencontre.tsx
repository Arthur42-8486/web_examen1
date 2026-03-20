import CatItem from "./CatItem"
import "../style/Rencontre.css"
import { catList } from "../data/data"
import { useState } from "react"

function Rencontre (){
    const [likes, setLike] = useState<number>(0)
    
    function traiterClic(){
        setLike(likes + 1)
    }

    return(
        <div className="lmj-rencontre">
            <h1>Nos membres</h1>
            <div className="lmj-rencontre-item">
                {catList.map(cat =>
                    <CatItem
                        key={cat.id}
                        cat={cat}
                        onclick={traiterClic}
                    />
                )}
            </div>
            <h1>Vos matchs</h1>
            <p>Vous avez liké {likes} chats.</p>
        </div>
    )
}

export default Rencontre