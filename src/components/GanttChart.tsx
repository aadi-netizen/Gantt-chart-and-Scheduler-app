import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective, Inject, Resize, Edit } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

function GanttChart() {

  const taskFields: TaskFieldsModel = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'SubTasks',
  };

  const ganttData = new DataManager({
    url: 'https://services.syncfusion.com/react/production/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true,
  });
  const editSettings = {
    allowTaskbarEditing: true
  };

  return (
    <GanttComponent
      dataSource={ganttData}
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
  );
}

export default GanttChart;
