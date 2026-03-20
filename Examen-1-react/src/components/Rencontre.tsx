import CatItem from "./CatItem"
import "../style/Rencontre.css"
import { catList } from "../data/data"

function Rencontre (){
    return(
        <div>
            <h1>Nos membres</h1>
            <div>
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