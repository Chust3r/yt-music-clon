import type { PreinitializedMapStore } from 'nanostores'
import { useStore } from '@nanostores/react'

type Selector<S, T> = (state: S) => T

export const useSelector = <S extends object, T>(
	store: PreinitializedMapStore<S>,
	selector?: Selector<S, T>
): T => {
	const state = useStore(store)

	if (!selector) return state as unknown as T

	return selector(state)
}
