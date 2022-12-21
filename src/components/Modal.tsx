import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const CommonModal = (props: any) => {

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
        >
            {
                props.children
            }
        </Dialog>
    )
}

export default CommonModal;