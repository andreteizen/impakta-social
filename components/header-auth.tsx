import { signOutAction } from '@/app/actions'
import Link from 'next/link'
import { Button } from './ui/button'
import { createClient } from '@/utils/supabase/server'

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser()

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={'outline'}>
          Sair
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={'outline'}>
        <Link href="/sign-in">Entrar</Link>
      </Button>
      <Button asChild size="sm" variant={'default'} className="bg-foreground">
        <Link href="/sign-up">Criar conta</Link>
      </Button>
    </div>
  )
}
