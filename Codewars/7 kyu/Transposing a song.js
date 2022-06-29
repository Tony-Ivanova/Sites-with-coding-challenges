function transpose(song, interval) {
    const sharpNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    const flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']

    return song.map(note => {
        let isFlatNote = flatNotes.indexOf(note);
        let isSharpNote = sharpNotes.indexOf(note);

        return isSharpNote === -1
            ? note = sharpNotes[(isFlatNote + interval + 12) % 12]
            : note = sharpNotes[(isSharpNote + interval + 12) % 12]
    })
}