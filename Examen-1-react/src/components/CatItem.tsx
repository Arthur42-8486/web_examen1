import type { CatData } from "../data/data"
import coeur from "../image/oui.png"
import "../style/CatItem.css"


interface CatItemProps{
    cat: CatData
    onclick:() => void
}

function CatItem({cat, onclick}: CatItemProps){

    return(
        <div className="lmj-cat-row">
            <img src={cat.photo} alt="photo" className="lmj-cat-row-image"/>
            {cat.nom},
            {cat.occupation},
            {cat.recherche}
            <img src={coeur} alt="coeur" className="lmj-cat-like" onClick={onclick}/>
        </div>
    )
}

export default CatItem