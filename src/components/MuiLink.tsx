import { Stack, Link, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href='#' variant='body2'>
                Link
            </Link>
            <Typography variant='h6' component='div'>
                <Link href='#' color='secondary' underline='none'>
                    Secondary
                </Link>
            </Typography>
        </Stack>
    )
}

export default MuiLink
