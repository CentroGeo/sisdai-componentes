import { expect, describe, it } from 'vitest'
import { useMenuDesenfocable } from '../../../src/composables/useMenuDesenfocable.js'

describe('useMenuDesenfocable', () => {
  // TODO investigar lifecycle hooks
  const { menuEstaAbierto } = useMenuDesenfocable
  // console.log(useMenuDesenfocable().menuEstaAbierto)
  it('instancias de propiedades y métodos', () => {
    // menuEstaAbierto
    // submenuEstaAbierto
    // esColapsable
  })
})
