export default function Footer({ reports }) {
    return (
        <footer className="flex p-3 mt-10 text-center place-content-center bg-emerald-400">
          <p className=''>{reports.length} Locations World Wide</p>
      </footer>
    )
}