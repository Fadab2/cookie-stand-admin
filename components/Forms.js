export default function Forms(props) {
  
  return (
    
      <form className='p-5 mt-8 ml-40 mr-40 bg-emerald-200'>
          <div className=''>
              <h2 className='justify-center p-5 text-xl text-center'>Create Cookie Stand</h2>
              </div>
          <div className="">
            <label> <span className="">Location</span>  </label>
              <input name="location" type="text" className="w-7/12" placeholder="Barcelona" required></input>
           </div>
            <div className='flex items-center p-5'>
             <label><span className="flex text-sl">Minimum Customers per Hour</span>
              <input type="number"
               />
            </label>
            <label><span className="flex text-sl">Maximum Customers per Hour</span>
              <input type="number"
               />
            </label>
              <label><span className="flex text-sl">Average Cookies per Sale</span>
              <input type="number"
               />
            </label>
          <button className="flex w-40 p-3 bg-emerald-500">Create</button>
          </div>
          </form>
)
}