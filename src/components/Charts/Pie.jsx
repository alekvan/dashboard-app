import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationDataLabel,
  AccumulationLegend,
  PieSeries,
  Inject,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id='pie-chart'
      height='420px'
      legendSettings={{ background: 'white' }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject
        services={[
          PieSeries,
          Legend,
          AccumulationLegend,
          Tooltip,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          type='Pie'
          xName='x'
          yName='y'
          radius='80%'
          innerRadius='40%'
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;
