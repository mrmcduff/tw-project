import { QuickTable } from './QuickTable';
import { CallExampleWidget } from './CallExampleWidget';

function App() {
  return (
    <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div className="flex flex-col content-stretch gap-4">
        <h1 className="mx-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {'Playground :)'}
        </h1>
        <QuickTable />
        <CallExampleWidget />
      </div>
    </div>
  );
}

export default App;
