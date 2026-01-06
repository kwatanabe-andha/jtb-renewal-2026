import './CategoryTop.scss'

type Props = {
  title: string
  text: string
  slug: string
}

export default function CategoryTop({ title, text, slug }: Props) {
  return (
    <div className='bl_categoryTop'>
      <div className='bl_categoryTop_inner'>
        <hgroup className='bl_categoryTop_heading'>
          <h1>{ title }</h1>
          <p>{ text }</p>
        </hgroup>
        <div className='bl_categoryTop_slug'>{ slug }</div>
      </div>
    </div>
  )
}