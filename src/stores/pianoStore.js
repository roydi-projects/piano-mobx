import { decorate, observable, computed, action } from 'mobx';

class pianoStore {
    areas = []
    playedKeyNote = null
    playedKeySound = ""
    position = 0
    keyMapping = {
        'C': "../../assets/high_c.mp3",
        'D': "../../assets/high_d.mp3",
        'E': "../../assets/high_e.mp3",
        'F': "../../assets/high_f.mp3",
        'G': "../../assets/high_g.mp3",
        'A': "../../assets/high_a.mp3",
        'B': "../../assets/high_b.mp3",
    }

    constructor() {
        for (let i = 0; i < 17; i++) {
            let keyIndex = i % 7;
            let keyName = Object.keys(this.keyMapping)[keyIndex];
            this.areas.push({ name: keyName, shape: "rect", coords: [i * 43, 0, 43 + (i * 44), 232] })
        }
    }

    get areasForView() {
        return {
            name: "test",
            areas: this.areas
        };
    }

    get getPlayedKey() {
        return {
            note: this.playedKeyNote,
            sound: this.playedKeySound,
        };
    }

    onKeyClick(note) {
        this.position = 0;
        this.playedKeyNote = note;
        this.playedKeySound = this.keyMapping[note];
    };

    onFinishedPlaying() {
        this.playedKeyNote = null;
        this.playedKeySound = '';
    };

    onPlaying(data) {
        this.position = data.position;
    }
}

decorate(pianoStore, {
    areas: observable,
    playedKeyNote: observable,
    playedKeySound: observable,
    position: observable,
    soundStatus: observable,
    areasForView: computed,
    getPlayedKey: computed,
    onKeyClick: action.bound,
    onFinishedPlaying: action.bound,
    onPlaying: action.bound,
})

export default new pianoStore();