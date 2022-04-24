import useResource from '../hooks/useResource'
import { hours } from "../data/fakeData"

const delete_icon = '../data/delete.png'

export default function Table({ hours, reports, deleteStand}) {
  if (reports && reports.length == 0) {
    return (
      <p className="w-8/12 mx-auto mt-5 text-center">
        No Cookie Stands Available
      </p>
    )
  }
    else {
      return (
        <table className="text-center border-[1px] border-black w-8/12 p-5 mt-8 mr-40 ml-60 bg-emerald-400">
          <thead>
            <tr>
              <th>Location</th>
              {hours.map((hour) => (
                <th className="px-4" key={hour}>{hour}</th>
              
            
              ))}
              <th className="px-4">Totals</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((report) => (
              <Rows key={report.name} report={report} />
            ))}
            <tr className="border-[1px] border-black">
              <td className="px-4">
                Totals
              </td>
              {hours.map((hour, idx) => (
                <td key={hour} className="text-center border-[1px] border-black">
                  {reports.reduce(
                    (prev, current) => prev + current.Hourly_Sales[idx],
                    0
                  )}
                </td>
              ))}

              <td>
                   {hours.map((hour, idx) =>
                    reports.reduce(
                      (prev, current) => prev + current.Hourly_Sales[idx],
                      0
                    )
                  )
                  .reduce((prev, current) => prev + current, 0)}
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  // } else {
  //   return (
  //     <p className="w-8/12 mx-auto mt-5 text-center">
  //       No Cookie Stands Available
  //     </p>
  //   );
  // }
}

function Rows({ report }) {
  
   function handleDelete() {
    deleteResource(report.id)
  }
  return (
    <div>
    <tr className="odd:bg-emerald-200 even:bg-emerald-300">
      <td className="pl-4 border border-black">{report.name} <span className="ml-3">X </span></td>
                    
      {report.Hourly_Sales.map((hourData, idx) => (
        <td className="text-center border border-black" key={idx}>
          {hourData}
        </td>
      ))}
      <td className="pl-4 border border-black">
        {report.Hourly_Sales.reduce((prev, current) => prev + current)}
      </td>
      </tr>
      </div>
  );
}