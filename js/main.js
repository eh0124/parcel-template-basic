console.log('Hello Parcel')

async function test() {
  const promiss = Promiss.resolve(123)
  console.log(await promiss)
}

test ()