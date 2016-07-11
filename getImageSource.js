'use strict';

function getImageSource(movie: Object, kind: ?string): {uri: ?string} {
    var uri = movie && movie.posters ? movie.posters.thumbnail : null;
    if (uri && kind) {
        uri = uri.resplace('tmb', kind);
    }
    return { uri };
}

export default getImageSource
