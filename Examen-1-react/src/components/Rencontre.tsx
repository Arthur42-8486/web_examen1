import CatItem from "./CatItem"
import "../style/Rencontre.css"
import { catList } from "../data/data"
import { useState } from "react"

function Rencontre (){
    const [like, setLike] = useState<number>(0)
    
    function traiterClic(){
        setLike(like + 1)
    }

    return(
        <div className="lmj-rencontre">
            <h1>Nos membres</h1>
            <div className="lmj-rencontre-item">
                {catList.map(cat =>
                    <CatItem
                        key={cat.id}
                        cat={cat}
                    />
                )}
            </div>
        </div>
    )
}

export default Rencontre