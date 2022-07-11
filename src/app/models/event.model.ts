export class event {
  constructor(
    public eventId: number,
    public eventDate: Date,
    public eventName: string,
    public noOfSlots: number,
    public sportsName: string
  ) { }
}
