export default function Table() {
    return (
        <table className='w-1/2 mx-auto my-4'>
          <thead>
            <tr>
              <th className='border-gray-700'>Minimum Customers per Hour</th>
              <th className='border-gray-700'>Maximum Customers per Hour</th>
              <th className='border-gray-700'>Average Cookies per Sale</th>
            </tr>
          </thead>
          <tbody>
            <td className='pl-2 border border-gray-700'>2</td>
            <td className='pl-2 border border-gray-700'>4</td>
            <td className='pl-2 border border-gray-700'>2.5</td>
          </tbody>
        </table>
    )
}