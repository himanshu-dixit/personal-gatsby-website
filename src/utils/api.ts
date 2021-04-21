const API_BASE_HOST = 'http://localhost:8888'
export const getPostData = ()=>{
  return fetch(API_BASE_HOST + '/.netlify/functions/get-posts').then(res=> res.json())
}

export const addMember = (name,email)=>{
  return fetch(API_BASE_HOST +'/.netlify/functions/add-email',{
    body:JSON.stringify({
      name, email
    }),
    method: 'POST'
  }).then(res=> res.json())
}

export const doPostAction = (id, type)=>{
  return fetch(API_BASE_HOST +'/.netlify/functions/post-action',{
    body:JSON.stringify({
      id, type
    }),
    method: 'POST'
  }).then(res=> res.json())
}
