function returnRandomLetter(level) {
    let getLetter = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9]

    if (level === 1) {
        return getLetter[Math.round(Math.random() * 2)]
    } else if (level === 2) {
        return getLetter[Math.round(Math.random() * 5)]
    } else if (level === 3) {
        return getLetter[Math.round(Math.random() * 9)]
    } else if (level === 4) {
        return getLetter[Math.round(Math.random() * 14)]
    } else if (level === 5) {
        return getLetter[Math.round(Math.random() * 19)]
    } else if (level === 6) {
        return getLetter[Math.round(Math.random() * 25)]
    } else if (level === 7) {
        return getLetter[Math.round(Math.random() * 35)]
    }
}

export default returnRandomLetter;