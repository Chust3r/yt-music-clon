import type { PreinitializedMapStore } from 'nanostores'
import { useStore } from '@nanostores/react'

//→  A GENERIC TYPE TO SELECT A STORE PORTION

type TSelector<S, T> = (state: S) => T

//→ A FUNCTION TO RETRIVE THE SELECTED PORTION OF A STORE'S STATE

export const Selector = <S extends object, T>(
	store: PreinitializedMapStore<S>,
	selector?: TSelector<S, T>
): T => {
	const state = useStore(store)

	if (!selector) return state as unknown as T

	return selector(state)
}

//→ A GENERIC FUNCTION THAT ALLOWS UPDATE A STORE'S STATE

export const SetStore = <T extends object>(
	store: PreinitializedMapStore<T>,
	updt: Partial<T> | ((prev: T) => Partial<T>)
) => {
	const prevStore = store.get()

	const newStore = typeof updt === 'function' ? updt(prevStore) : updt

	store.set({
		...prevStore,
		...newStore,
	})
}

//→ A GENERIC TYPE TO UPDATE STORE'S STATE

export type TUpdateStore<T> = Partial<T> | ((prev: T) => Partial<T>)
