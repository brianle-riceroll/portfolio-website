import image from './assets/8bit_me_transparent.png'

function Header(prop) {
    return(
        <>
            <div className="header-div">
                <img src={image} alt="8bit image" height="100" className="_8bit-img"></img>
                <h1 className="title">{prop.name}</h1>
            </div>
            <hr></hr>
        </>
    ) 
}

export default Header