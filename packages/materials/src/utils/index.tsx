import { forwardRef, memo, useMemo } from 'react'
import type { ReactComponent } from '../types'

export function mapComponent(WrappedComponent: ReactComponent, maps: { [key: string]: string }): ReactComponent {
  return memo(forwardRef<HTMLElement>((props: any, ref) => {
    const mapProps = useMemo(() => {
      const newProps = {} as any
      for (const key of Object.keys(props || {})) {
        if (maps[key])
          newProps[maps[key]] = props?.[key]
        else
          newProps[key] = props?.[key]
      }
      return newProps
    }, [props])

    return (
      <WrappedComponent ref={ref} {...mapProps} />
    )
  }))
}
