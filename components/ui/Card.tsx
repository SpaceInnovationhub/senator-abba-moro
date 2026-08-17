type Props={

children:React.ReactNode;

}

export default function Card({

children

}:Props){

return(

<div className="rounded-3xl bg-white shadow-lg p-6">

{children}

</div>

)

}