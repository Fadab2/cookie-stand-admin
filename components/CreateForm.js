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
       <form onSubmit={handleStore} className='rounded-[12px] w-8/12 p-5 mt-4 ml-60 place-content-center bg-emerald-200'>
  
          <div className="flex items-center p-5">
            <label> <span className="flex text-sm place-content-center"> ADD Location</span> 
            <input id='location' placeholder="Cookie Stand Location" name="location" type="text" className="w-full p-1 mt-1 " required></input>
          </label>
          <button className="p-2 rounded w-80 ml-80 bg-emerald-500" type="submit">CREATE STAND</button>
           </div>
           
            <div className='flex items-center p-5'>
             <label><span className="flex text-sm place-content-center">MINIMUM CUSTOMERS PER HOUR</span>
              <input id='min_cust_per_hour' className="flex p-1 mt-1"defaultValue="0" type="number"
               />
            </label>
            <label><span className="flex text-sm place-content-center">MAXIMUM CUSTOMERS PER HOUR</span>
              <input id="max_cust_per_hour" className="flex p-1 mt-1"defaultValue="0" type="number"
               />
            </label>
              <label><span className="flex text-sm place-content-center">AVERAGE COOKIES PER SALE</span>
              <input id="avg_cookies_per_sale"className="flex p-1 mt-1"defaultValue="0" type="number"
               />
            </label>
        
          </div>
          </form>
    </div>

  )
}
