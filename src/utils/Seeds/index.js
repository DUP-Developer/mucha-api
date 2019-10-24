import UserSeeds from './User'
import ItemsSeeds from './Item'

class Seeds {
  async run () {
    await UserSeeds()
    await ItemsSeeds()
  }
}

// importando informações para banco
const seeds = new Seeds()

// runner
seeds
  .run()
  .then(result => {
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(0)
  })
