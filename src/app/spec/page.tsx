import { redirect } from 'next/navigation'
import { getSpecificationData } from './data'

export default async function Page() {
    const link = await (await getSpecificationData()).keys().next()
    redirect("/spec/" + link.value)
}
