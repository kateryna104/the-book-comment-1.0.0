const { expect } = require('chai');
const { userGetByIdQ } = require('./queries')
const gqlRequest = require('../gqlRequest')
const {userCreateQ} = require('../user/queries');
const {user} = require('./data');

let respData =null;
let postData= null

describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {
        it('user create by id ', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: '66c0ea3a00db65bf5ac624bb'


                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData);
                   expect(respData._id).eq('66c0ea3a00db65bf5ac624bb'
                )
                   // expect(respData.lastName).eq(user.userInput.lastName)


                    done()
                })

        })
    })
       // describe('USER GET BY ID - NEGATIVE TESTS', () => {

     //   })

    })