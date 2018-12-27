import React from "react";
import ImageMapper from 'react-image-mapper';
import {  observer, inject } from 'mobx-react';
import NotePlayer from '../NotePlayer';
import "./Piano.css";
import pianoImage from "../../images/Piano-Keys-2-Octaves-734x232.jpg"

const Piano = class extends React.PureComponent {
    render() {
        return (
            <div className="piano">
                <ImageMapper
                    src={pianoImage}
                    map={this.props.pianoStore.areasForView}
                    onClick={(e) => {
                        this.props.pianoStore.onKeyClick(e.name);
                    }}
                />
                <NotePlayer />
            </div>
        );
    }
};

export default inject("pianoStore")(
    observer(Piano)
);