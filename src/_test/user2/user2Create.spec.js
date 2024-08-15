
const { expect } = require( 'chai' )
const { user2CreateQ } = require( './queries2' )
const { user2 } = require( './data2')
const gqlRequest = require('../gqlRequest')


let respData = null;
let postData = null;

describe( 'USER CREATE', () => {
    describe( 'USER CREATE - POSITIVE TESTS', () => {
        it( 'user create all fields', (done ) =>{
            postData = {
                query: user2CreateQ,
                variables: user2
            }
            gqlRequest( postData )
                .expect(200)
                .end((err, res) =>{
                    if (err) return done (err)
                    respData = res.body
                    console.log(respData);
                    expect(respData).eq()
                    done()

                })

        })
        it( 'user create all fields', () =>{

        })
        it( 'user create all fields', () =>{

        })

    })
    describe( 'USER CREATE - NEGATIVE TESTS', () => {
        it( 'user create all fields', () =>{

        })
        it( 'user create all fields', () =>{

        })
        it( 'user create all fields', () =>{

        })

      })
})

