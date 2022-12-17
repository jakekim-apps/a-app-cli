import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const CommonDialog = (props: any) => {
    const { isOpen, onClose, title, body, btnLabel, btnAction } = props;

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
        >
            <DialogTitle>
                { title }
            </DialogTitle>
            <DialogContent>
                { body }
            </DialogContent>
            <DialogActions>
                <Button onClick={btnAction}> { btnLabel } </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CommonDialog