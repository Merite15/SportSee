import { Duration } from "@/utils/types/Duration";

export class FormatSessionDuration {
  private constructor_day: string;
  private constructor_sessionLength: number;

  constructor(data: Duration) {
    this.constructor_day = data.day;
    this.constructor_sessionLength = data.sessionLength;
  }

  get day(): string {
    return this.constructor_day;
  }

  get sessionLength(): number {
    return this.constructor_sessionLength;
  }
}
