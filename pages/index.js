import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home page">
      <div className='flex justify-between p-20'>
        <div>
          Welcome
        </div>
        <div className="flex">
          <div className="border bg-slate-600 text-white py-2 px-4 rounded-lg">
            <Link href="/login">
              <a>login</a>
            </Link>
          </div>

          <div className="border bg-slate-600 text-white py-2 px-4 rounded-lg">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>

  )
}
