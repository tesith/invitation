import Image from '../image.js'
import heartImage from '../../assets/heart.png'
import './header.css'

const Header = (...props) => {
    return (
        <Image src={heartImage} width="100" height="100" alt="cannot loaded" props={props} />
    )
}

export default Header;