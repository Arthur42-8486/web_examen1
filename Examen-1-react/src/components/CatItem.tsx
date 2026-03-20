import type { CatData } from "../data/data"
import "../style/CatItem.css"

interface CatItemProps{
    cat: CatData
}

function CatItem({cat}: CatItemProps){
    return(
        <div className="lmj-cat-row">
            <img src={cat.photo} alt="photo" className="lmj-cat-row-image"/>
            {cat.nom}
            {cat.occupation}
            {cat.recherche}
        </div>
    )
}

export default CatItem