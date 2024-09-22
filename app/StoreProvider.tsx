'use client'

import { addToCard } from '@lib/slices/cardSlice'
import { AppStore, makeStore } from '@lib/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode,
}) {
    const storeRef = useRef<AppStore>()
    const getInitCardInfo = () => { return ['1', '3'] }

    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(addToCard(getInitCardInfo()))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}