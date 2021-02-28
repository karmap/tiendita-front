import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hola Mundo.{' '}
      <Link href="/registro">
        <a>ir al registro</a>
      </Link>
    </div>
  )
}
