import { Box, Stack, Divider } from "@mui/material"

const MuiLayout = () => {
    return (
        <Stack 
            sx={{
                border: '1px solid',
            }}
            direction='row'
            spacing={2}
            divider={<Divider orientation="vertical" flexItem sx={{backgroundColor: 'red'}} />}
        >
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
            <Box  display='flex' height='100px' width='100px' bgcolor='success.light' p={2} >
                Codevolotion
            </Box>
        </Stack>
    )
}

export default MuiLayout
