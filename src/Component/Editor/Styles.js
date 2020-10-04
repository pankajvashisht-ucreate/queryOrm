export const Styles = ({ colors }) => ({
	main: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "550px",
		borderBottom: `25px solid ${colors.backgroud}`,
		borderLeft: `10px solid ${colors.backgroud}`,
		borderRight: `10px solid ${colors.backgroud}`,
		borderTop: `5px solid ${colors.backgroud}`,
		"& .heading": {
      background: colors.black,
      display: 'flex',
      justifyContent: 'space-between',
      height: "50px",
      alignItems: 'center',
      '& h6':{
        textTransform: "uppercase",
        display: "flex",
        paddingLeft: "20px",
        alignItems: "center",
        color: colors.textColor,
      },'& select':{
        width: '200px',
        height: '30px',
        paddingRight: "20px",
        outline: 'none'
      }
		},
	},
});