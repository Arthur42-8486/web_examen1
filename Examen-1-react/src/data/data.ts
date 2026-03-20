import cachou from '../image/Cachou.jpg'
import caramel from '../image/Caramel.jpg'
import felix from '../image/Felix.jpg'
import fripouille from '../image/Fripouille.jpg'
import lola from '../image/Lola.jpg'
import max from '../image/Max.jpg'
import myrtille from '../image/Myrtille.jpg'

export interface CatData {
    nom: string;
    occupation: string;
    id: number;
    photo: string;
    recherche: string;
}
export const catList: CatData[] = [
    {
        nom: 'Cachou',
        occupation: 'développeur logiciel',
        id: 74488,
        photo: cachou,
        recherche: 'amitié'
    },
    {
        nom: 'Caramel',
        occupation: 'retraité',
        id: 994477,
        photo: caramel,
        recherche: 'relation durable'
    },
    {
        nom: 'Félix',
        occupation: 'épicier',
        id: 198299,
        photo: felix,
        recherche: 'relation durable'
    },
    {
        nom: 'Fripouille',
        occupation: 'opticienne',
        id: 560583,
        photo: fripouille,
        recherche: 'amitié ++'
    },
    {
        nom: 'Lola',
        occupation: 'clown',
        id: 730385,
        photo: lola,
        recherche: 'amitié ++',
    },
    {
        nom: 'Max',
        occupation: 'astronaute',
        id: 479474,
        photo: max,
        recherche: 'amitié',
    },
    {
        nom: 'Myrtille',
        occupation: 'influenceuse',
        id: 479473,
        photo: myrtille,
        recherche: 'relation durable',
    }
]
