import '@/styles/index.scss';

export default async function Home() {
  const url = new URL(
    `http://localhost:10028/wp-json/wp/v2/column?page=1`,
  )
  const response = await fetch(url, {credentials: 'omit'})
  const data = await response.json()
  const totalPages = await response.headers.get('x-wp-totalpages')
  console.log(data)
  console.log(totalPages)

  return (
    <div className=''>
      <main className=''>
      </main>
    </div>
  );
}
