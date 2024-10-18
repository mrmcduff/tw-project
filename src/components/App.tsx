import Avatar from 'components/Avatar';
import logo from 'assets/logo.svg';
import { QuickTable } from './QuickTable';

function App() {
  return (
    <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div className="flex flex-col gap-4 content-stretch">
        <h1 className="text-2xl mx-4 font-bold tracking-tight text-gray-900 sm:text-6xl">
          {'Playground :)'}
        </h1>
        <QuickTable />
      </div>
    </div>
  );
}

export default App;
