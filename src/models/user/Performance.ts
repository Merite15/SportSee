import { UserPerformance as PerfType } from '@/utils/models/UserPerformance';
import { Performance } from '@/utils/types/Performance';
import { FormatPerformanceData } from '../formater/Performance';
import { FormatKindPerformance } from '@/utils/FormatKindPerformance';

class UserPerformance {
  private constructor_id: string;
  private constructor_kind: string;
  private constructor_data: Performance[];

  constructor(user: PerfType) {
    this.constructor_id = user.data.userId;
    this.constructor_kind = user.data.kind;
    this.constructor_data = user.data.data;
  }

  get id(): string {
    return this.constructor_id;
  }

  get kind(): string {
    return this.constructor_kind;
  }

  get data(): Performance[] {
    const kindMappings: Record<number, string> = {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    };

    const arrayOfDatas: Performance[] = this.constructor_data.map((element) => {
      const data = new FormatPerformanceData(element);
      const mappedKind = kindMappings[data.kind as any] || data.kind;

      return {
        value: data.value,
        kind: FormatKindPerformance(mappedKind),
      };
    });

    return arrayOfDatas;
  }
}

export default UserPerformance;
