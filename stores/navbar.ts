import { map } from 'nanostores'
import { Selector, SetStore, type TUpdateStore } from '~lib/store'

interface Store {
	isOpen: boolean
}

const store = map<Store>({
	isOpen: false,
})

export const setNavBarStore = (updt: TUpdateStore<Store>) => {
	SetStore(store, updt)
}

export const useNavBarStore = <T = Store>(
	selector?: (state: Store) => T
): T => {
	return Selector(store, selector)
}
