import image from './assets/8bit_me_transparent.png'

function Header(prop) {
    return(
        <>
            <div className="header-div">
                <div className="name-img-div">
                    <img src={image} alt="8bit image" height="100" className="_8bit-img"></img>
                    <p className="title">{prop.name}</p>
                </div>

                <nav className="navbar">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </>
    ) 
}

export default Header