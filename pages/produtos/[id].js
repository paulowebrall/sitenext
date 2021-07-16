export async function getStaticPaths(){
    return {
        paths : [{
            params: {
                id  :'1'
            }
        },{
            params: {
                id  :'2'
            },
        }],fallback : true

    }
}

export async function getStaticProps(context){
  //  await delay(5000);
    const id = context.params.id;

    return {
        props : {
            id : id
        }
    }
}

function Produtos (props ){

    return <div> id do produto {props.id} </div>;
}
/*
function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
*/
//* import { useRouter } from "next/router"; */
/*
function Produtos (response ){
    const router = useRouter ();
    const id = router.query.id;

    return <div> id do produto {id} </div>;
}
*/

export default Produtos;

