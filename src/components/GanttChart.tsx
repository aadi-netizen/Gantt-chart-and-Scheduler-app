import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective, Inject, Resize, Edit } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function GanttChart() {

  const taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    child: 'SubTasks'
  };

  const dataSource = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  console.log("Gantt Data: ", dataSource);
  const editSettings = {
    allowTaskbarEditing: true
  };

  return (
    <div style={{width: '100vw', marginLeft: '5%',marginRight: '5%', textAlign: 'center' }}>
      <h1>Gantt Chart</h1>
      <GanttComponent
      dataSource={dataSource}
      height="450px"
      taskFields={taskFields}
      timelineSettings={{ timelineViewMode: 'Week' }}
      allowResizing={true}
      splitterSettings={{ position: '50px' }}
      editSettings={editSettings}

    >
      <ColumnsDirective>
        <ColumnDirective field="TaskId" headerText="ID" width="100" textAlign="Right" />
        <ColumnDirective field="TaskName" headerText="Name" minWidth='200' width='250' maxWidth='300' />
        <ColumnDirective field="StartDate" headerText="Start Date" format="dd/MM/yyyy" />
        <ColumnDirective field="EndDate" headerText="End Date" format="dd/MM/yyyy" />
        <ColumnDirective field="Duration" headerText="Duration" minWidth='100' maxWidth='200' />
        <ColumnDirective field="Progress" headerText="Progress" textAlign='Right' />
      </ColumnsDirective>
      <Inject services={[Resize, Edit]} />
    </GanttComponent>
    </div>

 
  );
}

export default GanttChart;
