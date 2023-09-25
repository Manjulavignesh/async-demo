let posts=[];
let asyncFunction=async ()=>{
let createPost=(obj)=>{return new Promise((resolve,reject)=>{
    posts.push(obj);
    resolve(posts);
})
}
let deletePost=()=>{
    return new Promise((resolve,reject)=>{
        let popped=posts.pop();
        if(posts.length!=0)
        resolve(popped);
        else
        reject();
    })
}
let post=await createPost({title:"POST1"});
let post1=await createPost({title:"POST2"});
let post2=await createPost({title:"POST3"});
let Depost;
try
{
    Depost=await deletePost();
}
catch
{
    Depost="ERROR: There is no post to delete"
}
  return Depost;
}

asyncFunction().then(data=>console.log(data)).catch(err=>console.log(Depost));
    


