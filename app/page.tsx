import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

import MainPageTopContent from 'components/mainPage/mainPageTopContent'
import MainPageBottomContent from '@/components/mainPage/mainPageBottomContent'

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 mt[25%]">
        <div className="flex flex-col items-center mt-20 md:my-32 lg:mb-12">
          <MainPageTopContent />
          <h1 className="sr-only">
            Circular economy through recycling and generation of second live
            products.
          </h1>
          <MainPageBottomContent user={user} />
        </div>
      </div>
    </div>
  )
}
