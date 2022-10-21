import {useLocation} from "react-router";


interface IState<T> {
  state: T
}

type LocationType<S> = ReturnType<typeof useLocation> & IState<S>

export const useAppLocation = <State>(): LocationType<State> => useLocation()

