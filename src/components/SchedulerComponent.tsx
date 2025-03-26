import { ScheduleComponent, Day, Week, Month, WorkWeek, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, ODataV4Adaptor, } from '@syncfusion/ej2-data';
import { useState, useEffect } from 'react';

const Scheduler = () => {

  // Binding data from remote server
  const [dataManager, setDataManager] = useState<DataManager | null>(null);
  console.log("remote data", dataManager?.dataSource.json);
    useEffect(() => {
    const fetchData = async () => {
      try {
        const manager = new DataManager({
          url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
          adaptor: new ODataV4Adaptor(),
          crossDomain: true,
          headers: [{ 'Accept': 'application/json' }],
          key: 'OrderID', 
          offline: true
        });
        await manager.ready;
        setDataManager(manager);
      } catch (error) {
        console.error('DataManager initialization failed:', error);
      }
    };
    fetchData();
  }, []);

  const fieldsData = {
    id: 'OrderID',
    subject: { name: 'ShipName' },
    location: { name: 'ShipCountry' },
    description: { name: 'ShipAddress' },
    startTime: { name: 'OrderDate' },
    endTime: { name: 'RequiredDate' },
  }
  
  const eventSettings = { dataSource: dataManager?.dataSource, fields: fieldsData };

  // const data: object[] = [
  //   {
  //     Id: 1,
  //     Subject: 'Project 1',
  //     StartTime: new Date(2025, 2, 15, 10, 0),
  //     EndTime: new Date(2025, 2, 25, 12, 30),
  //     IsAllDay: false
  //   },
  // ];
  // const eventSettings = { dataSource: data }

  return (
    <div style={{ marginLeft: '10%',marginRight: '10%', textAlign: 'center' }}>
      <h1>Scheduler</h1>
      {dataManager ? (
      <ScheduleComponent 
        height='550px' 
        selectedDate={new Date(1996, 6, 9)} 
        readonly={true} 
        eventSettings={eventSettings}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    ) : (
      <p>Loading...</p>
    )}
    </div>

  );
}
export default Scheduler;