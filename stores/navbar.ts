import { map } from 'nanostores'
import { useSelector } from '~hooks/useSelector'

interface Store {
	isOpen: boolean
}

const store = map<Store>({
	isOpen: false,
})

export const useNavBarStore = <T = Store>(
	selector?: (state: Store) => T
): T => {
	return useSelector(store, selector)
}
