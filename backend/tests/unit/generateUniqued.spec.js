const generateUniqued = require('../../src/utils/generateUniqued')

describe('Generate Unique Id', () => {
  it('should generate an unique ID', ()=>{
    const id = generateUniqued()
    expect(id).toHaveLength(8)
  })
})