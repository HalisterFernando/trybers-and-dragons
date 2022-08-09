import Race from './Race';

export default class Halfling extends Race {
  private static _instanceCount = 0;
  constructor(
    name: string, 
    dexterity: number,     
    private _maxLifePoints: number = 60,
  ) { 
    super(name, dexterity); 
    Halfling._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instanceCount;
  }
}