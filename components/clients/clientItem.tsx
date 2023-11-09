// import { cookies } from 'next/headers'

import GreenButtonWhiteTextWithHover from 'components/buttons/greenButtonWhiteTextWithHover'

function clientItem({ client }: { client: any }) {
  // async function create() {
  //   // cookies().set('name', 'lee')
  //   // // or
  //   // cookies().set('name', 'lee', { secure: true })
  //   // // or
  //   cookies().set({
  //     name: 'clientID',
  //     value: client.id,
  //     httpOnly: true,
  //     path: '/',
  //   })
  // }

  // create()

  return (
    <GreenButtonWhiteTextWithHover
      idAsKey={client.id}
      btnText={client.client_name}
    />
  )
}

export default clientItem
