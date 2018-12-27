import React from "react";
import { observer, inject } from 'mobx-react';
import Sound from 'react-sound';

const NotePlayer = (props) => {
    return (
        <div>
            <p>Played note: {props.pianoStore.getPlayedKey.note}</p>
            <Sound
                url={props.pianoStore.getPlayedKey.sound}
                playStatus={Sound.status.PLAYING}
                onFinishedPlaying={props.pianoStore.onFinishedPlaying}
                position={props.pianoStore.position}
                onPlaying={props.pianoStore.onPlaying}
            />
        </div>
    )
};

export default inject("pianoStore")(
    observer(NotePlayer)
);