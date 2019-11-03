import { ajax } from 'rxjs/ajax';
import { pipe, mergeMap, map, delay, tap, catchError, mergeAll } from 'rxjs/operators';
//import { of } from "rxjs/observable/of";
import { ofType } from 'redux-observable';
import consolideJsonMock from '../../assets/mocks/posts'
import { cloneDeep } from 'lodash';
import { of } from 'rxjs';
import { FETCH_POST, fetchPostAccess, FETCH_POST_FAILURE, fetchPostFailure } from '../actions/PostsAction';
import { getJSON, getJSON2 } from '../../utils/AjaxUtils';


/**
//      * Example avec un load du fichier JSON
//      */


// export const fetchPostsEpics = action$ =>   action$.pipe(
//     ofType(FETCH_POST),
//     map(() => cloneDeep(consolideJsonMock)),
//     map(response => fetchPostAccess(response))
// )






export const fetchPostsEpics = action$ => {
    console.log('call to Epic fetchPost ', action$)


    /**
     * Example avec un appel facke JSON en utilisat mergeMap
     */

    // return action$.pipe(
    //     tap(c => console.log('OKKKKKK ', action$)),
    //     ofType(FETCH_POST),
    //     tap(c => console.log('OKKKKKK In Epic ', action$)),
    //     mergeMap(
    //         () => of(cloneDeep(consolideJsonMock)).pipe(
    //             delay(2000)
    //         )

    //     ),
    //     tap(response => console.log('RESPONSE ••••••• ', response)),
    //     map(response => fetchPostAccess(response)),
    //     catchError(error => of(fetchPostFailure(error)))
    // )


    /**
     * Example avec un appel API
     */



    //  action$.pipe(
    //     ofType(FETCH_POST),
    //     getJSON('https://api.github.com/users').pipe(
    //         tap(response => console.log('RESPONSE ••••••• ', response)),
    //         map(response => fetchPostAccess(response)),
    //         catchError(error => of(fetchPostFailure(error)))
    //    )
    // )


    return action$.pipe(
        tap(c => console.log('OKKKKKK ', action$)),
        ofType(FETCH_POST),
        tap(c => console.log('OKKKKKK In Epic ', action$)),
        map(() =>
         getJSON2('https://api.github.com/users')
                .pipe(
                    tap(response => console.log('RESPONSE ••••••• ', response)),
                    mergeMap(data => data)
                )
        ),
         //mergeAll(),
        tap(data => console.log('RESPONSE 2 ••••••• ', data)),
        map(data => fetchPostAccess(data)),
        catchError(error => of(fetchPostFailure(error)))
    )

    
    // return action$.pipe(
    //     tap(c => console.log('OKKKKKK ', action$)),
    //     ofType(FETCH_POST),
    //     tap(c => console.log('OKKKKKK In Epic ', action$)),
    //     map(() =>
    //         getJSON('https://api.github.com/users')
    //             .pipe(
    //                 tap(response => console.log('RESPONSE ••••••• ', response)),
    //                 //    / mergeMap(data => data),
    //                 tap(response => console.log('RESPONSE 22 ••••••• ', response)),
    //                 map(data => data.response),
    //                 tap(response => console.log('RESPONSE 33 ••••••• ', response)),
    //             )
    //     ),
    //     tap(response => console.log('RESPONSE 44 ••••••• ', response)),
    //     mergeMap(data => data),
    //     tap(response => console.log('RESPONSE 55 ••••••• ', response)),
    //     map(data => fetchPostAccess(data)),
    //     catchError(error => of(fetchPostFailure(error)))
    // )


    // return action$.pipe(
    //     tap(c => console.log('OKKKKKK ', action$)),
    //     ofType(FETCH_POST),
    //     tap(c => console.log('OKKKKKK In Epic ', action$)),
    //     map(() => getJSON('https://api.github.com/users')),
    //     tap(response => console.log('RESPONSE ••••••• ', response)),
    //     mergeMap(data => data),
    //     map(data => data.response),
    //     tap(data => console.log('RESPONSE 32222 ••••••• ', data)),
    //     map(data => fetchPostAccess(data)),
    //     catchError(error => of(fetchPostFailure(error)))
    // )

    // return action$.pipe(
    //     tap(c => console.log('OKKKKKK ', action$)),
    //     ofType(FETCH_POST),
    //     tap(c => console.log('OKKKKKK In Epic ', action$)),
    //     mergeMap(() => getJSON('https://api.github.com/users')),
    //     tap(response => console.log('RESPONSE ••••••• ', response)),
    //     map(response => fetchPostAccess(response)),
    //     catchError(error => of(fetchPostFailure(error)))
    // )

    /**
     * Example avec header en utilisant directement ajax.getJSON
     */

    // return action$.pipe(
    //     tap(c => console.log('OKKKKKK ', action$)),
    //     ofType(FETCH_POST),
    //     tap(c => console.log('OKKKKKK In Epic ', action$)),
    //     mergeMap(() => ajax.getJSON('https://api.github.com/users',  {
    //         'Content-Type': 'application/json',
    //         'rxjs-custom-header': 'Rxjs'
    //       })),
    //     tap(response => console.log('RESPONSE ••••••• ', {
    //         test: 'jjjj'
    //     })),
    //     map(response => fetchPostAccess(response)),
    //     catchError(error => of(fetchPostFailure(error)))
    // )

    /**
     * Example avec header en utilisant directement ajax({})
     */
    // return action$.pipe(
    //     tap(c => console.log('OKKKKKK ', action$)),
    //     ofType(FETCH_POST),
    //     tap(c => console.log('OKKKKKK In Epic ', action$)),
    //     mergeMap(() => ajax({
    //         url: 'https://api.github.com/users',
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'rxjs-custom-header': 'Rxjs'
    //           }
    //     })),
    //     tap(response => console.log('RESPONSE ••••••• ', {
    //         test: 'jjjj'
    //     })),
    //     map(response => fetchPostAccess(response)),
    //     catchError(error => of(fetchPostFailure(error)))
    // )

}