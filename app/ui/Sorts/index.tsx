'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function Sorts() {
    const searchParams = useSearchParams()
    const [availability, toggleAvailability] = useState<null | boolean>(null ?? searchParams.get('inStock') === 'true')
    const pathname = usePathname();
    const { replace } = useRouter();

    const onSortAvailable = () => {
        const params = new URLSearchParams(searchParams)
        params.set('inStock', String(!availability))
        toggleAvailability(!availability)

        replace(`${pathname}?${params.toString()}`);
    }

    return <div><p onClick={onSortAvailable}>{availability?.toString()} в наличии</p></div>
}