export class ChartFormater {
    static Bar(original: any) {
        return original.sessions.map((session: any) => ({
            day: new Date(session.day).getDate().toString().padStart(1, '0'),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }

    static Average(original: any) {
        function formatDay(chiffre: any) {
            if (chiffre === 1) {
                return "L";
            } else if (chiffre === 2) {
                return "M";
            } else if (chiffre === 3) {
                return "M";
            } else if (chiffre === 4) {
                return "J";
            } else if (chiffre === 5) {
                return "V";
            } else if (chiffre === 6) {
                return "S";
            } else if (chiffre === 7) {
                return "D";
            }
            else {
                return "Chiffre invalide";
            }
        }

        return original.sessions.map((session: any) => ({
            day: formatDay(session.day),
            sessionLength: session.sessionLength
        }));
    };
}