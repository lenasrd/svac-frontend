import React from 'react';
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    questionPreview: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer'
        }
    },
}));

export default function Question(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleChange = () => {
        setOpen((prev) => !prev);
    };

    return(
        <main>
            <div className={ classes.questionPreview } onClick={handleChange} >
                <h3>{ props.title }</h3>
                { open ? <ExpandLessIcon/> : <ExpandMoreIcon/> }
            </div>
            <div>
                <Collapse in={open}>
                    { props.children }
                </Collapse>
            </div>
        </main>
    );
}
