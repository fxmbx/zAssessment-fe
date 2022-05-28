import React, { useState } from 'react'
import { Collapse, IconButton } from '@material-ui/core'
import { connect } from 'react-redux'
import Alert from '@mui/material/Alert'
import Close from '@material-ui/icons/Close'

const Alerts = (props) => {
    const { alert } = props
    const [open, setOpen] = useState(true)
    if (alert?.type === 'SET_ALERT') {
        return (
            <>
                <Collapse in={open} style={{ position: 'sticky' }}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        severity={alert?.payload?.type}
                        variant="filled"
                    >
                        {alert?.payload?.message}
                    </Alert>
                </Collapse>
            </>
        )
    } else {
        return null
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alertReducer
    }
}
export default connect(mapStateToProps)(Alerts);