const boxStyling = {
    backgroundColor: '#FAF9F6',
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: '100%',
    width: 'auto',
    height: 'auto'
}

const typoSubtitle = {
    color: '#000',  fontSize: 16, marginTop: '4rem'
}

const typoText = {
    color: '#000',
    fontSize: 20
}

const buttonInBox = {
    borderRadius: 28,
    textTransform: 'none',
    fontWeight: 'normal',
    fontSize: 16,
    padding: '-10px -5px -5px -10px',
    color: '#fff',
    backgroundColor: '#073042',
    borderWidth: '2px',
    marginTop: '2rem',
    marginBottom: '8rem',
    "&:hover": {
        color: '#3ddc84',
        backgroundColor: '#073042',
        borderColor: '#073042',
        borderWidth: '2px',
        padding: '-10px -5px -5px -10px',
    },
}

const textAreaStyle = {
    paddingLeft: '64px',
    paddingRight: '64px',
    justifyContent: 'center'
}

const cardStyle = {
    marginBottom: '2rem',
    borderWidth: '1px',
    borderColor: 'lightgrey',
    borderRadius: '1%'
}

const cardContentStyle = {
    backgroundColor: '#fff',
    marginTop: '10rem'
}

const nameStyle = {
    marginTop: '1.2rem'
}

const developerAtStyle = {
    marginTop: '-0rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
}

const cardLinkStyle = {
    color: '#202124'
}

const listStyling = {
    marginLeft:'1rem',
    listStyle: 'disc outside'
}

const chipStyling = {
    fontSize: '1.33rem',
    marginTop: '1rem',
    marginBottom: '1rem'
}

const  avatarStyle = {
    width: '15rem',
    height: '15rem',
    marginTop: '-9rem',
    border: '0.25rem solid white'
}

const typographyContent = {
    marginBottom: '1rem'
}

const typographyHeader = {
    marginTop: '0.5rem',
    fontWeight: 'bold'
}

const typography = {
    color: '#202124'
}

const buttonMaterial ={
    width: 'auto',
    margin: 'auto',
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
    color: '#fff',
    "&:hover": {
        color: '#fff'
    }
}

const cardMaterial = {
    margin: '1.2rem',
    backgroundColor: '#fff',
    minWidth: 'auto'
}

const leftSideUserCardGridStyling = {
    paddingLeft: '4px',
    paddingRight: '4px',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '5%'
}


export {
    boxStyling,
    typoSubtitle,
    typoText,
    buttonInBox,
    textAreaStyle,
    cardStyle,
    cardContentStyle,
    nameStyle,
    developerAtStyle,
    cardLinkStyle,
    listStyling,
    chipStyling,
    avatarStyle,
    typographyContent,
    typographyHeader,
    typography,
    buttonMaterial,
    cardMaterial,
    leftSideUserCardGridStyling
}