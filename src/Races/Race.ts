export default abstract class Race {
  constructor(
    private _name: string,
    private _dexteriry: number,    
  ) {}

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexteriry;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}