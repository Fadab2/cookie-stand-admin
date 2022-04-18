 export default function Table({ hours, reports }) {
  if (reports.length) {
    return (
      <table className="w-11/12 p-5 mt-8 ml-40 mr-40 bg-emerald-500">
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
          {reports.map((report) => (
            <Rows key={report.name} report={report} />
          ))}
          <tr className="border-[1px] border-black">
            <td className="px-4 font-bold">
              Totals
            </td>
            {hours.map((hour, idx) => (
              <td key={hour} className="text-center border-[1px] border-black">
                {reports.reduce(
                  (prev, current) => prev + current.sales_per_hr[idx],
                  0
                )}
              </td>
            ))}

            <td>
              {hours
                .map((hour, idx) =>
                  reports.reduce(
                    (prev, current) => prev + current.sales_per_hr[idx],
                    0
                  )
                )
                .reduce((prev, current) => prev + current, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <p className="w-8/12 mx-auto mt-5 text-center">
        No Cookie Stands Available
      </p>
    );
  }
}


function Rows({ report }) {
  return (
    <tr className="odd:bg-emerald-400 even:bg-emerald-300">
      <td className="pl-4 border border-black">{report.name}</td>
      {report.sales_per_hr.map((hourData, idx) => (
        <td className="text-center border border-black" key={idx}>
          {hourData}
        </td>
      ))}
      <td className="pl-4 border border-black">
        {report.sales_per_hr.reduce((prev, current) => prev + current)}
      </td>
    </tr>
  );
}