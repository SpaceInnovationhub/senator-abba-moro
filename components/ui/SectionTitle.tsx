type Props={

title:string;

subtitle?:string;

}

export default function SectionTitle({

title,

subtitle

}:Props){

return(

<div className="mb-12">

<p className="text-[14px] uppercase tracking-[4px] text-green-700">

{subtitle}

</p>

<h2 className="text-4xl font-bold mt-3">

{title}

</h2>

</div>

)

}