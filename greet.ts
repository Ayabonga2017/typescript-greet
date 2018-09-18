export enum language {
    afr,
    eng,
    xhosa
}

export function greet(name: string, chosenLanguage: language) {
    if (chosenLanguage === language.afr) {
        return "Goeie more, " + name;
    }

    if (chosenLanguage === language.eng) {
        return "Good morning, " + name;
    }

    if (chosenLanguage === language.xhosa) {
        return "Molo, " + name;
    }
}

