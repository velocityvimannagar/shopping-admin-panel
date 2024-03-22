import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export function ConfirmationDialog(props) {
    const { onClose, open, ...other } = props;


    const handleNo = () => {
        onClose(false);
    };

    const handleYes = () => {
        onClose(true);
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            open={open}
            {...other}
        >
            <DialogTitle>Confirm?</DialogTitle>
            <DialogContent dividers>
                Do you want to delete?
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleNo}>
                    No
                </Button>
                <Button onClick={handleYes}>Yes</Button>
            </DialogActions>
        </Dialog>
    );
}