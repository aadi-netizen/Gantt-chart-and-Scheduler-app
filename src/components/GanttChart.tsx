
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
// import { useEffect, useState } from 'react';
// import * as React from 'react';
// import type {TaskResponse,Error} from '../types/ganttChartTypes.ts';

import productData from '../data.ts'
console.log(productData);






// const GanttData: object[] = [
//   {
//     Id: 1,
//     TaskName: 'Project Initiation',
//     StartDate: new Date('04/02/2019'),
//     EndDate: new Date('04/21/2019'),
//   },
//   {
//     Id: 2,
//     TaskName: 'Identify Site location',
//     StartDate: new Date('04/02/2019'),
//     Duration: 4,
//     Progress: 50,
//     ParentId: 1,
//   },
//   {
//     Id: 3,
//     TaskName: 'Perform Soil test',
//     StartDate: new Date('04/02/2019'),
//     Duration: 4,
//     Progress: 50,
//     ParentId: 1,
//   },
//   {
//     Id: 4,
//     TaskName: 'Soil test approval',
//     StartDate: new Date('04/02/2019'),
//     Duration: 4,
//     Progress: 50,
//     ParentId: 1,
//   },
//   {
//     Id: 5,
//     TaskName: 'Project Estimation',
//     StartDate: new Date('04/02/2019'),
//     EndDate: new Date('04/21/2019'),
//   },
//   {
//     Id: 6,
//     TaskName: 'Develop floor plan for estimation',
//     StartDate: new Date('04/04/2019'),
//     Duration: 3,
//     Progress: 50,
//     ParentId: 5,
//   },
//   {
//     Id: 7,
//     TaskName: 'List materials',
//     StartDate: new Date('04/04/2019'),
//     Duration: 3,
//     Progress: 50,
//     ParentId: 5,
//   },
//   {
//     Id: 8,
//     TaskName: 'Estimation approval',
//     StartDate: new Date('04/04/2019'),
//     Duration: 3,
//     Progress: 50,
//     ParentId: 5,
//   },
// ];





function GanttChart() {

  // const [GanttData, setGanttData] = useState([]);
  // const token = "iL_Gs54xc5unNEmwI8LRR2xj5OwZWu70jrEO-eqn";


  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'xc-token': token,
  //   }
  // };



  // const fetchData = () => fetch('http://localhost:8080/api/v2/tables/mpb0bttzu6nyvve/records?offset=0&limit=25&where=&viewId=vw0t3x0b28izd55c', options)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data.list);
  //     setGanttData(data.list);
  //   })
  //   .catch(err => console.error(err));


  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    child: 'subtasks',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predeceesor',
  };


  // useEffect(() => {
  //   fetchData();
  // }, []);


  return (
    <GanttComponent
      dataSource={productData}
      height="450px"
      taskFields={taskFields}
      timelineSettings={{ timelineViewMode: 'Week' }}

    >
      <ColumnsDirective>
        <ColumnDirective field="TaskID" headerText="ID" width="50" textAlign="Right" />
        <ColumnDirective field="TaskName" headerText="Name" width="150" />
        <ColumnDirective field="StartDate" headerText="Start Date" width="75" format="dd/MM/yyyy" />
        <ColumnDirective field="EndDate" headerText="End Date" width="75" format="dd/MM/yyyy" />
        <ColumnDirective field="Duration" headerText="Duration" width="100" />
        <ColumnDirective field="Progress" headerText="Progress" width="50" textAlign='Right' />
      </ColumnsDirective>
    </GanttComponent>
  );
}


export default GanttChart;

