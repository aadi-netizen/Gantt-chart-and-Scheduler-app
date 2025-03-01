import { ScheduleComponent, Day, Week, Month, WorkWeek, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const Scheduler = () => {
  const data: object[] = [
    {
      Id: 1,
      Subject: 'Meeting - 1',
      StartTime: new Date(2025, 2, 15, 10, 0),
      EndTime: new Date(2025, 2, 15, 12, 30),
      IsAllDay: false
    },
  ];
  const eventSettings = { dataSource: data }

  return (
    <div style={{ margin: '10%', textAlign: 'center' }}>
      <h1>Scheduler</h1>
      <ScheduleComponent eventSettings={eventSettings} width='80%' height='550px' >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>

  );
}
export default Scheduler;