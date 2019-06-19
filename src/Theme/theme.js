export default {
palette: {
    primary: {
      light: '#c786d3',
      main: '#ba68c8',
      dark : '#82488c',
      constrastText: "#fff",
    },
    secondary: {
      light: '#ff99bb',
      main: '#ff80ab',
      dark: '#b25977',
      constrastText: "#fff",
  }
}, 
typography: {
  useNextVariants: true,
},
form: {
  textAlign: 'center',
  color: 'white'

},
image: {
  margin: '20px auto 20px auto'
},
pageTitle: {
  margin: '10px auto 10px auto',
  textAlign: 'center',
},
textField: {
  margin: '10px auto 10px auto',
  width: 600,
  color: 'white'
},
button: {
  marginTop: 20,
  background: 'linear-gradient(45deg, #ff80ab 30%, #ff99bb 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '10px auto 10px auto',    
  position: 'relative'
},
customError: {
  color: 'red',
  fontSize: '0.8rem',
  marginTop: 10,
},
login:{
  maxWidth: 800,
  height: 480,
  background:'#c786d3',
},
progress: {
  position: 'absolute',
  color: '#F8E71C'
},
'& hr': {
  border: 'none',
  margin: '0 0 10px 0'
},
buttons: {
  textAlign: 'center',
  '& a':{
    margin: '20px 10px'
  }
},
invisibleSeparator: {
  border: 'none',
  margin: 4
},
visibleSeparator: {
  width: '100%',
  borderBottom: '1px white',
  marginBottom: 20
},
profile: {
  '& .image-wrapper': {
    textAlign: 'center',
    position: 'relative',
    '& button': {
      position: 'absolute',
      top: '80%',
      left: '70%'
    }
  },
  '& .profile-image': {
    width: 200,
    height: 200,
    objectFit: 'cover',
    maxWidth: '100%',
    borderRadius: '50%'
  },
  '& .profile-details': {
    textAlign: 'center',
    '& span, svg': {
      verticalAlign: 'middle'
    }
  },
  '& .bio-container': {
      width: 30,
      textAlign: 'center',
      height: 100,
      maxWidth: '100%',
  },
  '& hr': {
    border: 'none',
    margin: '0 0 10px 0'
  },
},
}