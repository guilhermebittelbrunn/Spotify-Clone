

export default function Benefits({benefits}){
    return(
        <>
            <section className="bg-white w-full py-12 flex justify-center">
                <div className="max-w-screen-xl flex gap-6 flex-col items-center w-full p-4">
                    <div className="tittle">
                        <h1 className="text-4xl font-bold">Por que ser Premium?</h1>
                    </div>
                    <div className="flex gap-8 mt-12 flex-wrap justify-center">
                        {benefits.map(benefit=>{
                            return <Cards benefit={benefit}/>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}


function Cards({benefit}){
    console.log(benefit);
    return(
        <>
              <div className="cards w-72 flex flex-col items-center max-lg:flex-row max-lg:w-96">
                    <div className="card-header text-center">
                        <h2 className="bg-gray-200 text-center p-8 m-auto rounded-full text-6xl font-medium">{benefit.icon}</h2>
                    </div>
                    <div className="card-body w-full py-4 mt-4 text-center  max-lg:mt-0">
                        <p className="font-bold text-xl">{benefit.tittle}</p>
                        <p className="text-lg">{benefit.description}</p>
                    </div>
                </div>
        </>
    )
}