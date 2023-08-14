import { AverageFormater } from '../types/Formater/Average';
import { BarFormater } from '../types/Formater/Bar';
import { InfoFormater } from '../types/Formater/Info';
import { PerformanceFormater } from '../types/Formater/Performance';

export class ChartFormater {

    static Bar(original: BarFormater) {
        return original.sessions.map((session) => ({
            day: new Date(session.day).getDate().toString().padStart(1, '0'),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }

    static Average(original: AverageFormater) {
        function formatDay(chiffre: number | string) {
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

        return original.sessions.map((session) => ({
            day: formatDay(session.day),
            sessionLength: session.sessionLength
        }));
    };

    static Performance(original: PerformanceFormater) {
        function formatKind(chiffre: string | number) {
            if (chiffre === 1) {
                return "Cardio";
            } else if (chiffre === 2) {
                return "Energie";
            } else if (chiffre === 3) {
                return "Endurance";
            } else if (chiffre === 4) {
                return "Force";
            } else if (chiffre === 5) {
                return "Vitesse";
            } else if (chiffre === 6) {
                return "intensité"
            }
            else {
                return "Chiffre invalide";
            }
        }

        const data = original.data.map((performance) => ({
            kind: formatKind(performance.kind),
            value: performance.value
        }));

        const reversedData = [...data].reverse();

        return reversedData;
    }

    static Info(original: InfoFormater) {
        return {
            calorie: original.calorieCount,
            protein: original.proteinCount,
            glucide: original.carbohydrateCount,
            lipid: original.lipidCount
        }
    };
}