export default function User({item}){
    return(
        <div className={'wrap'}>
            <div className={'headerOfItem'}>

               <div>
                  <p>Post Number {item.postId}</p>
               </div>

                <div>
                    <p>id {item.id}</p>
                </div>


            </div>

            <div className={'main'}>

                <div className={'account'}>
                    <div className={`name`}> {item.name}</div>
                    <div className={'email'}>{item.email}</div>
                </div>

                <div className={'line'}></div>

                <div className={'info'}>
                    <div>{item.body}</div>
                </div>

            </div>






        </div>
    )
}
