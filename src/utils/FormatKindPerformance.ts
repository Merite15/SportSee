export const FormatKindPerformance = (kind: string): string => {
    const mapping: { en: string; fr: string }[] = [
        { en: 'cardio', fr: 'Cardio' },
        { en: 'energy', fr: 'Energie' },
        { en: 'endurance', fr: 'Endurance' },
        { en: 'strength', fr: 'Force' },
        { en: 'speed', fr: 'Vitesse' },
        { en: 'intensity', fr: 'Intensité' },
    ];
    const mappedKind = mapping.find((mappedValue) => kind === mappedValue.en);
    return mappedKind ? mappedKind.fr : '';
};