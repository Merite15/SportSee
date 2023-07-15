export class ChartFormater {
    static Bar(original: any) {
        return original.sessions.map((session: any) => ({
            day: new Date(session.day).getDate().toString().padStart(1, '0'),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }
}