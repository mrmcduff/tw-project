import { times } from 'ramda';

interface TableColumn {
  name: string;
  data: (number | string | null)[];
  align?: 'text-center' | 'text-left' | 'text-right';
}

type QuickTableProps = {
  length?: number;
  columns?: TableColumn[];
};

const SAMPLE_COLUMNS: TableColumn[] = [
  { name: 'foo', data: [1, 2, 3, 4, 5, 6] },
  {
    name: 'bar',
    data: ['one', 'two', 'three', 'four', null, 'six'],
    align: 'text-right'
  },
  {
    name: 'again',
    data: [1.44566, 699.033, 1000500699.4533, 22, 0.0000000000000056, 1.4]
  }
];
export function QuickTable({
  columns = SAMPLE_COLUMNS,
  length = 6
}: QuickTableProps) {
  return (
    <table className="mx-4 self-stretch border border-collapse border-slate-400 table-auto ">
      <thead>
        <tr className="border border-slate-300 font-semibold text-slate-800 bg-slate-100">
          {columns.map((col) => {
            return (
              <th className="border border-slate-500 min-w-40" key={col.name}>
                {col.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {times((idx) => {
          return (
            <tr
              className="border border-slate-300 text-slate-600"
              key={`table-row-${idx}`}
            >
              {columns.map((col) => {
                return (
                  <td
                    className={`border border-slate-300 p-2 ${
                      col.align ?? 'text-center'
                    }`}
                    key={`${col.name}-item-${idx}`}
                  >
                    {col.data.length > idx ? col.data[idx] ?? '-' : '-'}
                  </td>
                );
              })}
            </tr>
          );
        }, length)}
      </tbody>
    </table>
  );
}
