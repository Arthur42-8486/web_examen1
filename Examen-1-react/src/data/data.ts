import cachou from '../assets/Cachou.jpg'
import caramel from '../assets/Caramel.jpg'
import felix from '../assets/Felix.jpg'
import fripouille from '../assets/Fripouille.jpg'
import lola from '../assets/Lola.jpg'
import max from '../assets/Max.jpg'
import myrtille from '../assets/Myrtille.jpg'

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
