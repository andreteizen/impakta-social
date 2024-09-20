import VaquinhasExistentes from '@/components/vaquinhas-existentes'
import Image from 'next/image'

export default async function Index() {
  return (
    <main className="flex h-fit w-full flex-1 flex-col items-center gap-6 px-4">
      <div className="flex w-full items-center gap-16">
        <div className="flex w-1/2 flex-col gap-16">
          <h1 className="text-3xl font-bold">Toda ajuda começa aqui</h1>
          <p>
            Transformamos o destino de histórias inspiradoras, dando voz a quem
            precisa e conectando com quem tem
          </p>
        </div>
        <Image
          alt="Imagem inspiradora"
          src="/hero-page.png"
          width={1000}
          height={700}
          className="h-fit w-1/2 rounded-3xl"
        />
      </div>
      <div className="mt-28 flex flex-col items-start gap-2 text-xl font-semibold">
        <VaquinhasExistentes />
      </div>
    </main>
  )
}
