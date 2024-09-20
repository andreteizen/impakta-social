import { createClient } from '@supabase/supabase-js'
import { Database } from '@/database.types' // Assuming Database is the correct type for your Supabase setup
import prisma from '@/lib/prisma'

export default async function Notes() {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
  const { data: articles, error } = await supabase.from('Post').select()

  const dadosPrisma = await prisma.post.findMany()

  if (error) {
    console.error('Error fetching articles:', error)
    return <div>Error fetching articles</div>
  }

  console.log(articles)
  console.log('Dados prisma: ', dadosPrisma)

  if (!articles || articles.length === 0) {
    return <div>No articles found</div>
  }

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>{article.title}</div>
      ))}
      Prisma:
      {dadosPrisma.map((article, index) => (
        <div key={index}>{article.title}</div>
      ))}
    </div>
  )
}
