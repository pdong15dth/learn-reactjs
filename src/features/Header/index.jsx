import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Register from 'features/Auth/components/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menuItem: {
        color: '#fff',
    }
}));

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}><Link to='/'>Ez Shop</Link></Typography>
                    <NavLink to='/todos'>
                        <Button className={classes.menuItem}>To do</Button>
                    </NavLink>
                    <NavLink to='/albums'>
                        <Button className={classes.menuItem}>Album</Button>
                    </NavLink>
                    <Button className={classes.menuItem} onClick={handleClickOpen}>Register</Button>
                </Toolbar>
            </AppBar>
            <div>
                <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <DialogContentText>
                            <Register></Register>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
