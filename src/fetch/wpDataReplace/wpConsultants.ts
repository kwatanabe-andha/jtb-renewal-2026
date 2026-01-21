export const wpConsultants = async () => {
  const wp_url = new URL(
    // `http://localhost:10028/wp-json/wp/v2/column?page=1`,
    `http://localhost:10028/wp-json/wp/v2/consultants?slug=hiroshi-kurosu`,
    // `http://localhost:10028/wp-json/wp/v2/consultants?page=1`,
  )
  const wp_response = await fetch(wp_url, {credentials: 'omit'})
  const wp_data = await wp_response.json()
  // const totalPages = await response.headers.get('x-wp-totalpages')
  console.log(wp_data[0])
  const person = wp_data[0]
  // data.forEach((item) => {
  //   console.log(item.acf.public_position?.length)
  // })

  const postData = {
    "subject": person.title.rendered,
    "slug": person.slug,
    "contents_type": 22,
    "topics_flg": 1,
    "contents": "",
    "regular_flg": 0,
    "open_flg": 1,
    "dispatch_github_workflow": 0,
    "ymd": person.date.split('T')[0],
    "profile_kana": person.acf.name_kana,
    "profile_en": person.acf.name_en,
    "profile_position": person.acf.position,
    "excerpt": person.excerpt.rendered,
    "history": person.acf.history,
    "public_position": person.acf.public_position ? person.acf.public_position.map(item => item.position) : [] as string[],
    "public_term": person.acf.public_position ? person.acf.public_position.map(item => item.term) : [] as string[],
    "expertise_sector": [],
    "expertise_extra_sector": [],
    "book_title": person.acf.book ? person.acf.book.map(item => item.title) : [] as string[],
    "book_publisher": person.acf.book ? person.acf.book.map(item => item.publisher) : [] as string[],
    "book_date": person.acf.book ? person.acf.book.map(item => item.date) : [] as string[],
    "book_image": [],
    "book_text": person.acf.book ? person.acf.book.map(item => item.text) : [] as string[],
    "amazon": person.acf.book ? person.acf.book.map(item => item.code) : [] as string[],
    "kindle": [],
    "rakuten": [],
    "kobo": [],
    "publicity_type": person.acf.publicity ? person.acf.publicity.map(item => item.type) : [] as string[],
    "publicity_title": person.acf.publicity ? person.acf.publicity.map(item => item.title) : [] as string[],
    "publicity_description": person.acf.publicity ? person.acf.publicity.map(item => item.description) : [] as string[],
    "publicity_date": person.acf.publicity ? person.acf.publicity.map(item => item.date) : [] as string[],
    "meta_description": person.acf.meta_description,
    "validate_only": false,
    "approvalflow_id": 0
  }

  console.log(postData)


  // api fetch
  // const url = new URL(
  //   `https://tourism.g.kuroco.app/rcms-api/6/consultants/add`,
  // )
  // const response = await fetch(url,{
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-RCMS-API-ACCESS-TOKEN': 'f34bc2b67642599621bca8a9d2ad4c7a2b9e90d5efb86de3644800299dc95a7c'
  //     },
  //     credentials: 'include'
  //   })
  // // return await response.json()
  // console.log('res', await response.json())
}