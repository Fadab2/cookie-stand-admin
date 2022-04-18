export default function Footer({ reports }) {
    return (
        <footer className="flex items-center justify-between p-4 mt-10 bg-emerald-400">
         <p> <h1 className='font-semibold text-m'>{reports.length} Locations World Wide</h1></p>
      </footer>
    )
}