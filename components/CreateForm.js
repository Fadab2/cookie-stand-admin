export default function CreateForm({ handleReport, hours}) {

  function handleStore(event) {
    event.preventDefault();


    let sales_per_hr = [];

    for (let _ in hours) {
      const max_cust_per_hour = parseFloat(event.target.max_cust_per_hour.value);
      const min_cust_per_hour = parseFloat(event.target.min_cust_per_hour.value);
      const avg_cookies_per_sale = parseFloat(event.target.avg_cookies_per_sale.value);

      const cust_per_hr = Math.floor(Math.random() * (max_cust_per_hour - min_cust_per_hour + 1) + min_cust_per_hour);
      sales_per_hr.push(cust_per_hr);
    }
    let report = {
      name: event.target.location.value,
      sales_per_hr: sales_per_hr,
    };
    handleReport(report)
  }

  return (
    <div className="">
       <form onSubmit={handleStore} className='p-5 mt-8 ml-40 mr-40 bg-emerald-200'>
          <div className=''>
              <h2 className='justify-center p-5 text-xl text-center'>Create Cookie Stand</h2>
              </div>
          <div className="">
            <label> <span className="">Location</span>  </label>
              <input id='location' name="location" type="text" className="w-11/12" required></input>
           </div>
            <div className='flex items-center p-5'>
             <label><span className="flex text-sl">Minimum Customers per Hour</span>
              <input id='min_cust_per_hour' type="number"
               />
            </label>
            <label><span className="flex text-sl">Maximum Customers per Hour</span>
              <input id="max_cust_per_hour" type="number"
               />
            </label>
              <label><span className="flex text-sl">Average Cookies per Sale</span>
              <input id="avg_cookies_per_sale" type="number"
               />
            </label>
          <button className="flex w-40 p-3 bg-emerald-500" type="submit">Create</button>
          </div>
          </form>
    </div>

  )
}
