export const Styles = ({ colors, fonts }) => ({
	main: {
    '& h5':{
      textAlign: 'center',
      fontSize: 'initial',
      color: colors.red
    },
    '& h6':{
      textAlign: 'center',
      fontSize: 'initial',
      color: colors.red
    },
    '& .button':{
      width:'200px',
      display: 'flex',
      '& button':{
        width: '100%',
        height: '40px',
        margin: '10px'
      }
    }
  },
	codeEditor: {
		display: "flex",
	},
});