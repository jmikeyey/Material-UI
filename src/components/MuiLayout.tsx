import { Box } from "@mui/material"

const MuiLayout = () => {
    return (
        <>
            <Box  sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '16px',
                '&:hover': {
                    backgroundColor: 'primary.light',
                },
            }}>
                Codevolotion
            </Box>
            <Box  display='flex' height='100px' width='100px' bgcolor='success.light' p={2} mt='10px'>
            Codevolotion
        </Box>
        </>
    )
}

export default MuiLayout
