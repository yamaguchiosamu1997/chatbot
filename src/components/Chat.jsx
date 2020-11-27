import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfill from '../assets/img/no-profile.png'
import Os from '../assets/img/os.png'

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Os} />
                ) : (
                    <Avatar alt="icon" src={NoProfill} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
            </ListItem>
    )
}

export default Chat