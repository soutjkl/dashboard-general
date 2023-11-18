import SimpleBarCharts from "./components/SimpleBarCharts";
import StackedAreaCharts from "./components/StackedAreaCharts";
import SimplePieCharts from "./components/SimplePieCharts";
import SimpleAreaChart from "./components/SimpleAreaChart";


function App() {
  return (
    <div style={{ display: 'flex' }}>

      <div style={{ flex: 1, maxWidth: '30%' }}>
        <div className="bg-light mx-auto border-primary">
        <h1 className="text-center text-2xl leading-9 font-bold">Grafica 1</h1>
          <SimplePieCharts />
          <h1 className="text-center text-2xl leading-9 font-bold">Grafica 4</h1>
          <SimpleBarCharts />
        </div>
      </div>

      <div style={{ flex:2, maxWidth: '70%' }}>
        <div className="bg-light mx-auto border-primary">
          <h1 className="text-center text-2xl leading-9 font-bold">Grafica 2</h1>
            <StackedAreaCharts />
          <h1 className="text-center text-2xl leading-9 font-bold">grafica 3</h1>
            <SimpleAreaChart />
        </div>
      </div>



    </div>
    
  );
}


export default App;
