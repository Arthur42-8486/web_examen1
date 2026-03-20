import logo from '../image/scratch.png'
import '../style/Banner.css'

interface BannerProps{
    titre: string
}

function Banner({titre} : BannerProps){
    return(
        <div className='lmj-banner'>
            <img src={logo} alt={titre} className='lmj-logo' />
            <h1 className='lmj-title'>{titre}</h1>
        </div>
    )
}

export default Banner