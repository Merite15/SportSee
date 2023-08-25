import { Activity } from '@/utils/types/Activity';

export class FormatSessionActivity {
  private constructor_day: string;
  private constructor_kilogram: number;
  private constructor_calories: number;

  constructor(data: Activity) {
    this.constructor_day = data.day;
    this.constructor_kilogram = data.kilogram;
    this.constructor_calories = data.calories;
  }

  get day(): string {
    return this.constructor_day;
  }

  get kilogram(): number {
    return this.constructor_kilogram;
  }

  get calories(): number {
    return this.constructor_calories;
  }
}
