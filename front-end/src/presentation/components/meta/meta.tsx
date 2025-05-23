import Head from 'next/head'

type MetaProps = {
  title: string
  description: string
  keywords: string
  image?: string
}

const Meta = ({ title, description, keywords, image }: MetaProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
  </Head>
)

export default Meta
