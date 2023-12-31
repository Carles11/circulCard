import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const supabase = createRouteHandlerClient({ cookies })
  // console.log('AUTH-PASS-RESET-EMAIL', email)
  await supabase.auth.resetPasswordForEmail(email, {
    // redirects actually to /update-password, which is setted in supabase email-templates
    redirectTo: `${requestUrl.origin}`,
  })
  // console.log({ requestUrl })
  return NextResponse.redirect(`${requestUrl.origin}/`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  })
}
