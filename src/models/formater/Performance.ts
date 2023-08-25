import { Performance } from "@/utils/types/Performance";

export class FormatPerformanceData {
  private constructor_value: number;
  private constructor_kind: string;

  constructor(data: Performance) {
    this.constructor_value = data.value;
    this.constructor_kind = data.kind;
  }

  get value(): number {
    return this.constructor_value;
  }

  get kind(): string {
    return this.constructor_kind;
  }
}
