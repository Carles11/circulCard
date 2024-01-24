// import { cookies } from 'next/headers'

import GreenButtonWhiteTextWithHover from 'components/buttons/greenButtonWhiteTextWithHover'

function clientItem({ client }: { client: any }) {
  return (
    <GreenButtonWhiteTextWithHover
      idAsKey={client.id}
      btnText={client.client_name}
    />
  )
}

export default clientItem
