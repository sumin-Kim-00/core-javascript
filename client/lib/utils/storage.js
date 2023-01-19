import { isString } from "./typeOf.js"



const {
  localStorage: storage,  // 이름 바꾼거
  JSON:{stringify:serialize, parse: deserialize}   // 이것도 이름 바꾼거
} = globalThis


const albums = [
  {
    id: 'album_0zie',
    title: 'Nightmare',
    artist: '오월오일 ( 五月五日 )',
    'release-date': '2022.10.08',
    like: 147,
    'song-count': 5,
    cover: {
      size: 640,
      quality: 100,
      src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/73/494/11073494_20221007160706_500.jpg/melon/resize/640/quality/100/optimize',
    },
  },
  {
    id: 'album_9ipw',
    title: '흔들리지 않아 (Feat. 폴킴)',
    artist: 'TRADE L',
    'release-date': '2022.10.07',
    like: 306,
    'song-count': 1,
    cover: {
      size: 640,
      quality: 100,
      src: 'https://cdnimg.melon.co.kr/cm2/album/images/110/72/305/11072305_20221006135934_500.jpg/melon/resize/640/quality/100/optimize',
    },
  },
];


export function saveStorage(key, value){

  return new Promise((resolve, reject)=>{
    if(isString(key)){
      storage.setItem(key, serialize(value));  // JSON.stringify(value) 랑 똑같음(위에서 설정해줌)
      resolve();
    }else{
      reject({message: 'key는 문자 타입 이어야 합니다.'})
    }
  })

}




export function loadStroage(key){
  return new Promise((resolve, reject)=>{
    if(isString(key)){
      resolve(deserialize(storage.getItem(key)));
    }else{
      reject({message: 'key는 문자 타입 이어야 합니다.'})
    }
  })
}

export function deleteStorage(key){
  return new Promise((resolve, reject)=>{
    if(!key){
      storage.clear();
    }else{
      reject({message: 'key는 문자 타입 이어야 합니다.'})
    }
  })
  
}

// saveStorage('name', albums)

// loadStroage('name').then((res)=>{
//   console.log(res);
// })



// storage.setItem('name', 'tiger')
// console.log(storage.getItem('name'))

// // storage.removeItem('name')
// storage.clear()   // 모든걸 날라가게 함