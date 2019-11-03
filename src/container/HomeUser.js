import React from 'react'
import Main from '../components/Main'
import User from '../components/User'
import { setName, setAge } from '../redux/actions/UserAction'
//import {connect} from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPost } from '../redux/actions/PostsAction'
import { of, from } from 'rxjs'
import { map, tap, delay, mergeMap } from 'rxjs/operators'

/**
 * 
 * Utilidation de mapStateToProps et mapStateToDispatch
 * 
 */

// function HomeUser(props) {
//     return (
//         <div>
//             <h1>The Home Page</h1>
//             {
//                 console.log('Props ', props)
//             }
//             <Main onCLicker={props.onCLicker}></Main>
//             <User user={props.user}></User>

//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     console.log('STAET ', state)
//     console.log('STAET.UserReducer ', state.user)
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onCLicker: (name) => dispatch(setName(name))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (HomeUser)


/**
 * Utilisation des react-redux Hooks useSelector et useDispatch
 * 
 */

function HomeUser(props) {


    /**
     * Example Test Observable
     */
    //######################################################################## 

    const data = of([
        {
            brand: 'porsche',
            model: '911'
        },
        {
            brand: 'porsche',
            model: 'macan'
        },
        {
            brand: 'ferarri',
            model: '458'
        },
        {
            brand: 'lamborghini',
            model: 'urus'
        }
    ])

   
    const getData1 = () => {
        return data
        .pipe(
            tap(elem => console.log('ELEM ## ', elem)),
            map(cars => cars.map(car => `${car.brand} ${car.model}`))
        ).subscribe(cars => console.log(cars))
    }

    const getDataFromServer = (param) => {
        return of(`retrieved new data with param ${param}`).pipe(
          delay(4000)
        )
      }
      

    const getData2 = () => {
        from([1,2,3,4]).pipe(
            tap(val => console.log('VAL ## ', val)),
            mergeMap(param => getDataFromServer(param)),
          ).subscribe(val => console.log('data2 : ', val))
    }

    /**
     * subscribe imbriqué
     */
    // const getData2 = () => {
    //     from([1,2,3,4]).pipe(
    //         map(param => getDataFromServer(param)),
    //       ).subscribe(val => val.subscribe(data => console.log('data2 : ', data)))
    // }


    //########################################################################

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const changeName = name => dispatch(setName(name))
    const cahngeAge = age => dispatch(setAge(age))

    const changeNameAndAge = (name, age) => {
        changeName(name)
        cahngeAge(age)
    }

    const consolideMens = useSelector(state => state.consolide)


    return (
        <div>
            {
                console.log(getData1())
            }
            {
                 console.log(getData2())
            }
            <h1>The Home Page</h1>
            {
                console.log('state consolideMens ', consolideMens)
            }
            <button onClick={() => dispatch(fetchPost())}>FetchPost</button>
            {/* <Main onCLick={changeNameAndAge} user={user}></Main>
            <User user={user}></User> */}

        </div>
    )
}

export default HomeUser
