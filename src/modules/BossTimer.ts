

import BossTimerReader from "@alt1/bosstimer";


export class BossTime {
    static reader: BossTimerReader;
    static result?: object | undefined;
  
    constructor() {
        BossTime.reader = new BossTimerReader();
        BossTime.reader.find();
        BossTime.result = BossTime.reader.read() ?? undefined;
    }
  
    static get(): object | undefined {
      return BossTime.result
    }
  }